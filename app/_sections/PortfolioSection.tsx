import Image, { StaticImageData } from 'next/image'

import { portfolioData } from './store/portfolio'

export default function PortfolioSection() {
  return (
    <div className="py-16 text-dark container">
      <h2 className="font-bold text-3xl sm:text-4xl">Lihat lebih dekat karya-karya kami yang mengesankan!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8 mt-12">
        {portfolioData.map((portfolio, index) => {
          return (
            <CardPortfolio key={index} {...portfolio} />
          )
        })}

      </div>
    </div>
  )
}

export type CardPortfolioProps = {
  title: string
  description: string
  tags: string[]
  img: string | StaticImageData
}

function CardPortfolio({ title, description, tags, img }: CardPortfolioProps) {
  return (
    <div className="bg-blue-50 rounded-[1.5rem] overflow-hidden flex flex-col justify-between">
      <div className="p-7">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="mt-4 text-gray-500">{description}</p>

        <div className='flex flex-wrap gap-2 mt-8'>
          {tags.map((tag, index) => {
            return (
              <div key={index} className='border rounded-full px-2 py-1 text-sm font-medium text-slate-500'>{tag}</div>
            )
          })}
        </div>
      </div>

      <div className="w-full aspect-[1/1] rounded-[1.5rem] overflow-hidden">
        <Image className='w-full h-full object-cover' src={img} width={400} height={300} alt={title} />
      </div>
    </div>
  )
}