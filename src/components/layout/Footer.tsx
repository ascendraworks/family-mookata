"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next Image
import { Facebook, Instagram, Phone } from 'lucide-react';
import SocialLinksModal from './SocialLinksModal'; // Import the modal

const mainContactNumber = '+65 8927 2782';
const bedokContactNumber = '+65 8188 4738';

// This structure will be used for the modal later
const socialPlatforms = [
  {
    platform: 'Facebook',
    icon: Facebook,
    ariaLabel: 'Family Mookata on Facebook',
    branches: [
      { name: 'Yishun', href: 'https://www.facebook.com/familymookata/' },
      { name: 'Bedok', href: 'https://www.facebook.com/FMBedok/' },
      { name: 'Ang Mo Kio', href: 'https://www.facebook.com/people/Family-Mookata-Amk/61568832784561/?_rdr/' }, 
    ]
  },
  {
    platform: 'Instagram',
    icon: Instagram,
    ariaLabel: 'Family Mookata on Instagram',
    branches: [
      { name: 'Yishun', href: 'https://www.instagram.com/family_mookata_yishun/?hl=en' },
      { name: 'Bedok', href: 'https://www.instagram.com/familymookatabedok/?locale=sl&hl=af' },
      { name: 'Ang Mo Kio', href: 'https://www.instagram.com/family_mookata_amk/?hl=en' },
    ]
  },
  {
    platform: 'TikTok',
    icon: '/tiktok.svg', // Path to the SVG
    isSvg: true, // Flag to indicate it's an SVG path
    ariaLabel: 'Family Mookata on TikTok',
    branches: [
      { name: 'Yishun', href: 'https://www.tiktok.com/@familymookata_yishun' },
      { name: 'Bedok', href: 'https://www.tiktok.com/@familymookatabedo' },
      { name: 'Ang Mo Kio', href: 'https://www.tiktok.com/@familymookata_amk' },
    ]
  }
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<typeof socialPlatforms[0] | null>(null);

  const openModal = (platform: typeof socialPlatforms[0]) => {
    setSelectedPlatform(platform);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlatform(null);
  };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#FFB24F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Family Mookata</h3>
            <p className="text-sm">Cheapest Mookata Buffet in Singapore starting from ONLY $9.90</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex flex-col items-center text-center">
              <Link href={`tel:${mainContactNumber.replace(/\s/g, '')}`} className="flex items-center hover:text-orange-200 transition-colors">
                <Phone size={20} className="mr-2" />
                <span>{mainContactNumber} (AMK & Yishun Branch)</span>
              </Link>
              <Link href={`tel:${bedokContactNumber.replace(/\s/g, '')}`} className="flex items-center hover:text-orange-200 transition-colors text-sm mt-1">
                <Phone size={16} className="mr-2" />
                <span>{bedokContactNumber} (Bedok Branch)</span>
              </Link>
            </div>
            <div className="flex space-x-4 pt-2">
              {socialPlatforms.map((social) => (
                // Will change this to a button to trigger modal in next step
                <button
                  key={social.platform}
                  onClick={() => openModal(social)}
                  aria-label={social.ariaLabel}
                  className="hover:text-orange-200 transition-colors"
                >
                  {social.isSvg ? (
                    <Image src={social.icon as string} alt={social.platform} width={24} height={24} className="filter invert brightness-0" />
                  ) : (
                    <social.icon size={24} />
                  )}
                  <span className="sr-only">{social.platform}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="text-center md:text-right text-sm">
            <p>Made by Ascendra</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-orange-400 text-center text-sm">
          <p>&copy; {currentYear} Family Mookata. All rights reserved.</p>
        </div>
      </div>
      {selectedPlatform && (
        <SocialLinksModal
          isOpen={isModalOpen}
          onClose={closeModal}
          platformName={selectedPlatform.platform}
          branchLinks={selectedPlatform.branches}
          platformIcon={selectedPlatform.icon}
          isPlatformIconSvg={selectedPlatform.isSvg}
        />
      )}
    </footer>
  );
}
