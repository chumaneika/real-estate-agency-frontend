"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Building2, CalendarClock, RefreshCw, ShieldAlert } from "lucide-react";
import { usePreferences } from "@/components/AppProviders";
import styles from "@/styles/pages/Agent.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export default function AgentWorkspace() {
  const router = useRouter();
  const { locale, t } = usePreferences();
  const [state, setState] = useState({ status: "loading", properties: [], requests: [] });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setState({ status: "loading", properties: [], requests: [] });
      try {
        const accountResponse = await fetch(`${API_URL}/api/v1/auth/me`, { credentials: "include", cache: "no-store", signal: controller.signal });
        if (accountResponse.status === 401) { router.replace("/login"); return; }
        if (!accountResponse.ok) throw new Error();
        const account = await accountResponse.json();
        if (account.role !== "AGENT") { setState({ status: "forbidden", properties: [], requests: [] }); return; }
        const [propertyResponse, requestResponse] = await Promise.all([
          fetch(`${API_URL}/api/v1/agent/properties`, { credentials: "include", cache: "no-store", signal: controller.signal }),
          fetch(`${API_URL}/api/v1/agent/viewing-requests`, { credentials: "include", cache: "no-store", signal: controller.signal }),
        ]);
        if (!propertyResponse.ok || !requestResponse.ok) throw new Error();
        const [properties, requests] = await Promise.all([propertyResponse.json(), requestResponse.json()]);
        if (!controller.signal.aborted) setState({ status: "ready", properties, requests });
      } catch (error) {
        if (error.name !== "AbortError") setState({ status: "error", properties: [], requests: [] });
      }
    }
    load();
    return () => controller.abort();
  }, [attempt, router]);

  const dateFormatter = useMemo(() => new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", { dateStyle: "medium", timeStyle: "short" }), [locale]);

  if (state.status === "loading") return <main className={styles.page}><div className={styles.container} role="status"><div className={styles.skeleton} /><div className={styles.grid}><div className={styles.panelSkeleton} /><div className={styles.panelSkeleton} /></div></div></main>;
  if (state.status === "forbidden") return <main className={styles.page}><section className={styles.message}><ShieldAlert size={36} /><h1>{t("agent.forbidden")}</h1><p>{t("agent.forbiddenText")}</p><Link href="/home" className={styles.button}>{t("error.home")}</Link></section></main>;
  if (state.status === "error") return <main className={styles.page}><section className={styles.message}><ShieldAlert size={36} /><h1>{t("agent.unavailable")}</h1><button type="button" className={styles.button} onClick={() => setAttempt(value => value + 1)}><RefreshCw size={16} />{t("catalog.tryAgain")}</button></section></main>;

  return <main className={styles.page}><div className={styles.container}>
    <header className={styles.heading}><p>{t("agent.eyebrow")}</p><h1>{t("agent.title")}</h1><span>{t("agent.subtitle")}</span></header>
    <div className={styles.summary}><article><Building2 size={20} /><span>{t("agent.assignedProperties")}</span><strong>{state.properties.length}</strong></article><article><CalendarClock size={20} /><span>{t("agent.relatedRequests")}</span><strong>{state.requests.length}</strong></article></div>
    <div className={styles.grid}>
      <section className={styles.panel}><div className={styles.panelHeading}><Building2 size={20} /><h2>{t("agent.properties")}</h2></div>
        {state.properties.length === 0 ? <div className={styles.empty}>{t("agent.noProperties")}</div> : <div className={styles.list}>{state.properties.map(property => <Link href={`/properties/${property.id}`} key={property.id} className={styles.property}><div><strong>{property.title || property.address}</strong><span>{property.address}</span></div><span>#{property.id}</span></Link>)}</div>}
      </section>
      <section className={styles.panel}><div className={styles.panelHeading}><CalendarClock size={20} /><h2>{t("agent.requests")}</h2></div>
        {state.requests.length === 0 ? <div className={styles.empty}>{t("agent.noRequests")}</div> : <div className={styles.list}>{state.requests.map(request => <article key={request.id} className={styles.request}><div><strong>{request.propertyTitle || t("property.generic")}</strong><span>{request.username}</span></div><div><strong>{dateFormatter.format(new Date(`${request.viewingDate}T${request.viewingTime}`))}</strong><span className={styles[request.status]}>{t(`admin.status.${request.status}`)}</span></div></article>)}</div>}
      </section>
    </div>
  </div></main>;
}
