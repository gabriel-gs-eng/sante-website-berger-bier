import AgeGate from "@/components/AgeGate";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CommunityStrip from "@/components/CommunityStrip";
import Distribution from "@/components/Distribution";
import SellWithUs from "@/components/SellWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Products />
        <About />
        <Testimonials />
        <CommunityStrip />
        <Distribution />
        <SellWithUs />
      </main>
      <Footer />
    </>
  );
}
