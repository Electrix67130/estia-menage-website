import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Cta from "@/components/sections/Cta";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
