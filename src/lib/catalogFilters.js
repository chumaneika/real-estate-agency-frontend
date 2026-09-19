export const DEFAULT_CATALOG_FILTERS = {
  search: "", type: "", rooms: "", minPrice: "", maxPrice: "", sort: "newest",
};

const SORTS = new Set(["newest", "priceAsc", "priceDesc"]);
const TYPES = new Set(["RESIDENTIAL", "NONRESIDENTIAL", "COMMERCIAL"]);

function nonNegativeNumber(value) {
  return value !== null && value !== "" && Number.isFinite(Number(value)) && Number(value) >= 0 ? value : "";
}

export function catalogStateFromParams(params) {
  const type = params.get("type") || "";
  const rooms = params.get("rooms") || "";
  const sort = params.get("sort") || "newest";
  const page = Number.parseInt(params.get("page") || "1", 10);
  return {
    filters: {
      search: (params.get("q") || "").slice(0, 120),
      type: TYPES.has(type) ? type : "",
      rooms: /^[1-5]$/.test(rooms) ? rooms : "",
      minPrice: nonNegativeNumber(params.get("min")),
      maxPrice: nonNegativeNumber(params.get("max")),
      sort: SORTS.has(sort) ? sort : "newest",
    },
    page: Number.isFinite(page) && page > 0 ? page : 1,
  };
}

export function catalogParams(filters, page = 1) {
  const params = new URLSearchParams();
  if (filters.search.trim()) params.set("q", filters.search.trim());
  if (filters.type) params.set("type", filters.type);
  if (filters.rooms) params.set("rooms", filters.rooms);
  if (filters.minPrice !== "") params.set("min", filters.minPrice);
  if (filters.maxPrice !== "") params.set("max", filters.maxPrice);
  if (filters.sort !== "newest") params.set("sort", filters.sort);
  if (page > 1) params.set("page", String(page));
  return params.toString();
}
