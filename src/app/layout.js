import "./globals.css"
import { Nunito } from "next/font/google"
import Script from "next/script"

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata = {
  title: "Truelyzer - Modern Web Development & Digital Solutions",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} antialiased`}>
        {children}

        {/* ✅ Load JS dependencies safely and globally
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/js/three.min.js" strategy="beforeInteractive" />
        <Script src="/js/TweenLite.min.js" strategy="beforeInteractive" />
        <Script src="/js/CSSPlugin.min.js" strategy="beforeInteractive" />
        <Script src="/js/EasePack.min.js" strategy="beforeInteractive" />
        <Script src="/js/GridToFullscreenEffect.js" strategy="beforeInteractive" />
        <Script src="/js/basicDemo.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  )
}
