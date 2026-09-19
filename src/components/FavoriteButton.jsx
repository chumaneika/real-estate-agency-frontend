"use client";

import { Heart } from "lucide-react";
import useFavorites from "@/hooks/useFavorites";
import styles from "@/styles/pages/Properties.module.css";

export default function FavoriteButton({ propertyId, propertyName, variant = "card" }) {
  const favorites = useFavorites();
  const active = favorites.has(propertyId);
  const label = active ? `Remove ${propertyName} from favorites` : `Save ${propertyName} to favorites`;

  return (
    <button
      type="button"
      className={`${styles.favoriteButton} ${styles[`${variant}Favorite`]} ${active ? styles.favoriteActive : ""}`}
      onClick={() => favorites.toggle(propertyId)}
      disabled={!favorites.ready}
      aria-label={favorites.ready ? label : "Loading favorites"}
      aria-pressed={active}
      title={favorites.ready ? label : "Loading favorites"}
    >
      <Heart size={18} fill={active ? "currentColor" : "none"} aria-hidden="true" />
      {variant === "detail" && <span>{active ? "Saved" : "Save to favorites"}</span>}
    </button>
  );
}
