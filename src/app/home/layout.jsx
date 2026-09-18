import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

export default function HomeLayout({ children }) {
  return (
    <>
      <TheHeader />
      {children}
      <TheFooter />
    </>
  );
}
