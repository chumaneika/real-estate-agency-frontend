import PropertyCatalog from "@/components/PropertyCatalog";
import { Suspense } from "react";

export const metadata = { title: "Properties | PrimeKey" };

export default function PropertiesPage() {
  return <Suspense fallback={null}><PropertyCatalog /></Suspense>;
}
