"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Info, X, XCircle } from "lucide-react";
import { messages } from "@/lib/i18n";
import styles from "@/styles/Ui.module.css";

const PreferencesContext = createContext(null);
const ToastContext = createContext(null);

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("usePreferences must be used inside AppProviders");
  return value;
}

export function useToast() {
  const value = useContext(ToastContext);
  if (!value) throw new Error("useToast must be used inside AppProviders");
  return value;
}

export default function AppProviders({ children }) {
  const [locale, setLocaleState] = useState("en");
  const [theme, setThemeState] = useState("light");
  const [preferencesReady, setPreferencesReady] = useState(false);
  const [toasts, setToasts] = useState([]);
  const toastId = useRef(0);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("primekey-locale");
    const savedTheme = window.localStorage.getItem("primekey-theme");
    setLocaleState(savedLocale === "ru" ? "ru" : "en");
    setThemeState(savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light");
    setPreferencesReady(true);
  }, []);

  useEffect(() => {
    if (!preferencesReady) return;
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    window.localStorage.setItem("primekey-locale", locale);
  }, [locale, preferencesReady]);

  useEffect(() => {
    if (!preferencesReady) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("primekey-theme", theme);
  }, [theme, preferencesReady]);

  const t = useCallback((key, values = {}) => {
    const template = messages[locale]?.[key] ?? messages.en[key] ?? key;
    return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, String(value)), template);
  }, [locale]);

  const dismissToast = useCallback(id => setToasts(current => current.filter(toast => toast.id !== id)), []);
  const showToast = useCallback((message, options = {}) => {
    const id = ++toastId.current;
    setToasts(current => [...current.slice(-3), { id, message, type: options.type || "info" }]);
    window.setTimeout(() => dismissToast(id), options.duration || 4200);
    return id;
  }, [dismissToast]);

  const preferences = useMemo(() => ({
    locale, theme, t,
    setLocale: value => setLocaleState(value === "ru" ? "ru" : "en"),
    toggleLocale: () => setLocaleState(value => value === "en" ? "ru" : "en"),
    toggleTheme: () => setThemeState(value => value === "light" ? "dark" : "light"),
  }), [locale, theme, t]);
  const toastApi = useMemo(() => ({ showToast, dismissToast }), [showToast, dismissToast]);

  return (
    <PreferencesContext.Provider value={preferences}>
      <ToastContext.Provider value={toastApi}>
        {children}
        <div className={styles.toastRegion} aria-live="polite" aria-label="Notifications">
          {toasts.map(toast => <div key={toast.id} className={`${styles.toast} ${styles[toast.type]}`} role={toast.type === "error" ? "alert" : "status"}>
            {toast.type === "success" ? <CheckCircle2 size={19} aria-hidden="true" /> : toast.type === "error" ? <XCircle size={19} aria-hidden="true" /> : <Info size={19} aria-hidden="true" />}
            <p>{toast.message}</p>
            <button type="button" onClick={() => dismissToast(toast.id)} aria-label="Dismiss notification"><X size={16} aria-hidden="true" /></button>
          </div>)}
        </div>
      </ToastContext.Provider>
    </PreferencesContext.Provider>
  );
}
