import { ArrowRight, Server, Cloud, Shield, Zap, Code, Cog, Globe, Smartphone, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const features = [
    { icon: Server, label: "Server Solutions" },
    { icon: Cloud, label: "Cloud Services" },
    { icon: Shield, label: "Security First" },
    { icon: Zap, label: "Fast Automation" },
  ];

  const services = [
   
    {
      image: "/assets/CloudComputing.jpg",
      name: "Cloud Computing"
    },
    {
      image: "/assets/Datacenter.jpg",
      name: "Server Managment"
    },
    {
      image: "/assets/appdevlopment.jpg",
      name: "App Development"
    },
    {
      image: "/assets/Software%20Development.jpg",
      name: "Software Development"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="relative min-h-screen pt-5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Trusted IT Solutions Partner
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Transform Your
              <br />
              <span className="text-primary">Business</span> with
              <br />
              <span className="hero-gradient bg-clip-text text-transparent">
                Smart Technology
              </span>
            </h1>

            <p 
              className="text-lg text-muted-foreground max-w-xl animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              True Infra Labs delivers comprehensive IT services including server management, 
              cloud automation, and custom development solutions. We help businesses scale 
              efficiently and securely.
            </p>

            <div 
              className="flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              
              <button
                onClick={() => {
                  const expertiseSection = document.querySelector('#expertise-section');
                  expertiseSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-8 py-4 bg-card text-foreground font-semibold rounded-xl border border-border hover:border-accent hover:text-accent transition-all duration-300"
              >
                View Expertise
              </button>

              <Link
                to="/contact"
                className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Feature Pills */}
            {/* <div 
              className="flex flex-wrap gap-3 pt-4 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Content - Stats Card */}
          <div 
            className="relative animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
              {/* Decorative gradient */}
              <div className="absolute -top-4 -right-4 w-24 h-24 hero-gradient rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-2xl opacity-10 blur-xl" />

              <div className="relative space-y-6">
                {/* <div className="flex items-center gap-4">
                  <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center shadow-lg">
                    <Server className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">What we Offer</h3>
                    <p className="text-muted-foreground">Expert solutions</p>
                  </div>
                </div> */}

                {/* Image Carousel */}
                <div className="relative overflow-hidden rounded-2xl bg-secondary/30 border border-border">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="min-w-full"
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p className="text-white font-semibold text-lg text-center">
                              {service.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel Navigation - Below Images */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  {/* Carousel Indicators */}
                  <div className="flex gap-2">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'w-8 bg-accent' 
                            : 'w-2 bg-border hover:bg-accent/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground text-center">
                    <span className="font-semibold text-foreground">1000+</span> businesses trust us
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--secondary))"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
