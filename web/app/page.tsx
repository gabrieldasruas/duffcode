import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import VideoSection from "@/components/VideoSection";
import { About, Process, Footer } from "@/components/Sections";
import Testimonials from "@/components/Testimonials";
import QuoteWizard from "@/components/QuoteWizard";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Um único elemento raiz (não um fragmento): o Next rola até o topo dele ao navegar entre páginas.
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <About />
        <VideoSection />
        <Process />
        <Testimonials />
        <QuoteWizard />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
