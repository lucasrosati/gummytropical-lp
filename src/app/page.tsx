import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Lifestyle from "@/components/Lifestyle";
import ProductShowcase from "@/components/ProductShowcase";
import Benefits from "@/components/Benefits";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Countdown />
      <Lifestyle />
      <ProductShowcase />
      <Benefits />
      <FinalCta />
      <Footer />
    </main>
  );
}
