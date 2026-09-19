"use client";

import { Languages, Moon, Sun } from "lucide-react";
import { usePreferences } from "@/components/AppProviders";
import styles from "@/styles/Ui.module.css";

export default function PreferencesControls({ compact = false }) {
  const { locale, theme, t, toggleLocale, toggleTheme } = usePreferences();
  return <div className={`${styles.preferences} ${compact ? styles.preferencesCompact : ""}`} aria-label="Display preferences">
    <button type="button" onClick={toggleTheme} aria-label={theme === "light" ? t("preferences.dark") : t("preferences.light")} title={theme === "light" ? t("preferences.dark") : t("preferences.light")}>
      {theme === "light" ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
    </button>
    <button type="button" onClick={toggleLocale} aria-label={t("preferences.language")} title={t("preferences.language")}>
      <Languages size={16} aria-hidden="true" /><span>{locale.toUpperCase()}</span>
    </button>
  </div>;
}
