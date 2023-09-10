import HeroSection from "@/components/HeroSection/HeroSection";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contact/Contact";
import Portfolio from "@/components/Portfolio/Portfolio";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Portfolio />
      <Contact />
    </>
  );
}
