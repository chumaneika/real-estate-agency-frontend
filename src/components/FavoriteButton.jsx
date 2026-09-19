"use client";

import { Heart } from "lucide-react";
import useFavorites from "@/hooks/useFavorites";
import styles from "@/styles/pages/Properties.module.css";
import { usePreferences, useToast } from "@/components/AppProviders";

export default function FavoriteButton({ propertyId, propertyName, variant = "card" }) {
  const favorites = useFavorites();
  const active = favorites.has(propertyId);
  const { t } = usePreferences();
  const { showToast } = useToast();
  const label = t(active ? "favorite.remove" : "favorite.save", { name: propertyName });

  return (
    <button
      type="button"
      className={`${styles.favoriteButton} ${styles[`${variant}Favorite`]} ${active ? styles.favoriteActive : ""}`}
      onClick={() => {
        favorites.toggle(propertyId);
        showToast(t(active ? "toast.removed" : "toast.saved"), { type: "success" });
      }}
      disabled={!favorites.ready}
      aria-label={favorites.ready ? label : t("favorite.loading")}
      aria-pressed={active}
      title={favorites.ready ? label : t("favorite.loading")}
    >
      <Heart size={18} fill={active ? "currentColor" : "none"} aria-hidden="true" />
      {variant === "detail" && <span>{t(active ? "favorite.saved" : "favorite.action")}</span>}
    </button>
  );
}
