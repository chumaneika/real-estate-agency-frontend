"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { usePreferences } from "@/components/AppProviders";
import styles from "@/styles/pages/SystemPage.module.css";

export default function NotFound() {
  const { t } = usePreferences();
  return <SiteLayout><main className={styles.page}>
    <section className={styles.card}>
      <span className={styles.icon}><Compass size={30} aria-hidden="true" /></span>
      <p className={styles.eyebrow}>{t("notFound.eyebrow")}</p>
      <h1>{t("notFound.title")}</h1>
      <p>{t("notFound.text")}</p>
      <div className={styles.actions}>
        <Link href="/home" className={styles.primary}>{t("notFound.home")}<ArrowRight size={17} aria-hidden="true" /></Link>
        <Link href="/properties" className={styles.secondary}>{t("notFound.properties")}</Link>
      </div>
    </section>
  </main></SiteLayout>;
}
