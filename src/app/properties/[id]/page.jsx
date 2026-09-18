import PropertyDetails from "@/components/PropertyDetails";

export const metadata = { title: "Property details | PrimeKey" };

export default async function PropertyPage({ params }) {
  const { id } = await params;
  return <PropertyDetails key={id} id={id} />;
}
