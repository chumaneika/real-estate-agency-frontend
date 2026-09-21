"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, ShieldCheck, UserRound } from "lucide-react";
import LogoutButton from "@/components/LogoutButton";
import styles from "@/styles/pages/Profile.module.css";
import { usePreferences } from "@/components/AppProviders";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const { t } = usePreferences();

  useEffect(() => {
    const controller = new AbortController();
    setError("");
    async function loadProfile() {
      try {
        const response = await fetch(`${API_URL}/api/v1/auth/me`, {
          credentials: "include",
          cache: "no-store",
          signal: controller.signal,
        });
        if (response.status === 401) {
          router.replace("/login");
          return;
        }
        if (!response.ok) throw new Error("Profile request failed");
        setUser(await response.json());
      } catch (exception) {
        if (exception.name !== "AbortError") setError("We couldn’t load your profile. Please try again.");
      }
    }
    loadProfile();
    return () => controller.abort();
  }, [router, attempt]);

  const roleLabel = user?.role === "ADMIN" ? "account.admin" : user?.role === "AGENT" ? "account.agent" : "account.member";

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/home" className={styles.back}><ArrowLeft size={16} aria-hidden="true" /> {t("profile.back")}</Link>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{t("profile.eyebrow")}</p>
          <h1>{t("profile.title")}</h1>
          <p>{t("profile.subtitle")}</p>
        </div>

        {error ? (
          <section className={styles.card}>
            <p role="alert" className={styles.error}>{error}</p>
            <button className={styles.retry} onClick={() => setAttempt(value => value + 1)}>{t("catalog.tryAgain")}</button>
          </section>
        ) : !user ? (
          <section className={styles.card} role="status" aria-live="polite">{t("profile.loading")}</section>
        ) : (
          <div className={styles.grid}>
            <section className={`${styles.card} ${styles.identity}`} aria-label={t("profile.overview")}>
              <div className={styles.avatar} aria-hidden="true">{user.username.slice(0, 2).toUpperCase()}</div>
              <h2>{user.username}</h2>
              <p className={styles.email}>{user.email}</p>
              <span className={styles.badge}><ShieldCheck size={15} aria-hidden="true" />{t(roleLabel)}</span>
              <p className={styles.caption}>{t("profile.caption")}</p>
            </section>

            <div className={styles.details}>
              <section className={styles.card} aria-labelledby="personal-details">
                <h2 id="personal-details">{t("profile.personal")}</h2>
                <p className={styles.description}>{t("profile.details")}</p>
                <dl className={styles.fields}>
                  <div><dt><UserRound size={17} aria-hidden="true" />{t("profile.username")}</dt><dd>{user.username}</dd></div>
                  <div><dt><Mail size={17} aria-hidden="true" />{t("profile.email")}</dt><dd>{user.email || t("profile.missing")}</dd></div>
                </dl>
                <p className={styles.note}>{t("profile.note")}</p>
              </section>
              <section className={`${styles.card} ${styles.session}`} aria-labelledby="session-title">
                <div><h2 id="session-title">{t("profile.session")}</h2><p className={styles.description}>{t("profile.sessionText")}</p></div>
                <LogoutButton />
              </section>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
