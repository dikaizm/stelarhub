import CardCTA from "@/components/Layouts/CardCTA";
import HeroSection from "./_sections/HeroSection";
import ValueSection from "./_sections/ValueSection";
import Footer from "@/components/Layouts/Footer";
import PortfolioSection from "./_sections/PortfolioSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      <div className="bg-white w-full rounded-[2rem]">
        <ValueSection />
        <PortfolioSection />
        <CardCTA />
      </div>

      <Footer />
    </main>
  );
}