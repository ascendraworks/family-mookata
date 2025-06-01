// src/app/menu/page.tsx
import type { Metadata } from 'next';
import MenuPageClient from '@/components/pages/MenuPageClient'; // Ensure this path is correct

// Data can be defined here or fetched if it were dynamic
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
          url: '/img/og-menu.png', // Create: public/img/og-menu.png (1200x630)
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

export default function Page() {
  return <MenuPageClient menuCategories={menuCategories} />;
}
