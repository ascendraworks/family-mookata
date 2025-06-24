"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Flag,
  Search,
  MapPin as MapPinIcon,
  Clock,
  Phone,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { locationsData } from "@/lib/locationsData";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

async function geocodeAddress(
  address: string
): Promise<{ lat: number; lng: number } | null> {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  );
  const data = await res.json();
  if (data && data.length > 0) {
    return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  }
  return null;
}

function getDistanceKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRad = (x: number) => (x * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] =
    useState<LocationDetail | null>(null);
  const [showAllLocationDetails, setShowAllLocationDetails] = useState(true);
  const outletSectionRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      setSelectedLocation(null);
      setShowAllLocationDetails(false);
      return;
    }

    const coords = await geocodeAddress(searchTerm);
    if (!coords) {
      alert("Location not found.");
      return;
    }

    let closest = null;
    let minDistance = Infinity;

    for (const loc of locationsData) {
      const dist = getDistanceKm(coords.lat, coords.lng, loc.lat, loc.lng);
      if (dist < minDistance) {
        minDistance = dist;
        closest = loc;
      }
    }

    if (closest) {
      setSelectedLocation(closest);
      setShowAllLocationDetails(false);

      setTimeout(() => {
        outletSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const googleMapsUrl = (destination: LocationDetail, origin?: string) => {
    const destinationAddress = encodeURIComponent(
      `${destination.address}, ${destination.postalCode}`
    );
    if (origin && origin.trim() !== "") {
      return `https://www.google.com/maps/dir/${encodeURIComponent(
        origin
      )}/${destinationAddress}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${destinationAddress}`;
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] pt-4">
        <div className="flex flex-col items-center pb-8 gap-4 max-sm:px-8">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold italic">Find Us</h1>
            <p className="text-xl italic text-center">
              Get directions to the outlet nearest to you
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="bg-[#FFB24F] w-1/2 flex items-center rounded-lg mt-3 p-3 pr-6 gap-4 max-sm:w-full"
          >
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white flex-grow"
              placeholder="Enter address or postal code"
            />
            <Button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedLocation(null);
                setShowAllLocationDetails(true);
                setTimeout(() => {
                  outletSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 100);
              }}
              className="bg-white text-[#FFB24F] hover:bg-gray-100 px-4 py-2 font-semibold max-sm:hidden"
            >
              Show All
            </Button>
            <Button
              type="submit"
              className="bg-white text-[#FFB24F] hover:bg-gray-100 p-2 rounded-md"
            >
              <Search className="h-6 w-6" />
            </Button>
          </form>
          <Button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedLocation(null);
              setShowAllLocationDetails(true);
              setTimeout(() => {
                outletSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 100);
            }}
            className="bg-[#FFB24F] text-white hover:bg-gray-100 px-4 py-2 font-semibold sm:hidden"
          >
            Show All
          </Button>
        </div>

        <div className="w-full flex justify-center relative">
          <Image
            src="/img/new-map.png"
            alt="Map"
            width={1200}
            height={600}
            className="w-4/5"
          />
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: loc.mapY, left: loc.mapX }}
            >
              <Popover>
                <PopoverTrigger className="bg-[#FFB24F] hover:bg-orange-400 hover:cursor-pointer ease-in-out duration-400 rounded-full cursor-pointer p-2">
                  <MapPinIcon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                    {loc.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 whitespace-normal">
                    {loc.address}, {loc.postalCode}
                  </p>
                  <a
                    href={googleMapsUrl(loc, searchTerm)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5
                              bg-orange-400 hover:bg-orange-600 text-white
                              font-semibold rounded-md shadow-sm mt-1"
                  >
                    Get Directions{" "}
                    <ExternalLink className="ml-1 sm:ml-1.5 h-3 w-3" />
                  </a>
                </PopoverContent>
              </Popover>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center pt-8">
          <div className="flex flex-col items-center gap-2 px-8">
            <h1 className="text-3xl font-bold italic">
              {selectedLocation
                ? `Directions to ${selectedLocation.postalCode}`
                : "All Locations"}
            </h1>
            <p className="text-xl italic text-center">
              Dine with us wherever you are — here&apos;s where to find Family
              Mookata.
            </p>
          </div>

          <div
            ref={outletSectionRef}
            className={`w-full p-8 gap-4 max-md:flex-col ${
              (showAllLocationDetails ? locationsData.length : 1) === 1
                ? "flex justify-center"
                : "flex"
            }`}
          >
            {(showAllLocationDetails
              ? locationsData
              : selectedLocation
              ? [selectedLocation]
              : []
            ).map((location) => (
              <Card key={location.id} className="w-1/3 max-md:w-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-full flex flex-col gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <Flag className="min-h-8 min-w-8" />
                    <p>
                      {location.address}, {location.postalCode}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="min-h-8 min-w-8" />
                    <p>{location.operatingHours || "1PM - 11PM"}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-8 w-8" />
                    <p>{location.phone || "+65 8927 2782"}</p>
                  </div>
                  <a
                    href={googleMapsUrl(location, searchTerm)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-[#FFB24F] hover:cursor-pointer hover:bg-orange-400 ease-in-out duration-300 font-bold text-white px-4 py-3 rounded-md text-center"
                  >
                    Directions
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
