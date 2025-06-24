"use client";

import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Star,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const locations = [
  {
    name: "Yishun",
    address: "6 Yishun Industrial Street 1 Northview Bizhub",
    postalCode: "Singapore 768090",
    imgSrc: "/img/yishun.jpeg",
    description: "Vibrant atmosphere, perfect for gatherings.",
    timings:
      "Last Order: 9.30pm, Fridge Close: 10pm, Fire Off: 10.30pm, Coffeeshop Close: 11pm",
    phone: "8927 2782",
  },
  {
    name: "Bedok",
    address: "539 Bedok North Street 3, #01-593",
    postalCode: "Singapore 460539",
    imgSrc: "/img/bedok_new.jpg",
    description: "Cozy and welcoming, great for families.",
    timings:
      "Last Order: 9.30pm, Fridge Close: 10pm, Fire Off: 10.30pm, Coffeeshop Close: 11pm",
    phone: "8188 4738",
  },
  {
    name: "Ang Mo Kio",
    address: "Blk 215 Ang Mo Kio Ave 1, #01-877",
    postalCode: "Singapore 560215",
    imgSrc: "/img/amk.jpg",
    description: "Modern setup, ideal for a night out.",
    timings:
      "Last Order: 9.30pm, Fridge Close: 10pm, Fire Off: 10.30pm, Coffeeshop Close: 11pm",
    phone: "8927 2782",
  },
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
Garlic Pork, Scallop, Mala Pork Slice, Thai Marinated Pork Slice`,
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
Up to 10 min`,
  },
  {
    name: "Eddie Neo",
    avatar: "./img/eddie-neo-avatar.png",
    image: "./img/eddie-neo.webp",
    text: `Value for money mookata 👍

Adult $19.90 (seafood) $14.90 (protein)
Buffet price. Super good marinated meat.
Jiak ba ba rest of day no need eat already. Special highlight the pork ball also not bad. I had 3 servings. Chilli homemade! Green chili got kick!`,
  },
  {
    name: "Tan ANGELA",
    avatar: "./img/tan-angela-avatar.png",
    image: "./img/tan-angela.webp",
    text: `Super worthy and yummy. Suitable for family and friends. Variety of ingredients for grilling and boiling. Seafood or protein buffet are available to choose. They have activity now for iPhone giveaway by collecting the loyalty cards for each visit. Highly recommended`,
  },
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

  // For scroll-based animations
  const heroRef = useRef(null);
  const locationsRef = useRef(null);
  const membershipRef = useRef(null);
  const pricesRef = useRef(null);
  const reviewsRef = useRef(null);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const isLocationsInView = useInView(locationsRef, {
    once: true,
    margin: "-100px",
  });
  const isMembershipInView = useInView(membershipRef, {
    once: true,
    margin: "-100px",
  });
  const isPricesInView = useInView(pricesRef, { once: true, margin: "-100px" });
  const isReviewsInView = useInView(reviewsRef, {
    once: true,
    margin: "-100px",
  });

  const handleCardTap = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <motion.div
        ref={heroRef}
        style={{ y: heroY, opacity: 100 }}
        className="w-full max-w-[1440px] flex justify-between items-center py-4 px-12 overflow-hidden max-lg:flex-col max-sm:px-0"
      >
        <div className="flex flex-col max-lg:text-center relative">
          <div className="w-full h-full flex justify-center items-center absolute z-0 max-lg:hidden">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-[400px] w-[400px] bg-orange-100 rounded-full blur-xl"
            ></motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl font-bold italic max-sm:text-4xl z-10"
          >
            Family Mookata
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl pt-4 max-sm:text-xl z-10"
          >
            Cheapest Mookata in Singapore
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl text-orange-500 font-bold italic py-4 max-sm:text-xl z-10"
          >
            Starting from $9.90 ONLY
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-8 max-lg:justify-center z-10"
          >
            <Button
              className="bg-[#FFB24F] shadow-lg hover:bg-orange-400 hover:cursor-pointer duration-400 ease-in-out"
              size="lg"
            >
              <a href="/menu">View Menu</a>
            </Button>
            <Button
              className="bg-white border-2 border-[#FFB24F] text-[#FFB24F] shadow-lg  hover:bg-orange-400 hover:cursor-pointer duration-400 ease-in-out hover:border-orange-400 hover:text-white"
              size="lg"
            >
              <a href="https://familymookata.eposqr.com/">
                Place Delivery Order
              </a>
            </Button>
          </motion.div>
          {/* Desktop: Static Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="pt-8 gap-8 max-lg:hidden flex z-10"
          >
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
          </motion.div>

          {/* Mobile ticker */}
          <style jsx global>{`
            @keyframes scroll-loop {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
          <div className="overflow-hidden w-full max-lg:flex hidden min-h-[64px] mt-8">
            <div className="flex w-max animate-[scroll-loop_5s_linear_infinite]">
              <div className="flex gap-8 pr-8">{badgeSet()}</div>
              <div className="flex gap-8 pr-8">{badgeSet()}</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-1/2 max-lg:w-2/3 max-lg:py-12"
        >
          <img className="brightness-120" src="/img/hero.png" />
        </motion.div>
      </motion.div>
      <div className="w-full max-w-[1440px] flex flex-col px-12 gap-8 max-sm:px-0">
        <div className="flex flex-col py-16 gap-8">
          <div className="flex flex-col gap-2 max-sm:items-center">
            <h1 className="text-5xl font-bold italic">Our Locations</h1>
            <p className="text-xl font-bold italic">
              Find A Family Mookata Near You
            </p>
          </div>
          <motion.div
            ref={locationsRef}
            initial={{ opacity: 0, y: 80 }}
            animate={
              isLocationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row w-full md:h-[340px] gap-6 md:gap-2.5"
          >
            {locations.map((location, index) => (
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
                {/* Overlay always visible */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent
                                        opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
                ></div>

                {/* Badge for index 1 */}
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-4 py-2 m-4 rounded shadow-md">
                    Closed on Mondays
                  </div>
                )}

                <div className="relative z-10 p-5 w-full">
                  {/* Title always visible */}
                  <h3 className="text-white text-2xl font-bold opacity-100 translate-y-0 transition-all duration-400 ease-in-out delay-100">
                    {location.name}
                  </h3>

                  {/* Description always visible */}
                  <p className="text-gray-200 text-xs mt-1 opacity-100 transition-opacity duration-400 ease-in-out delay-200 line-clamp-2">
                    {location.description}
                  </p>

                  {/* Timings always visible */}
                  <p className="text-gray-200 text-sm mt-1 opacity-100 transition-opacity duration-400 ease-in-out delay-200 line-clamp-2">
                    {location.timings}
                  </p>
                </div>
              </div>
            ))}

            {/* Mobile: Framer Motion Stacked Cards */}
            <div className="md:hidden relative w-full h-[350px] flex items-center justify-center overflow-hidden px-10">
              <AnimatePresence initial={false}>
                {locations.map((location, index) => {
                  const isActive = index === activeCardIndex;
                  const positionInStack =
                    (locations.length - 1 - index + activeCardIndex) %
                    locations.length;

                  const scale = isActive
                    ? 1
                    : Math.max(1 - positionInStack * 0.05, 0.8);
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
                        zIndex: isActive
                          ? locations.length
                          : locations.length - 1 - positionInStack,
                      }}
                      exit={{ opacity: 0, y: -50, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      onTap={() => handleCardTap(index)}
                    >
                      <div className="relative h-2/3 w-full">
                        <Image
                          src={location.imgSrc}
                          alt={`Family Mookata ${location.name} outlet - Thai BBQ & Steamboat`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3 flex-grow flex flex-col justify-between">
                        {/* Badge for index 1 */}
                        {index === 1 && (
                          <div className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-4 py-2 m-4 rounded shadow-md">
                            Closed on Mondays
                          </div>
                        )}
                        <h3 className="text-md font-semibold text-gray-800 mb-1 truncate">
                          {location.name}
                        </h3>
                        {isActive && (
                          <>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                              {location.description}
                            </p>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                              {location.timings}
                            </p>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                location.address + ", " + location.postalCode
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center text-xs text-orange-600 hover:text-orange-700 font-semibold self-start"
                            >
                              Get Directions{" "}
                              <ExternalLink className="ml-1 h-3 w-3" />
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
                onClick={() =>
                  setActiveCardIndex(
                    (prevIndex) =>
                      (prevIndex - 1 + locations.length) % locations.length
                  )
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md focus:outline-none"
                aria-label="Previous location"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() =>
                  setActiveCardIndex(
                    (prevIndex) => (prevIndex + 1) % locations.length
                  )
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md focus:outline-none"
                aria-label="Next location"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] flex flex-col px-12 gap-8 max-sm:px-4">
        <motion.div
          ref={membershipRef}
          initial={{ opacity: 0 }}
          animate={isMembershipInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between py-16 gap-16 max-lg:flex-col max-lg:items-center max-sm:mx-4"
        >
          {/* Left: Membership content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={
              isMembershipInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold italic">Become A Member</h1>
              <p className="text-xl font-bold italic">
                Join our mookata family — it’s completely free. Start earning
                rewards from your first visit.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {[
                {
                  number: 1,
                  title: "Lifetime Free",
                  desc: "No fees. No strings attached. Membership is free — always.",
                },
                {
                  number: 2,
                  title: "Points",
                  desc: "Earn points on every visit. Points expire only after 1 year of inactivity.",
                },
                {
                  number: 3,
                  title: "How Does This Point System Work?",
                  desc: "Every $1 spent = 1 point. 1 point = $0.01 cashback. Use your points anytime on your next visit.",
                },
                {
                  number: 4,
                  title: "Birthday Rewards",
                  desc: "Enjoy 5% off during your birthday month.",
                },
                {
                  number: 5,
                  title: "Freebies",
                  desc: "Redeem a free cheese dip every time you dine with us.",
                },
              ].map((item) => (
                <li key={item.number} className="flex items-center gap-4">
                  <div className="min-w-12 min-h-12 bg-[#FFB24F] flex justify-center items-center rounded-full text-white text-xl font-bold">
                    {item.number}
                  </div>
                  <div>
                    <p className="font-bold text-xl">{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: QR Code */}
          <div className="w-full flex flex-col items-center gap-8">
            <img className="w-2/3 rounded-xl shadow-xl" src="./img/qr.png" />
            <p className="text-lg text-center font-bold italic flex flex-col gap-4">
              Scan to sign up instantly and start earning rewards on your next
              visit.
              <a
                className="text-xl text-blue-500 underline"
                href="https://myprofile.eposdata.com/familymookata/register"
              >
                Register Here
              </a>
            </p>
          </div>
        </motion.div>
      </div>
      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 210"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1440 30.303L1380 54.2626C1320 78.2222 1200 126.141 1080 108.172C960 90.202 840 6.34335 720 0.353455C600 -5.63644 480 66.2424 360 84.2121C240 102.182 120 66.2424 60 48.2727L0 30.303V210H60C120 210 240 210 360 210C480 210 600 210 720 210C840 210 960 210 1080 210C1200 210 1320 210 1380 210H1440V30.303Z"
          fill="#FFB24F"
        />
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
              <div className="w-full flex justify-center absolute top-[-70px] z-10">
                <h1 className="bg-white rounded-2xl text-5xl text-[#FFB24F] font-bold italic px-12 py-8 shadow-lg">
                  Our Prices
                </h1>
              </div>
              <motion.div
                ref={pricesRef}
                initial={{ opacity: 0, y: 100 }}
                animate={
                  isPricesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{ duration: 0.8 }}
                className="bg-[#FFE6C6] flex rounded-2xl mx-12 px-12 pt-16 pb-12 gap-12 max-lg:gap-8 max-lg:flex-col max-sm:mx-4 max-sm:px-8"
              >
                {/* Protein Buffet */}
                <div className="w-1/3 flex flex-col bg-white rounded-xl shadow-lg px-8 py-8 max-lg:w-full">
                  <div className="flex flex-col items-center gap-4 flex-grow">
                    <img
                      className="h-[180px] object-cover mb-2 brightness-130"
                      src="./img/protein.png"
                    />
                    <h1 className="text-3xl text-orange-600 font-bold">
                      Protein Buffet
                    </h1>
                    <p className="text-gray-500 italic text-sm text-center">
                      Choice Meats & Vegetables – No Seafood
                    </p>

                    <div className="w-full bg-[#FFF7ED] rounded-lg py-4 px-6 flex flex-col gap-3 mt-4">
                      <div>
                        <p className="font-semibold">Mon–Fri (Before 7PM)</p>
                        <p>
                          Adult: <span className="font-bold">$14.90</span> | Kid
                          (5–12): <span className="font-bold">$9.90</span>
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          Peak (After 7PM, Weekends All Day & PH All Day)
                        </p>
                        <p>
                          Adult: <span className="font-bold">$16.90</span> | Kid
                          (5–12): <span className="font-bold">$11.90</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-orange-500 mt-6 w-full hover:bg-orange-600 hover:cursor-pointer duration-400 ease-in-out">
                    <a href="/menu">View Menu</a>
                  </Button>
                </div>

                {/* Seafood Buffet */}
                <div className="w-1/3 flex flex-col bg-white rounded-xl shadow-lg px-8 py-8 max-lg:w-full">
                  <div className="flex flex-col items-center gap-4 flex-grow">
                    <img
                      className="h-[180px] object-cover mb-2 brightness-130"
                      src="./img/seafood.png"
                    />
                    <h1 className="text-3xl text-orange-600 font-bold">
                      Seafood Buffet
                    </h1>
                    <p className="text-gray-500 italic text-sm text-center">
                      Full selection of meats, seafood & vegetables
                    </p>

                    <div className="w-full bg-[#FFF7ED] rounded-lg py-4 px-6 flex flex-col gap-3 mt-4">
                      <p>
                        Adult: <span className="font-bold">$19.90</span>
                      </p>
                      <p>
                        Kid (5–12): <span className="font-bold">$14.90</span>
                      </p>
                    </div>
                  </div>

                  <Button className="bg-orange-500 mt-6 w-full hover:bg-orange-600 hover:cursor-pointer duration-400 ease-in-out">
                    <a href="/menu">View Menu</a>
                  </Button>
                </div>

                {/* Family Friendly */}
                <div className="w-1/3 flex flex-col bg-white rounded-xl shadow-lg px-8 py-8 max-lg:w-full">
                  <div className="flex flex-col items-center gap-4 flex-grow">
                    <img
                      className="w-full h-[180px] object-cover mb-2 rounded"
                      src="./img/family-friendly.jpeg"
                    />
                    <h1 className="text-3xl text-orange-600 font-bold">
                      Family Friendly
                    </h1>
                    <p className="text-gray-500 italic text-sm text-center">
                      Perfect for birthdays, family gatherings, and group
                      events.
                    </p>

                    <div className="w-full bg-[#FFF7ED] rounded-lg py-4 px-6 flex flex-col gap-2 mt-4 text-center">
                      <p>Kids 5–12 enjoy special kid pricing.</p>
                      <p className="font-bold">Kids under 5 dine free.</p>
                    </div>
                  </div>

                  <Button className="bg-orange-500 mt-6 w-full hover:bg-orange-600 hover:cursor-pointer duration-400 ease-in-out">
                    <a href="/locations">Find a Location</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="w-full rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 210"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1440 30.303L1380 54.2626C1320 78.2222 1200 126.141 1080 108.172C960 90.202 840 6.34335 720 0.353455C600 -5.63644 480 66.2424 360 84.2121C240 102.182 120 66.2424 60 48.2727L0 30.303V210H60C120 210 240 210 360 210C480 210 600 210 720 210C840 210 960 210 1080 210C1200 210 1320 210 1380 210H1440V30.303Z"
          fill="#FFB24F"
        />
      </svg>
      <motion.div
        ref={reviewsRef}
        initial={{ opacity: 0, y: 80 }}
        animate={isReviewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1440px] flex flex-col pl-12 py-16 gap-8 max-sm:pl-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            isReviewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-2 max-sm:items-center"
        >
          <div className="flex items-center gap-8">
            <h1 className="text-5xl font-bold italic">Our Reviews</h1>
            <a href="https://www.google.com/search?sca_esv=019dea2479866187&rlz=1C1GCEA_enSG1156SG1156&sxsrf=AE3TifNdY0iszcteeRG6Gqk33nwGJF6pug:1750755435442&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzLYllDvJBG2l2SbT9Cu4ucP0wp5DY8Gwj4tmBi4TXar3j_CMKxuj1BNLcSVfevaLy2qtY4k5GM8q6ewycWnHE-15_U9&q=Family+Mookata+Reviews&sa=X&ved=2ahUKEwiWwcWe2ImOAxXT8DgGHePvNNIQ0bkNegQIJRAE&biw=1920&bih=945&dpr=1">
              <ExternalLink className="text-blue-500 w-8 h-8" />
            </a>
          </div>
          <div className="flex gap-6">
            <p className="text-xl font-bold italic">3.9K+ Google Reviews</p>
            <div className="flex items-center gap-3">
              <p className="text-xl font-bold italic">4.9</p>
              <Star className="h-6 w-6 text-[#FFB24F] fill-[#FFB24F]" />
            </div>
          </div>
        </motion.div>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="max-sm:mx-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="basis-1/2 max-sm:basis-full">
                <Card className="h-full min-w-1/2 flex-row py-0 gap-0 transition-shadow duration-300 max-lg:flex-col">
                  <div className="w-1/2 flex flex-col py-4 gap-4 max-lg:w-full">
                    <CardHeader className="flex flex-row items-center px-4 gap-4">
                      <img
                        className="w-[60px] h-[60px] rounded-full object-cover"
                        src={review.avatar}
                      />
                      <div className="flex flex-col gap-1">
                        <CardTitle className="text-md font-semibold">
                          {review.name}
                        </CardTitle>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-6 w-6 text-[#FFB24F] fill-[#FFB24F]"
                            />
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
                          <DialogTrigger className="text-orange-600 duration-400 ease-in-out hover:cursor-pointer font-semibold hover:underline">
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
                                  <p className="text-lg font-semibold">
                                    {review.name}
                                  </p>
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
                    <img
                      className="w-full h-full rounded-xl object-cover"
                      src={review.image}
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  );
}

export default Home;
