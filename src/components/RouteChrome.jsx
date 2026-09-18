"use client";

import { usePathname } from "next/navigation";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

const RouteChrome = ({ children }) => {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  if (isAuthRoute) {
    return children;
  }

  return (
    <>
      <TheHeader />
      {children}
      <TheFooter />
    </>
  );
};

export default RouteChrome;
