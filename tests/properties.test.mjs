import test from "node:test";
import assert from "node:assert/strict";
import { filterProperties, formatPrice, propertyTitle } from "../src/lib/properties.js";
import { parseFavoriteIds, toggleFavoriteId } from "../src/lib/favorites.js";
import { localDateValue, validateViewing, VIEWING_TIMES } from "../src/lib/viewings.js";
import { propertyImages } from "../src/lib/propertyImages.js";
import { catalogParams, catalogStateFromParams, DEFAULT_CATALOG_FILTERS } from "../src/lib/catalogFilters.js";

const filters = { search: "", type: "", rooms: "", minPrice: "", maxPrice: "", sort: "newest" };
const data = [
  { id: 1, title: "Garden home", address: "City Center", price: 200000, area: 90, rooms: 3, type: "RESIDENTIAL" },
  { id: 2, title: "Office", address: "North Street", price: 100000, rooms: 2, type: "COMMERCIAL" },
  { id: 3, address: "South Street", price: null, rooms: null, type: "RESIDENTIAL" },
];

test("search matches title and address regardless of case", () => {
  assert.deepEqual(filterProperties(data, { ...filters, search: "  CITY  " }).map(p => p.id), [1]);
  assert.deepEqual(filterProperties(data, { ...filters, search: "office" }).map(p => p.id), [2]);
});
test("type, price range and rooms combine", () => {
  assert.deepEqual(filterProperties(data, { ...filters, type: "RESIDENTIAL", minPrice: "150000", maxPrice: "250000", rooms: "3" }).map(p => p.id), [1]);
});
test("prices sort correctly and missing prices stay last", () => {
  assert.deepEqual(filterProperties(data, { ...filters, sort: "priceAsc" }).map(p => p.id), [2, 1, 3]);
  assert.deepEqual(filterProperties(data, { ...filters, sort: "priceDesc" }).map(p => p.id), [1, 2, 3]);
});
test("default order is newest first without mutating data", () => {
  assert.deepEqual(filterProperties(data, filters).map(p => p.id), [3, 2, 1]);
  assert.deepEqual(data.map(p => p.id), [1, 2, 3]);
});
test("missing fields and zero price are not fabricated", () => {
  assert.equal(formatPrice(null), "Price on request");
  assert.equal(formatPrice(0), "$0");
  assert.equal(propertyTitle(data[2]), "South Street");
  assert.deepEqual(filterProperties(data, { ...filters, maxPrice: "0" }), []);
});
test("favorite ids are validated and de-duplicated", () => {
  assert.deepEqual(parseFavoriteIds('[1,1,2,"3",-1,null]'), [1, 2]);
  assert.deepEqual(parseFavoriteIds("broken"), []);
});
test("favorites can be added and removed without mutating input", () => {
  const ids = [1, 2];
  assert.deepEqual(toggleFavoriteId(ids, 3), [1, 2, 3]);
  assert.deepEqual(toggleFavoriteId(ids, 1), [2]);
  assert.deepEqual(ids, [1, 2]);
});
test("viewing slots cover business hours in half-hour intervals", () => {
  assert.equal(VIEWING_TIMES.length, 20);
  assert.equal(VIEWING_TIMES[0], "09:00");
  assert.equal(VIEWING_TIMES.at(-1), "18:30");
});
test("viewing validation requires a future supported time", () => {
  const now = new Date("2026-09-19T10:00:00");
  assert.equal(validateViewing({ date: "", time: "", comment: "" }, now), "Choose a preferred date and time.");
  assert.equal(validateViewing({ date: "2026-09-19", time: "10:00", comment: "" }, now), "Choose a date and time at least 30 minutes from now.");
  assert.equal(validateViewing({ date: "2026-09-20", time: "10:15", comment: "" }, now), "Choose an available viewing time.");
  assert.equal(validateViewing({ date: "2026-09-20", time: "10:30", comment: "Call first" }, now), "");
});
test("local date values do not depend on UTC conversion", () => {
  assert.equal(localDateValue(new Date(2026, 8, 19, 0, 30)), "2026-09-19");
});
test("property gallery keeps unique safe image urls in display order", () => {
  assert.deepEqual(propertyImages({ imageUrls: [
    " https://images.example/home.jpg ",
    "/images/room.jpg",
    "https://images.example/home.jpg",
    "javascript:alert(1)",
    null,
  ] }), ["https://images.example/home.jpg", "/images/room.jpg"]);
});
test("property gallery accepts object images and handles missing data", () => {
  assert.deepEqual(propertyImages({ images: [{ url: "/one.jpg" }, { source: "/ignored.jpg" }] }), ["/one.jpg"]);
  assert.deepEqual(propertyImages({}), []);
});
test("catalog state is restored from safe URL parameters", () => {
  const state = catalogStateFromParams(new URLSearchParams("q=garden&type=RESIDENTIAL&rooms=3&min=100&max=500&sort=priceAsc&page=2"));
  assert.deepEqual(state, { filters: { search: "garden", type: "RESIDENTIAL", rooms: "3", minPrice: "100", maxPrice: "500", sort: "priceAsc" }, page: 2 });
});
test("catalog URL omits defaults and rejects invalid values", () => {
  assert.equal(catalogParams(DEFAULT_CATALOG_FILTERS, 1), "");
  assert.deepEqual(catalogStateFromParams(new URLSearchParams("type=OTHER&rooms=9&min=-2&sort=random&page=-4")), { filters: DEFAULT_CATALOG_FILTERS, page: 1 });
  assert.equal(catalogParams({ ...DEFAULT_CATALOG_FILTERS, search: " city ", rooms: "2" }, 3), "q=city&rooms=2&page=3");
});
