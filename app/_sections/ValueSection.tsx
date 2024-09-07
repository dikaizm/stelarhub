import { ReactNode } from "react"
import { AiFillHeart } from "react-icons/ai"
import { HiLightBulb } from "react-icons/hi"
import { RiRocket2Fill } from "react-icons/ri"

export default function ValueSection() {
  return (
    <div className="w-full py-16 container text-dark rounded-t-[2rem]">
      <h2 className="text-3xl font-extrabold text-[#0049A3]">Nilai yang Kami Pegang</h2>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <CardValue
          title="LOVE"
          description="Kami menekankan pentingnya mencintai pekerjaan yang dilakukan, peduli pada klien, dan berkomitmen untuk menciptakan solusi yang bermanfaat."
          icon={<AiFillHeart className="w-5 h-5" />}
          color={{ background: "bg-[#F96666]", icon: "text-[#F96666]" }}
        />
        <CardValue
          title="CRAFT"
          description="Kami fokus pada keahlian dan keunggulan dalam setiap detail pekerjaan. Menekankan kualitas, inovasi, dan dedikasi untuk menghasilkan produk terbaik."
          icon={<HiLightBulb className="w-5 h-5" />}
          color={{ background: "bg-[#F8B42E]", icon: "text-[#F8B42E]" }}
        />
        <CardValue
          title="ELEVATE"
          description="Kami berkomitmen untuk terus berkembang dan meningkatkan nilai bagi klien, tim, dan industri. Mendorong pertumbuhan dan perbaikan berkelanjutan."
          icon={<RiRocket2Fill className="w-5 h-5 rotate-45" />}
          color={{ background: "bg-[#009CD5]", icon: "text-[#009CD5]" }}
        />
      </div>

    </div>
  )
}

type CardValueProps = {
  title: string
  description: string
  icon: ReactNode
  color: {
    background: string
    icon: string
  }
}

function CardValue({ title, description, icon, color }: CardValueProps) {
  return (
    <div className={`${color.background} rounded-[1.5rem] p-7 text-white`}>
      <div className="flex gap-2 items-center">
        <div className={`bg-white ${color.icon} p-1.5 rounded-full`}>
          {icon}
        </div>
        <h4 className="font-bold text-xl">{title}</h4>
      </div>

      <p className="mt-4">{description}</p>
    </div>
  )
}