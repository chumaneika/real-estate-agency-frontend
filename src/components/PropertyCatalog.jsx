"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Building2, Search, SlidersHorizontal, ArrowLeft, ArrowRight } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import usePropertyData from "@/hooks/usePropertyData";
import { filterProperties, propertyTypes } from "@/lib/properties";
import styles from "@/styles/pages/Properties.module.css";
import { catalogParams, catalogStateFromParams, DEFAULT_CATALOG_FILTERS } from "@/lib/catalogFilters";
import { usePreferences } from "@/components/AppProviders";

const PAGE_SIZE = 12;

export default function PropertyCatalog() {
  const { status, data, retry } = usePropertyData("get-all");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const initialState = catalogStateFromParams(searchParams);
  const [filters, setFilters] = useState(initialState.filters);
  const [page, setPage] = useState(initialState.page);
  const { t } = usePreferences();

  useEffect(() => {
    const next = catalogStateFromParams(new URLSearchParams(query));
    setFilters(next.filters);
    setPage(next.page);
  }, [query]);
  const negativePrice = Number(filters.minPrice) < 0 || Number(filters.maxPrice) < 0;
  const invalidRange = negativePrice || (filters.minPrice !== "" && filters.maxPrice !== "" && Number(filters.minPrice) > Number(filters.maxPrice));
  const properties = data ? filterProperties(data, filters) : [];
  const pages = Math.max(1, Math.ceil(properties.length / PAGE_SIZE));
  const currentPage = Math.min(page, pages);

  function updateUrl(nextFilters, nextPage) {
    const nextQuery = catalogParams(nextFilters, nextPage);
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, { scroll: false });
  }
  function changeFilter(name, value) {
    const next = { ...filters, [name]: value };
    setFilters(next);
    setPage(1);
    updateUrl(next, 1);
  }
  function changePage(nextPage) { setPage(nextPage); updateUrl(filters, nextPage); }
  function resetFilters() { setFilters(DEFAULT_CATALOG_FILTERS); setPage(1); updateUrl(DEFAULT_CATALOG_FILTERS, 1); }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{t("catalog.eyebrow")}</p>
          <h1>{t("catalog.title")}</h1>
          <p>{t("catalog.subtitle")}</p>
        </div>
        <div className={styles.catalogLayout}>
          <aside className={styles.filters} aria-labelledby="filter-title">
            <div className={styles.filterHeading}><h2 id="filter-title"><SlidersHorizontal size={17} aria-hidden="true" />{t("catalog.filters")}</h2><button onClick={resetFilters} className={styles.textButton}>{t("catalog.reset")}</button></div>
            <label className={styles.field}>{t("catalog.search")}<span className={styles.searchControl}><Search size={17} aria-hidden="true" /><input type="search" value={filters.search} onChange={event => changeFilter("search", event.target.value)} placeholder={t("catalog.searchPlaceholder")} /></span></label>
            <label className={styles.field}>{t("catalog.type")}<select value={filters.type} onChange={event => changeFilter("type", event.target.value)}><option value="">{t("catalog.allTypes")}</option>{Object.keys(propertyTypes).map(value => <option key={value} value={value}>{t(`property.${value}`)}</option>)}</select></label>
            <div className={styles.priceFields}>
              <label className={styles.field}>{t("catalog.min")}<input type="number" min="0" value={filters.minPrice} onChange={event => changeFilter("minPrice", event.target.value)} placeholder={t("catalog.any")} aria-invalid={invalidRange} aria-describedby={invalidRange ? "price-error" : undefined} /></label>
              <label className={styles.field}>{t("catalog.max")}<input type="number" min="0" value={filters.maxPrice} onChange={event => changeFilter("maxPrice", event.target.value)} placeholder={t("catalog.any")} aria-invalid={invalidRange} aria-describedby={invalidRange ? "price-error" : undefined} /></label>
            </div>
            {invalidRange && <p id="price-error" className={styles.error} role="alert">{negativePrice ? t("catalog.negative") : t("catalog.invalidRange")}</p>}
            <label className={styles.field}>{t("catalog.rooms")}<select value={filters.rooms} onChange={event => changeFilter("rooms", event.target.value)}><option value="">{t("catalog.anyRooms")}</option>{[1, 2, 3, 4, 5].map(value => <option key={value} value={value}>{t("catalog.roomOption", { value })}</option>)}</select></label>
            <p className={styles.filterNote}>{t("catalog.note")}</p>
          </aside>

          <section className={styles.results} aria-label="Property results">
            <div className={styles.toolbar}>
              <p role="status" aria-live="polite">{status === "ready" ? `${properties.length} ${t(properties.length === 1 ? "catalog.one" : "catalog.many")}` : t("catalog.collection")}</p>
              <label className={styles.sort}>{t("catalog.sort")}<select value={filters.sort} onChange={event => changeFilter("sort", event.target.value)}><option value="newest">{t("catalog.newest")}</option><option value="priceAsc">{t("catalog.lowHigh")}</option><option value="priceDesc">{t("catalog.highLow")}</option></select></label>
            </div>
            {status === "loading" ? <div className={styles.cards} role="status" aria-label="Loading properties">{[1, 2, 3].map(value => <div key={value} className={styles.cardSkeleton} aria-hidden="true"><div /><span /><span /></div>)}</div>
              : status === "error" ? <div className={styles.state}><Building2 size={36} aria-hidden="true" /><h2>{t("catalog.unavailable")}</h2><p role="alert">{t("catalog.loadError")}</p><button className={styles.button} onClick={retry}>{t("catalog.tryAgain")}</button></div>
              : invalidRange ? <div className={styles.state}><h2>{t("catalog.rangeTitle")}</h2><p>{t("catalog.rangeText")}</p></div>
              : properties.length === 0 ? <div className={styles.state}><Building2 size={40} strokeWidth={1.2} aria-hidden="true" /><h2>{data?.length ? t("catalog.noMatch") : t("catalog.empty")}</h2><p>{data?.length ? t("catalog.noMatchText") : t("catalog.emptyText")}</p>{data?.length > 0 && <button className={styles.button} onClick={resetFilters}>{t("catalog.resetFilters")}</button>}</div>
              : <><div className={styles.cards}>{properties.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE).map(property => <PropertyCard key={property.id} property={property} />)}</div>{pages > 1 && <nav className={styles.pagination} aria-label="Catalog pagination"><button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} aria-label={t("catalog.previous")}><ArrowLeft size={17} /></button><span>{t("catalog.page", { current: currentPage, total: pages })}</span><button onClick={() => changePage(currentPage + 1)} disabled={currentPage === pages} aria-label={t("catalog.next")}><ArrowRight size={17} /></button></nav>}</>}
          </section>
        </div>
      </div>
    </main>
  );
}
