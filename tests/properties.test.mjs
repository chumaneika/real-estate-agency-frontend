import test from "node:test";
import assert from "node:assert/strict";
import { filterProperties, formatPrice, propertyTitle } from "../src/lib/properties.js";

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
