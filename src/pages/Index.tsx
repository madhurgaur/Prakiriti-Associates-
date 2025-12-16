import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoreServices from "@/components/CoreServices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CoreServices />
        <Footer/>
      </main>
    </div>
  );
};

export default Index;
