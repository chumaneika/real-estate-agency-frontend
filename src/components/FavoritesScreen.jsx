"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import useFavorites from "@/hooks/useFavorites";
import usePropertyData from "@/hooks/usePropertyData";
import styles from "@/styles/pages/Properties.module.css";
import { usePreferences } from "@/components/AppProviders";

export default function FavoritesScreen() {
  const favorites = useFavorites();
  const properties = usePropertyData("get-all");
  const saved = properties.data?.filter(property => favorites.ids.includes(property.id)) ?? [];
  const unavailableCount = Math.max(0, favorites.ids.length - saved.length);
  const loading = !favorites.ready || properties.status === "loading";
  const { t } = usePreferences();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{t("favorites.eyebrow")}</p>
          <h1>{t("favorites.title")}</h1>
          <p>{t("favorites.subtitle")}</p>
        </div>
        {loading ? <div className={styles.cards} role="status" aria-label="Loading favorites">{[1, 2].map(value => <div key={value} className={styles.cardSkeleton} aria-hidden="true"><div /><span /><span /></div>)}</div>
          : properties.status === "error" ? <div className={styles.state}><Heart size={38} aria-hidden="true" /><h2>{t("favorites.unavailable")}</h2><p role="alert">{t("favorites.loadError")}</p><button className={styles.button} onClick={properties.retry}>{t("catalog.tryAgain")}</button></div>
          : saved.length ? <><div className={styles.favoriteToolbar}><p role="status">{saved.length} {t("favorites.saved")} {t(saved.length === 1 ? "catalog.one" : "catalog.many")}</p>{unavailableCount > 0 && <p>{unavailableCount} {t("favorites.unavailableCount")}</p>}</div><div className={styles.cards}>{saved.map(property => <PropertyCard key={property.id} property={property} />)}</div></>
          : <div className={styles.state}><Heart size={40} strokeWidth={1.2} aria-hidden="true" /><h2>{t(favorites.ids.length ? "favorites.gone" : "favorites.empty")}</h2><p>{t(favorites.ids.length ? "favorites.goneText" : "favorites.emptyText")}</p><Link href="/properties" className={styles.button}>{t("property.explore")}</Link></div>}
      </div>
    </main>
  );
}
