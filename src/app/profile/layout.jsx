import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

export default function ProfileLayout({ children }) {
  return <><TheHeader />{children}<TheFooter /></>;
}
