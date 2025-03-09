import Image from "next/image"
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

interface ProductPageProps {
   params: {
      id: string
   }
}

export default function ProductPage({ params }: ProductPageProps) {
   // Find the product by ID
   const product = products.find((p) => p.id === params.id) || products[0]

   // Get related products (excluding the current one)
   const relatedProducts = products.filter((p) => p.id !== params.id).slice(0, 4)

   return (
      <div className="container-custom py-12">
         {/* Product Details */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
               <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            <div>
               <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
               <p className="text-2xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>

               <div className="mb-8">
                  <p className="text-text-light mb-4">
                     {product.description ||
                        "Premium quality organic product, sourced from sustainable farms and delivered fresh to your doorstep."}
                  </p>
                  <p className="text-text-light">
                     Our products are carefully selected to ensure the highest quality and freshness. Enjoy the natural taste
                     and nutritional benefits of organic food.
                  </p>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">Add to Cart</button>
                  <button className="btn-secondary">Add to Wishlist</button>
               </div>
            </div>
         </div>

         {/* Related Products */}
         <div>
            <h2 className="text-2xl font-bold mb-8">Related products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
               {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                     key={relatedProduct.id}
                     id={relatedProduct.id}
                     name={relatedProduct.name}
                     price={relatedProduct.price}
                     image={relatedProduct.image}
                     description={relatedProduct.description}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

