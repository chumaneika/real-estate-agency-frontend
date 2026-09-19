"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { usePreferences } from "@/components/AppProviders";
import styles from "@/styles/Ui.module.css";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { t } = usePreferences();
  if (pathname === "/home") return null;

  const parts = pathname.split("/").filter(Boolean);
  const items = [{ href: "/home", label: t("breadcrumbs.home") }];
  if (parts[0] === "properties") {
    items.push({ href: "/properties", label: t("breadcrumbs.properties") });
    if (parts[1] && parts[1] !== "buy") items.push({ label: t("breadcrumbs.property") });
  } else if (parts[0] === "profile") items.push({ label: t("breadcrumbs.profile") });
  else if (parts[0] === "favorites") items.push({ label: t("breadcrumbs.favorites") });
  else if (parts[0] === "admin") items.push({ label: t("breadcrumbs.admin") });

  return <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
    <ol>{items.map((item, index) => <li key={`${item.href || "current"}-${item.label}`}>
      {index > 0 && <ChevronRight size={13} aria-hidden="true" />}
      {item.href && index < items.length - 1
        ? <Link href={item.href}>{index === 0 && <Home size={14} aria-hidden="true" />}{item.label}</Link>
        : <span aria-current="page">{index === 0 && <Home size={14} aria-hidden="true" />}{item.label}</span>}
    </li>)}</ol>
  </nav>;
}
