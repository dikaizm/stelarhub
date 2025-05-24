import Link from 'next/link';
import { FaRobot } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[#10131A] flex flex-col items-center justify-center py-24 px-4">
      <div className="flex flex-col items-center max-w-lg text-center">
        <div className="bg-primary/10 text-primary rounded-full p-6 mb-6">
          <FaRobot className="text-6xl" />
        </div>
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">Halaman Tidak Ditemukan</h1>
        <p className="text-gray-300 text-lg mb-8">Oops! Halaman yang kamu cari tidak tersedia.<br />Saya, asisten AI Stelarhub, siap membantu kamu kembali ke beranda atau menjelajahi insight menarik lainnya.</p>
        <Link href="/" className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-lg text-base shadow transition">
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
} 