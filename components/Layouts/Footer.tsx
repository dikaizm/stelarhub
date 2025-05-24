import Image from 'next/image'
import stelarLogo from '@/assets/logo/stelar.svg'
import { RiRocket2Fill } from 'react-icons/ri'
import PrimaryButton from '../Buttons/PrimaryButton'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <>
      <CTASection />

      <footer className="w-full border-t border-gray-800 pt-16 pb-4 px-4 sm:px-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 justify-between items-start md:items-stretch">
          {/* Left: Logo & Newsletter */}
          <div className="flex flex-col gap-6 md:w-1/4">
            <div className="flex items-center gap-2">
              <a href="/" className="h-12 w-auto">
                <Image className="w-full h-full bg-contain" src={stelarLogo} alt="logo" />
              </a>
            </div>
            <form className="flex items-center bg-[#18181C] rounded-lg px-4 py-2 w-full max-w-xs border border-gray-800">
              <span className="text-gray-400 mr-2">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none" /><path d="M22 6l-10 7L2 6" /></svg>
              </span>
              <input type="email" placeholder="Enter Your Email" className="bg-transparent outline-none text-white flex-1 placeholder:text-gray-400" />
              <button type="submit" className="ml-2 text-primary hover:text-primary-light">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </button>
            </form>
          </div>
          {/* Center: Navigation Columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Beranda</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Home</a></li>
                <li><a href="#" className="hover:text-primary">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-primary">Tim Kami</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Layanan AI</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Solusi AI untuk Bisnis</a></li>
                <li><a href="#" className="hover:text-primary">Konsultasi AI</a></li>
                <li><a href="#" className="hover:text-primary">Implementasi & Integrasi</a></li>
                <li><a href="#" className="hover:text-primary">Pelatihan AI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Insight & Berita</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Artikel AI</a></li>
                <li><a href="#" className="hover:text-primary">Berita Teknologi</a></li>
                <li><a href="#" className="hover:text-primary">Studi Kasus</a></li>
                <li><a href="#" className="hover:text-primary">Event & Webinar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Portofolio</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Proyek AI</a></li>
                <li><a href="#" className="hover:text-primary">Testimoni Klien</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Kontak</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="w-full border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-8">
          <div className="text-gray-400 text-xs">©2024 Stelarhub. All Rights Reserved. <span className="mx-2">·</span> <a href="#" className="hover:text-primary">Terms & Conditions</a></div>
          <div className="flex gap-4">
            <a href="#" className="bg-[#18181C] hover:bg-primary/20 text-white rounded-full p-2"><FaFacebookF className="w-4 h-4" /></a>
            <a href="#" className="bg-[#18181C] hover:bg-primary/20 text-white rounded-full p-2"><FaLinkedinIn className="w-4 h-4" /></a>
            <a href="#" className="bg-[#18181C] hover:bg-primary/20 text-white rounded-full p-2"><FaTwitter className="w-4 h-4" /></a>
            <a href="#" className="bg-[#18181C] hover:bg-primary/20 text-white rounded-full p-2"><FaYoutube className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

function CTASection() {
  return (
    <section className="w-full bg-[#1A2236] border-t border-gray-800 py-16 sm:py-24 mt-8 px-4 sm:px-12 relative overflow-hidden">
      {/* Subtle Globe Network SVG Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <circle cx="350" cy="350" r="340" stroke="#22A8E0" strokeOpacity="0.15" strokeWidth="2" />
          <circle cx="350" cy="350" r="250" stroke="#22A8E0" strokeOpacity="0.10" strokeWidth="2" />
          <circle cx="350" cy="350" r="160" stroke="#22A8E0" strokeOpacity="0.08" strokeWidth="2" />
          <circle cx="350" cy="350" r="80" stroke="#22A8E0" strokeOpacity="0.06" strokeWidth="2" />

        </svg>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex-1">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">Mulai Transformasi Bisnis Anda dengan AI</h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl">Tingkatkan efisiensi dan daya saing perusahaan Anda dengan solusi AI dari Stelarhub. Konsultasikan kebutuhan bisnis Anda dan temukan layanan AI yang tepat untuk pertumbuhan optimal.</p>
        </div>
        <a
          href="https://wa.me/6285600809354"
          className="mt-6 sm:mt-0 bg-primary hover:bg-primary-light text-white font-semibold text-base px-8 py-4 rounded-lg shadow transition whitespace-nowrap"
        >
          Konsultasi Sekarang
        </a>
      </div>
    </section>
  );
}