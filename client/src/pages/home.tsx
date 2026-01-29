import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Verticals from "@/components/Verticals";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
//import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Approach />
      <Verticals />
      <Technologies />
      <Projects />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
