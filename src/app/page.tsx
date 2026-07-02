import AgeGate from "@/components/AgeGate";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Beers from "@/components/Beers";
import Pairings from "@/components/Pairings";
import Distribution from "@/components/Distribution";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Beers />
        <Pairings />
        <Distribution />
      </main>
      <Footer />
    </>
  );
}
