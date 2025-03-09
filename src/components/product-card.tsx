import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
   id: string
   name: string
   price: number
   image: string
   description?: string
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
   return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
         <Link href={`/shop/${id}`}>
            <div className="relative h-64 w-full">
               <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div className="p-4">
               <h3 className="font-semibold text-lg mb-1">{name}</h3>
               {description && <p className="text-text-light text-sm mb-2">{description}</p>}
               <p className="font-bold text-primary">${price.toFixed(2)}</p>
            </div>
         </Link>
      </div>
   )
}

