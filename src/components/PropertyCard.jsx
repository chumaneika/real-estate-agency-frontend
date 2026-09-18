import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, Ruler, DoorOpen } from "lucide-react";
import { formatPrice, propertyTitle, propertyTypes } from "@/lib/properties";
import styles from "@/styles/pages/Properties.module.css";

export default function PropertyCard({ property }) {
  return (
    <Link href={`/properties/${property.id}`} className={styles.propertyCard}>
      <div className={styles.visual} aria-hidden="true">
        <span className={styles.typeBadge}>{propertyTypes[property.type] || "Property"}</span>
        <Building2 size={54} strokeWidth={1} />
        <span className={styles.photoNote}>Photography coming soon</span>
        <span className={styles.cardArrow}><ArrowUpRight size={18} /></span>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.price}>{formatPrice(property.price)}</p>
        <h3>{propertyTitle(property)}</h3>
        <p className={styles.address}><MapPin size={14} aria-hidden="true" />{property.address || "Address not provided"}</p>
        <div className={styles.cardMeta}>
          <span><Ruler size={15} aria-hidden="true" />{property.area == null ? "Area not provided" : `${property.area} m²`}</span>
          <span><DoorOpen size={15} aria-hidden="true" />{property.rooms == null ? "Rooms not provided" : `${property.rooms} ${property.rooms === 1 ? "room" : "rooms"}`}</span>
        </div>
      </div>
    </Link>
  );
}
