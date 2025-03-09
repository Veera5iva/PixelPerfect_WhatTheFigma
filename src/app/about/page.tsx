import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
   return (
      <>
         {/* Hero Section */}
         <section className="relative h-[50vh] flex items-center">
            <div className="absolute inset-0 z-0">
               <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="About FreshHarvest"
                  fill
                  priority
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <div className="container-custom relative z-10 text-white">
               <h1 className="mb-4">About</h1>
               <p className="text-lg md:text-xl">Subheading for description or instructions</p>
            </div>
         </section>

         {/* About Content */}
         <section className="section-padding">
            <div className="container-custom">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                     <Image src="/placeholder.svg?height=800&width=800" alt="About us" fill className="object-cover" />
                  </div>

                  <div>
                     <h2 className="mb-6">Our Story</h2>
                     <div className="space-y-4 text-text-light">
                        <p>
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                           laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                           commodo consequat.
                        </p>
                        <p>
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                           laborum.
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                           aliquip ex ea commodo consequat.
                        </p>
                     </div>

                     <div className="mt-8">
                        <Link href="/contact" className="btn-primary">
                           Contact us
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

