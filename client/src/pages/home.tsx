import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Enterprise from "@/components/Enterprise";
import Approach from "@/components/Approach";
import JasonSection from "@/components/JasonSection";
import Verticals from "@/components/Verticals";
import IntelligenceAgents from "@/components/IntelligenceAgents";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Enterprise />
      <Approach />
      <JasonSection />
      <Verticals />
      <IntelligenceAgents />
      <Technologies />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
