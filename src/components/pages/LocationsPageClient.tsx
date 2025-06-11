"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { MapPin as MapPinIcon, Search as SearchIcon, ExternalLink, Phone, Clock } from 'lucide-react';

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

interface LocationsPageClientProps {
  locationsData: LocationDetail[];
}


async function geocodeAddress(address: string): Promise<{ lat: number; lng: number } | null> {
  const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
  const data = await res.json();
  if (data && data.length > 0) {
    return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  }
  return null;
}

function getDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (x: number) => x * Math.PI / 180;
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}


export default function LocationsPageClient({ locationsData }: LocationsPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<LocationDetail | null>(null);
  const [showAllLocationDetails, setShowAllLocationDetails] = useState(false);
  const outletSectionRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setShowAllLocationDetails(false);
      setSelectedLocation(null);
      return;
    }
  
    const coords = await geocodeAddress(searchTerm);
    if (!coords) {
      alert("Could not locate the address. Please try again.");
      return;
    }
  
    // Find nearest location
    let minDist = Infinity;
    let nearest: LocationDetail | null = null;
  
    for (const loc of locationsData) {
      const dist = getDistanceKm(coords.lat, coords.lng, loc.lat, loc.lng);
      if (dist < minDist) {
        minDist = dist;
        nearest = loc;
      }
    }
  
    if (nearest) {
      setShowAllLocationDetails(false);
      setSelectedLocation(nearest);
      setTimeout(() => {
        if (outletSectionRef.current) {
          const offsetTop = outletSectionRef.current.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: offsetTop - 100, behavior: 'smooth' });
        }
      }, 100);
    }
  };
  

  const handleFlagClick = (location: LocationDetail) => {
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
        <div
          id="map-container"
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] sm:aspect-[3/2] md:aspect-[4/3] bg-[#F9F9F9] rounded-xl shadow-lg overflow-hidden border border-orange-200"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target === e.currentTarget || (target.tagName !== 'BUTTON' && !target.closest('button'))) {
              setSelectedLocation(null);
            }
          }}
        >
          <Image
            src="/img/map.png" 
            alt="Map of Singapore showing Family Mookata locations"
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
                onClick={(e) => { e.stopPropagation(); handleFlagClick(loc);}}
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
              // The style positioning for the tooltip is complex and might need further refinement
              // based on the final map image and desired behavior across screen sizes.
              // The className approach for left/right based on mapX is generally more robust.
              className="absolute z-30 bg-white p-3 sm:p-4 rounded-lg shadow-xl border border-gray-200
              text-left flex flex-col gap-1.5 sm:gap-2 w-64 xs:w-72
              -translate-x-[-25%] -translate-y-[-15%] sm:transform sm:-translate-x-[-260%] sm:-translate-y-[-105%]"
              
               style={{ 
                // Fallback/override style if needed, but classes should ideally handle it.
                // top: `calc(${selectedLocation.mapY})`, // Example: Centered on pin
                // left: `calc(${selectedLocation.mapX})`, // Example: Centered on pin
              }}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-gray-400 hover:text-gray-600 text-sm font-bold p-1 -mr-2 -mt-2"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                {selectedLocation.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-600 whitespace-normal">
                {selectedLocation.address}, {selectedLocation.postalCode}
              </p>
              <a
                href={googleMapsUrl(selectedLocation, searchTerm)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5
                           bg-orange-500 hover:bg-orange-600 text-white
                           font-semibold rounded-md shadow-sm mt-1"
              >
                Get Directions <ExternalLink className="ml-1 sm:ml-1.5 h-3 w-3" />
              </a>
            </div>
          )}
        </div>

        {showAllLocationDetails && searchTerm.trim() !== "" && (
          <div ref={outletSectionRef} className="mt-10 grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-700 col-span-full">Our Outlets (Directions from &quot;{searchTerm}&quot;):</h2>
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