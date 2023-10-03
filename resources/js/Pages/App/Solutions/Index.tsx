import FeatureCountdown from "@/Layouts/Components/FeatureCountdown";
import Footer from "@/Layouts/Components/Footer";
import Navbar from "@/Layouts/Components/Navbar";

export default function Solutions() {
  return (
    <>
      <Navbar />

      <div>What we do untuk setiap solutions</div>

      <main>
        <section className="s-hero"></section>

        <section className="s-service-detail"></section>

        <FeatureCountdown targetDate={'2023-10-10T23:59:59'} />
      </main>

      <Footer />
    </>
  )
}
