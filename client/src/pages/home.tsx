import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import JasonSection from "@/components/JasonSection";
import Verticals from "@/components/Verticals";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Approach />
      <JasonSection />
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
