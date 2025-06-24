"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const menuData = {
  meats: {
    title: "Meat Delight",
    description:
      "Savor our premium cuts — tender pork, juicy chicken, and flavorful beef, all marinated in-house for maximum taste.",
    items: [
      { name: "Black Pepper Pork", image: "/img/menu/black_pepper_pork.jpeg" },
      { name: "Garlic Pork", image: "/img/menu/garlic_pork.jpeg" },
      { name: "Pork Belly", image: "/img/menu/pork_belly.jpeg" },
      { name: "Thai Pork", image: "/img/menu/thai_pork.jpeg" },
      { name: "Cajun Chicken", image: "/img/menu/cajun_chicken.jpeg" },
      {
        name: "Honey Tomato Chicken",
        image: "/img/menu/honey_tomato_chicken.jpeg",
      },
      { name: "Mala Chicken", image: "/img/menu/mala_chicken.jpeg" },
      { name: "Tom Yum Chicken", image: "/img/menu/tom_yum_chicken.jpeg" },
    ],
  },
  seafood: {
    title: "Seafood Delight",
    description:
      "Fresh, succulent seafood — from prawns to scallops, crab to squid — handpicked daily for the perfect grill experience.",
    items: [
      { name: "Abalone", image: "/img/menu/abalone.jpeg" },
      { name: "Blue Crayfish", image: "/img/menu/blue_crayfish.jpeg" },
      { name: "Clam", image: "/img/menu/clam.jpeg" },
      { name: "Conch Sea Snail", image: "/img/menu/conch_sea_snail.jpeg" },
      { name: "Crab", image: "/img/menu/crab.jpeg" },
      { name: "Dory", image: "/img/menu/dory.jpeg" },
      { name: "Flathead Lobster", image: "/img/menu/flathead_lobster.jpeg" },
      { name: "Halfshell Scallop", image: "/img/menu/halfshell_scallop.jpeg" },
      { name: "Mussel", image: "/img/menu/mussel.jpeg" },
      { name: "Oyster", image: "/img/menu/oyster.jpeg" },
      { name: "Patin Fish Fillet", image: "/img/menu/patin_fish_fillet.jpeg" },
      { name: "Prawn", image: "/img/menu/prawn.jpeg" },
      { name: "Razor Clam", image: "/img/menu/razor_clam.jpeg" },
      { name: "Sambal Stingray", image: "/img/menu/sambal_stingray.jpeg" },
      { name: "Squid Flower", image: "/img/menu/squid_flower.jpeg" },
      { name: "Squid Ring", image: "/img/menu/squid_ring.jpeg" },
    ],
  },
  otherFood: {
    title: "Other Food Delight",
    description:
      "A variety of sides and snacks — from cheese tofu to fish balls, quail eggs, and more — perfect for pairing with your grill.",
    items: [
      { name: "Curry Ball", image: "/img/menu/cheese_ball.jpeg" },
      { name: "Cheese Tofu", image: "/img/menu/cheese_tofu.jpeg" },
      { name: "Egg", image: "/img/menu/egg.jpeg" },
      { name: "Hotdog", image: "/img/menu/hotdog.jpeg" },
      { name: "Luncheon Meat", image: "/img/menu/luncheon_meat.jpeg" },
      { name: "Meatball", image: "/img/menu/meatball.jpeg" },
      { name: "Quail Egg", image: "/img/menu/quail_egg.jpeg" },
      { name: "Fish Filament", image: "/img/menu/fish_filament.jpeg" },
      { name: "Fishroe Ball", image: "/img/menu/fishroe_ball.jpeg" },
      { name: "Crab Ball", image: "/img/menu/crab_ball.jpeg" },
      { name: "Crab Stick", image: "/img/menu/crab_stick.jpeg" },
    ],
  },
  vegetables: {
    title: "Vegetable Delight",
    description:
      "Crisp greens, mushrooms, and fresh vegetables — the perfect balance to complete your mookata feast.",
    items: [
      { name: "Bok Choy", image: "/img/menu/bok_choy.jpeg" },
      { name: "Broccoli", image: "/img/menu/broccoli.jpeg" },
      { name: "Chinese Cabbage", image: "/img/menu/chinese_cabbage.jpeg" },
      { name: "Corn", image: "/img/menu/corn.jpeg" },
      { name: "Golden Mushroom", image: "/img/menu/golden_mushroom.jpeg" },
      { name: "Kang Kong", image: "/img/menu/kangkong.jpeg" },
      { name: "King Mushroom", image: "/img/menu/king_mushroom.jpeg" },
      { name: "Oyster Mushroom", image: "/img/menu/oyster_mushroom.jpeg" },
      { name: "Shinmeji Mushroom", image: "/img/menu/shinmeji_mushroom.jpeg" },
    ],
  },
  carbs: {
    title: "Carbo Delight",
    description:
      "Fill up with comforting carbs — noodles, and vermicelli to soak up every drop of flavor from the grill and broth.",
    items: [
      { name: "Glass Noodles", image: "/img/menu/vermicelli.jpeg" },
      { name: "Maggi", image: "/img/menu/maggi.jpeg" },
    ],
  },
};

// Strict typing
type Category = keyof typeof menuData;

function NewMenu() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("meats");
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(
    new Set<string>()
  );

  const getAllImageUrls = (): string[] => {
    const urls: string[] = [];
    Object.values(menuData).forEach((category) => {
      category.items.forEach((item) => {
        urls.push(item.image);
      });
    });
    urls.push("./img/protein.png");
    return urls;
  };

  useEffect(() => {
    const imageUrls = getAllImageUrls();
    let loadCount = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url: string): Promise<void> => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages((prev: Set<string>) => new Set([...prev, url]));
          loadCount++;
          if (loadCount === totalImages) setImagesLoaded(true);
          resolve();
        };
        img.onerror = () => {
          loadCount++;
          if (loadCount === totalImages) setImagesLoaded(true);
          resolve();
        };
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(preloadImage)).then(() => setImagesLoaded(true));
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-orange-800 mb-2">
            Loading Menu
          </h2>
          <p className="text-orange-600">
            Preparing our delicious offerings...
          </p>
          <div className="mt-4 text-sm text-orange-500">
            {loadedImages.size} / {getAllImageUrls().length} images loaded
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="relative">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 311"
          fill="none"
        >
          <defs>
            <clipPath id="clip-shape">
              <path d="M0 0L1440 133.189V258.941L0 311V0Z" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip-shape)">
            <path d="M0 0L1440 133.189V258.941L0 311V0Z" fill="#FFB24F" />
            <image
              className="w-2/3 absolute right-0"
              href="./img/protein.png"
              x="50%"
              y="-70%"
            />
          </g>
        </svg>
        <div className="flex flex-col absolute gap-2 top-[40%] left-[5%] max-lg:top-[35%] max-md:top-[30%]">
          <h1 className="text-5xl text-white font-bold italic max-lg:text-4xl">
            Our Menu
          </h1>
          <p className="text-xl text-white italic max-lg:text-lg max-md:text-base">
            Meats, seafood, vegetables & more — <br /> everything for the
            perfect grill.
          </p>
        </div>
      </div>

      <div className="h-full max-md:hidden">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col border-b-2 border-[#FFB24F] px-12 pt-12 pb-8 gap-2"
        >
          <h1 className="text-5xl font-bold italic">
            {menuData[selectedCategory].title}
          </h1>
          <p className="text-xl italic">
            {menuData[selectedCategory].description}
          </p>
        </motion.div>

        <div className="flex w-full">
          <div className="w-fit flex flex-col border-r-2 border-[#FFB24F] px-12 py-8 gap-8 max-md:hidden">
            {Object.keys(menuData).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as Category)}
                className={`text-2xl max-lg:text-lg text-left hover:cursor-pointer duration-300 ease-in-out hover:text-orange-500 transition-colors ${
                  selectedCategory === key
                    ? "font-bold text-orange-500 italic"
                    : ""
                }`}
              >
                {menuData[key as Category].title}
              </button>
            ))}
          </div>

          <div className="w-full grid grid-cols-3 py-8 px-12 gap-8">
            {menuData[selectedCategory].items.map((item, i) => (
              <motion.div
                key={`${selectedCategory}-${i}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                <Card className="h-full flex flex-col bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="px-4 pt-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full rounded-lg"
                      loading="eager"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow justify-between pt-4 pb-6">
                    <p className="text-xl font-bold text-center max-lg:text-base">
                      {item.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Accordion className="md:hidden" type="single" collapsible>
        {Object.entries(menuData).map(
          ([key, { title, description, items }]) => (
            <AccordionItem key={key} className="border-[#FFB24F]" value={key}>
              <AccordionTrigger className="items-center px-8">
                <div className="flex flex-col px-12 pt-12 pb-8 gap-2">
                  <h1 className="text-5xl font-bold italic">{title}</h1>
                  <p className="text-xl italic">{description}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8">
                <div className="grid grid-cols-2 gap-8 px-4 py-8">
                  {items.map((item, i) => (
                    <motion.div
                      key={`mobile-${key}-${i}`}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <Card className="h-fit bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden py-0 gap-0 hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="px-4 pt-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full rounded-lg"
                            loading="eager"
                          />
                        </CardHeader>
                        <CardContent className="flex justify-center pt-4 pb-6">
                          <p className="text-xl font-bold text-center">
                            {item.name}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
}

export default NewMenu;
