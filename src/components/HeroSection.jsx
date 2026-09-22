"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePreferences } from "@/components/AppProviders";
import styles from "@/styles/sections/HeroSection.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

const HeroSection = () => {
  const { t } = usePreferences();
  const [account, setAccount] = useState({ status: "loading", user: null });

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/api/v1/auth/me`, {
      credentials: "include", cache: "no-store", signal: controller.signal,
    }).then(async response => {
      if (response.status === 401) return null;
      if (!response.ok) throw new Error("Account request failed");
      return response.json();
    }).then(user => {
      if (!controller.signal.aborted) setAccount({ status: "ready", user });
    }).catch(error => {
      if (error.name !== "AbortError") setAccount({ status: "error", user: null });
    });
    return () => controller.abort();
  }, []);

  const buyerHref = account.user ? "/properties" : "/register?intent=buy";

  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <p className={styles.eyebrow}>{t("home.intentEyebrow")}</p>
        <h1 className={styles.title}>{t("home.intentTitle")}</h1>
        <div className={styles.actions}>
          <Link href={buyerHref} className={styles.card} aria-busy={account.status === "loading"}>
            <span className={styles.step}>1</span>
            <h2>{t("home.buyTitle")}</h2>
            <p>{account.user ? t("home.buyAuthenticated") : t("home.buyGuest")}</p>
          </Link>
          <Link href="/sell" className={styles.card}>
            <span className={styles.step}>2</span>
            <h2>{t("home.sellTitle")}</h2>
            <p>{t("home.sellText")}</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
