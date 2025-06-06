import type { Metadata } from 'next';
import LocationsPageClient from '@/components/pages/LocationsPageClient'; // Import the new client component

// Interface and data remain here as they are static and can be used by generateMetadata
// or passed to the client component.
interface LocationDetail {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  lat: number;
  lng: number;
  mapX: string;
  mapY: string;
  operatingHours?: string;
  phone?: string;
  details?: string;
}

const locationsData: LocationDetail[] = [
  {
    id: "yishun",
    name: "Yishun Branch",
    address: "6 Yishun Industrial Street 1 Northview Bizhub",
    postalCode: "Singapore 768090",
    lat: 1.4405,
    lng: 103.8430,
    mapX: "50%",
    mapY: "27%",
    operatingHours: "1PM - 11PM Daily",
    phone: "+65 8927 2782",
    details: "Located in Northview Bizhub, offering a spacious dining experience."
  },
  {
    id: "bedok",
    name: "Bedok Branch",
    address: "539 Bedok North Street 3, #01-593",
    postalCode: "Singapore 460539",
    lat: 1.3313,
    lng: 103.9350,
    mapX: "65%",
    mapY: "60%",
    operatingHours: "1PM - 11PM Daily",
    phone: "+65 8188 4738",
    details: "Your friendly neighborhood mookata spot in the heart of Bedok."
  },
  {
    id: "amk",
    name: "Ang Mo Kio Branch",
    address: "Blk 215 Ang Mo Kio Ave 1, #01-877",
    postalCode: "Singapore 560215",
    lat: 1.3668,
    lng: 103.8389,
    mapX: "54%",
    mapY: "45%",
    operatingHours: "1PM - 11PM Daily",
    phone: "+65 8927 2782",
    details: "Conveniently located near Ang Mo Kio Hub."
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Find Family Mookata - Locations in Yishun, Bedok, AMK",
    description: "Find your nearest Family Mookata! We have outlets in Yishun, Bedok, and Ang Mo Kio. Get directions to enjoy affordable Thai BBQ steamboat.",
    keywords: ["family mookata locations", "mookata yishun", "mookata bedok", "mookata ang mo kio", "thai bbq near me", "singapore mookata map"],
    alternates: {
      canonical: '/locations',
    },
    openGraph: {
      title: "Family Mookata Locations - Yishun, Bedok, Ang Mo Kio",
      description: "Find all Family Mookata outlets in Singapore. Get directions and visit us for delicious Thai BBQ!",
      url: '/locations',
      images: [
        {
          url: '/img/og-locations.png', // Ensure this image exists
          width: 1200,
          height: 630,
          alt: 'Map showing Family Mookata locations in Singapore',
        },
      ],
    },
    twitter: {
      title: "Family Mookata Outlets - Find Your Nearest Thai BBQ!",
      description: "Locations in Yishun, Bedok, and Ang Mo Kio. Come find us!",
      images: ['/img/twitter-locations.png'], // Ensure this image exists
    },
  };
}

export default function LocationsPage() {
  // All client-side logic, hooks, and JSX have been moved to LocationsPageClient.
  // This component now only passes the static data to the client component.
  return <LocationsPageClient locationsData={locationsData} />;
}