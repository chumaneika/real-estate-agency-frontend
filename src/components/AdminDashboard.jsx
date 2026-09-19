"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Building2, CalendarClock, Handshake, RefreshCw, ShieldAlert, Users } from "lucide-react";
import { usePreferences } from "@/components/AppProviders";
import styles from "@/styles/pages/Admin.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

function hasAdminRole(user) {
  return user?.roles?.split(",").some(role => role.trim() === "ROLE_ADMIN");
}

export default function AdminDashboard() {
  const router = useRouter();
  const { locale, t } = usePreferences();
  const [state, setState] = useState({ status: "loading", data: null });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading", data: null });
    async function load() {
      try {
        const accountResponse = await fetch(`${API_URL}/api/v1/auth/me`, { credentials: "include", cache: "no-store", signal: controller.signal });
        if (accountResponse.status === 401) {
          router.replace("/login");
          return;
        }
        if (!accountResponse.ok) throw new Error("Account request failed");
        const account = await accountResponse.json();
        if (!hasAdminRole(account)) {
          setState({ status: "forbidden", data: null });
          return;
        }
        const response = await fetch(`${API_URL}/api/v1/admin/dashboard`, { credentials: "include", cache: "no-store", signal: controller.signal });
        if (response.status === 403) {
          setState({ status: "forbidden", data: null });
          return;
        }
        if (!response.ok) throw new Error("Dashboard request failed");
        const data = await response.json();
        if (!controller.signal.aborted) setState({ status: "ready", data });
      } catch (error) {
        if (error.name !== "AbortError") setState({ status: "error", data: null });
      }
    }
    load();
    return () => controller.abort();
  }, [attempt, router]);

  const dateFormatter = useMemo(() => new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", { day: "numeric", month: "short" }), [locale]);
  const dateTimeFormatter = useMemo(() => new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }), [locale]);

  if (state.status === "forbidden") return <main className={styles.page}><div className={styles.container}><section className={styles.message}><ShieldAlert size={38} aria-hidden="true" /><h1>{t("admin.forbidden")}</h1><p>{t("admin.forbiddenText")}</p><Link href="/home" className={styles.primary}>{t("error.home")}</Link></section></div></main>;

  if (state.status === "error") return <main className={styles.page}><div className={styles.container}><section className={styles.message}><ShieldAlert size={38} aria-hidden="true" /><h1>{t("admin.unavailable")}</h1><p role="alert">{t("admin.unavailableText")}</p><button type="button" className={styles.primary} onClick={() => setAttempt(value => value + 1)}><RefreshCw size={16} aria-hidden="true" />{t("catalog.tryAgain")}</button></section></div></main>;

  if (state.status === "loading" || !state.data) return <main className={styles.page}><div className={styles.container} role="status" aria-label={t("admin.loading")}><div className={styles.headingSkeleton} /><div className={styles.stats}>{[1,2,3,4].map(value => <div key={value} className={styles.statSkeleton} />)}</div><div className={styles.panelSkeleton} /></div></main>;

  const data = state.data;
  const maxActivity = Math.max(1, ...data.activity.flatMap(point => [point.requests, point.deals]));
  const stats = [
    { label: t("admin.properties"), value: data.propertyCount, icon: Building2 },
    { label: t("admin.users"), value: data.userCount, icon: Users },
    { label: t("admin.deals"), value: data.dealCount, icon: Handshake },
    { label: t("admin.pending"), value: data.pendingRequestCount, icon: CalendarClock },
  ];

  return <main className={styles.page}>
    <div className={styles.container}>
      <header className={styles.heading}><div><p className={styles.eyebrow}>{t("admin.eyebrow")}</p><h1>{t("admin.title")}</h1><p>{t("admin.subtitle")}</p></div><span className={styles.live}><span />{t("admin.live")}</span></header>
      <section className={styles.stats} aria-label={t("admin.overview")}>
        {stats.map(({ label, value, icon: Icon }) => <article key={label} className={styles.stat}><span className={styles.statIcon}><Icon size={20} aria-hidden="true" /></span><div><p>{label}</p><strong>{value.toLocaleString(locale === "ru" ? "ru-RU" : "en-US")}</strong></div></article>)}
      </section>

      <div className={styles.dashboardGrid}>
        <section className={styles.panel} aria-labelledby="activity-title">
          <div className={styles.panelHeading}><div><p className={styles.eyebrow}>{t("admin.lastSeven")}</p><h2 id="activity-title">{t("admin.activity")}</h2></div><div className={styles.legend}><span><i className={styles.requestDot} />{t("admin.requests")}</span><span><i className={styles.dealDot} />{t("admin.deals")}</span></div></div>
          <div className={styles.chart}>
            {data.activity.map(point => <div key={point.date} className={styles.chartColumn} aria-label={t("admin.activityLabel", { date: dateFormatter.format(new Date(`${point.date}T12:00:00`)), requests: point.requests, deals: point.deals })}>
              <div className={styles.bars}><span className={styles.requestBar} style={{ "--bar-height": `${Math.max(point.requests ? 8 : 2, point.requests / maxActivity * 100)}%` }} /><span className={styles.dealBar} style={{ "--bar-height": `${Math.max(point.deals ? 8 : 2, point.deals / maxActivity * 100)}%` }} /></div>
              <span>{dateFormatter.format(new Date(`${point.date}T12:00:00`))}</span>
            </div>)}
          </div>
        </section>

        <aside className={`${styles.panel} ${styles.quick}`} aria-labelledby="quick-title"><div className={styles.panelHeading}><div><p className={styles.eyebrow}>{t("admin.workspace")}</p><h2 id="quick-title">{t("admin.quick")}</h2></div></div>
          <Link href="/properties" className={styles.quickLink}><Building2 size={18} aria-hidden="true" /><span><strong>{t("admin.openCatalog")}</strong><small>{t("admin.openCatalogText")}</small></span><ArrowRight size={17} aria-hidden="true" /></Link>
          <Link href="#requests" className={styles.quickLink}><CalendarClock size={18} aria-hidden="true" /><span><strong>{t("admin.reviewRequests")}</strong><small>{t("admin.reviewRequestsText")}</small></span><ArrowRight size={17} aria-hidden="true" /></Link>
          <Link href="/profile" className={styles.quickLink}><Users size={18} aria-hidden="true" /><span><strong>{t("admin.account")}</strong><small>{t("admin.accountText")}</small></span><ArrowRight size={17} aria-hidden="true" /></Link>
        </aside>
      </div>

      <section id="requests" className={styles.panel} aria-labelledby="requests-title">
        <div className={styles.panelHeading}><div><p className={styles.eyebrow}>{t("admin.inbox")}</p><h2 id="requests-title">{t("admin.recent")}</h2></div><span className={styles.requestCount}>{data.recentRequests.length}</span></div>
        {data.recentRequests.length === 0 ? <div className={styles.empty}><CalendarClock size={30} aria-hidden="true" /><p>{t("admin.noRequests")}</p></div>
          : <div className={styles.requestList}>{data.recentRequests.map(request => <article key={request.id} className={styles.request}>
            <div><strong>{request.propertyTitle || t("property.generic")}</strong><span>{request.username}</span></div>
            <div><strong>{dateTimeFormatter.format(new Date(`${request.viewingDate}T${request.viewingTime}`))}</strong><span>{request.createdAt ? dateTimeFormatter.format(new Date(request.createdAt)) : ""}</span></div>
            <span className={`${styles.status} ${styles[`status${request.status}`]}`}>{t(`admin.status.${request.status}`)}</span>
          </article>)}</div>}
      </section>
    </div>
  </main>;
}
