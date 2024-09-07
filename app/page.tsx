import CardCTA from "@/components/Layouts/CardCTA";
import HeroSection from "./_sections/HeroSection";
import ValueSection from "./_sections/ValueSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <div className="bg-white w-full rounded-t-[2rem]">
        <ValueSection />
        <CardCTA />
      </div>
    </main>
  );
}