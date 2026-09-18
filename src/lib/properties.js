export const propertyTypes = {
  RESIDENTIAL: "Residential",
  NONRESIDENTIAL: "Non-residential",
  COMMERCIAL: "Commercial",
};

const priceFormat = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function formatPrice(value) {
  return value == null ? "Price on request" : priceFormat.format(value);
}

export function propertyTitle(property) {
  return property.title?.trim() || property.address || "Property";
}

export function filterProperties(properties, filters) {
  const query = filters.search.trim().toLowerCase();
  const filtered = properties.filter(property => {
    if (query && !`${property.title ?? ""} ${property.address ?? ""}`.toLowerCase().includes(query)) return false;
    if (filters.type && property.type !== filters.type) return false;
    if (filters.rooms && (property.rooms == null || property.rooms < Number(filters.rooms))) return false;
    if (filters.minPrice !== "" && (property.price == null || property.price < Number(filters.minPrice))) return false;
    if (filters.maxPrice !== "" && (property.price == null || property.price > Number(filters.maxPrice))) return false;
    return true;
  });
  return filtered.sort((a, b) => {
    if (filters.sort === "priceAsc" || filters.sort === "priceDesc") {
      if (a.price == null) return b.price == null ? 0 : 1;
      if (b.price == null) return -1;
      return filters.sort === "priceAsc" ? a.price - b.price : b.price - a.price;
    }
    return b.id - a.id;
  });
}
