import "./globals.css";
import { Nunito } from "next/font/google";
import Script from "next/script";
import { Navbar, Footer } from "@/components";
import { ContactModalProvider } from "../components/forms/ContactModal";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Trulyzer - Modern Web Development & Digital Solutions",
  metadataBase: new URL("https://trulyzer.com"), // replace with your domain
  alternates: {
    canonical: "/",
  },
  other: {
    "sitemap": "https://trulyzer.com/sitemap.xml", 
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 👇 Add this sitemap reference for SEO crawlers */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>

      <body className={`${nunito.variable} antialiased`}>
        <ContactModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
