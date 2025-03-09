import Link from "next/link"
export default function Header() {

   return (
      <header className="bg-white shadow-sm sticky top-0 z-50 h-[164px]">
         <div className="container-custom py-4 flex justify-between items-center h-[164px]">
            <Link href="/" className="text-[32px] text-primary font-medium">
               FreshHarvest
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 md:justify-center md: items-center">
               <Link href="/" className="font-medium hover:text-primary transition-colors text-[20px]">
                  Home
               </Link>
               <Link href="/about" className="font-medium hover:text-primary transition-colors text-[20px]">
                  About Us
               </Link>
               <Link href="/shop" className="font-medium hover:text-primary transition-colors text-[20px]">
                  Shop
               </Link>
               <Link href="/login" className="font-medium hover:text-primary transition-colors text-[16px] bg-black text-white py-[14px] px-6 rounded-lg">
                  Login
               </Link>
            </nav>

            {/* Mobile Menu Button */}
            {/* <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button> */}
         </div>

         {/* Mobile Navigation */}
         <div className="md:hidden bg-white py-4 px-6 shadow-md">
            <nav className="flex flex-col space-y-4">
               <Link
                  href="/"
                  className="font-medium hover:text-primary transition-colors"
               >
                  Home
               </Link>
               <Link
                  href="/shop"
                  className="font-medium hover:text-primary transition-colors"
               >
                  Shop
               </Link>
               <Link
                  href="/about"
                  className="font-medium hover:text-primary transition-colors"
               >
                  About
               </Link>
               <Link
                  href="/login"
                  className="font-medium hover:text-primary transition-colors"
               >
                  Login
               </Link>
            </nav>
         </div>
      </header>
   )
}

