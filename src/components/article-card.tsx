import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
   title: string
   excerpt: string
   image: string
   slug: string
}

export default function ArticleCard({ title, excerpt, image, slug }: ArticleCardProps) {
   return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
         <Link href={`/blog/${slug}`}>
            <div className="relative h-48 w-full">
               <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            <div className="p-4">
               <h3 className="font-semibold text-lg mb-2">{title}</h3>
               <p className="text-text-light text-sm">{excerpt}</p>
            </div>
         </Link>
      </div>
   )
}

