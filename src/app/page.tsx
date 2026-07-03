import AgeGate from "@/components/AgeGate";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Pairings from "@/components/Pairings";
import Distribution from "@/components/Distribution";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Products />
        <About />
        <Pairings />
        <Distribution />
      </main>
      <Footer />
    </>
  );
}
