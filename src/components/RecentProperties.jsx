"use client";

import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import usePropertyData from "@/hooks/usePropertyData";
import styles from "@/styles/sections/RecentProperties.module.css";

export default function RecentProperties() {
  const { status, data, retry } = usePropertyData("get-all");
  const properties = data ? [...data].sort((a, b) => b.id - a.id).slice(0, 3) : [];
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Recent Properties</h2>
      {status === "loading" ? <p role="status">Loading properties…</p>
        : status === "error" ? <div><p role="alert">Properties are temporarily unavailable.</p><button className={styles.retry} onClick={retry}>Try again</button></div>
        : properties.length ? <div className={styles.grid}>{properties.map(property => <PropertyCard key={property.id} property={property} />)}</div>
        : <p className={styles.empty}>New properties will appear here when they’re added to the collection.</p>}
      <Link href="/properties" className={styles.browse}>Explore all properties →</Link>
    </section>
  );
}
