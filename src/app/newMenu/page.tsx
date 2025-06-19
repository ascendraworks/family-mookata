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
        { name: "Garlic Pork Slice", image: "./img/meats/garlic-pork.jpg" },
        { name: "Black Pepper Chicken", image: "./img/meats/black-pepper-chicken.jpg" },
        { name: "Beef Bulgogi", image: "./img/meats/beef-bulgogi.jpg" },
        { name: "Teriyaki Chicken", image: "./img/meats/teriyaki-chicken.jpg" },
      ],
    },
    seafood: {
      title: "Seafood",
      description: "Fresh from the ocean",
      items: [
        { name: "Tiger Prawns", image: "./img/seafood/tiger-prawns.jpg" },
        { name: "Crab Sticks", image: "./img/seafood/crab-sticks.jpg" },
        { name: "Squid Rings", image: "./img/seafood/squid-rings.jpg" },
        { name: "Sambal Clams", image: "./img/seafood/sambal-clams.jpg" },
      ],
    },
    vegetables: {
      title: "Vegetables",
      description: "Fresh and healthy choices",
      items: [
        { name: "Chinese Cabbage", image: "./img/vegetables/chinese-cabbage.jpg" },
        { name: "Golden Mushrooms", image: "./img/vegetables/golden-mushrooms.jpg" },
        { name: "Sweet Corn", image: "./img/vegetables/sweet-corn.jpg" },
        { name: "Broccoli", image: "./img/vegetables/broccoli.jpg" },
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
                <Card key={i} className="bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden">
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
