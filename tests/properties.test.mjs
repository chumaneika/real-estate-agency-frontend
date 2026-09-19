import test from "node:test";
import assert from "node:assert/strict";
import { filterProperties, formatPrice, propertyTitle } from "../src/lib/properties.js";
import { parseFavoriteIds, toggleFavoriteId } from "../src/lib/favorites.js";
import { localDateValue, validateViewing, VIEWING_TIMES } from "../src/lib/viewings.js";

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
