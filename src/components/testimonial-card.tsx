interface TestimonialCardProps {
   quote: string
   author?: string
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
   return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
         <p className="italic text-text mb-4">{quote}</p>
         {author && <p className="font-semibold text-text-light">- {author}</p>}
      </div>
   )
}

