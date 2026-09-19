"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, Ruler, DoorOpen } from "lucide-react";
import { formatPrice, propertyTitle, propertyTypes } from "@/lib/properties";
import FavoriteButton from "@/components/FavoriteButton";
import styles from "@/styles/pages/Properties.module.css";
import { usePreferences } from "@/components/AppProviders";

export default function PropertyCard({ property }) {
  const title = propertyTitle(property);
  const { t } = usePreferences();
  return (
    <article className={styles.propertyCard}>
      <FavoriteButton propertyId={property.id} propertyName={title} />
      <Link href={`/properties/${property.id}`} className={styles.cardLink}>
        <div className={styles.visual} aria-hidden="true">
          <span className={styles.typeBadge}>{propertyTypes[property.type] ? t(`property.${property.type}`) : t("property.generic")}</span>
          <Building2 size={54} strokeWidth={1} />
          <span className={styles.photoNote}>{t("property.photoSoon")}</span>
          <span className={styles.cardArrow}><ArrowUpRight size={18} /></span>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.price}>{formatPrice(property.price)}</p>
          <h3>{title}</h3>
          <p className={styles.address}><MapPin size={14} aria-hidden="true" />{property.address || t("property.addressMissing")}</p>
          <div className={styles.cardMeta}>
            <span><Ruler size={15} aria-hidden="true" />{property.area == null ? t("property.areaMissing") : `${property.area} m²`}</span>
            <span><DoorOpen size={15} aria-hidden="true" />{property.rooms == null ? t("property.roomsMissing") : `${property.rooms} ${t(property.rooms === 1 ? "property.room" : "property.roomsLabel")}`}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
