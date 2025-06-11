import type { Metadata } from "next";
import { locationsData } from "@/lib/locationsData";
import LocationsPageClient from "@/components/pages/LocationsPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Find Family Mookata - Locations in Yishun, Bedok, AMK",
    description: "Find your nearest Family Mookata! We have outlets in Yishun, Bedok, and Ang Mo Kio. Get directions to enjoy affordable Thai BBQ steamboat.",
    keywords: ["family mookata locations", "mookata yishun", "mookata bedok", "mookata ang mo kio", "thai bbq near me", "singapore mookata map"],
    alternates: {
      canonical: "/locations",
    },
    openGraph: {
      title: "Family Mookata Locations - Yishun, Bedok, Ang Mo Kio",
      description: "Find all Family Mookata outlets in Singapore. Get directions and visit us for delicious Thai BBQ!",
      url: "/locations",
      images: [
        {
          url: "/img/og-locations.png",
          width: 1200,
          height: 630,
          alt: "Map showing Family Mookata locations in Singapore",
        },
      ],
    },
    twitter: {
      title: "Family Mookata Outlets - Find Your Nearest Thai BBQ!",
      description: "Locations in Yishun, Bedok, and Ang Mo Kio. Come find us!",
      images: ["/img/twitter-locations.png"],
    },
  };
}

export default function LocationsPage() {
  return <LocationsPageClient locationsData={locationsData} />;
}
