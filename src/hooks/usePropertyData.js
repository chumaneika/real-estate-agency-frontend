"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export default function usePropertyData(path) {
  const [state, setState] = useState({ status: "loading", data: null });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading", data: null });
    async function load() {
      try {
        const response = await fetch(`${API_URL}/api/v1/properties/${path}`, {
          credentials: "include", cache: "no-store", signal: controller.signal,
        });
        if (response.status === 404 && path !== "get-all") {
          setState({ status: "notFound", data: null });
          return;
        }
        if (!response.ok) throw new Error("Property request failed");
        const data = await response.json();
        if (path === "get-all" ? !Array.isArray(data) : !data || typeof data.id !== "number") throw new Error("Invalid property data");
        if (!controller.signal.aborted) setState({ status: "ready", data });
      } catch (error) {
        if (error.name !== "AbortError") setState({ status: "error", data: null });
      }
    }
    load();
    return () => controller.abort();
  }, [path, attempt]);

  return { ...state, retry: () => setAttempt(value => value + 1) };
}
