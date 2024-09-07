import PrimaryButton from "@/components/Buttons/PrimaryButton"
import { IoIosChatbubbles } from "react-icons/io"
import Image from "next/image"

import heroImg from '@/assets/images/home/hero-girl-business.png'

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col py-10 xl:py-16 container h-screen">

      <div className="mt-16 h-full sm:h-[38rem] flex flex-col sm:flex-row justify-between bg-gradient-to-r from-blue-300/15 to-blue-700/30 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-8 justify-between w-full sm:w-[55%] p-8 sm:p-12 sm:pr-4">
          <div className="flex flex-col gap-8">
            <h1 className="font-extrabold text-4xl leading-snug xl:text-5xl xl:leading-snug">Solusi Kebutuhan <span className="text-primary-light">Bisnis Anda di Era Digital</span></h1>
            <p className="leading-loose">Stelar adalah agensi digital yang menyediakan layanan <strong>jasa pembuatan website</strong> sesuai kebutuhan bisnis Anda dengan biaya terjangkau dengan kualitas terjamin.</p>
          </div>

          <PrimaryButton
            label="Konsultasi Gratis"
            link="https://wa.me/6285600809354"
            icon={<IoIosChatbubbles className="w-6 h-6" />}
          />
        </div>
        <div className="relative shrink-0 w-full sm:w-[45%] sm:h-full sm:mt-0 sm:pt-8">
          <GradientGraphic className="absolute mt-28 sm:mt-60" />
          <Image className="w-full sm:max-w-[28rem] sm:absolute left-1/2 sm:-translate-x-1/2 z-10 sm:bottom-0" src={heroImg} alt="Hero professional girl" />
        </div>
      </div>

    </section>
  )
}

// interface BadgeValueProps {
//   label: string
//   icon: React.ReactNode
//   backgroundColor?: string
//   textColor?: string
//   className?: string
// }

// const BadgeValue = ({ label, icon, backgroundColor = 'bg-blue-500', textColor, className }: BadgeValueProps) => {
//   return (
//     <div className={className}>
//       <div className={"flex items-center justify-between gap-2 w-fit p-2 pr-6 rounded-full " + backgroundColor}>
//         <div className="rounded-full bg-white p-2">
//           {icon}
//         </div>
//         <span className={"font-bold text-lg " + textColor}>{label}</span>
//       </div>
//     </div>
//   )
// }

const GradientGraphic = ({ className }: { className: string }) => {
  return (
    <div className={className + " flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-60 before:lg:h-[360px]"}>
    </div>
  )
}