import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileBookCTA from "../components/MobileBookCTA";
import Analytics from "../components/Analytics";
import Script from "next/script";
// import CustomCursor from "../components/CustomCursor";


export const metadata = {
  title: "Momentos Studios",
  description: "Recording / Mixing / Mastering",
  metadataBase: new URL("https://momentos.studio"),
  icons: {
    icon: "/favicon-black.ico",
    shortcut: "/favicon-black.ico",
    apple: "/favicon-black.ico",
  },
  openGraph: {
    title: "Momentos Studios",
    description: "Recording / Mixing / Mastering",
    url: "https://momentos.studio",
    siteName: "Momentos Studios",
    images: [
      {
        url: "/images/cardsocial.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentos Studios",
    description: "Recording / Mixing / Mastering",
    images: ["/images/cardsocial.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Momentos Studios",
    description: "Recording / Mixing / Mastering",
    url: "https://momentos.studio",
    telephone: "+1-619-357-5414",
    email: "info@momentos.studio",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1135 Garnet Ave",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92101",
      addressCountry: "US",
    },
    image: "https://momentos.studio/images/cardsocial.png",
    sameAs: ["https://www.instagram.com/momentos__studios/"],
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" />
      </head>
      <body className="bg-black text-white">
        {/* <CustomCursor /> */}
        <Navbar />
        <main>{children}</main>
        <MobileBookCTA />
        <Footer />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        ) : null}
        <Analytics />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}

