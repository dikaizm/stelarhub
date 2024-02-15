import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Image from "next/image";
import { IoIosChatbubbles } from 'react-icons/io'
import { FaHeart } from 'react-icons/fa'

import heroImg from '@/assets/images/home/hero-girl-business.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container">
      <HeroSection />

    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex flex-col py-16 max-h-[180rem]">

      <div className="mt-16 h-full flex justify-between bg-gradient-to-r from-blue-300/15 to-blue-700/30 rounded-lg overflow-hidden">
        <div className="flex flex-col justify-between w-1/2 p-12 pr-4">
          <h1 className="font-extrabold text-5xl leading-snug">Solusi Kebutuhan <span className="text-primary-light">Bisnis Anda di Era Digital</span></h1>
          <p className="leading-loose">Stelar adalah agensi digital yang menyediakan layanan <strong>jasa pembuatan website</strong> sesuai kebutuhan bisnis Anda dengan biaya terjangkau dengan kualitas terjamin.</p>

          <PrimaryButton
            label="Konsultasi Gratis"
            link="/contact"
            icon={<IoIosChatbubbles className="w-6 h-6" />}
          />
        </div>
        <div className="relative w-1/2">
          <GradientGraphic />

          <BadgeValue
            label="LOVE"
            icon={<FaHeart className="w-6 h-6 text-red-400" />}
            backgroundColor="bg-red-400"
            className="absolute top-44 left-6 z-0"
          />
          <BadgeValue
            label="CREATE"
            icon={<FaHeart className="w-6 h-6 text-orange-300" />}
            backgroundColor="bg-orange-300"
            className="absolute top-8 right-16 md:right-28 lg:right-32 xl:right-48 z-0"
          />
          <BadgeValue
            label="ELEVATE"
            icon={<FaHeart className="w-6 h-6 text-primary-light" />}
            backgroundColor="bg-primary-light"
            className="absolute top-64 right-8 xl:right-16 z-20"
          />
          <div className="absolute bottom-0 w-[24rem] left-12">
            <Image className="w-full h-full bg-contain z-10" src={heroImg} alt="Hero professional girl" />
          </div>

        </div>
      </div>

    </section>
  )
}

interface BadgeValueProps {
  label: string
  icon: React.ReactNode
  backgroundColor?: string
  textColor?: string
  className?: string
}

const BadgeValue = ({ label, icon, backgroundColor = 'bg-blue-500', textColor, className }: BadgeValueProps) => {
  return (
    <div className={className}>
      <div className={"flex items-center justify-between gap-2 w-fit p-2 pr-6 rounded-full " + backgroundColor}>
        <div className="rounded-full bg-white p-2">
          {icon}
        </div>
        <span className={"font-bold text-lg " + textColor}>{label}</span>
      </div>
    </div>
  )
}

const GradientGraphic = () => {
  return (
    <div className="relative mt-60 flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-60 before:lg:h-[360px]">
    </div>
  )
}