import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoreServices from "@/components/CoreServices";
import Footer from "@/components/Footer";
import Expertise from "./Expertise";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        {/* <CoreServices /> */}
        <Expertise />
        <Footer/>
      </main>
    </div>
  );
};

export default Index;
