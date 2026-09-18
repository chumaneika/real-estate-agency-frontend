"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, LogOut } from "lucide-react";
import styles from "@/styles/LogoutButton.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export default function LogoutButton({ variant = "primary" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function signOut() {
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_URL}/api/v1/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) throw new Error("Logout failed");
      router.replace("/login");
      router.refresh();
    } catch {
      setError("Could not sign out. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className={`${styles.wrapper} ${variant === "menu" ? styles.menu : ""}`}>
      <button type="button" className={styles.button} onClick={signOut} disabled={loading} aria-busy={loading}>
        {loading ? <LoaderCircle size={17} className={styles.spinner} aria-hidden="true" /> : <LogOut size={17} aria-hidden="true" />}
        {loading ? "Signing out…" : "Sign out"}
      </button>
      {error && <p className={styles.error} role="alert">{error}</p>}
    </div>
  );
}
