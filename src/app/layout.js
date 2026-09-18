import "@/styles/global.css"

export const metadata = {
  title: "PrimeKey | Real Estate",
  description: "A considered way to find your next address.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
