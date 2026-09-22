"use client";

import Link from "next/link";
import { Clock3, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { usePreferences } from "@/components/AppProviders";
import styles from "@/styles/pages/Sell.module.css";

const contacts = [
  { key: "phone", value: "+7 (000) 000-00-00", href: "tel:+70000000000", icon: Phone },
  { key: "email", value: "sales@primekey.example", href: "mailto:sales@primekey.example", icon: Mail },
  { key: "telegram", value: "@primekey_sales", href: "#telegram", icon: Send },
  { key: "whatsapp", value: "+7 (000) 000-00-00", href: "#whatsapp", icon: MessageCircle },
];

export default function SellerContact() {
  const { t } = usePreferences();

  return <main className={styles.page}>
    <section className={styles.intro}>
      <p className={styles.eyebrow}>{t("sell.eyebrow")}</p>
      <h1>{t("sell.title")}</h1>
      <p className={styles.lead}>{t("sell.subtitle")}</p>
      <div className={styles.guestBadge}>{t("sell.guestNote")}</div>
    </section>

    <section className={styles.contactSection} aria-labelledby="sales-contact-title">
      <div className={styles.sectionHeading}>
        <div><p className={styles.eyebrow}>{t("sell.department")}</p><h2 id="sales-contact-title">{t("sell.contactTitle")}</h2></div>
        <div className={styles.hours}><Clock3 size={18} /><span>{t("sell.hours")}</span></div>
      </div>
      <div className={styles.contactGrid}>
        {contacts.map(({ key, value, href, icon: Icon }) => <a key={key} href={href} className={styles.contactCard}>
          <span className={styles.icon}><Icon size={22} /></span>
          <span><small>{t(`sell.${key}`)}</small><strong>{value}</strong></span>
        </a>)}
      </div>
      <p className={styles.placeholder}>{t("sell.placeholder")}</p>
    </section>

    <div className={styles.actions}>
      <Link href="/home" className={styles.secondary}>{t("sell.back")}</Link>
      <Link href="/properties" className={styles.primary}>{t("sell.browse")}</Link>
    </div>
  </main>;
}
