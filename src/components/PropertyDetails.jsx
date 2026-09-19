"use client";

import Link from "next/link";
import { ArrowLeft, Building2, MapPin, Ruler, DoorOpen } from "lucide-react";
import usePropertyData from "@/hooks/usePropertyData";
import { formatPrice, propertyTitle, propertyTypes } from "@/lib/properties";
import FavoriteButton from "@/components/FavoriteButton";
import ViewingRequestForm from "@/components/ViewingRequestForm";
import PropertyGallery from "@/components/PropertyGallery";
import styles from "@/styles/pages/Properties.module.css";
import { usePreferences } from "@/components/AppProviders";

export default function PropertyDetails({ id }) {
  const validId = /^\d+$/.test(id) && Number(id) > 0;
  const { t } = usePreferences();
  const { status, data: property, retry } = usePropertyData(validId ? id : "0");
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/properties" className={styles.back}><ArrowLeft size={16} aria-hidden="true" />{t("property.back")}</Link>
        {status === "loading" && validId ? <div className={styles.state} role="status">{t("property.loading")}</div>
          : !validId || status === "notFound" ? <div className={styles.state}><Building2 size={40} aria-hidden="true" /><h1>{t("property.notFound")}</h1><p>{t("property.notFoundText")}</p><Link href="/properties" className={styles.button}>{t("property.explore")}</Link></div>
          : status === "error" ? <div className={styles.state}><h1>{t("property.unavailable")}</h1><p role="alert">{t("property.unavailableText")}</p><button onClick={retry} className={styles.button}>{t("catalog.tryAgain")}</button></div>
          : property && <>
            <div className={styles.heading}><p className={styles.eyebrow}>{propertyTypes[property.type] ? t(`property.${property.type}`) : "PRIMEKEY PROPERTY"}</p><h1>{propertyTitle(property)}</h1><p className={styles.address}><MapPin size={17} aria-hidden="true" />{property.address || t("property.addressMissing")}</p></div>
            <div className={styles.detailLayout}>
              <div>
                <PropertyGallery property={property} />
                <section className={styles.detailCard}><h2>{t("property.about")}</h2><p className={styles.description}>{property.description?.trim() || t("property.noDescription")}</p></section>
                <ViewingRequestForm property={property} />
              </div>
              <aside className={`${styles.detailCard} ${styles.summary}`} aria-label={t("property.info")}>
                <p className={styles.eyebrow}>{t("property.price")}</p><p className={styles.detailPrice}>{formatPrice(property.price)}</p>
                <dl className={styles.specifications}>
                  <div><dt><Ruler size={16} aria-hidden="true" />{t("property.area")}</dt><dd>{property.area == null ? t("property.notProvided") : `${property.area} m²`}</dd></div>
                  <div><dt><DoorOpen size={16} aria-hidden="true" />{t("property.rooms")}</dt><dd>{property.rooms ?? t("property.notProvided")}</dd></div>
                  <div><dt><Building2 size={16} aria-hidden="true" />{t("property.type")}</dt><dd>{propertyTypes[property.type] ? t(`property.${property.type}`) : t("property.notProvided")}</dd></div>
                </dl>
                <p className={styles.filterNote}>{t("property.reference", { id: property.id })}</p>
                <FavoriteButton propertyId={property.id} propertyName={propertyTitle(property)} variant="detail" />
                <Link href="/properties" className={styles.outlineButton}>{t("property.continue")}</Link>
              </aside>
            </div>
          </>}
      </div>
    </main>
  );
}
