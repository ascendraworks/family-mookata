import React from 'react';
import type { Metadata } from 'next'; // Added for generateMetadata
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, BookOpenText, Smile, Lightbulb, Heart, Briefcase, PiggyBank } from 'lucide-react'; // Example icons

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Family Mookata - Our Story & Values | Singapore",
    description: "Learn about Family Mookata, our commitment to providing affordable, delicious Thai BBQ steamboat, and our passion for family dining experiences in Singapore.",
    keywords: ["about family mookata", "mookata story", "singapore restaurant", "thai bbq values", "affordable thai food", "family friendly restaurant singapore"],
    alternates: {
      canonical: '/about',
    },
    openGraph: {
      title: "Our Story - Family Mookata Singapore",
      description: "Discover the passion behind Family Mookata and our dedication to serving authentic Thai BBQ.",
      url: '/about',
      images: [
        {
          url: '/img/og-about.png', // Create: public/img/og-about.png (1200x630)
          width: 1200,
          height: 630,
          alt: 'The Family Mookata team or restaurant ambiance',
        },
      ],
    },
    twitter: {
      title: "Learn About Family Mookata - Our Commitment to You",
      description: "More than just food, it's about family and authentic Thai Mookata experiences.",
      images: ['/img/twitter-about.png'], // Create: public/img/twitter-about.png
    },
  };
}

export default function AboutPage() {
  return (
    <div className="bg-[#FFF7ED] text-[#333333] py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section for About Page */}
        <section className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF8C00] mb-4">
            Discover Family Mookata
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Your go-to destination for authentic Thai Mookata, where flavor meets family and affordability.
          </p>
        </section>

        {/* General About Section */}
        <section id="general-about" className="mb-12 md:mb-20">
          <Card className="bg-white shadow-xl overflow-hidden border-2 border-orange-200">
            <div className="md:flex">
              <div className="md:w-1/2 relative min-h-[300px] md:h-[450px] bg-orange-50 flex items-center justify-center overflow-hidden rounded-l-lg md:rounded-l-none md:rounded-r-lg">
                {/* Ensure you have an image at /img/group.png or update the path */}
                <Image
                  src="/img/about.png"
                  alt="Family enjoying Mookata"
                  layout="fill"
                  objectFit="contain" // Changed from cover to contain
                  className="p-4" // Added padding to let the background show if image is smaller
                />
                {/* Optional: overlay if needed, but 'contain' might make it less necessary
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                */}
              </div>
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center mb-3">
                    <UtensilsCrossed className="h-10 w-10 text-[#FFA500] mr-3" />
                    <CardTitle className="text-3xl font-bold text-[#FF8C00]">More Than Just a Meal</CardTitle>
                  </div>
                  <CardDescription className="text-gray-500 text-md">
                    Experience the heart of Thai culinary tradition.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 text-gray-700 space-y-4 text-md md:text-lg">
                  <p>
                  At Family Mookata, we bring Thai BBQ and steamboat culture to Singapore in the most delicious, affordable way possible. We take pride in marinating our meats and preparing our signature chili in-house, ensuring fresh, bold flavors with no MSG or preservatives. Combined with fresh seafood and rich, handmade broths, it’s perfect for both family dinners and late-night cravings.
                  </p>
                  <p>
                  We keep it affordable so you can keep coming back. That’s why many regulars say we’re the best-value mookata in Singapore—without sacrificing taste or quality. Family Mookata is more than just a meal — it’s a place where everyone can come together without worrying about the bill. We believe in resilience, love, and the simple joy of sharing food.
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>

        {/* History Section */}
        <section id="history" className="mb-12 md:mb-20">
          <div className="text-center mb-10">
            <BookOpenText className="h-12 w-12 text-[#FFA500] mx-auto mb-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FF8C00]">Our Journey</h2>
            <p className="text-md text-gray-500 mt-2">The story of Family Mookata, built on resilience and love for food.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: The Challenge */}
            <Card className="bg-white shadow-lg border border-orange-100 flex flex-col">
              <CardHeader className="text-center">
                <Briefcase className="h-10 w-10 text-[#FF8C00] mx-auto mb-2" />
                <CardTitle className="text-xl text-[#FF8C00] font-semibold">A Challenging Start</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-3 text-sm flex-grow">
                <p>
                  In 2020, COVID-19 brought widespread job losses, affecting our founder. With a large family to support, the high cost of dining out became a pressing concern.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: The Spark */}
            <Card className="bg-white shadow-lg border border-orange-100 flex flex-col mt-0 md:mt-4 lg:mt-0">
              <CardHeader className="text-center">
                <Lightbulb className="h-10 w-10 text-[#FF8C00] mx-auto mb-2" />
                <CardTitle className="text-xl text-[#FF8C00] font-semibold">The Idea Ignites</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-3 text-sm flex-grow">
                <p>
                  This challenge, coupled with a deep love for family meals and gatherings, sparked the vision for Family Mookata – a place for affordable, joyful dining.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: The Mission */}
            <Card className="bg-white shadow-lg border border-orange-100 flex flex-col mt-0 md:mt-0 lg:mt-0">
              <CardHeader className="text-center">
                <PiggyBank className="h-10 w-10 text-[#FF8C00] mx-auto mb-2" />
                <CardTitle className="text-xl text-[#FF8C00] font-semibold">Our Unique Offer</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-3 text-sm flex-grow">
                <p>
                  Driven by passion and accessibility, we launched <em>Singapore’s FIRST CHEAPEST Mookata buffet</em>, designed for everyone to enjoy without financial worry.
                </p>
              </CardContent>
            </Card>

            {/* Card 4: The Essence */}
            <Card className="bg-white shadow-lg border border-orange-100 flex flex-col mt-0 md:mt-4 lg:mt-0">
              <CardHeader className="text-center">
                <Heart className="h-10 w-10 text-[#FF8C00] mx-auto mb-2" />
                <CardTitle className="text-xl text-[#FF8C00] font-semibold">More Than a Meal</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-3 text-sm flex-grow">
                <p>
                  Family Mookata is built on resilience, love, and the joy of shared food. It’s a welcoming space for all to gather, connect, and create memories.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action or Values Section (Optional but good for engagement) */}
        <section className="relative text-center py-16 md:py-24 bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-amber-500">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/img/mookata-pattern.svg')", backgroundSize: 'cover' }}></div> 
          <div className="relative z-10">
            <Smile className="h-16 w-16 text-amber-500 mx-auto mb-6 transform transition-transform hover:scale-110" />
            <h3 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">Become Part of Our Family!</h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
              Discover the authentic taste, joyful atmosphere, and friendly service that makes Family Mookata a place to create lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/locations" passHref>
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105 text-lg">
                  Find a Location
                </button>
              </Link>
              <Link href="/menu" passHref>
                <button className="bg-white text-orange-600 border-2 border-orange-500 hover:bg-orange-50 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105 text-lg">
                  Explore Our Menu
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}