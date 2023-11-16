import FeatureCountdown from "@/Layouts/Components/FeatureCountdown";
import Footer from "@/Layouts/Components/Footer";
import Navbar from "@/Layouts/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Solutions() {
  return (
    <>
      <Head title="Solusi Kami" />
      <Navbar />

      <main>
        {/* <div>What we do untuk setiap solutions</div> */}

        {/* <section className="s-hero"></section>
        <section className="s-service-detail"></section> */}

        <section>
          <h3>Solusi Kami</h3>
          <div>
            <h4>Website Development</h4>
            <span>Menciptakan Pengalaman Digital</span>
            <p>Layanan pengembangan web kami menjadi pusat layanan kami. Kami mengerti bahwa situs web Anda sering menjadi titik pertama interaksi dengan audiens. Oleh karena itu, kami fokus pada pembuatan situs web yang memukau, ramah pengguna, dan responsif, yang tidak hanya menarik, tetapi juga konversi. Mulai dari platform e-commerce hingga situs web korporat, tim pengembang ahli kami siap membantu Anda.</p>

            <h4>Branding</h4>
            <span>Membentuk Identitas Unik Brand</span>
            <p>Merek Anda adalah cerita Anda, dan kami di sini untuk membantu Anda menceritakannya. Para ahli branding kami akan bekerja sama dengan Anda untuk mendefinisikan dan menyempurnakan identitas merek Anda, menciptakan kehadiran yang unik dan tak terlupakan di ranah digital. Baik Anda memulai dari awal atau mencari penyegaran merek, kami akan memastikan merek Anda bersinar terang.</p>

            <h4>Analisis Data</h4>
            <span>Membuat Keputusan Penting Berdasarkan Data</span>
            <p>Di dunia yang didorong oleh data saat ini, kesuksesan bergantung pada kemampuan Anda untuk memanfaatkan kekuatan informasi. Layanan analitika data Stelar menawarkan wawasan mendalam tentang perilaku pelanggan, tren, dan peluang. Kami mengubah data mentah menjadi kecerdasan yang dapat diambil tindakan, memungkinkan Anda membuat keputusan yang terinformasi untuk mendorong bisnis Anda ke depan.</p>
          </div>
        </section>

        <FeatureCountdown targetDate={'2023-10-23T23:59:59'} />
      </main>

      <Footer />
    </>
  )
}
