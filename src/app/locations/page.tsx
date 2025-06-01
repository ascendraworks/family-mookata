"use client"; // Removed as generateMetadata needs to be server-side

import React, { useState, useEffect, useRef } from 'react';
import type { Metadata } from 'next'; // Added for generateMetadata
import Image from 'next/image';
import { MapPin as MapPinIcon, Search as SearchIcon, ExternalLink, Phone, Clock } from 'lucide-react'; // Using MapPin for flags. Added Phone, Clock.

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
    mapX: "50%", // Adjusted
    mapY: "27%", // Adjusted
    operatingHours: "1PM - 11PM Daily",
    phone: "+65 1234 5670", // Placeholder phone
    details: "Located in Northview Bizhub, offering a spacious dining experience."
  },
  {
    id: "bedok",
    name: "Bedok Branch",
    address: "539 Bedok North Street 3, #01-593",
    postalCode: "Singapore 460539",
    lat: 1.3313,
    lng: 103.9350,
    mapX: "65%", // Adjusted
    mapY: "60%", // Adjusted
    operatingHours: "1PM - 11PM Daily",
    phone: "+65 1234 5671", // Placeholder phone
    details: "Your friendly neighborhood mookata spot in the heart of Bedok."
  },
  {
    id: "amk",
    name: "Ang Mo Kio Branch",
    address: "Blk 215 Ang Mo Kio Ave 1, #01-877", // Standardized address a bit
    postalCode: "Singapore 560215",
    lat: 1.3668,
    lng: 103.8389,
    mapX: "54%", // Adjusted
    mapY: "45%", // Adjusted
    operatingHours: "1PM - 11PM Daily",
    phone: "+65 1234 5672", // Placeholder phone
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
          url: '/img/og-locations.png', // Create: public/img/og-locations.png (1200x630) - e.g., a map snippet or collage
          width: 1200,
          height: 630,
          alt: 'Map showing Family Mookata locations in Singapore',
        },
      ],
    },
    twitter: {
      title: "Family Mookata Outlets - Find Your Nearest Thai BBQ!",
      description: "Locations in Yishun, Bedok, and Ang Mo Kio. Come find us!",
      images: ['/img/twitter-locations.png'], // Create: public/img/twitter-locations.png
    },
  };
}

export default function LocationsPage() {
  "use client"; // Add "use client" here as the component itself uses client-side hooks
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<LocationDetail | null>(null);
  const [showAllLocationDetails, setShowAllLocationDetails] = useState(false); // New state
  const outletSectionRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const mapContainer = document.getElementById('map-container');
      if (mapContainer && !mapContainer.contains(e.target as Node)) {
        setSelectedLocation(null);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setShowAllLocationDetails(true);
      setSelectedLocation(null);
      setTimeout(() => {
        if (outletSectionRef.current) {
          const offsetTop = outletSectionRef.current.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: offsetTop - 100, behavior: 'smooth' }); // adjust -100 to control offset
        }
      }, 100);
      
      setSelectedLocation(null);
    }
  };
  

  const handleFlagClick = (location: LocationDetail) => {
    console.log("Flag clicked:", location);
    setSelectedLocation(location);
  };
  
  const googleMapsUrl = (destination: LocationDetail, origin?: string) => {
    const destinationAddress = encodeURIComponent(`${destination.address}, ${destination.postalCode}`);
    if (origin && origin.trim() !== "") {
      return `https://www.google.com/maps/dir/${encodeURIComponent(origin)}/${destinationAddress}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${destinationAddress}`;
  };

  return (
    <div className="bg-[#FFF7ED] text-[#333333] min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3">Find Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Get directions to the outlet nearest to you
        </p>

        <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2 p-2 bg-white rounded-lg shadow-md border border-orange-300">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter address or postal code"
            className="flex-grow p-3 border-0 focus:ring-0 text-gray-700 rounded-md"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md flex items-center justify-center"
            aria-label="Search"
          >
            <SearchIcon className="h-6 w-6" />
          </button>
        </form>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div id="map-container"
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] sm:aspect-[3/2] md:aspect-[4/3] bg-[#F9F9F9] rounded-xl shadow-lg overflow-hidden border border-orange-200"
        >
          <Image
            src="/img/map.png" // YOU NEED TO ADD THIS IMAGE to public/img/
            alt="Map of Singapore with Family Mookata Locations"
            fill
            className="object-cover"
          />

{locationsData.map((loc) => (
  <div
    key={loc.id}
    className="absolute transform -translate-x-1/2 -translate-y-1/2"
    style={{ top: loc.mapY, left: loc.mapX }}
  >
    <button
      onClick={() => handleFlagClick(loc)}
      className={`p-1.5 sm:p-2 rounded-full z-10 relative
                  ${selectedLocation?.id === loc.id ? 'bg-red-600 scale-110 animate-pulse' : 'bg-orange-500 hover:bg-orange-600'}
                  text-white shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
      title={`Show details for ${loc.name}`}
      aria-label={`Show details for ${loc.name}`}
    >
      <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
    </button>
  </div>
))}

{selectedLocation && (
  <div
    onClick={(e) => e.stopPropagation()}
    style={{ top: selectedLocation.mapY, left: selectedLocation.mapX }}
    className={`
      absolute z-30 bg-white p-4 rounded-lg shadow-xl border border-gray-200
      text-left flex flex-col gap-2 w-72 sm:w-72
      left-1/2 top-[130%] -translate-x-1/2 -translate-y-[40%]
      sm:top-1/2 sm:transform sm:translate-x-[8%] sm:-translate-y-[100%]
      ${parseInt(selectedLocation.mapX) > 50
        ? 'sm:right-full sm:mr-3'
        : 'sm:left-full sm:ml-3'}
    `}
  >
    <div className="flex justify-end">
      <button
        onClick={() => setSelectedLocation(null)}
        className="text-gray-400 hover:text-gray-600 text-sm font-bold"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
    <h3 className="text-sm sm:text-md font-semibold text-gray-800">
      {selectedLocation.name}
    </h3>
    <p className="text-xs sm:text-sm text-gray-600 whitespace-normal">
      {selectedLocation.address}, {selectedLocation.postalCode}
    </p>
    <a
      href={googleMapsUrl(selectedLocation, searchTerm)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center text-xs sm:text-sm px-3 py-2
                 bg-orange-500 hover:bg-orange-600 text-white
                 font-semibold rounded-md shadow-sm mt-1"
    >
      Get Directions <ExternalLink className="ml-1.5 h-4 w-4" />
    </a>
  </div>
)}

        </div>

        {/* Section to display all location details if a search has been made */}
        {showAllLocationDetails && searchTerm.trim() !== "" && (
          <div ref={outletSectionRef} className="mt-10 grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-700 col-span-full">Our Outlets (Directions from "{searchTerm}"):</h2>
            {locationsData.map(location => (
              <div key={`details-${location.id}`} className="p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-orange-200">
                <h3 className="text-xl font-bold text-orange-600 mb-3">{location.name}</h3>
                <div className="space-y-1.5 text-sm text-gray-700">
                  <p className="flex items-start"><MapPinIcon className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5 text-gray-500" /> <span>{location.address}, {location.postalCode}</span></p>
                  {location.operatingHours && (
                    <p className="flex items-center"><Clock className="flex-shrink-0 h-4 w-4 mr-2 text-gray-500" /> {location.operatingHours}</p>
                  )}
                  {location.phone && (
                    <p className="flex items-center"><Phone className="flex-shrink-0 h-4 w-4 mr-2 text-gray-500" /> {location.phone}</p>
                  )}
                </div>
                <a
                  href={googleMapsUrl(location, searchTerm)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:shadow-md transition-colors w-full text-sm"
                >
                  Get Directions to this Outlet <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Fallback or individual selection display (optional, can be removed if the above is preferred) */}
        {!showAllLocationDetails && selectedLocation && (
           <div className="mt-10 max-w-xl mx-auto p-6 bg-white rounded-xl shadow-2xl border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">{selectedLocation.name}</h2>
            <div className="space-y-2 text-gray-700">
                <p className="flex items-start"><MapPinIcon className="flex-shrink-0 h-5 w-5 mr-2.5 mt-0.5 text-gray-500" /> <span>{selectedLocation.address}, {selectedLocation.postalCode}</span></p>
                {selectedLocation.operatingHours && (
                  <p className="flex items-center"><Clock className="flex-shrink-0 h-5 w-5 mr-2.5 text-gray-500" /> {selectedLocation.operatingHours}</p>
                )}
                {selectedLocation.phone && (
                  <p className="flex items-center"><Phone className="flex-shrink-0 h-5 w-5 mr-2.5 text-gray-500" /> {selectedLocation.phone}</p>
                )}
                {selectedLocation.details && (
                  <p className="text-gray-600 mt-3 text-sm">{selectedLocation.details}</p>
                )}
            </div>
            <a
              href={googleMapsUrl(selectedLocation, searchTerm)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-colors w-full text-base"
            >
              Get Directions on Google Maps <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        )}
      </section>
    </div>
  );
}