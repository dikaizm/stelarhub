import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface CaseStudyCardProps {
    title: string
    brand: string
    description: string
    image: string
    href?: string
}

const CaseStudyCard = ({ title, brand, description, image, href = '#' }: CaseStudyCardProps) => {
    return (
        <Link href={href} className="group flex flex-col h-full bg-slate-50 hover:bg-slate-100 rounded-2xl overflow-hidden transition-all duration-300 p-4">
            {/* Image Container */}
            <div className="relative w-full aspect-[8/10] overflow-hidden rounded-xl">
                <Image
                    src={image}
                    alt={`${brand} - ${title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-3 pt-6">
                <h3 className="text-2xl font-bold text-text mb-1 group-hover:text-primary transition-colors">
                    {brand}
                </h3>
                <p className="text-text-muted font-medium mb-4">
                    {title}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto flex items-center text-primary font-semibold text-sm">
                    Read Case Study
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    )
}

export default CaseStudyCard
