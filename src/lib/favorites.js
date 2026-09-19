export const FAVORITES_STORAGE_KEY = "primekey-favorite-properties-v1";
export const FAVORITES_EVENT = "primekey:favorites-changed";

export function parseFavoriteIds(value) {
  try {
    const parsed = JSON.parse(value ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return [...new Set(parsed.filter(id => Number.isInteger(id) && id > 0))];
  } catch {
    return [];
  }
}

export function toggleFavoriteId(ids, id) {
  const normalizedId = Number(id);
  if (!Number.isInteger(normalizedId) || normalizedId <= 0) return ids;
  return ids.includes(normalizedId)
    ? ids.filter(currentId => currentId !== normalizedId)
    : [...ids, normalizedId];
}
