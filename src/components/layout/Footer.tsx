"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Phone } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/familymookata' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/familymookata' },
];

const contactNumber = '+65 1234 5678'; // Placeholder

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#FFB24F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Family Mookata</h3>
            <p className="text-sm">Cheapest Mookata in Singapore starting from ONLY $9.90</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <Link href={`tel:${contactNumber.replace(/\s/g, '')}`} className="flex items-center hover:text-orange-200 transition-colors">
              <Phone size={20} className="mr-2" />
              <span>{contactNumber}</span>
            </Link>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors">
                  <social.icon size={24} />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center md:text-right text-sm">
            <p>Made by Ascendra (Placeholder)</p>
            {/* This matches the wireframe, but you might want to change it */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-orange-400 text-center text-sm">
          <p>&copy; {currentYear} Family Mookata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
