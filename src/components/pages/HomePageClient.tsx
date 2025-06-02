"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Removed CardDescription as it's not used
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, MapPin, Clock, ChevronRight, UserCircle2, ExternalLink, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

// Data arrays
const locations = [
  { name: "Yishun", address: "6 Yishun Industrial Street 1 Northview Bizhub", postalCode: "Singapore 768090", imgSrc: "/img/yishun.jpg", description: "Vibrant atmosphere, perfect for gatherings." },
  { name: "Bedok", address: "539 Bedok North Street 3, #01-593", postalCode: "Singapore 460539", imgSrc: "/img/bedok.jpg", description: "Cozy and welcoming, great for families." },
  { name: "Ang Mo Kio", address: "Blk 215 Ang Mo Kio Ave 1, #01-877", postalCode: "Singapore 560215", imgSrc: "/img/amk.jpg", description: "Modern setup, ideal for a night out." },
];

// priceItems is not directly used by the new pricing card structure.
// If the new cards become dynamic, this data structure would need to be adapted.

const reviews = [
  {
    name: "Sheila Cheong",
    rating: 5,
    text: "Had an amazing time at Family Mookata Yishun! The outdoor seating was perfect for the late noon weather, breezy and relaxing, making it a great spot for family bonding. We loved the variety of fresh ingredients, especially their new Tiger prawns, which were sweet and juicy!" + "\tThe meats were well-marinated, and the soup became so flavorful as we grilled. My girl had so much fun helping to cook, and it was such a wonderful experience for the whole family. The staff was friendly, and the service was quick. Definitely a go-to place for delicious and affordable mookata." + "\t Highly recommend for a chill and satisfying meal!",
    foodImgSrc: "/img/sheila.jpg",
  },
  {
    name: "Namita Sinha",
    rating: 4,
    text: "Dining at Family Mookata was a wonderful experience. The place is so conveniently located and honestly it was the most affordable buffet I and my family ever had. The seafood and marinated meat was fresh and tasted great. There were nice veggies options to choose from. The taste of the broth and marinated chicken was great. I am surely going to come back again to bond over yummy & delicious food.",
    foodImgSrc: "/img/namita.jpg",
  },
  {
    name: "Alex Ho",
    rating: 5,
    text: "Mookat buffet for 14.9 ? Wow, this is something rare in Singapore. The protein buffet is so worth it with plenty of meat and chicken marinades to choose from. The heart shape cheese dipping sauce is so cute. Will come back again for sure",
    foodImgSrc: "/img/alex.jpg",
  },
  {
    name: "Valefor Ho",
    rating: 5,
    text: "I Been here for few times. Their price at $14.90 and $19.90 for meat and seafood buffet platter is extremely competitive and worthy. Recommended for family gathering dinner.",
    foodImgSrc: "/img/valefor.jpg",
  },
  {
    name: "rachel tang",
    rating: 5,
    text: "This is definitely a pocket friendly mookata buffet with a wide varieties of ingredients, the price starting from $9.90! Good service with good food! Will be back again!",
    foodImgSrc: "/img/rachel.jpg",
  },
];

// Helper Components
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

const ReviewText = ({ text, charLimit }: { text: string; charLimit: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= charLimit) {
    return <p className="text-sm text-gray-600 leading-relaxed">{text}</p>;
  }

  return (
    <div>
      <p className="text-sm text-gray-600 leading-relaxed">
        {isExpanded ? text : `${text.substring(0, charLimit)}...`}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-sm text-orange-600 hover:text-orange-700 font-semibold mt-1"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export default function HomePageClient() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleCardTap = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <div className="bg-white text-[#333333]">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32 overflow-hidden min-h-[calc(80vh)] md:min-h-[calc(90vh)] flex items-center pt-8 md:pt-12">
        <div className="absolute top-1/2 left-1/4 transform translate-x-[-25%] translate-y-[-150%] md:translate-x-[-50%] md:translate-y-[-50%] opacity-100 md:opacity-70">
          <div className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] bg-orange-100 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center w-full">
          <div className="text-center md:text-left flex flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-black italic mb-4 md:mb-6">
              Family Mookata
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black italic mb-8 md:mb-12">
              Cheapest Mookata Buffet in<br /> Singapore
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-600 font-semibold italic mb-6 md:mb-10">
              Starting from ONLY $9.90!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-14 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-[#FFB24F] hover:bg-[#e6a043] text-white text-lg sm:text-xl px-12 py-4 rounded-lg shadow-lg">
                <Link href="/menu">Menu</Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-3 border-[#FFB24F] text-[#FFB24F] font-bold hover:bg-[#FFF3E1] text-lg sm:text-xl px-12 py-4 rounded-lg shadow-lg">
                <Link href="/order">Order</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 sm:gap-x-10 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-4 sm:gap-y-5 text-black justify-center md:justify-start font-semibold italic">
              <div className="flex items-center">
                <Star className="h-5 w-5 sm:h-6 md:h-7 lg:h-8 text-[#FFB24F] mr-2 md:mr-3" />
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">3.9K+ Reviews</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 sm:h-6 md:h-7 lg:h-8 text-[#FFB24F] mr-2 md:mr-3" />
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">3 Locations</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 sm:h-6 md:h-7 lg:h-8 text-[#FFB24F] mr-2 md:mr-3" />
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">1PM – 11PM</span>
              </div>
            </div>
          </div>
          <div className="relative w-full h-80 md:h-[550px] lg:h-[600px] mt-10 md:mt-0 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/img/heronobg.png"
                alt="Delicious Mookata spread with various meats and vegetables on a hot pan"
                width={600}
                height={600}
                className="object-contain max-w-full max-h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Our Locations</h2>
          <p className="text-center text-gray-500 mb-10 md:mb-12 max-w-xl mx-auto">
            Find a Family Mookata near you and dive into an unforgettable Thai BBQ experience.
          </p>
          <div className="flex flex-col md:flex-row w-full md:h-[340px] gap-6 md:gap-2.5">
            {locations.map((location) => (
              <div
                key={`${location.name}-desktop`}
                className="hidden md:flex group relative md:min-w-[80px] md:h-full rounded-[30px]
                           flex-col justify-end p-5
                           md:flex-grow md:hover:flex-grow-[7] cursor-pointer
                           transition-all duration-500 ease-in-out
                           bg-cover bg-center overflow-hidden shadow-lg"
                style={{ backgroundImage: `url(${location.imgSrc})` }}
                aria-label={`View details for Family Mookata ${location.name} branch`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-[30px]"></div>
                <h3
                  className="relative z-10 text-white text-2xl font-bold
                             opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0
                             transition-all duration-400 ease-in-out delay-100"
                >
                  {location.name}
                </h3>
                <p className="relative z-10 text-gray-200 text-sm mt-1
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-400 ease-in-out delay-200 line-clamp-2"
                >
                  {location.description}
                </p>
              </div>
            ))}
            {/* Mobile: Framer Motion Stacked Cards */}
            <div className="md:hidden relative w-full h-[350px] flex items-center justify-center overflow-hidden px-10">
              <AnimatePresence initial={false}>
                {locations.map((location, index) => {
                  const isActive = index === activeCardIndex;
                  const positionInStack = (locations.length - 1 - index + activeCardIndex) % locations.length;
                  
                  const scale = isActive ? 1 : Math.max(1 - (positionInStack * 0.05), 0.8);
                  const yOffset = isActive ? 0 : positionInStack * 10;
                  const xOffset = isActive ? 0 : (index - activeCardIndex) * 5;
                  const rotation = isActive ? 0 : (index - activeCardIndex) * 2;

                  return (
                    <motion.div
                      key={`${location.name}-mobile-fm`}
                      className="absolute w-[80%] max-w-[280px] h-[300px] bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer flex flex-col"
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        y: yOffset,
                        x: xOffset,
                        scale: scale,
                        rotate: rotation,
                        zIndex: isActive ? locations.length : locations.length - 1 - positionInStack,
                      }}
                      exit={{ opacity: 0, y: -50, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      onTap={() => handleCardTap(index)}
                    >
                      <div className="relative h-2/3 w-full">
                        <Image src={location.imgSrc} alt={`Family Mookata ${location.name} outlet - Thai BBQ & Steamboat`} fill className="object-cover" />
                      </div>
                      <div className="p-3 flex-grow flex flex-col justify-between">
                        <h3 className="text-md font-semibold text-gray-800 mb-1 truncate">{location.name}</h3>
                        {isActive && (
                          <>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">{location.description}</p>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address + ", " + location.postalCode)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center text-xs text-orange-600 hover:text-orange-700 font-semibold self-start"
                            >
                              Get Directions <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {/* Navigation Buttons for Mobile Stacked Cards */}
              <button
                onClick={() => setActiveCardIndex((prevIndex) => (prevIndex - 1 + locations.length) % locations.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md focus:outline-none"
                aria-label="Previous location"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setActiveCardIndex((prevIndex) => (prevIndex + 1) % locations.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md focus:outline-none"
                aria-label="Next location"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Prices Section */}
      <section className="relative py-12 md:py-20 bg-[#FFB24F] overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
          <svg className="relative block w-full h-[120px]" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C240,0 480,128 720,64 C960,0 1200,128 1440,64 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#FFE6C6] rounded-3xl p-8 md:p-12 mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20">
            {/* Section Heading */}
            <div className="text-center -mt-20 mb-6 md:mb-8">
              <Button
                size="lg"
                className="bg-white text-orange-500 hover:bg-orange-50 text-2xl md:text-3xl font-bold px-10 py-3 shadow-lg h-auto rounded-xl"      >
                All-You-Can-Eat Rates
              </Button>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8">
              
              {/* Non-Seafood Buffet */}
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col min-h-[380px] relative">
                <span className="absolute top-[-2%] left-[-5%] bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Budget Option
                </span>
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Non-Seafood Buffet</h3>
                  <p className="text-sm text-gray-500">Choice meats & veggies – <strong>no seafood</strong>.</p>
                </div>
                {/* Image for Non-Seafood Buffet - Assuming you'll add one */}
                {/* <div className="relative h-40 w-full mb-4">
                  <Image src="/img/non-seafood-mookata.jpg" alt="Non-seafood Mookata buffet option with various meats and vegetables" fill className="object-cover rounded-md" />
                </div> */}
                <div className="text-sm text-gray-700 space-y-4 flex-1">
                  <div>
                    <p className="font-semibold text-orange-600">Mon–Fri (Before 7PM)</p>
                    <p>Adult: <span className="font-bold text-gray-800">$14.90</span></p>
                    <p>Kid (5–12y): <span className="font-bold text-gray-800">$9.90</span></p>
                  </div>
                  <div className="pt-3 border-t border-dashed">
                    <p className="font-semibold text-orange-600">Peak (After 7PM, Weekends & PH)</p>
                    <p>Adult: <span className="font-bold text-gray-800">$16.90</span></p>
                    <p>Kid (5–12y): <span className="font-bold text-gray-800">$11.90</span></p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg w-full">
                    <Link href="/menu">View Menu</Link>
                  </Button>
                </div>
              </div>

              {/* Seafood Buffet */}
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col min-h-[380px] relative border-2 border-orange-500">
                <span className="absolute top-[-2%] left-[-5%] bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  All-Inclusive
                </span>
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Seafood Buffet (All Day)</h3>
                  <p className="text-sm text-gray-500">Includes <strong>prawns</strong>, <strong>mussels</strong>, and more.</p>
                </div>
                {/* Image for Seafood Buffet - Assuming you'll add one */}
                {/* <div className="relative h-40 w-full mb-4">
                  <Image src="/img/seafood-mookata.jpg" alt="Seafood Mookata buffet option with prawns, mussels, and other seafood" fill className="object-cover rounded-md" />
                </div> */}
                <div className="text-sm text-gray-700 space-y-4 flex-1">
                  <p>Adult: <span className="font-bold text-gray-800">$19.90</span></p>
                  <p>Kid (5–12y): <span className="font-bold text-gray-800">$14.90</span></p>
                </div>
                <div className="mt-6">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg w-full">
                    <Link href="/menu">View Seafood</Link>
                  </Button>
                </div>
              </div>

              {/* Kid-Friendly Dining */}
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col min-h-[380px] relative">
                <span className="absolute top-[-2%] left-[-5%] bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Family Favourite
                </span>
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Kid-Friendly Dining</h3>
                  <p className="text-sm text-gray-500"><strong>Kids under 12</strong> get discounted pricing across all tiers.</p>
                </div>
                {/* Image for Kid-Friendly - Assuming you'll add one */}
                {/* <div className="relative h-40 w-full mb-4">
                  <Image src="/img/kid-friendly-mookata.jpg" alt="Family enjoying mookata, highlighting kid-friendly dining" fill className="object-cover rounded-md" />
                </div> */}
                <div className="text-sm text-gray-700 space-y-2 flex-1">
                  <p>Perfect for families, birthday parties, and large groups.</p>
                  <p className="text-gray-600">Discounts applied automatically for all buffet options.</p>
                </div>
                <div className="mt-6">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg w-full">
                    <Link href="/menu">See Full Menu</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0">
          <svg className="relative block w-full h-[120px]" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C240,0 480,128 720,64 C960,0 1200,128 1440,64 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>
      </section>



      {/* Our Reviews Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">Our Reviews</h2>
          <div className="text-center text-gray-500 mb-10 md:mb-12 flex items-center justify-center">
            3.9k+ Google Reviews &nbsp;&nbsp;
            <StarRating rating={4.7} /> &nbsp; 4.7
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-3 pb-3">
                      <UserCircle2 className="h-12 w-12 text-gray-400" />
                      <div>
                        <CardTitle className="text-md font-semibold">{review.name}</CardTitle>
                        <StarRating rating={review.rating} />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col md:flex-row gap-4 items-start p-4">
                      <div className="md:flex-1"> {/* Text container */}
                        <ReviewText text={review.text} charLimit={150} />
                      </div>
                      <div className="relative w-full md:w-2/5 h-48 md:h-auto md:aspect-square rounded-lg overflow-hidden self-center md:self-start shrink-0 mt-3 md:mt-0">
                        <Image src={review.foodImgSrc} alt={`Food by ${review.name}`} fill className="object-cover" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12 hidden sm:flex" />
            <CarouselNext className="mr-12 hidden sm:flex" />
          </Carousel>
        </div>
      </section>

    </div>
  );
}