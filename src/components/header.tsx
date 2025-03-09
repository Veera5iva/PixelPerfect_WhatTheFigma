"use client"
import Link from "next/link"
import { useState } from "react"
// import { Menu, X } from "lucide-react"

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
         <div className="container-custom py-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-2xl text-primary">
               FreshHarvest
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
               <Link href="/" className="font-medium hover:text-primary transition-colors">
                  Home
               </Link>
               <Link href="/shop" className="font-medium hover:text-primary transition-colors">
                  Shop
               </Link>
               <Link href="/about" className="font-medium hover:text-primary transition-colors">
                  About
               </Link>
               <Link href="/login" className="font-medium hover:text-primary transition-colors">
                  Login
               </Link>
            </nav>

            {/* Mobile Menu Button */}
            {/* <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button> */}
         </div>

         {/* Mobile Navigation */}
         {isMenuOpen && (
            <div className="md:hidden bg-white py-4 px-6 shadow-md">
               <nav className="flex flex-col space-y-4">
                  <Link
                     href="/"
                     className="font-medium hover:text-primary transition-colors"
                     onClick={() => setIsMenuOpen(false)}
                  >
                     Home
                  </Link>
                  <Link
                     href="/shop"
                     className="font-medium hover:text-primary transition-colors"
                     onClick={() => setIsMenuOpen(false)}
                  >
                     Shop
                  </Link>
                  <Link
                     href="/about"
                     className="font-medium hover:text-primary transition-colors"
                     onClick={() => setIsMenuOpen(false)}
                  >
                     About
                  </Link>
                  <Link
                     href="/login"
                     className="font-medium hover:text-primary transition-colors"
                     onClick={() => setIsMenuOpen(false)}
                  >
                     Login
                  </Link>
               </nav>
            </div>
         )}
      </header>
   )
}

