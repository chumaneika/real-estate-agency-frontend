"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import useFavorites from "@/hooks/useFavorites";
import usePropertyData from "@/hooks/usePropertyData";
import styles from "@/styles/pages/Properties.module.css";

export default function FavoritesScreen() {
  const favorites = useFavorites();
  const properties = usePropertyData("get-all");
  const saved = properties.data?.filter(property => favorites.ids.includes(property.id)) ?? [];
  const unavailableCount = Math.max(0, favorites.ids.length - saved.length);
  const loading = !favorites.ready || properties.status === "loading";

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>YOUR SHORTLIST</p>
          <h1>Favorite properties.</h1>
          <p>Keep the places worth another look together. Favorites are stored on this browser.</p>
        </div>
        {loading ? <div className={styles.cards} role="status" aria-label="Loading favorites">{[1, 2].map(value => <div key={value} className={styles.cardSkeleton} aria-hidden="true"><div /><span /><span /></div>)}</div>
          : properties.status === "error" ? <div className={styles.state}><Heart size={38} aria-hidden="true" /><h2>Favorites unavailable</h2><p role="alert">We couldn’t load the property collection.</p><button className={styles.button} onClick={properties.retry}>Try again</button></div>
          : saved.length ? <><div className={styles.favoriteToolbar}><p role="status">{saved.length} saved {saved.length === 1 ? "property" : "properties"}</p>{unavailableCount > 0 && <p>{unavailableCount} unavailable {unavailableCount === 1 ? "listing" : "listings"}</p>}</div><div className={styles.cards}>{saved.map(property => <PropertyCard key={property.id} property={property} />)}</div></>
          : <div className={styles.state}><Heart size={40} strokeWidth={1.2} aria-hidden="true" /><h2>{favorites.ids.length ? "Saved listings are no longer available" : "Your shortlist is ready when you are."}</h2><p>{favorites.ids.length ? "These properties may have been removed from the collection." : "Select the heart on any property to save it here."}</p><Link href="/properties" className={styles.button}>Explore properties</Link></div>}
      </div>
    </main>
  );
}
