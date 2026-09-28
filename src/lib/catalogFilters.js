export const DEFAULT_CATALOG_FILTERS = {
  search: "", type: "", rooms: "", minPrice: "", maxPrice: "",
  minPricePerMeter: "", maxPricePerMeter: "", minFloor: "", maxFloor: "",
  minConstructionYear: "", renovation: "", balcony: false, parking: false,
  maxMetroDistance: "", sort: "newest",
};

const SORTS = new Set(["newest", "priceAsc", "priceDesc"]);
const TYPES = new Set(["RESIDENTIAL", "NONRESIDENTIAL", "COMMERCIAL"]);
const RENOVATIONS = new Set(["NONE", "COSMETIC", "EURO", "DESIGNER"]);

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
      minPricePerMeter: nonNegativeNumber(params.get("ppmMin")),
      maxPricePerMeter: nonNegativeNumber(params.get("ppmMax")),
      minFloor: nonNegativeNumber(params.get("floorMin")),
      maxFloor: nonNegativeNumber(params.get("floorMax")),
      minConstructionYear: nonNegativeNumber(params.get("yearFrom")),
      renovation: RENOVATIONS.has(params.get("renovation")) ? params.get("renovation") : "",
      balcony: params.get("balcony") === "1",
      parking: params.get("parking") === "1",
      maxMetroDistance: nonNegativeNumber(params.get("metroMax")),
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
  if (filters.minPricePerMeter !== "") params.set("ppmMin", filters.minPricePerMeter);
  if (filters.maxPricePerMeter !== "") params.set("ppmMax", filters.maxPricePerMeter);
  if (filters.minFloor !== "") params.set("floorMin", filters.minFloor);
  if (filters.maxFloor !== "") params.set("floorMax", filters.maxFloor);
  if (filters.minConstructionYear !== "") params.set("yearFrom", filters.minConstructionYear);
  if (filters.renovation) params.set("renovation", filters.renovation);
  if (filters.balcony) params.set("balcony", "1");
  if (filters.parking) params.set("parking", "1");
  if (filters.maxMetroDistance !== "") params.set("metroMax", filters.maxMetroDistance);
  if (filters.sort !== "newest") params.set("sort", filters.sort);
  if (page > 1) params.set("page", String(page));
  return params.toString();
}
