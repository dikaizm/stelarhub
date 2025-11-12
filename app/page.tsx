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
import { Urbanist } from "next/font/google";

const displayFont = Urbanist({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"]
});

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <>
      <main className="relative">
        {/* HERO SECTION */}
        <SectionItem className="pt-16 h-[40rem] sm:pt-20 z-0 relative" isContainer={false}>
          <div className="w-full h-full flex flex-col sm:flex-row justify-center sm:items-center">
            <div className="w-full sm:h-fit flex flex-col text-center items-center gap-8 sm:gap-12 px-4 sm:px-8 lg:px-24 pt-16 sm:pt-24 sm:py-16 overflow-hidden">
              <div>
                <h1 className={`"text-4xl text-center sm:text-5xl lg:text-6xl font-bold ${displayFont.className}`}>Building the Future with<br /> Code and Creativity</h1>
                <p className="text-base sm:text-lg text-gray-400 mt-4 sm:mt-8">We craft scalable web experiences and intelligent AI systems.</p>
              </div>

              <div className="flex flex-col items-center sm:flex-row gap-4">
                <PrimaryButton
                  className="px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base"
                  label="Explore Our Work"
                  iconPosition="right"
                  icon={<IoArrowForward className="text-lg sm:text-xl -rotate-45" />}
                  onClick={() => {
                    window.location.hash = 'projects';
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
                <PrimaryButton
                  className="px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base"
                  label="Get in Touch"
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                />
              </div>
            </div>
          </div>
        </SectionItem>

        {/* SERVICE SECTION */}
        <ServiceSection />

        {/* PORTFOLIO SECTION */}
        <PortfolioSection id="projects" onShowMeClick={openModal} />

        {/* ABOUT / TEAM SECTION */}
        <AboutSection />

        {/* CONTACT SECTION */}
        <ContactSection id="contact" />

      </main>
      <FooterSection />

      {/* Image Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-white text-xl font-semibold">{selectedProject.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image Slider */}
            <div className="relative">
              <div className="aspect-[16/10] bg-gray-800 flex items-center justify-center">
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  width={1200}
                  height={750}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {selectedProject.images.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-primary' : 'bg-gray-600'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-700">
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <p className="text-gray-300 text-sm mb-2">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.tech.split(', ').map((tech: string, index: number) => (
                      <span key={index} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedProject.link !== '#' && (
                  <PrimaryButton
                    label="Visit Site"
                    icon={<IoArrowForward className="text-lg -rotate-45 text-primary" />}
                    iconPosition="right"
                    variant="outline"
                    onClick={() => window.open(selectedProject.link, '_blank')}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
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
    title: "Web Development",
    description:
      "Frontend & backend architecture with responsive, scalable web applications. API design and database optimization for robust digital solutions.",
    image: "https://placehold.co/353x255",
    tags: ['Frontend', 'Backend', 'API Design', 'Database']
  },
  {
    title: "AI Engineering",
    description:
      "Machine learning model development with natural language and computer vision projects. AI-powered web integrations for intelligent applications.",
    image: "https://placehold.co/353x255",
    tags: ['Machine Learning', 'Computer Vision', 'NLP', 'TensorFlow']
  },
];

function ServiceSection() {
  return (
    <section className="w-full py-16 sm:py-24 border-t border-gray-800">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className={`text-white text-2xl sm:text-3xl font-bold mb-2 text-center ${displayFont.className}`}>What We Do</h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-10 text-center max-w-2xl">
          Our expertise spans across web development and AI engineering, delivering comprehensive digital solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-gray-800 rounded-2xl p-8 flex flex-col min-h-[340px] shadow-lg transition hover:border-primary/60 before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-80"
              style={{ overflow: 'hidden' }}
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                {/* <div className="relative w-full aspect-[4/3] mb-2">
                  <img src={service.image} alt={service.title} className="rounded-[10px] w-full h-full object-cover" />
                </div> */}
                <h3 className="text-white text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-300 text-base sm:text-lg mb-4 flex-1">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, index) => (
                    <Tag key={index} label={tag} showIcon={false} className="border-dark-15 border text-xs sm:text-sm" />
                  ))}
                </div>
                {/* <PrimaryButton
                  label="Selengkapnya"
                  icon={<IoArrowForward className="text-lg -rotate-45 text-primary" />}
                  iconPosition="right"
                  variant="outline"
                  className="text-base font-semibold mt-auto"
                /> */}
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
      <div className="container mx-auto flex flex-col items-center">
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

function PortfolioSection({ id, onShowMeClick }: { id?: string, onShowMeClick: (project: any) => void }) {
  const portfolios = [
    {
      images: [
        '/assets/portfolio/matafutsal/1.png',
        '/assets/portfolio/matafutsal/2.png',
        '/assets/portfolio/matafutsal/3.png'
      ],
      tag: 'Company Profile',
      title: 'MataFutsal',
      description:
        'Modern landing page for a futsal technology company. Designed to showcase products, services, and brand identity in a clean, responsive layout.',
      button: 'Visit Site',
      link: 'https://matafutsal.com/',
      tech: 'React.js'
    },
    {
      images: [
        '/assets/portfolio/rokade/1.png',
        '/assets/portfolio/rokade/2.png',
        '/assets/portfolio/rokade/3.png',
        '/assets/portfolio/rokade/4.png',
        '/assets/portfolio/rokade/5.png',
        '/assets/portfolio/rokade/6.png'
      ],
      tag: 'Cybersecurity Platform',
      title: 'Rokade',
      description:
        'Company profile website integrated with a smart AI DFR platform. Features LLM-based intelligence for document understanding and deployment automation.',
      button: 'Visit Site',
      link: 'https://rokade.co.id/',
      tech: 'React.js, FastAPI, Qwen LLM (self-deployed)'
    },
    {
      images: [
        '/assets/portfolio/cortex-lidm/1.png',
        '/assets/portfolio/cortex-lidm/2.png',
        '/assets/portfolio/cortex-lidm/3.png',
        '/assets/portfolio/cortex-lidm/4.png',
        '/assets/portfolio/cortex-lidm/5.png'
      ],
      tag: 'AI Education Platform',
      title: 'Cortex',
      description:
        'AI-powered platform for generating educational videos. Combines multimodal AI for script generation, voice synthesis, and video assembly.',
      button: 'Visit Site',
      link: 'https://cortex.stelarea.com/',
      tech: 'React.js, FastAPI, Gemini, ElevenLabs'
    },
    {
      images: [
        '/assets/portfolio/brin-llm-eval/1.png',
        '/assets/portfolio/brin-llm-eval/2.png',
        '/assets/portfolio/brin-llm-eval/3.png',
        '/assets/portfolio/brin-llm-eval/4.png'
      ],
      tag: 'Research Dashboard',
      title: 'BRIN LLM Evaluator',
      description:
        'Dashboard system for evaluating large language model dialogues in psychology research. Provides analytical visualization and structured evaluation workflows.',
      button: 'Private Project',
      link: '#',
      tech: 'React.js, FastAPI'
    }
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
    <section id={id} className="w-full py-16 sm:py-24 border-t border-gray-800 bg-[#10131A]">
      <div className="container mx-auto w-full sm:px-16 flex flex-col items-center">
        <h2 className={`${displayFont.className} text-white text-2xl sm:text-3xl font-bold mb-2 text-center`}>Featured Projects</h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-10 text-center max-w-2xl">
          Demonstrating our capabilities across AI engineering and web development.
        </p>
        <div className="w-full flex items-center justify-center mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolios.map((item, idx) => (
              <div key={idx} className="min-w-[340px] sm:min-w-[520px] max-w-[700px] bg-white/5 border border-gray-800 rounded-2xl shadow-lg flex flex-col h-full overflow-hidden transition hover:border-primary/60 w-full">
                <div className="w-full aspect-[16/9] bg-gray-900">
                  <Image src={item.images[0]} alt={item.title} width={800} height={450} className="w-full h-full object-cover rounded-t-2xl" />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">{item.tag}</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-base sm:text-lg mb-3 flex-1">{item.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {item.tech.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="text-sm px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {item.link !== '#' && (
                      <PrimaryButton
                        label={item.button}
                        icon={<IoArrowForward className="text-lg -rotate-45 text-primary" />}
                        iconPosition="right"
                        variant="outline"
                        className="text-base font-semibold mt-auto"
                        onClick={() => window.open(item.link, '_blank')}
                      />
                    )}

                    <PrimaryButton
                      label="Show Me"
                      iconPosition="right"
                      variant="outline"
                      className="text-base font-semibold mt-auto"
                      onClick={() => onShowMeClick(item)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="w-full py-16 sm:py-24 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className={`${displayFont.className} text-white text-2xl sm:text-3xl font-bold mb-2 text-center`}>The Team</h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-12 text-center max-w-2xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We're a small powerhouse merging engineering precision and visual storytelling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="bg-white/5 border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center">
            <Image width={200} height={200} className="w-24 h-24 rounded-full border-2 border-gray-800 mb-4" src="/assets/team-01.png" alt="Izzulhaq Mahardika" />
            <h3 className="text-white text-xl font-semibold mb-2">Izzulhaq Mahardika</h3>
            <p className="text-primary text-sm mb-4">Tech Wizard</p>
            <p className="text-gray-300 text-base mb-4">
              Backend engineer specializing in scalable systems, AI automation, and machine learning.
              Passionate about building robust architectures that power intelligent applications.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">FastAPI</span>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">Reactjs</span>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">TensorFlow</span>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">Go</span>
            </div>
          </div>
          <div className="bg-white/5 border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center">
            <Image width={200} height={200} className="w-24 h-24 rounded-full border-2 border-gray-800 mb-4" src="/assets/team-02.png" alt="Mazir Muhammad" />
            <h3 className="text-white text-xl font-semibold mb-2">Mazir Muhammad</h3>
            <p className="text-primary text-sm mb-4">Visual Crafter</p>
            <p className="text-gray-300 text-base mb-4">
              Design systems expert focused on UX/UI and visual identity.
              Transforming complex ideas into beautiful, intuitive digital experiences.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">Figma</span>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">Photoshop</span>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">Indesign</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full py-16 sm:py-24 border-t border-gray-800 bg-[#1A2236]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2 className={`${displayFont.className} text-white text-2xl sm:text-3xl font-bold mb-2 text-center`}>Let's Build Something</h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-8 text-center max-w-2xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We're open for freelance projects, research collaborations, or creative partnerships.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <PrimaryButton
            label="dikaizm@gmail.com"
            icon={<IoArrowForward className="text-lg -rotate-45 text-primary" />}
            iconPosition="right"
            variant="outline"
            onClick={() => window.location.href = 'mailto:dikaizm@gmail.com'}
          />
          <PrimaryButton
            label="WhatsApp Me"
            icon={<IoArrowForward className="text-lg -rotate-45 text-primary" />}
            iconPosition="right"
            variant="outline"
            onClick={() => window.location.href = 'https://wa.me/6285600809354'}
          />
        </div>
      </div>
    </section>
  );
}
