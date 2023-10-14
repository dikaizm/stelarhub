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

        <FeatureCountdown targetDate={'2023-10-23T23:59:59'} />
      </main>

      <Footer />
    </>
  )
}
