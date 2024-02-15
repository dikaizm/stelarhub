import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Image from "next/image";
import { IoIosChatbubbles } from 'react-icons/io'
import { FaHeart } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'
import { RiRocket2Fill } from 'react-icons/ri'

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
    <section className="w-full flex flex-col py-10 xl:py-16">

      <div className="mt-16 h-full flex flex-col sm:flex-row justify-between bg-gradient-to-r from-blue-300/15 to-blue-700/30 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-8 justify-between w-full sm:w-1/2 p-8 sm:p-12 sm:pr-4">
          <h1 className="font-extrabold text-4xl leading-snug xl:text-5xl xl:leading-snug">Solusi Kebutuhan <span className="text-primary-light">Bisnis Anda di Era Digital</span></h1>
          <p className="leading-loose">Stelar adalah agensi digital yang menyediakan layanan <strong>jasa pembuatan website</strong> sesuai kebutuhan bisnis Anda dengan biaya terjangkau dengan kualitas terjamin.</p>

          <PrimaryButton
            label="Konsultasi Gratis"
            link="https://wa.me/6285600809354"
            icon={<IoIosChatbubbles className="w-6 h-6" />}
          />
        </div>
        <div className="relative w-full h-96 mt-4 sm:w-1/2 sm:h-auto sm:mt-0 sm:pt-8">
          <GradientGraphic className="absolute mt-28 sm:mt-60" />

          <BadgeValue
            label="LOVE"
            icon={<FaHeart className="w-6 h-6 text-red-400" />}
            backgroundColor="bg-red-400"
            className="absolute top-40 sm:top-44 left-6 z-0"
          />
          <BadgeValue
            label="CREATE"
            icon={<HiLightBulb className="w-6 h-6 text-orange-300" />}
            backgroundColor="bg-orange-300"
            className="absolute top-12 sm:top-12 left-1/2 -translate-x-1/2 sm:translate-x-0 md:left-28 lg:left-32 xl:left-48 z-0"
          />
          <BadgeValue
            label="ELEVATE"
            icon={<RiRocket2Fill className="w-6 h-6 text-primary-light rotate-45" />}
            backgroundColor="bg-primary-light"
            className="absolute top-72 right-6 lg:right-16 z-20"
          />
          <div className="relative -bottom-16 left-1/2 -translate-x-1/2 sm:translate-x-0 w-full sm:-bottom-8 sm:w-[20rem] xl:w-[24rem] sm:left-12">
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

const GradientGraphic = ({ className }: { className: string }) => {
  return (
    <div className={className + " flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-60 before:lg:h-[360px]"}>
    </div>
  )
}