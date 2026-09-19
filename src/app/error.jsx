"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { useEffect } from "react";
import { usePreferences } from "@/components/AppProviders";
import styles from "@/styles/pages/SystemPage.module.css";

export default function ErrorBoundary({ error, reset }) {
  const { t } = usePreferences();
  useEffect(() => { console.error(error); }, [error]);
  return <main className={styles.page}>
    <section className={styles.card}>
      <span className={`${styles.icon} ${styles.errorIcon}`}><AlertTriangle size={30} aria-hidden="true" /></span>
      <p className={styles.eyebrow}>{t("error.eyebrow")}</p>
      <h1>{t("error.title")}</h1>
      <p>{t("error.text")}</p>
      <div className={styles.actions}>
        <button type="button" className={styles.primary} onClick={reset}><RotateCcw size={17} aria-hidden="true" />{t("error.retry")}</button>
        <Link href="/home" className={styles.secondary}>{t("error.home")}</Link>
      </div>
    </section>
  </main>;
}
