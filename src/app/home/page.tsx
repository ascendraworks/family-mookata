"use client";

import { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const locations = [
    { name: "Yishun", address: "6 Yishun Industrial Street 1 Northview Bizhub", postalCode: "Singapore 768090", imgSrc: "/img/yishun.jpg", description: "Vibrant atmosphere, perfect for gatherings.", phone: "8927 2782" },
    { name: "Bedok", address: "539 Bedok North Street 3, #01-593", postalCode: "Singapore 460539", imgSrc: "/img/bedok.jpg", description: "Cozy and welcoming, great for families.", phone: "8188 4738" },
    { name: "Ang Mo Kio", address: "Blk 215 Ang Mo Kio Ave 1, #01-877", postalCode: "Singapore 560215", imgSrc: "/img/amk.jpg", description: "Modern setup, ideal for a night out.", phone: "8927 2782" },
];

const reviews = [
    {
      name: "Sheila Cheong",
      avatar: "./img/sheila-face.png",
      image: "./img/sheila.jpg",
      text: `Had an amazing time at Family Mookata Yishun! The outdoor seating was perfect for the late noon weather, breezy and relaxing, making it a great spot for family bonding. We loved the variety of fresh ingredients, especially their new Tiger prawns, which were sweet and juicy!

The meats were well-marinated, and the soup became so flavorful as we grilled. My girl had so much fun helping to cook, and it was such a wonderful experience for the whole family. The staff was friendly, and the service was quick. Definitely a go-to place for delicious and affordable mookata.

Highly recommend for a chill and satisfying meal!

Service
Dine in

Meal type
Dinner

Food: 5

Service: 5

Atmosphere: 5

Recommended dishes
Garlic Pork, Scallop, Mala Pork Slice, Thai Marinated Pork Slice`
    },
    {
      name: "Alex Ho",
      avatar: "./img/alex-ho-avatar.png",
      image: "./img/cheese.png",
      text: `Mookat buffet for 14.9 ? Wow, this is something rare in Singapore. The protein buffet is so worth it with plenty of meat and chicken marinades to choose from. The heart shape cheese dipping sauce is so cute. Will come back again for sure

Meal type
Dinner

Price per person
$10–20

Food: 5

Service: 5

Atmosphere: 5

Recommended dishes
Garlic Pork, Mala Pork Slice, Black Pepper Chicken Thigh, Cheese Dipä, Thai Marinated Pork Slice, Garlic Chicken Thigh

Wait time
Up to 10 min`
    },
    {
      name: "Eddie Neo",
      avatar: "./img/eddie-neo-avatar.png",
      image: "./img/eddie-neo.webp",
      text: `Value for money mookata 👍

Adult $19.90 (seafood) $14.90 (protein)
Buffet price. Super good marinated meat.
Jiak ba ba rest of day no need eat already. Special highlight the pork ball also not bad. I had 3 servings. Chilli homemade! Green chili got kick!`
    },
    {
      name: "Tan ANGELA",
      avatar: "./img/tan-angela-avatar.png",
      image: "./img/tan-angela.webp",
      text: `Super worthy and yummy. Suitable for family and friends. Variety of ingredients for grilling and boiling. Seafood or protein buffet are available to choose. They have activity now for iPhone giveaway by collecting the loyalty cards for each visit. Highly recommended`
    }
  ];
  

const badgeSet = () => (
    <>
      <div className="flex items-center gap-4 min-w-max flex-shrink-0">
        <Star className="h-8 w-8 text-[#FFB24F]" />
        <div className="text-xl font-bold">3.9K+ Reviews</div>
      </div>
      <div className="flex items-center gap-4 min-w-max flex-shrink-0">
        <MapPin className="h-8 w-8 text-[#FFB24F]" />
        <div className="text-xl font-bold">3 Locations</div>
      </div>
      <div className="flex items-center gap-4 min-w-max flex-shrink-0">
        <Clock className="h-8 w-8 text-[#FFB24F]" />
        <div className="text-xl font-bold">1PM – 11PM</div>
      </div>
    </>
  );
  
  
  
function Home() {
      const [activeCardIndex, setActiveCardIndex] = useState(0);
      const handleCardTap = (index: number) => {
        setActiveCardIndex(index);
      };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-[1440px] flex justify-between items-center py-4 px-12 overflow-hidden max-lg:flex-col max-sm:px-0">
                <div className="flex flex-col max-lg:text-center relative">
                    <div className="w-full h-full flex justify-center items-center absolute z-0 max-lg:hidden">
                        <div className="h-[400px] w-[400px] bg-orange-100 rounded-full blur-xl"></div>
                    </div>
                    <h1 className="text-7xl font-bold italic max-sm:text-4xl z-10">Family Mookata</h1>
                    <p className="text-4xl pt-4 max-sm:text-xl z-10">Cheapest Mookata in Singapore</p>
                    <p className="text-2xl text-orange-500 font-bold italic py-4 max-sm:text-xl z-10">Starting from $9.90 ONLY</p>
                    <div className="flex gap-8 max-lg:justify-center z-10">
                        <Button className="bg-[#FFB24F] shadow-lg" size="lg">Menu</Button>
                        <Button className="bg-white border-2 border-[#FFB24F] text-[#FFB24F] shadow-lg" size="lg">Delivery</Button>
                    </div>
                    {/* Desktop: Static Badges */}
                    <div className="pt-8 gap-8 max-lg:hidden flex z-10">
                        <div className="flex items-center gap-4">
                            <Star className="h-8 w-8 text-[#FFB24F]" />
                            <div className="text-xl font-bold">3.9K+ Reviews</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="h-8 w-8 text-[#FFB24F]" />
                            <div className="text-xl font-bold">3 Locations</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Clock className="h-8 w-8 text-[#FFB24F]" />
                            <div className="text-xl font-bold">1PM – 11PM</div>
                        </div>
                    </div>

                    {/* Mobile ticker */}
                    <style jsx global>{`
                    @keyframes scroll-loop {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    `}</style>
                    <div className="overflow-hidden w-full max-lg:flex hidden min-h-[64px] mt-8">
                        <div
                            className="flex w-max animate-[scroll-loop_5s_linear_infinite]"
                        >
                        <div className="flex gap-8 pr-8">{badgeSet()}</div>
                            <div className="flex gap-8 pr-8">{badgeSet()}</div>
                        </div>
                    </div>
                </div>
                <img className="max-lg:w-2/3 max-lg:py-12" src="/img/hero-mookata.png" />
            </div>
            <div className="w-full max-w-[1440px] flex flex-col px-12 gap-8 max-sm:px-0">
                <div className="flex flex-col py-16 gap-8">
                    <div className="flex flex-col gap-2 max-sm:items-center">
                        <h1 className="text-5xl font-bold italic">Our Locations</h1>
                        <p className="text-xl font-bold italic">Find A Family Mookata Near You</p>
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:h-[340px] gap-6 md:gap-2.5">
                        {locations.map((location) => (
                        <div
                            key={`${location.name}-desktop`}
                            className="hidden md:flex group relative md:w-[80px] md:h-full rounded-xl
                                    items-end
                                    md:flex-grow md:hover:flex-grow-[7] cursor-pointer
                                    transition-all duration-500 ease-in-out
                                    bg-cover bg-center overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${location.imgSrc})` }}
                            aria-label={`View details for Family Mookata ${location.name} branch`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-[30px] pointer-events-none"></div>
                            <div className="relative z-10 p-5 w-full">
                            <h3
                                className="text-white text-2xl font-bold
                                        opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-400 ease-in-out delay-100"
                            >
                                {location.name}
                            </h3>
                            <p className="text-gray-200 text-sm mt-1
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-400 ease-in-out delay-200 line-clamp-2"
                            >
                                {location.description}
                            </p>
                            </div>
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
            </div>
            <div className="w-full max-w-[1440px] flex flex-col px-12 gap-8 max-sm:px-0">
                <div className="flex items-center py-16 gap-8">
                    <div className="flex flex-col gap-2 max-sm:items-center">
                        <h1 className="text-5xl font-bold italic">Become A Member</h1>
                        <p className="text-xl font-bold italic">Join our mookata family today, It's completely FREE!</p>
                        <ul className="flex flex-col list-disc py-8 gap-4 list-none">
                            <li>
                                <div className="flex items-center gap-4">
                                    <div className="min-w-12 min-h-12 bg-[#FFB24F] flex justify-center items-center rounded-full text-white font-bold">
                                        1
                                    </div>
                                    <div>
                                        <p className='font-bold text-xl'>Lifetime Free</p>
                                        You have nothing to lose, it's FREE!
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-4">
                                    <div className="min-w-12 min-h-12 bg-[#FFB24F] flex justify-center items-center rounded-full text-white text-xl font-bold">
                                        2
                                    </div>
                                    <div>
                                        <p className='font-bold text-xl'>Points</p>
                                        Points expires after 1 year of inactivity
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-4">
                                    <div className="min-w-12 min-h-12 bg-[#FFB24F] flex justify-center items-center rounded-full text-white text-xl font-bold">
                                        3
                                    </div>
                                    <div>
                                        <p className='font-bold text-xl'>How Does This Point System Works</p>
                                        For every $1 spent = 1 point. Every 1 point is $0.01, points can be used on the next next visit for cashback.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-4">
                                    <div className="min-w-12 min-h-12 bg-[#FFB24F] flex justify-center items-center rounded-full text-white font-bold">
                                        4
                                    </div>
                                    <div>
                                        <p className='font-bold text-xl'>Birthday Rewards</p>
                                        5% off on your birthday month
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-4">
                                    <div className="min-w-12 min-h-12 bg-[#FFB24F] flex justify-center items-center rounded-full text-white font-bold">
                                        5
                                    </div>
                                    <div>
                                        <p className='font-bold text-xl'>Freebies</p>
                                        Free cheese dip redemption on each visit
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img className="w-1/2 h-[300px] rounded-xl object-cover" src="./img/loyalty_card.png" />
                </div>
            </div>
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1440 30.303L1380 54.2626C1320 78.2222 1200 126.141 1080 108.172C960 90.202 840 6.34335 720 0.353455C600 -5.63644 480 66.2424 360 84.2121C240 102.182 120 66.2424 60 48.2727L0 30.303V210H60C120 210 240 210 360 210C480 210 600 210 720 210C840 210 960 210 1080 210C1200 210 1320 210 1380 210H1440V30.303Z" fill="#FFB24F"/>
            </svg>
            <div className="w-full bg-[#FFB24F] flex justify-center">
                <div className="w-full max-w-[1440px] relative">
                    <div className="w-full flex justify-center absolute top-[-70px]">
                        <h1 className="bg-white rounded-2xl text-5xl text-[#FFB24F] font-bold italic px-12 py-8 shadow-lg">
                            Our Prices
                        </h1>
                    </div>
                    <div className="w-full bg-[#FFB24F] flex justify-center">
                        <div className="w-full max-w-[1440px] relative">
                            
                            <div className="w-full flex justify-center absolute top-[-70px]">
                                <h1 className="bg-white rounded-2xl text-5xl text-[#FFB24F] font-bold italic px-12 py-8 shadow-lg">
                                    Our Prices
                                </h1>
                            </div>

                            <div className="bg-[#FFE6C6] flex rounded-2xl mx-12 px-12 pt-16 pb-12 gap-12 max-lg:gap-8 max-lg:flex-col max-sm:mx-4 max-sm:px-8">

                            {/* Card 1 */}
                            <div className="w-1/3 flex flex-col bg-white rounded-xl text-center shadow-lg px-8 py-8 max-lg:w-full">
                                <div className="h-full flex flex-col justify-between items-center">
                                <img className="h-[250px] object-cover" src="./img/banner.png" />
                                <div className="flex flex-col items-center">
                                    <h1 className="text-2xl text-orange-600 font-bold">Protein Buffet</h1>
                                    <p>Choice Meats & Vegetables - No Seafood</p>
                                </div>
                                <div className="flex flex-col items-center py-2">
                                    <p className="font-bold">Mon-Fri (Before 7PM)</p>
                                    <p>Adult: $14.90</p>
                                    <p>Kid (12 - 18): $9.90</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-bold">Peak (After 7PM, Weekends & PH)</p>
                                    <p>Adult: $16.90</p>
                                    <p>Kid (12 - 18): $11.90</p>
                                </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="w-1/3 flex flex-col bg-white rounded-xl text-center shadow-lg px-8 py-8 max-lg:w-full">
                                <div className="h-full flex flex-col items-center">
                                    <img className="h-[250px] object-cover" src="./img/banner.png" />
                                    <div className="flex flex-col items-center">
                                        <h1 className="text-2xl text-orange-600 font-bold">Seafood Buffet</h1>
                                        <p>Variety Selection of Meats, Vegetables, Carbs and Even More</p>
                                    </div>
                                    <div className="flex flex-col items-center py-2">
                                        <p>Adult: $19.90</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p>Kid: $14.90</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="w-1/3 flex flex-col bg-white rounded-xl text-center shadow-lg px-8 py-8 max-lg:w-full">
                                <div className="h-full flex flex-col items-center">
                                <img className="h-[250px] object-cover" src="./img/banner.png" />
                                <div className="flex flex-col items-center">
                                    <h1 className="text-2xl text-orange-600 font-bold">Kid Friendly Dining</h1>
                                    <p>Kids under 12 eat for FREE!</p>
                                </div>
                                <div className="flex flex-col items-center py-2">
                                    Perfect for families, birthday parties, and large groups.
                                </div>
                                <div className="flex flex-col items-center">
                                    Discounts applied automatically for all buffet options.
                                </div>
                            </div>
                        </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="w-full rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1440 30.303L1380 54.2626C1320 78.2222 1200 126.141 1080 108.172C960 90.202 840 6.34335 720 0.353455C600 -5.63644 480 66.2424 360 84.2121C240 102.182 120 66.2424 60 48.2727L0 30.303V210H60C120 210 240 210 360 210C480 210 600 210 720 210C840 210 960 210 1080 210C1200 210 1320 210 1380 210H1440V30.303Z" fill="#FFB24F"/>
            </svg>
            <div className="w-full max-w-[1440px] flex flex-col pl-12 py-16 gap-8 max-sm:pl-0">
                <div className="flex flex-col gap-2 max-sm:items-center">
                    <h1 className="text-5xl font-bold italic">Our Reviews</h1>
                    <div className="flex gap-6">
                        <p className="text-xl font-bold italic">3.9K+ Google Reviews</p>
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold italic">4.9</p>
                            <Star className="h-6 w-6 text-[#FFB24F] fill-[#FFB24F]" />
                        </div>
                    </div>
                </div>
                <Carousel
                    opts={{ align: "start" }}
                    className="w-full">
                    <CarouselContent className="max-sm:mx-4">
                    {reviews.map((review, index) => (
                        <CarouselItem key={index} className="basis-1/2 max-sm:basis-full">
                            <Card className="h-full min-w-1/2 flex-row py-0 gap-0 transition-shadow duration-300 max-lg:flex-col">
                            <div className="w-1/2 flex flex-col py-4 gap-4 max-lg:w-full">
                                <CardHeader className="flex flex-row items-center px-4 gap-4">
                                <img className="w-[60px] h-[60px] rounded-full object-cover" src={review.avatar} />
                                <div className="flex flex-col gap-1">
                                    <CardTitle className="text-md font-semibold">{review.name}</CardTitle>
                                    <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-6 w-6 text-[#FFB24F] fill-[#FFB24F]" />
                                    ))}
                                    </div>
                                </div>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col items-start justify-between px-4 gap-4">
                                    <p>
                                        {review.text.length > 200
                                        ? review.text.slice(0, 200) + "..."
                                        : review.text}
                                    </p>

                                    {review.text.length > 120 && (
                                        <Dialog>
                                            <DialogTrigger className="text-orange-600 font-semibold hover:underline">
                                                Read more
                                            </DialogTrigger>
                                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                                <DialogHeader>
                                                <DialogTitle className="flex items-center gap-4">
                                                    <img
                                                    className="w-[60px] h-[60px] rounded-full object-cover"
                                                    src={review.avatar}
                                                    />
                                                    <div className="flex flex-col">
                                                    <p className="text-lg font-semibold">{review.name}</p>
                                                    <div className="flex gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="h-5 w-5 text-[#FFB24F] fill-[#FFB24F]"
                                                        />
                                                        ))}
                                                    </div>
                                                    </div>
                                                </DialogTitle>
                                                </DialogHeader>
                                                <div className="mt-4 px-2 pb-4 text-base whitespace-pre-wrap">
                                                {review.text}
                                                </div>
                                                <div className="mt-4">
                                                <img
                                                    src={review.image}
                                                    alt="review image"
                                                    className="w-full h-[300px] object-cover rounded-xl"
                                                />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    )}
                                </CardContent>
                            </div>

                            <div className="w-1/2 aspect-square p-4 max-lg:w-full max-lg:max-h-[300px]">
                                <img className="w-full h-full rounded-xl object-cover" src={review.image} />
                            </div>
                            </Card>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;
