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

function NewNavbar() {
  const pathname = usePathname();

  // Map of paths to link labels
  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/newMenu", label: "Menu" },
    { href: "/newLocations", label: "Find Us" },
    { href: "/newAbout", label: "About" },
  ];

  return (
    <div className="flex justify-between z-0 max-md:px-4 max-md:py-2">
      <div className="w-full flex justify-between items-center px-16 max-md:hidden">
        <Image src="/img/logo.png" alt="Family Mookata Logo" width={100} height={100} />
        <div className="flex gap-12 text-lg overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${pathname === link.href ? "text-[#ffb24f] font-bold italic" : "hover:text-[#ffb24f] duration-300"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <Image className="md:hidden" src="/img/logo.png" alt="Family Mookata Logo" width={70} height={70} />

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
                  <a
                    key={link.href}
                    href={link.href}
                    className={`${pathname === link.href ? "text-[#ffb24f] font-bold italic" : "hover:text-[#ffb24f] duration-300"}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NewNavbar;
