"use client";

import { useCallback, useEffect, useState } from "react";
import { FAVORITES_EVENT, FAVORITES_STORAGE_KEY, parseFavoriteIds, toggleFavoriteId } from "@/lib/favorites";

function readFavorites() {
  return parseFavoriteIds(window.localStorage.getItem(FAVORITES_STORAGE_KEY));
}

export default function useFavorites() {
  const [ids, setIds] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function update() {
      try { setIds(readFavorites()); } catch { setIds([]); }
      setReady(true);
    }
    update();
    window.addEventListener("storage", update);
    window.addEventListener(FAVORITES_EVENT, update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener(FAVORITES_EVENT, update);
    };
  }, []);

  const toggle = useCallback(id => {
    try {
      const nextIds = toggleFavoriteId(readFavorites(), Number(id));
      window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(nextIds));
      window.dispatchEvent(new Event(FAVORITES_EVENT));
    } catch {
      // Storage may be unavailable in privacy-restricted browsers.
    }
  }, []);

  return { ids, ready, has: id => ids.includes(Number(id)), toggle };
}
