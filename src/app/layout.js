import "./globals.css";
import { Nunito } from "next/font/google";
import { Navbar, Footer } from "@/components";
import { ContactModalProvider } from "../components/forms/ContactModal";
import Script from "next/script";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title:
    "Trulyzer | Web Design, Development & Digital Solutions Agency in India",
  description:
    "Trulyzer is a full-service web design and development agency helping businesses build modern websites, eCommerce stores, and custom apps. From UX design to launch and SEO — we craft digital experiences that drive results.",
  keywords: [
    "web development agency",
    "website design company",
    "eCommerce development",
    "UI UX design services",
    "mobile app development",
    "Next.js developer",
    "React web agency",
    "digital solutions company",
    "custom website development India",
    "Trulyzer",
  ],
  metadataBase: new URL("https://trulyzer.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Trulyzer – Build High-Performance Websites & Digital Experiences",
    description:
      "We help brands grow with modern websites, eCommerce, and custom app development. Let’s build something amazing together.",
    url: "https://trulyzer.com",
    siteName: "Trulyzer",
    images: [
      {
        url: "https://trulyzer.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trulyzer - Web Development Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trulyzer | Modern Web Development & Digital Agency",
    description:
      "Empowering businesses with next-gen web, app, and eCommerce solutions. Crafted with performance, design, and strategy in mind.",
    creator: "@trulyzer",
    images: ["https://trulyzer.com/og-image.jpg"],
  },
  other: {
    sitemap: "https://trulyzer.com/sitemap.xml",
    robots: "index, follow",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* SEO Essentials */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta
          name="google-site-verification"
          content="cnvLS9KBqK6ffXI4_thFmd_J1d7caqhag5qgW4iKqH8"
        />
        <meta name="author" content="Trulyzer" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WHRC3RWV');
          `}
        </Script>

        {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-6BWLDV2G4K"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6BWLDV2G4K');
</script> */}
      </head>

      <body className={`${nunito.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHRC3RWV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ContactModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
