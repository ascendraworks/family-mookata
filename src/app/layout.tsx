import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NewNavbar from "@/components/layout/NewNavbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import NewFooter from "@/components/layout/NewFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.familymookata.sg"),
  title: {
    default: "Family Mookata - Delicious & Affordable Thai BBQ Steamboat in Singapore",
    template: "%s | Family Mookata Singapore",
  },
  description: "Discover Family Mookata, Singapore's top choice for affordable and delicious Thai BBQ Mookata. Perfect for family gatherings and group dining. Multiple locations.",
  keywords: [
    "mookata", "thai bbq", "steamboat", "singapore food", 
    "family dining", "affordable mookata", "group dining singapore", 
    "thai food singapore"
  ],
  openGraph: {
    title: "Family Mookata - Delicious & Affordable Thai BBQ Steamboat",
    description: "The best place for authentic Mookata in Singapore. Fresh ingredients, great value!",
    url: "https://www.familymookata.sg",
    siteName: "Family Mookata",
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Family Mookata - Top Thai BBQ Steamboat in Singapore",
    description: "Affordable Mookata for families and friends. Multiple locations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Family Mookata",
              "image": "https://www.familymookata.sg/img/logo.png",
              "@id": "https://www.familymookata.sg",
              "url": "https://www.familymookata.sg",
              "telephone": "+65-8927-2782",
              "priceRange": "$$",
              "servesCuisine": "Thai",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6 Yishun Industrial Street 1 Northview Bizhub, 768090",
                "addressLocality": "Singapore",
                "postalCode": "768090",
                "addressCountry": "SG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "1.4294",
                "longitude": "103.8351"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "13:00",
                  "closes": "23:00"
                }
              ]
            })
          }}
        />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SQ04HXB3PE"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SQ04HXB3PE', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased", // Base background color from wireframe
          inter.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
          <NewNavbar />
            <main className="flex-grow">{children}</main>
          <NewFooter />
        </div>
      </body>
    </html>
  );
}
