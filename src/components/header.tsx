"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
   const pathname = usePathname(); // Get current route

   // Hide Header on login page
   if (pathname === "/login") return null;

   return (
      <header className="bg-white shadow-sm sticky top-0 z-50 h-[164px]">
         <div className="container-custom py-4 flex justify-between items-center h-[164px]">
            <Link href="/" className="text-[32px] text-primary font-medium">
               FreshHarvest
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 md:justify-center md:items-center">
               {/* Show "Home" link only if NOT on "/" */}
               {pathname !== "/" && (
                  <Link
                     href="/"
                     className={`font-medium transition-colors text-[20px] ${pathname === "/" ? "text-primary font-bold" : "hover:text-primary"}`}
                  >
                     Home
                  </Link>
               )}

               <Link
                  href="/about"
                  className={`font-medium transition-colors text-[20px] ${pathname === "/about" ? "text-primary font-bold" : "hover:text-primary"}`}
               >
                  About Us
               </Link>

               <Link
                  href="/shop"
                  className={`font-medium transition-colors text-[20px] ${pathname === "/shop" ? "text-primary font-bold" : "hover:text-primary"}`}
               >
                  Shop
               </Link>

               <Link
                  href="/login"
                  className="font-medium text-[16px] bg-black text-white py-[14px] px-6 rounded-lg hover:bg-gray-800 transition-colors"
               >
                  Login
               </Link>
            </nav>
         </div>
      </header>
   );
}
