// src/app/page.tsx
import type { Metadata } from 'next';
import Home from '../components/page';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Affordable Family Mookata & Thai BBQ in Singapore | Family Mookata",
    description: "Enjoy the best Mookata in Singapore with Family Mookata! Delicious Thai BBQ steamboat perfect for family gatherings and group dining. Check out our menu and locations.",
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: "Family Mookata - Best Affordable Thai BBQ Steamboat in Singapore",
      description: "Join us for a delicious and fun Mookata experience. Perfect for families and friends!",
      url: '/', 
      images: [
        {
          url: '/img/og-home.png', // Create: public/img/og-home.png (1200x630)
          width: 1200,
          height: 630,
          alt: 'Family enjoying Mookata at Family Mookata restaurant',
        },
      ],
    },
    twitter: {
      title: "Family Mookata - Top Mookata Experience in Singapore",
      description: "Affordable, delicious Thai BBQ steamboat. Perfect for your next group meal!",
      images: ['/img/twitter-home.png'], // Create: public/img/twitter-home.png
    },
  };
}

export default function Page() {
  return <Home />;
}
