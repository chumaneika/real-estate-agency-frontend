"use client";

import Link from "next/link";
import { ArrowLeft, Building2, MapPin, Ruler, DoorOpen } from "lucide-react";
import usePropertyData from "@/hooks/usePropertyData";
import { formatPrice, propertyTitle, propertyTypes } from "@/lib/properties";
import FavoriteButton from "@/components/FavoriteButton";
import ViewingRequestForm from "@/components/ViewingRequestForm";
import styles from "@/styles/pages/Properties.module.css";

export default function PropertyDetails({ id }) {
  const validId = /^\d+$/.test(id) && Number(id) > 0;
  const { status, data: property, retry } = usePropertyData(validId ? id : "0");
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/properties" className={styles.back}><ArrowLeft size={16} aria-hidden="true" />Back to properties</Link>
        {status === "loading" && validId ? <div className={styles.state} role="status">Loading property…</div>
          : !validId || status === "notFound" ? <div className={styles.state}><Building2 size={40} aria-hidden="true" /><h1>Property not found</h1><p>This listing may have been removed or the link may be incorrect.</p><Link href="/properties" className={styles.button}>Explore properties</Link></div>
          : status === "error" ? <div className={styles.state}><h1>Property unavailable</h1><p role="alert">We couldn’t load this property. Please try again.</p><button onClick={retry} className={styles.button}>Try again</button></div>
          : property && <>
            <div className={styles.heading}><p className={styles.eyebrow}>{propertyTypes[property.type] || "PRIMEKEY PROPERTY"}</p><h1>{propertyTitle(property)}</h1><p className={styles.address}><MapPin size={17} aria-hidden="true" />{property.address || "Address not provided"}</p></div>
            <div className={styles.detailLayout}>
              <div>
                <div className={styles.detailVisual}><Building2 size={90} strokeWidth={.9} aria-hidden="true" /><p>Photography coming soon</p><span>Photos haven’t been added for this property yet.</span></div>
                <section className={styles.detailCard}><h2>About this property</h2><p className={styles.description}>{property.description?.trim() || "A description hasn’t been added for this property yet."}</p></section>
                <ViewingRequestForm property={property} />
              </div>
              <aside className={`${styles.detailCard} ${styles.summary}`} aria-label="Property information">
                <p className={styles.eyebrow}>ASKING PRICE</p><p className={styles.detailPrice}>{formatPrice(property.price)}</p>
                <dl className={styles.specifications}>
                  <div><dt><Ruler size={16} aria-hidden="true" />Area</dt><dd>{property.area == null ? "Not provided" : `${property.area} m²`}</dd></div>
                  <div><dt><DoorOpen size={16} aria-hidden="true" />Rooms</dt><dd>{property.rooms ?? "Not provided"}</dd></div>
                  <div><dt><Building2 size={16} aria-hidden="true" />Type</dt><dd>{propertyTypes[property.type] || "Not provided"}</dd></div>
                </dl>
                <p className={styles.filterNote}>Property reference: #{property.id}</p>
                <FavoriteButton propertyId={property.id} propertyName={propertyTitle(property)} variant="detail" />
                <Link href="/properties" className={styles.outlineButton}>Continue exploring</Link>
              </aside>
            </div>
          </>}
      </div>
    </main>
  );
}
