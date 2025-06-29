"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();

  // Map of paths to link labels
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/locations", label: "Find Us" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="flex justify-between relative z-0 max-md:px-4 max-md:py-2">
      <div className="w-full flex justify-between items-center px-16 max-md:hidden">
        <Link href="/">
          <Image src="/img/logo.png" alt="Family Mookata Logo" width={100} height={100} />
        </Link>

        <div className="flex gap-12 text-lg overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${pathname === link.href ? "text-[#ffb24f] font-bold italic" : "hover:text-[#ffb24f] duration-300"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <Link href="/">
        <Image className="md:hidden" src="/img/logo.png" alt="Family Mookata Logo" width={70} height={70} />
      </Link>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex items-center gap-4">
              <Image src="/img/logo.png" alt="Family Mookata Logo" width={70} height={70} />
              <h1 className="text-xl">Family Mookata</h1>
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col px-4 gap-8 text-lg overflow-hidden">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${pathname === link.href ? "text-[#ffb24f] font-bold italic" : "hover:text-[#ffb24f] duration-300"}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Navbar;
