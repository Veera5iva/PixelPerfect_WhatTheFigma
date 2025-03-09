import Image from "next/image"

interface FeatureCardProps {
   title: string
   description: string
   icon?: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
   return (
      <div className="flex flex-col items-center text-center">
         {icon && (
            <div className="mb-4 relative w-16 h-16">
               <Image src={icon || "/placeholder.svg"} alt={title} fill className="object-contain" />
            </div>
         )}
         <h3 className="text-xl font-semibold mb-2">{title}</h3>
         <p className="text-text-light">{description}</p>
      </div>
   )
}

