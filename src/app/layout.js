import "@/styles/global.css"
import AppProviders from "@/components/AppProviders";

export const metadata = {
  title: "PrimeKey | Real Estate",
  description: "A considered way to find your next address.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
