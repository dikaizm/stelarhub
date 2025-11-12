'use client'

import Footer from "@/components/Layouts/Footer";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Image from "next/image"
import SectionItem from "@/components/Layouts/SectionItem";
import { IoArrowForward, IoCheckmark } from "react-icons/io5";
import { FaStore, FaChartLine, FaUsers, FaLightbulb, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from 'react';

import heroImg from '@/assets/images/light-ray.png'
import stelarLogo from '@/assets/logo/stelar.svg';
import FooterSection from "@/components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* HERO SECTION */}
        <SectionItem className="pt-16 sm:pt-20 min-h-screen sm:h-screen sm:container z-0 relative" isContainer={false}>
          <div className="w-full h-full flex flex-col sm:flex-row justify-between">
            <div className="w-full sm:h-fit flex flex-col justify-center items-start gap-8 sm:gap-16 px-4 sm:px-8 lg:px-16 pt-16 sm:pt-24 sm:py-16 overflow-hidden">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">AI untuk Revolusi Bisnis Digital</h1>
                <p className="text-base sm:text-lg text-gray-400 mt-4 sm:mt-8">Maksimalkan potensi bisnis Anda dengan solusi berbasis AI yang dapat mengoptimalkan proses, meningkatkan efisiensi, dan memberikan keputusan yang lebih cerdas.</p>
              </div>

              <PrimaryButton className="px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base" label="Solusi Kami" iconPosition="right" icon={
                <IoArrowForward className="text-lg sm:text-xl -rotate-45" />
              } />

              <div className="relative mask-fade overflow-hidden w-full">
                <div className="flex flex-wrap gap-2 sm:gap-4 max-h-[calc(2*2.5rem)] overflow-x-auto hide-scrollbar snap-x pb-2">
                  <Tag label="Data Analytics" />
                  <Tag label="Prediction" />
                  <Tag label="Computer Vision" />
                  <Tag label="Scraping" />
                  <Tag label="Frontend" />
                  <Tag label="Backend" />
                  <Tag label="UI/UX Design" />
                  <Tag label="Social Media" />
                  <Tag label="SEO" />
                  <Tag label="Brand Strategy" />
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[48rem] h-full relative sm:border-l border-gray-800 px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
              <div className="relative h-full w-full z-10 gap-4 sm:gap-6 flex flex-col justify-end">
                <div className="flex -space-x-3 sm:-space-x-4">
                  <Image width={200} height={200} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" unoptimized />
                  <Image width={200} height={200} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/men/44.jpg" alt="User 2" unoptimized />
                  <Image width={200} height={200} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/women/50.jpg" alt="User 3" unoptimized />
                  <Image width={200} height={200} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/men/60.jpg" alt="User 4" unoptimized />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold">Eksplor 1000+ insight AI</h2>
                  <p className="mt-2 text-sm sm:text-base text-gray-400">Lebih dari 1.000 artikel tentang tren teknologi terbaru dan terobosan inovatif.</p>
                </div>

                <PrimaryButton
                  label="Eksplor Insights"
                  icon={<IoArrowForward className="text-xl -rotate-45 text-primary" />}
                  iconPosition="right"
                  variant="outline">
                </PrimaryButton>
              </div>

              <Image className="absolute top-0 left-0 z-0" src={heroImg} alt="Hero Image" />
            </div>
          </div>
        </SectionItem>

        <InsightsCardsSection />

        {/* SERVICE SECTOIN */}
        <ServiceSection />

        {/* KONSULTASI AI SECTION */}
        <ConsultingStepsSection />

        {/* PORTFOLIO SECTION */}
        <PortfolioSection />

      </main>
      <FooterSection />
    </>
  );
}

function Tag({ label, showIcon = true, className }: { label: string, showIcon?: boolean, className?: string }) {
  return (
    <div className={`bg-[#0A0A0B] flex items-center gap-2 text-white px-3 py-1 rounded-full whitespace-nowrap ${className}`}>
      {showIcon && <IoCheckmark className="text-sm" />}
      <p className="text-sm">{label}</p>
    </div>
  )
}

const insights = [
  { title: "Otomatisasi Alur Kerja", icon: <FaStore /> },
  { title: "Analisis Prediktif", icon: <FaChartLine /> },
  { title: "Peningkatan Interaksi Pelanggan", icon: <FaUsers /> },
  { title: "Strategi Berbasis Data", icon: <FaLightbulb /> }
];

function InsightsCardsSection() {
  return (
    <section className="w-full py-16 sm:py-24 border-t border-gray-800 bg-[#1A2236] z-10 relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2 text-center">Insight AI untuk Bisnis</h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-10 text-center max-w-2xl">
          Temukan berbagai insight dan tren AI yang dapat membantu bisnis Anda berkembang lebih cepat dan efisien.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-gray-800 rounded-2xl p-8 flex flex-col min-h-[220px] shadow-lg transition hover:border-primary/60 before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-80"
              style={{ overflow: 'hidden' }}
            >
              <div className="relative z-10 flex flex-col items-start gap-4 h-full">
                <div className="border rounded-full p-2 border-indigo-700">
                  <div className="text-indigo-400 text-2xl">{insight.icon}</div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-1 mt-2">{insight.title}</h3>
                <PrimaryButton
                  label="Lihat Detail"
                  icon={<IoArrowForward className="text-lg -rotate-45 text-primary" />}
                  iconPosition="right"
                  variant="outline"
                  className="text-base font-semibold mt-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Manfaatkan kekuatan AI untuk mengoptimalkan operasi bisnis Anda. Automasi proses, prediksi tren, dan analisis data berbasis AI untuk pengambilan keputusan yang lebih cerdas.",
    image: "https://placehold.co/353x255",
    tags: ['Data Analytics', 'Prediction', 'Computer Vision']
  },
  {
    title: "Web & App Development",
    description:
      "Pengembangan website dan aplikasi yang dapat membantu bisnis Anda hadir secara online dengan solusi yang efektif dan efisien. Fokus pada desain responsif, pengalaman pengguna yang mulus, dan integrasi yang aman.",
    image: "https://placehold.co/353x255",
    tags: ['Frontend', 'Backend', 'UI/UX Design']
  },
  {
    title: "Smart Digital Marketing",
    description:
      "Strategi pemasaran digital berbasis data yang meningkatkan engagement dan konversi. Memanfaatkan SEO, iklan digital, dan social media analytics untuk hasil optimal.",
    image: "https://placehold.co/353x255",
    tags: ['Social Media', 'SEO', 'Brand Strategy']
  },
];

function ServiceSection() {
  return (
    <section className="w-full py-16 sm:py-24 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2 text-center">Layanan Unggulan</h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-10 text-center max-w-2xl">
          Jelajahi berbagai solusi inovatif yang dapat membantu bisnis Anda berkembang di era digital. Setiap layanan dirancang untuk memberikan dampak maksimal melalui teknologi terkini.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-gray-800 rounded-2xl p-8 flex flex-col min-h-[340px] shadow-lg transition hover:border-primary/60 before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-80"
              style={{ overflow: 'hidden' }}
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="relative w-full aspect-[4/3] mb-2">
                  <img src={service.image} alt={service.title} className="rounded-[10px] w-full h-full object-cover" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-300 text-base sm:text-lg mb-4 flex-1">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, index) => (
                    <Tag key={index} label={tag} showIcon={false} className="border-dark-15 border text-xs sm:text-sm" />
                  ))}
                </div>
                <PrimaryButton
                  label="Selengkapnya"
                  icon={<IoArrowForward className="text-lg -rotate-45 text-primary" />}
                  iconPosition="right"
                  variant="outline"
                  className="text-base font-semibold mt-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultingStepsSection() {
  const steps = [
    {
      title: "Konsultasi Awal",
      description: "Diskusikan kebutuhan dan tantangan bisnis Anda bersama tim ahli kami untuk memahami solusi AI yang paling sesuai.",
    },
    {
      title: "Analisis & Rekomendasi",
      description: "Kami akan menganalisis proses bisnis Anda dan memberikan rekomendasi solusi AI yang dapat diimplementasikan.",
    },
    {
      title: "Perencanaan & Penawaran",
      description: "Dapatkan rencana implementasi beserta estimasi waktu dan biaya yang transparan sesuai kebutuhan perusahaan Anda.",
    },
    {
      title: "Implementasi & Dukungan",
      description: "Tim kami akan mendampingi proses integrasi solusi AI hingga berjalan optimal, serta memberikan pelatihan dan dukungan teknis.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 border-t border-gray-800 mt-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2 text-center">Langkah Konsultasi AI untuk Perusahaan Anda</h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-10 text-center max-w-2xl">
          Ikuti langkah mudah berikut untuk mendapatkan solusi AI yang tepat dan berdampak bagi bisnis Anda.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 border border-gray-800 rounded-2xl p-8 flex flex-col min-h-[260px] shadow-lg transition hover:border-primary/60 before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-80"
              style={{ overflow: 'hidden' }}
            >
              <div className="relative z-10">
                <div className="text-primary font-semibold text-base mb-2">Langkah {String(idx + 1).padStart(2, '0')}</div>
                <h3 className="text-white text-xl font-semibold mb-3 leading-snug">{step.title}</h3>
                <p className="text-gray-300 text-base sm:text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const portfolios = [
    {
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      tag: 'Fintech AI',
      title: 'Platform Prediksi Saham',
      description: 'Sistem berbasis AI untuk memprediksi pergerakan harga saham dan memberikan insight investasi secara real-time.',
      button: 'Lihat Detail Proyek',
      link: 'https://nextrend.stelarhub.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      tag: 'AgriTech',
      title: 'Prediksi Hasil Pertanian',
      description: 'Platform AI yang membantu petani dan perusahaan agrikultur memprediksi hasil panen secara akurat dan efisien.',
      button: 'Lihat Detail Proyek',
      link: 'https://www.google.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80',
      tag: 'Computer Vision',
      title: 'Deteksi Kerusakan Jalan',
      description: 'Solusi deteksi otomatis kerusakan jalan menggunakan AI dan computer vision untuk mendukung perbaikan infrastruktur.',
      button: 'Lihat Detail Proyek',
      link: 'https://www.google.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
      tag: 'EdTech AI',
      title: 'Platform Edukasi AI',
      description: 'Platform pembelajaran berbasis AI yang mempersonalisasi materi dan pengalaman belajar untuk setiap pengguna.',
      button: 'Lihat Detail Proyek',
      link: 'https://www.google.com'
    },
  ];

  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 2;
  const total = portfolios.length;

  const getVisible = () => {
    // Infinite loop logic
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(portfolios[(startIdx + i) % total]);
    }
    return arr;
  };

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + total) % total);
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % total);
  };

  return (
    <section className="w-full py-16 sm:py-24 border-t border-gray-800 bg-[#10131A] container">
      <div className="w-full px-4 sm:px-16 flex flex-col items-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2 text-center">Portofolio Proyek AI</h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-10 text-center max-w-2xl">
          Beberapa contoh solusi AI yang telah kami kembangkan untuk berbagai industri.
        </p>
        <div className="w-full flex items-center justify-center mb-8">
          <div className="flex gap-8 w-full justify-center">
            {getVisible().map((item, idx) => (
              <div key={idx} className="min-w-[340px] sm:min-w-[520px] max-w-[700px] bg-white/5 border border-gray-800 rounded-2xl shadow-lg flex flex-col h-full overflow-hidden transition hover:border-primary/60 w-full">
                <div className="w-full aspect-[16/9] bg-gray-900">
                  <Image src={item.image} alt={item.title} width={800} height={450} className="w-full h-full object-cover rounded-t-2xl" unoptimized />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">{item.tag}</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-base sm:text-lg mb-4 flex-1">{item.description}</p>
                  <PrimaryButton
                    label={item.button}
                    icon={<IoArrowForward className="text-lg -rotate-45 text-primary" />}
                    iconPosition="right"
                    variant="outline"
                    className="text-base font-semibold mt-auto"
                    onClick={() => window.open(item.link, '_blank')}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-6 justify-center items-center mt-2">
          <button
            aria-label="Sebelumnya"
            onClick={handlePrev}
            className="bg-white/10 hover:bg-primary/30 text-white rounded-full p-3 shadow transition"
          >
            <IoArrowForward className="rotate-180 text-2xl" />
          </button>
          <button
            aria-label="Berikutnya"
            onClick={handleNext}
            className="bg-white/10 hover:bg-primary/30 text-white rounded-full p-3 shadow transition"
          >
            <IoArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
