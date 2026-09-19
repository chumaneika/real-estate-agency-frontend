"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Heart, Home, LayoutDashboard, Menu, UserRound, X } from "lucide-react";
import LogoutButton from "@/components/LogoutButton";
import PreferencesControls from "@/components/PreferencesControls";
import { usePreferences } from "@/components/AppProviders";
import useFavorites from "@/hooks/useFavorites";
import styles from "@/styles/TheHeader.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
const upcomingSections = ["agents", "contact"];

function UpcomingSections({ t }) {
  return <ul className={styles.upcoming}>
    {upcomingSections.map(section => <li key={section}><span>{t(`nav.${section}`)}</span><span className={styles.soon}>{t("nav.soon")}</span></li>)}
  </ul>;
}

export default function TheHeader() {
  const pathname = usePathname();
  const id = useId();
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const pendingFocus = useRef(null);
  const [menu, setMenu] = useState(null);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const favorites = useFavorites();
  const { t } = usePreferences();

  useEffect(() => {
    const controller = new AbortController();
    async function loadUser() {
      setStatus("loading");
      try {
        const response = await fetch(`${API_URL}/api/v1/auth/me`, {
          credentials: "include", cache: "no-store", signal: controller.signal,
        });
        if (response.status === 401) {
          setUser(null);
          setStatus("ready");
          return;
        }
        if (!response.ok) throw new Error("Account request failed");
        const account = await response.json();
        if (!controller.signal.aborted) {
          setUser(account);
          setStatus("ready");
        }
      } catch (error) {
        if (error.name !== "AbortError") setStatus("error");
      }
    }
    loadUser();
    return () => controller.abort();
  }, [attempt]);

  useEffect(() => { setMenu(null); }, [pathname]);

  useEffect(() => {
    const breakpoint = window.matchMedia("(max-width: 760px)");
    const closeMenu = () => setMenu(null);
    breakpoint.addEventListener("change", closeMenu);
    return () => breakpoint.removeEventListener("change", closeMenu);
  }, []);

  useEffect(() => {
    if (!menu) return;
    if (pendingFocus.current) {
      const items = panelRef.current?.querySelectorAll("a[href], button:not([disabled])");
      const target = pendingFocus.current === "last" ? items?.[items.length - 1] : items?.[0];
      target?.focus();
      pendingFocus.current = null;
    }
    function onPointerDown(event) {
      if (!panelRef.current?.contains(event.target) && !triggerRef.current?.contains(event.target)) setMenu(null);
    }
    function onKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenu(null);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menu]);

  function toggleMenu(name, event) {
    triggerRef.current = event.currentTarget;
    setMenu(current => current === name ? null : name);
  }

  function onTriggerKeyDown(name, event) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    triggerRef.current = event.currentTarget;
    pendingFocus.current = event.key === "ArrowUp" ? "last" : "first";
    if (menu === name) {
      const items = panelRef.current?.querySelectorAll("a[href], button:not([disabled])");
      (event.key === "ArrowUp" ? items?.[items.length - 1] : items?.[0])?.focus();
      pendingFocus.current = null;
    } else setMenu(name);
  }

  function onPanelKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    const items = Array.from(event.currentTarget.querySelectorAll("a[href], button:not([disabled])"));
    if (!items.length) return;
    event.preventDefault();
    const current = items.indexOf(document.activeElement);
    let next = event.key === "ArrowUp" ? (current - 1 + items.length) % items.length : (current + 1) % items.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = items.length - 1;
    items[next].focus();
  }

  const role = user?.roles?.split(",").some(value => value.trim() === "ROLE_ADMIN") ? t("account.admin") : t("account.member");
  const initials = user?.username?.slice(0, 2).toUpperCase() || "PK";
  const accountDetails = user && <div className={styles.accountDetails}>
    <span className={styles.avatar} aria-hidden="true">{initials}</span>
    <div><p className={styles.accountName}>{user.username}</p><p className={styles.role}>{role}</p></div>
  </div>;
  const accountActions = user && <>
    {role === t("account.admin") && <Link href="/admin" className={styles.panelLink} aria-current={pathname === "/admin" ? "page" : undefined} onClick={() => setMenu(null)}>
      <LayoutDashboard size={17} aria-hidden="true" />{t("nav.admin")}
    </Link>}
    <Link href="/profile" className={styles.panelLink} aria-current={pathname === "/profile" ? "page" : undefined} onClick={() => setMenu(null)}>
      <UserRound size={17} aria-hidden="true" />{t("nav.profile")}
    </Link>
    <Link href="/favorites" className={styles.panelLink} aria-current={pathname === "/favorites" ? "page" : undefined} onClick={() => setMenu(null)}>
      <Heart size={17} aria-hidden="true" />{t("nav.favorites")}
      {favorites.ready && favorites.ids.length > 0 && <span className={styles.count}>{favorites.ids.length}</span>}
    </Link>
    <div className={styles.divider} />
    <LogoutButton variant="menu" />
  </>;

  return (
    <header className={styles.header} ref={headerRef} onBlur={event => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setMenu(null);
    }}>
      <div className={styles.inner}>
        <Link href="/home" className={styles.brand} aria-label="PrimeKey — home">
          <Home size={23} strokeWidth={1.8} aria-hidden="true" />
          <span className={styles.brandName}>PrimeKey</span>
          <span className={styles.brandCaption}>REAL ESTATE</span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/home" className={`${styles.navLink} ${pathname === "/home" ? styles.active : ""}`} aria-current={pathname === "/home" ? "page" : undefined}>{t("nav.home")}</Link>
          <Link href="/properties" className={`${styles.navLink} ${pathname.startsWith("/properties") ? styles.active : ""}`} aria-current={pathname === "/properties" ? "page" : undefined}>{t("nav.properties")}</Link>
          <div className={styles.exploreWrap}>
            <button type="button" className={styles.navLink} aria-expanded={menu === "explore"} aria-controls={`${id}-explore`} onClick={event => toggleMenu("explore", event)}>
              {t("nav.explore")}<ChevronDown size={14} className={menu === "explore" ? styles.rotated : ""} aria-hidden="true" />
            </button>
            {menu === "explore" && <div id={`${id}-explore`} ref={panelRef} className={`${styles.panel} ${styles.explorePanel}`}>
              <p className={styles.panelEyebrow}>{t("nav.more")}</p><UpcomingSections t={t} />
            </div>}
          </div>
        </nav>
        <div className={styles.actions}>
          <div className={styles.preferencesSlot}><PreferencesControls /></div>
          <div className={styles.accountSlot}>
            {status === "loading" ? <div className={styles.skeleton} role="status" aria-label="Loading account"><span /><span /></div>
              : status === "error" ? <button className={styles.retry} onClick={() => setAttempt(value => value + 1)} aria-label={t("account.retry")}>{t("account.retry")}</button>
              : user ? <button type="button" className={`${styles.accountControl} ${menu === "account" || pathname === "/profile" || pathname === "/favorites" ? styles.accountActive : ""}`} aria-label={`Account: ${user.username}`} aria-expanded={menu === "account"} aria-controls={`${id}-account`} onClick={event => toggleMenu("account", event)} onKeyDown={event => onTriggerKeyDown("account", event)}>
                <span className={styles.avatar} aria-hidden="true">{initials}</span>
                <span className={styles.username}>{user.username}</span>
                <ChevronDown size={15} className={`${styles.chevron} ${menu === "account" ? styles.rotated : ""}`} aria-hidden="true" />
              </button> : <Link href="/login" className={styles.signIn}>{t("nav.signIn")}</Link>}
          </div>
          <button type="button" className={styles.mobileToggle} aria-label={menu === "mobile" ? "Close navigation" : "Open navigation"} aria-expanded={menu === "mobile"} aria-controls={`${id}-mobile`} onClick={event => toggleMenu("mobile", event)} onKeyDown={event => onTriggerKeyDown("mobile", event)}>
            {menu === "mobile" ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
        {menu === "account" && user && <div id={`${id}-account`} ref={panelRef} className={`${styles.panel} ${styles.accountPanel}`} onKeyDown={onPanelKeyDown}>
          {accountDetails}<div className={styles.divider} />{accountActions}
        </div>}
        {menu === "mobile" && <nav id={`${id}-mobile`} ref={panelRef} className={`${styles.panel} ${styles.mobilePanel}`} aria-label="Mobile navigation" onKeyDown={onPanelKeyDown}>
          <Link href="/home" className={styles.panelLink} aria-current={pathname === "/home" ? "page" : undefined} onClick={() => setMenu(null)}><Home size={17} aria-hidden="true" />{t("nav.home")}</Link>
          <Link href="/properties" className={styles.panelLink} aria-current={pathname === "/properties" ? "page" : undefined} onClick={() => setMenu(null)}>{t("nav.properties")}</Link>
          <div className={styles.divider} /><p className={styles.panelEyebrow}>{t("nav.explore")}</p><UpcomingSections t={t} />
          <div className={styles.mobilePreferences}><PreferencesControls /></div>
          <div className={styles.divider} />
          {user ? <>{accountDetails}{accountActions}</> : status === "loading" ? <p className={styles.role} role="status">Loading account…</p> : status === "error" ? <button className={styles.panelLink} onClick={() => setAttempt(value => value + 1)}>{t("account.retry")}</button> : <Link href="/login" className={styles.panelLink}>{t("nav.signIn")}</Link>}
        </nav>}
      </div>
    </header>
  );
}
