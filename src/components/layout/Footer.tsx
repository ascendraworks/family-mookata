"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Instagram, Facebook } from "lucide-react";
import SocialLinksModal from "./SocialLinksModal";

const mainContactNumber = "+65 8927 2782";
const bedokContactNumber = "+65 8188 4738";

const socialPlatforms = [
  {
    platform: "Facebook",
    icon: Facebook,
    ariaLabel: "Family Mookata on Facebook",
    branches: [
      { name: "Yishun", href: "https://www.facebook.com/familymookata/" },
      { name: "Bedok", href: "https://www.facebook.com/FMBedok/" },
      {
        name: "Ang Mo Kio",
        href: "https://www.facebook.com/people/Family-Mookata-Amk/61568832784561/?_rdr/",
      },
    ],
  },
  {
    platform: "Instagram",
    icon: Instagram,
    ariaLabel: "Family Mookata on Instagram",
    branches: [
      {
        name: "Yishun",
        href: "https://www.instagram.com/family_mookata_yishun/?hl=en",
      },
      {
        name: "Bedok",
        href: "https://www.instagram.com/familymookatabedok/?locale=sl&hl=af",
      },
      {
        name: "Ang Mo Kio",
        href: "https://www.instagram.com/family_mookata_amk/?hl=en",
      },
    ],
  },
  {
    platform: "TikTok",
    icon: "/tiktok.svg",
    isSvg: true,
    ariaLabel: "Family Mookata on TikTok",
    branches: [
      { name: "Yishun", href: "https://www.tiktok.com/@familymookata_yishun" },
      { name: "Bedok", href: "https://www.tiktok.com/@familymookatabedo" },
      { name: "Ang Mo Kio", href: "https://www.tiktok.com/@familymookata_amk" },
    ],
  },
];

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<
    (typeof socialPlatforms)[0] | null
  >(null);

  const openModal = (platform: (typeof socialPlatforms)[0]) => {
    setSelectedPlatform(platform);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlatform(null);
  };

  return (
    <div className="h-1/3 w-full flex justify-between bg-[#FFB24F] px-12 py-8 max-sm:flex-col max-sm:gap-8 text-white">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold italic">Family Mookata</h1>
        <p className="text-xl">
          Cheapest Mookata Buffet in Singapore starting from{" "}
          <span className="text-orange-500 font-bold italic">ONLY</span> $9.90
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Phone />
          <div>
            <p>{mainContactNumber} (AMK & Yishun)</p>
            <p>{bedokContactNumber} (Bedok)</p>
          </div>
        </div>

        {socialPlatforms.map((platform) => (
          <button
            key={platform.platform}
            onClick={() => openModal(platform)}
            aria-label={platform.ariaLabel}
            className="flex gap-4 items-center hover:text-orange-200 transition-colors"
          >
            {platform.isSvg ? (
              <Image
                src={platform.icon as string}
                alt={platform.platform}
                width={24}
                height={24}
                className="invert"
              />
            ) : (
              <platform.icon size={24} />
            )}
            <p>{platform.platform}</p>
          </button>
        ))}
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
    </div>
  );
}

export default Footer;
