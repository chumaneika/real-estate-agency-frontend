import Breadcrumbs from "@/components/Breadcrumbs";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

export default function SiteLayout({ children }) {
  return <><TheHeader /><Breadcrumbs />{children}<TheFooter /></>;
}
