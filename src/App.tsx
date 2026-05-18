import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { 
  StatsBar, 
  AboutSection, 
  ServicesSection, 
  VideoBreak, 
  PortfolioSection, 
  EventSection, 
  BlogSection, 
  WhyChooseUs, 
  CTASection 
} from "./components/Sections";
import Journal from "./components/Journal";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-dark font-sans selection:bg-accent selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
        <ServicesSection />
        <VideoBreak />
        <PortfolioSection />
        <EventSection />
        <BlogSection />
        <WhyChooseUs />
        <Journal />
        <Newsletter />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

