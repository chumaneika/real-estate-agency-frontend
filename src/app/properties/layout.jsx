import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default function PropertiesLayout({ children }) {
  return <><TheHeader />{children}<TheFooter /></>;
}
