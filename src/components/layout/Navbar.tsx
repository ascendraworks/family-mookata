'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Find Us' }, // Changed label and assuming /locations is the "Find Us" page
  { href: '/about', label: 'About' }, // Changed label
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-90 shadow-sm sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/img/logo.png" alt="Family Mookata Logo" width={112} height={40} priority />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8"> {/* Increased space-x */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium transition-colors no-underline hover:no-underline" // Increased text size, added no-underline
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#FFA500] hover:bg-orange-100">
                  <MenuIcon className="h-7 w-7" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-[#FFF7ED] p-0">
                <SheetHeader className="p-4 border-b border-orange-200 flex flex-row justify-between items-center">
                  <SheetTitle className="text-xl font-semibold text-[#FF8C00]">Menu</SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-[#FFA500] hover:bg-orange-100">
                      <XIcon className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <div className="py-6 px-4 space-y-3">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-[#FF8C00]"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}