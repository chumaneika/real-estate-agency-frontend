"use client";

import { useState } from "react";
import { Building2, Search, SlidersHorizontal, ArrowLeft, ArrowRight } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import usePropertyData from "@/hooks/usePropertyData";
import { filterProperties, propertyTypes } from "@/lib/properties";
import styles from "@/styles/pages/Properties.module.css";

const initialFilters = { search: "", type: "", rooms: "", minPrice: "", maxPrice: "", sort: "newest" };
const PAGE_SIZE = 12;

export default function PropertyCatalog() {
  const { status, data, retry } = usePropertyData("get-all");
  const [filters, setFilters] = useState(initialFilters);
  const [page, setPage] = useState(1);
  const negativePrice = Number(filters.minPrice) < 0 || Number(filters.maxPrice) < 0;
  const invalidRange = negativePrice || (filters.minPrice !== "" && filters.maxPrice !== "" && Number(filters.minPrice) > Number(filters.maxPrice));
  const properties = data ? filterProperties(data, filters) : [];
  const pages = Math.max(1, Math.ceil(properties.length / PAGE_SIZE));
  const currentPage = Math.min(page, pages);

  function changeFilter(name, value) {
    setFilters(current => ({ ...current, [name]: value }));
    setPage(1);
  }
  function resetFilters() { setFilters(initialFilters); setPage(1); }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>PRIMEKEY COLLECTION</p>
          <h1>Find your next address.</h1>
          <p>Thoughtful spaces. New possibilities. Explore the properties in our collection.</p>
        </div>
        <div className={styles.catalogLayout}>
          <aside className={styles.filters} aria-labelledby="filter-title">
            <div className={styles.filterHeading}><h2 id="filter-title"><SlidersHorizontal size={17} aria-hidden="true" />Filters</h2><button onClick={resetFilters} className={styles.textButton}>Reset</button></div>
            <label className={styles.field}>Search<span className={styles.searchControl}><Search size={17} aria-hidden="true" /><input type="search" value={filters.search} onChange={event => changeFilter("search", event.target.value)} placeholder="Title or address" /></span></label>
            <label className={styles.field}>Property type<select value={filters.type} onChange={event => changeFilter("type", event.target.value)}><option value="">All types</option>{Object.entries(propertyTypes).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
            <div className={styles.priceFields}>
              <label className={styles.field}>Min price ($)<input type="number" min="0" value={filters.minPrice} onChange={event => changeFilter("minPrice", event.target.value)} placeholder="Any" aria-invalid={invalidRange} aria-describedby={invalidRange ? "price-error" : undefined} /></label>
              <label className={styles.field}>Max price ($)<input type="number" min="0" value={filters.maxPrice} onChange={event => changeFilter("maxPrice", event.target.value)} placeholder="Any" aria-invalid={invalidRange} aria-describedby={invalidRange ? "price-error" : undefined} /></label>
            </div>
            {invalidRange && <p id="price-error" className={styles.error} role="alert">{negativePrice ? "Prices must not be negative." : "Minimum price must not exceed maximum price."}</p>}
            <label className={styles.field}>Rooms<select value={filters.rooms} onChange={event => changeFilter("rooms", event.target.value)}><option value="">Any number</option>{[1, 2, 3, 4, 5].map(value => <option key={value} value={value}>{value}+ rooms</option>)}</select></label>
            <p className={styles.filterNote}>Listings and prices are supplied by our property database.</p>
          </aside>

          <section className={styles.results} aria-label="Property results">
            <div className={styles.toolbar}>
              <p role="status" aria-live="polite">{status === "ready" ? `${properties.length} ${properties.length === 1 ? "property" : "properties"}` : "Our collection"}</p>
              <label className={styles.sort}>Sort by<select value={filters.sort} onChange={event => changeFilter("sort", event.target.value)}><option value="newest">Recently added</option><option value="priceAsc">Price: low to high</option><option value="priceDesc">Price: high to low</option></select></label>
            </div>
            {status === "loading" ? <div className={styles.cards} role="status" aria-label="Loading properties">{[1, 2, 3].map(value => <div key={value} className={styles.cardSkeleton} aria-hidden="true"><div /><span /><span /></div>)}</div>
              : status === "error" ? <div className={styles.state}><Building2 size={36} aria-hidden="true" /><h2>Collection unavailable</h2><p role="alert">We couldn’t load the properties. Please try again.</p><button className={styles.button} onClick={retry}>Try again</button></div>
              : invalidRange ? <div className={styles.state}><h2>Check your price range</h2><p>Adjust the minimum or maximum price to see matching properties.</p></div>
              : properties.length === 0 ? <div className={styles.state}><Building2 size={40} strokeWidth={1.2} aria-hidden="true" /><h2>{data?.length ? "No matching properties" : "Your next chapter is coming."}</h2><p>{data?.length ? "Try another search or reset your filters." : "There are no properties in the collection yet. New listings will appear here when they’re added."}</p>{data?.length > 0 && <button className={styles.button} onClick={resetFilters}>Reset filters</button>}</div>
              : <><div className={styles.cards}>{properties.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE).map(property => <PropertyCard key={property.id} property={property} />)}</div>{pages > 1 && <nav className={styles.pagination} aria-label="Catalog pagination"><button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous page"><ArrowLeft size={17} /></button><span>Page {currentPage} of {pages}</span><button onClick={() => setPage(currentPage + 1)} disabled={currentPage === pages} aria-label="Next page"><ArrowRight size={17} /></button></nav>}</>}
          </section>
        </div>
      </div>
    </main>
  );
}
