import Link from "next/link"

export default function Footer() {
   return (
      <footer className="bg-gray-100 pt-12 pb-6">
         <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               <div>
                  <h3 className="text-xl font-bold mb-4">FreshHarvest</h3>
                  <p className="text-text-light mb-4 max-w-xs">
                     Your one-stop destination for farm-fresh produce, exotic fruits, and high-quality organic food.
                  </p>
               </div>

               <div>
                  <h4 className="text-lg font-semibold mb-4">Company</h4>
                  <ul className="space-y-2">
                     <li>
                        <Link href="/about" className="text-text-light hover:text-primary transition-colors">
                           About
                        </Link>
                     </li>
                     <li>
                        <Link href="/shop" className="text-text-light hover:text-primary transition-colors">
                           Shop
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="text-text-light hover:text-primary transition-colors">
                           Learn More
                        </Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-lg font-semibold mb-4">Support</h4>
                  <ul className="space-y-2">
                     <li>
                        <Link href="#" className="text-text-light hover:text-primary transition-colors">
                           Contact Us
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="text-text-light hover:text-primary transition-colors">
                           FAQ
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="text-text-light hover:text-primary transition-colors">
                           Privacy Policy
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="border-t border-gray-200 pt-6 text-center text-text-light">
               <p>&copy; {new Date().getFullYear()} FreshHarvest. All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}

