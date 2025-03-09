import Image from "next/image"
import Link from "next/link"
import { FeatureCard, TestimonialCard, ArticleCard } from "@/components"

export default function Home() {
   return (
      <>
         {/* Hero Section */}
         <section className="relative h-[80vh] flex items-center">
            <div className="absolute inset-0 z-0">
               <Image
                  src="/placeholder.svg?height=1080&width=1920"
                  alt="Fresh organic produce"
                  fill
                  priority
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <div className="container-custom relative z-10 text-white">
               <div className="max-w-2xl">
                  <h1 className="mb-4">Fresh & Organic Food</h1>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">Delivered to Your Doorstep</h2>
                  <p className="text-lg md:text-xl mb-8">
                     Your one-stop destination for farm-fresh produce, exotic fruits, and high-quality organic food.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <Link href="/shop" className="btn-primary">
                        Shop Now
                     </Link>
                     <Link
                        href="/about"
                        className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10"
                     >
                        Learn More
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         {/* Featured Categories Section */}
         <section className="section-padding bg-background-light">
            <div className="container-custom">
               <h2 className="text-center mb-12">Discover Freshness in Every Bite</h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FeatureCard
                     title="Handpicked Fruits"
                     description="Juicy and delicious seasonal picks."
                     icon="/placeholder.svg?height=64&width=64"
                  />
                  <FeatureCard
                     title="Delicious Beverages"
                     description="Taste the richness of homemade juices and natural drinks."
                     icon="/placeholder.svg?height=64&width=64"
                  />
                  <FeatureCard
                     title="Gourmet & Essentials"
                     description="Premium dairy, nuts, and healthy snacks."
                     icon="/placeholder.svg?height=64&width=64"
                  />
               </div>
            </div>
         </section>

         {/* Benefits Section */}
         <section className="section-padding">
            <div className="container-custom">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FeatureCard
                     title="Premium Quality"
                     description="We ensure the highest quality standards with farm-to-table freshness"
                     icon="/placeholder.svg?height=64&width=64"
                  />
                  <FeatureCard
                     title="Sustainably Sourced"
                     description="Our products come from sustainable farming practices for a healthier planet."
                     icon="/placeholder.svg?height=64&width=64"
                  />
                  <FeatureCard
                     title="Fast & Reliable Delivery"
                     description="Get your groceries delivered fresh and on time, every time."
                     icon="/placeholder.svg?height=64&width=64"
                  />
               </div>

               <div className="mt-12 text-center">
                  <Link href="/shop" className="btn-primary">
                     Shop Now
                  </Link>
               </div>
            </div>
         </section>

         {/* Featured Article Section */}
         <section className="section-padding bg-background-light">
            <div className="container-custom">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2 className="mb-4">The Secret to Eating Healthy & Fresh</h2>
                     <p className="mb-6">Organic food benefits your health and the environment.</p>
                     <Link href="/blog/healthy-eating" className="btn-secondary">
                        Learn More
                     </Link>
                  </div>
                  <div className="relative h-80 w-full rounded-lg overflow-hidden">
                     <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Healthy organic food"
                        fill
                        className="object-cover"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* Why Choose Us Section */}
         <section className="section-padding">
            <div className="container-custom">
               <h2 className="text-center mb-12">Why Choose Us?</h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                        <span className="text-xl font-bold">1</span>
                     </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-2">High-Quality, Fresh Ingredients</h3>
                        <p className="text-text-light">
                           We source only the freshest, organic ingredients to ensure the best quality.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                        <span className="text-xl font-bold">2</span>
                     </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-2">A Taste of Luxury & Comfort</h3>
                        <p className="text-text-light">
                           Enjoy artisanal, handcrafted baked goods and fresh produce, perfect for every occasion.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Testimonials Section */}
         <section className="section-padding bg-background-light">
            <div className="container-custom">
               <h2 className="text-center mb-12">What Our Customers Say</h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <TestimonialCard quote="Absolutely love the fresh produce and quick delivery!" />
                  <TestimonialCard quote="Their organic fruits are the best I've ever tasted!" />
                  <TestimonialCard quote="Highly recommend for anyone looking for quality groceries" />
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="section-padding bg-primary text-white">
            <div className="container-custom text-center">
               <h2 className="mb-6">Join Us for a Healthier Lifestyle!</h2>
               <Link href="/shop" className="btn-secondary bg-white text-primary hover:bg-gray-100 border-white">
                  Shop Now
               </Link>
            </div>
         </section>

         {/* Related Articles Section */}
         <section className="section-padding">
            <div className="container-custom">
               <h2 className="text-center mb-12">Related articles or posts</h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ArticleCard
                     title="5 Benefits of Organic Food"
                     excerpt="Discover how organic food can improve your health and wellbeing."
                     image="/placeholder.svg?height=400&width=600"
                     slug="benefits-of-organic-food"
                  />
                  <ArticleCard
                     title="Store Fruits Properly"
                     excerpt="Learn the best ways to store different fruits to maintain freshness."
                     image="/placeholder.svg?height=400&width=600"
                     slug="store-fruits-properly"
                  />
               </div>
            </div>
         </section>
      </>
   )
}

