import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components"

// Mock data for products
const products = [
   { id: "1", name: "Handpicked premium pears", price: 10.99, image: "/placeholder.svg?height=400&width=400" },
   {
      id: "2",
      name: "Fruits",
      price: 10.99,
      image: "/placeholder.svg?height=400&width=400",
      description: "A delicate blend of fresh fruits for a balanced taste",
   },
   { id: "3", name: "Mushrooms", price: 10.99, image: "/placeholder.svg?height=400&width=400" },
   { id: "4", name: "Organic Gourmet Mushroom", price: 10.99, image: "/placeholder.svg?height=400&width=400" },
   {
      id: "5",
      name: "Fresh Pears",
      price: 10.99,
      image: "/placeholder.svg?height=400&width=400",
      description: "Sweet and juicy organic pears",
   },
   {
      id: "6",
      name: "Radish Greens",
      price: 10.99,
      image: "/placeholder.svg?height=400&width=400",
      description: "Crisp and fresh garden radishes",
   },
   {
      id: "7",
      name: "Watermelon",
      price: 10.99,
      image: "/placeholder.svg?height=400&width=400",
      description: "Refreshing, naturally sweet",
   },
   {
      id: "8",
      name: "Organic Mushrooms",
      price: 10.99,
      image: "/placeholder.svg?height=400&width=400",
      description: "Rich flavor, perfect for cooking",
   },
]

export default function ShopPage() {
   return (
      <>
         {/* Hero Section */}
         <section className="relative h-[50vh] flex items-center">
            <div className="absolute inset-0 z-0">
               <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Fresh produce"
                  fill
                  priority
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <div className="container-custom relative z-10 text-white">
               <h1 className="mb-4">Shop Fresh & Organic</h1>
               <p className="text-lg md:text-xl mb-6">Explore our selection of premium fresh and organic products</p>
            </div>
         </section>

         {/* Seasonal Picks Section */}
         <section className="section-padding">
            <div className="container-custom">
               <div className="flex justify-between items-end mb-8">
                  <div>
                     <h2 className="mb-2">Seasonal Picks</h2>
                     <p className="text-text-light">A subheading for this section, as long or as short as you like</p>
                  </div>
                  <Link href="#" className="text-primary font-semibold hover:underline">
                     Learn More
                  </Link>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.slice(0, 4).map((product) => (
                     <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                     />
                  ))}
               </div>
            </div>
         </section>

         {/* Why Shop With Us Section */}
         <section className="section-padding bg-background-light">
            <div className="container-custom">
               <h2 className="text-center mb-12">Why Shop With Us?</h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                     <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <span className="text-2xl font-bold">1</span>
                     </div>
                     <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                     <p className="text-text-light">Our products are environmentally friendly.</p>
                  </div>

                  <div className="text-center">
                     <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <span className="text-2xl font-bold">2</span>
                     </div>
                     <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                     <p className="text-text-light">Every product goes through rigorous quality checks before reaching you</p>
                  </div>

                  <div className="text-center">
                     <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <span className="text-2xl font-bold">3</span>
                     </div>
                     <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                     <p className="text-text-light">We ensure the best and freshest produce every day</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Best Sellers Section */}
         <section className="section-padding">
            <div className="container-custom">
               <div className="flex justify-between items-end mb-8">
                  <div>
                     <h2 className="mb-2">Best Sellers</h2>
                     <p className="text-text-light">A subheading for this section, as long or as short as you like</p>
                  </div>
                  <Link href="#" className="text-primary font-semibold hover:underline">
                     Learn More
                  </Link>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.slice(4, 8).map((product) => (
                     <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                     />
                  ))}
               </div>
            </div>
         </section>
      </>
   )
}

