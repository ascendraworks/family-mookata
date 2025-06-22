"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const menuData = {
  meats: {
    title: "Meats",
    description: "Premium pork, beef, and chicken cuts",
    items: [
      { name: "Black Pepper Pork", image: "/img/menu/black_pepper_pork.jpeg" },
      { name: "Cajun Chicken", image: "/img/menu/cajun_chicken.jpeg" },
      { name: "Cheese Ball", image: "/img/menu/cheese_ball.jpeg" },
      { name: "Cheese Tofu", image: "/img/menu/cheese_tofu.jpeg" },
      { name: "Dory", image: "/img/menu/dory.jpeg" },
      { name: "Egg", image: "/img/menu/egg.jpeg" },
      { name: "Garlic Pork", image: "/img/menu/garlic_pork.jpeg" },
      { name: "Honey Tomato Chicken", image: "/img/menu/honey_tomato_chicken.jpeg" },
      { name: "Hotdog", image: "/img/menu/hotdog.jpeg" },
      { name: "Luncheon Meat", image: "/img/menu/luncheon_meat.jpeg" },
      { name: "Maggi", image: "/img/menu/maggi.jpeg" },
      { name: "Mala Chicken", image: "/img/menu/mala_chicken.jpeg" },
      { name: "Meatball", image: "/img/menu/meatball.jpeg" },
      { name: "Pork Belly", image: "/img/menu/pork_belly.jpeg" },
      { name: "Quail Egg", image: "/img/menu/quail_egg.jpeg" },
      { name: "Sambal Stingray", image: "/img/menu/sambal_stingray.jpeg" },
      { name: "Thai Pork", image: "/img/menu/thai_pork.jpeg" },
      { name: "Tom Yum Chicken", image: "/img/menu/tom_yum_chicken.jpeg" },
    ],
  },
  seafood: {
    title: "Seafood",
    description: "Fresh from the ocean",
    items: [
      { name: "Abalone", image: "/img/menu/abalone.jpeg" },
      { name: "Blue Crayfish", image: "/img/menu/blue_crayfish.jpeg" },
      { name: "Clam", image: "/img/menu/clam.jpeg" },
      { name: "Conch Sea Snail", image: "/img/menu/conch_sea_snail.jpeg" },
      { name: "Crab Ball", image: "/img/menu/crab_ball.jpeg" },
      { name: "Crab Stick", image: "/img/menu/crab_stick.jpeg" },
      { name: "Crab", image: "/img/menu/crab.jpeg" },
      { name: "Fish Filament", image: "/img/menu/fish_filament.jpeg" },
      { name: "Fishroe Ball", image: "/img/menu/fishroe_ball.jpeg" },
      { name: "Flathead Lobster", image: "/img/menu/flathead_lobster.jpeg" },
      { name: "Halfshell Scallop", image: "/img/menu/halfshell_scallop.jpeg" },
      { name: "Mussel", image: "/img/menu/mussel.jpeg" },
      { name: "Oyster", image: "/img/menu/oyster.jpeg" },
      { name: "Patin Fish Fillet", image: "/img/menu/patin_fish_fillet.jpeg" },
      { name: "Prawn", image: "/img/menu/prawn.jpeg" },
      { name: "Razor Clam", image: "/img/menu/razor_clam.jpeg" },
      { name: "Squid Flower", image: "/img/menu/squid_flower.jpeg" },
      { name: "Squid Ring", image: "/img/menu/squid_ring.jpeg" },
    ],
  },
  vegetables: {
    title: "Vegetables",
    description: "Fresh and healthy choices",
    items: [
      { name: "Bok Choy", image: "/img/menu/bok_choy.jpeg" },
      { name: "Broccoli", image: "/img/menu/broccoli.jpeg" },
      { name: "Chinese Cabbage", image: "/img/menu/chinese_cabbage.jpeg" },
      { name: "Corn", image: "/img/menu/corn.jpeg" },
      { name: "Golden Mushroom", image: "/img/menu/golden_mushroom.jpeg" },
      { name: "Kangkong", image: "/img/menu/kangkong.jpeg" },
      { name: "King Mushroom", image: "/img/menu/king_mushroom.jpeg" },
      { name: "Oyster Mushroom", image: "/img/menu/oyster_mushroom.jpeg" },
      { name: "Shinmeji Mushroom", image: "/img/menu/shinmeji_mushroom.jpeg" },
      { name: "Vermicelli", image: "/img/menu/vermicelli.jpeg" },
    ],
  },
};

function newMenu() {
  const [selectedCategory, setSelectedCategory] = useState<"meats" | "seafood" | "vegetables">("meats");

  return (
    <div className="flex flex-col">
      {/* Banner */}
      <div className="relative">
        <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 311" fill="none">
          <defs>
            <clipPath id="clip-shape">
              <path d="M0 0L1440 133.189V258.941L0 311V0Z" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip-shape)">
            <path d="M0 0L1440 133.189V258.941L0 311V0Z" fill="#FFB24F" />
            <image className="absolute right-0" href="./img/banner.png" x="45%" y="-90%" />
          </g>
        </svg>
        <div className="flex flex-col absolute gap-2 top-[40%] left-[5%] max-lg:top-[35%] max-md:top-[30%]">
          <h1 className="text-5xl text-white font-bold italic max-lg:text-4xl">Our Menu</h1>
          <p className="text-xl text-white italic max-lg:text-lg max-md:text-base">Premium meats & fresh seafood</p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="max-md:hidden">
        {/* Title Section */}
        <div className="flex flex-col border-b-2 border-[#FFB24F] px-12 pt-12 pb-8 gap-2">
          <h1 className="text-5xl font-bold italic">{menuData[selectedCategory].title}</h1>
          <p className="text-xl italic">{menuData[selectedCategory].description}</p>
        </div>

        {/* Sidebar + Cards */}
        <div className="flex w-full">
          {/* Sidebar */}
          <div className="w-fit flex flex-col border-r-2 border-[#FFB24F] px-12 py-8 gap-8 max-md:hidden">
            {Object.keys(menuData).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as any)}
                className={`text-2xl max-lg:text-lg text-left hover:text-orange-500 transition-colors ${
                  selectedCategory === key ? "font-bold text-orange-500 italic" : ""
                }`}
              >
                {menuData[key as keyof typeof menuData].title}
              </button>
            ))}
          </div>

          {/* Item Cards */}
          <div className="w-full grid grid-cols-4 py-8 px-12 gap-8 max-lg:grid-cols-3">
            {menuData[selectedCategory].items.map((item, i) => (
                <Card key={i} className="bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden py-0 gap-0">
                    <CardHeader className="px-4 pt-4">
                        <img
                        src={item.image}
                        alt={item.name}
                        className="w-full rounded-lg aspect-square object-cover"
                        />
                    </CardHeader>
                    <CardContent className="flex justify-center pt-4 pb-6">
                    <p className="text-xl font-bold text-center max-lg:text-base">{item.name}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View (Accordion) */}
      <Accordion className="md:hidden" type="single" collapsible>
        {Object.entries(menuData).map(([key, { title, description, items }]) => (
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
                   <Card key={i} className="bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden">
                    <CardHeader className="px-4 pt-4">
                        <img
                        src={item.image}
                        alt={item.name}
                        className="w-full rounded-lg aspect-square object-cover"
                        />
                    </CardHeader>
                    <CardContent className="flex justify-center pt-4 pb-6">
                        <p className="text-xl font-bold text-center">{item.name}</p>
                    </CardContent>
                 </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default newMenu;
