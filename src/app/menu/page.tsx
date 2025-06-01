"use client"; // Removed as generateMetadata needs to be server-side

import React, { useEffect, useState } from 'react';
import type { Metadata } from 'next'; // Added for generateMetadata
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight } from 'lucide-react';

const menuCategories = [
  {
    name: "Meat Delight",
    items: [
      { name: "Garlic Pork Slice", price: "", imgSrc: "/img/menu/garlic-pork-slice.jpg" },
      { name: "Black Pepper Pork Slice", price: "", imgSrc: "/img/menu/black-pepper-pork-slice.jpg" },
      { name: "Thai Marinated Pork", price: "", imgSrc: "/img/menu/thai-marinated-pork.jpg" },
      { name: "Pork Belly", price: "", imgSrc: "/img/menu/pork-belly.jpg" },
      { name: "Basil Chicken Thigh", price: "", imgSrc: "/img/menu/basil-chicken.jpg" },
      { name: "Pork Bulgogi", price: "", imgSrc: "/img/menu/pork-bulgogi.jpg" },
      { name: "Garlic Chicken Thigh", price: "", imgSrc: "/img/menu/garlic-chicken.jpg" },
      { name: "Thai Marinated Chicken Thigh", price: "", imgSrc: "/img/menu/thai-chicken.jpg" },
      { name: "Lemongrass Chicken Thigh", price: "", imgSrc: "/img/menu/lemongrass-chicken.jpg" },
      { name: "Honey Tomato Chicken Thigh", price: "", imgSrc: "/img/menu/honey-tomato-chicken.jpg" },
      { name: "Mala Chicken Thigh", price: "", imgSrc: "/img/menu/mala-chicken.jpg" },
    ],
  },
  {
    name: "Seafood Delight",
    items: [
      { name: "Flower Clam", price: "", imgSrc: "/img/menu/flower-clam.jpg" },
      { name: "Prawn", price: "", imgSrc: "/img/menu/prawn.jpg" },
      { name: "Mussel", price: "", imgSrc: "/img/menu/mussel.jpg" },
      { name: "Abalone Slice", price: "", imgSrc: "/img/menu/abalone-slice.jpg" },
      { name: "Squid Ring", price: "", imgSrc: "/img/menu/squid-ring.jpg" },
      { name: "Dory Slice", price: "", imgSrc: "/img/menu/dory-slice.jpg" },
      { name: "Squid Flower", price: "", imgSrc: "/img/menu/squid-flower.jpg" },
      { name: "Patin Fish Fillet", price: "", imgSrc: "/img/menu/patin-fish.jpg" },
    ],
  },
  {
    name: "Other Food Delight",
    items: [
      { name: "Luncheon Meat Slice", price: "", imgSrc: "/img/menu/luncheon-meat.jpg" },
      { name: "Chicken Xiao Bai Cai", price: "", imgSrc: "/img/menu/xiao-bai-cai.jpg" },
      { name: "Broccoli", price: "", imgSrc: "/img/menu/broccoli.jpg" },
      { name: "King Mushroom", price: "", imgSrc: "/img/menu/king-mushroom.jpg" },
      { name: "Potato Slice", price: "", imgSrc: "/img/menu/potato-slice.jpg" },
      { name: "Sweet Corn", price: "", imgSrc: "/img/menu/sweet-corn.jpg" },
      { name: "Shimeiji Mushroom", price: "", imgSrc: "/img/menu/shimeiji-mushroom.jpg" },
    ],
  },
  {
    name: "Vegetable Delight",
    items: [
      { name: "Chinese Cabbage", price: "", imgSrc: "/img/menu/chinese-cabbage.jpg" },
      { name: "Enoki Mushroom", price: "", imgSrc: "/img/menu/enoki-mushroom.jpg" },
    ],
  },
  {
    name: "Carbo Delight",
    items: [
      { name: "Rice", price: "", imgSrc: "/img/menu/rice.jpg" },
      { name: "Maggie", price: "", imgSrc: "/img/menu/maggie.jpg" },
    ],
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Mookata Menu - Affordable Thai BBQ & Steamboat | Family Mookata",
    description: "Explore Family Mookata's extensive menu featuring fresh meats, seafood, vegetables, and our signature Thai BBQ steamboat. Perfect for family and group dining in Singapore.",
    keywords: ["mookata menu", "thai bbq menu", "steamboat ingredients", "affordable mookata prices", "family mookata menu", "singapore mookata buffet"],
    alternates: {
      canonical: '/menu',
    },
    openGraph: {
      title: "Family Mookata Menu - Delicious Thai BBQ & Steamboat",
      description: "Wide selection of fresh ingredients for the best Mookata experience in Singapore.",
      url: '/menu',
      images: [
        {
          url: '/img/og-menu.png', // Create: public/img/og-menu.png (1200x630) - e.g., a collage or banner
          width: 1200,
          height: 630,
          alt: 'Family Mookata Menu Items Collage',
        },
      ],
    },
    twitter: {
      title: "Explore the Family Mookata Menu - Singapore",
      description: "Fresh meats, seafood, and more for your Thai BBQ steamboat feast!",
      images: ['/img/twitter-menu.png'], // Create: public/img/twitter-menu.png
    },
  };
}

export default function MenuPage() {
  "use client"; // Add "use client" here as the component itself uses client-side hooks
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.name || null);
  const [openMobileCategory, setOpenMobileCategory] = useState(menuCategories[0]?.name || null);
  const [clipPath, setClipPath] = useState('polygon(0 0, 100% 55%, 100% 85%, 0 100%)');

  useEffect(() => {
    const updateClipPath = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setClipPath('polygon(0 0, 100% 15%, 100% 80%, 0 100%)');
      } else {
        setClipPath('polygon(0 0, 100% 55%, 100% 85%, 0 100%)');
      }
    };
    updateClipPath();
    window.addEventListener('resize', updateClipPath);
    return () => window.removeEventListener('resize', updateClipPath);
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const toggleMobileCategory = (categoryName: string) => {
    setOpenMobileCategory(openMobileCategory === categoryName ? null : categoryName);
  };

  const currentItems = menuCategories.find(cat => cat.name === activeCategory)?.items || [];

  return (
    <div className="bg-[#FFF7ED] text-[#333333] overflow-visible">
      <section className="relative w-full text-white h-[400px] overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full w-full z-10 flex justify-between items-center px-4 sm:px-6 md:px-16"
          style={{ clipPath, backgroundColor: '#FFB24F' }}
        >
        <div className="
  absolute
  top-[15%]            // mobile default
  sm:top-[30%]         // ≥640px
  md:top-[33%]         // ≥768px
  left-4
  sm:left-[10%]
  md:left-[8%]
  max-w-xl z-20
">

          <h1 className="text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-[1.2] font-bold">
          Full Menu. Full Bellies.
          </h1>

          <p className="text-base sm:text-lg md:text-2xl leading-snug md:leading-relaxed mt-2">
          Premium meats, fresh seafood, and local favorites
          </p>
          </div>



          <div className="relative w-full h-full z-10">
            <Image
              src="/img/banner.png"
              alt="Delicious Mookata grill with various fresh ingredients at Family Mookata"
              width={650} // Provide appropriate base width
              height={400} // Provide appropriate base height
              className="absolute top-[80%] sm:top-[50%] md:top-[60%] right-[-150px] sm:right-[-100px] -translate-y-[40%] w-[400px] sm:w-[500px] md:w-[650px] max-w-none object-contain drop-shadow-xl pointer-events-none"
              priority // This is likely an LCP element for this page
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="md:hidden mb-8">
          {menuCategories.map((category) => (
            <div key={category.name} className="border-b border-orange-200">
              <button
                onClick={() => { toggleMobileCategory(category.name); setActiveCategory(category.name); }}
                className="w-full flex justify-between items-center py-4 px-2 text-xl font-semibold text-gray-700 hover:bg-orange-50"
              >
                {category.name}
                {openMobileCategory === category.name ? <ChevronDown className="h-6 w-6 text-orange-500" /> : <ChevronRight className="h-6 w-6 text-orange-500" />}
              </button>
              {openMobileCategory === category.name && (
                <div className="py-4 px-2 grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white">
                  {category.items.map((item) => (
                    <div key={item.name} className="text-center p-2 rounded-lg shadow hover:shadow-md transition-shadow">
                      <div className="relative h-32 w-full mb-2 rounded overflow-hidden bg-gray-200">
                        <Image src={item.imgSrc} alt={`Image of ${item.name} - Family Mookata menu item`} fill className="object-cover" />
                      </div>
                      <h4 className="text-sm font-medium text-gray-800">{item.name}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex gap-8">
          <aside className="w-1/4 lg:w-1/5 border-r border-orange-200 pr-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
            <nav>
              <ul className="space-y-2">
                {menuCategories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => handleCategoryClick(category.name)}
                      className={`w-full text-left px-3 py-2.5 rounded-md text-lg font-medium transition-colors ${activeCategory === category.name ? 'bg-orange-300 text-white shadow-md' : 'text-gray-600 hover:bg-orange-100 hover:text-orange-600'}`}
                    >
                      <ChevronRight className={`inline h-5 w-5 mr-2 transition-transform ${activeCategory === category.name ? 'rotate-90' : ''}`} />
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="w-3/4 lg:w-4/5">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{activeCategory || "Menu Items"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentItems.map((item) => (
                <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow text-center">
                  <div className="relative h-48 w-full bg-gray-200">
                    <Image src={item.imgSrc} alt={`Image of ${item.name} - Family Mookata menu item`} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
