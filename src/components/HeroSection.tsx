import { ArrowRight, Server, Cloud, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  const features = [
    { icon: Server, label: "Server Solutions" },
    { icon: Cloud, label: "Cloud Services" },
    { icon: Shield, label: "Security First" },
    { icon: Zap, label: "Fast Automation" },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
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
              Prakriti Associate delivers comprehensive IT services including server management, 
              cloud automation, and custom development solutions. We help businesses scale 
              efficiently and securely.
            </p>

            <div 
              className="flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-card text-foreground font-semibold rounded-xl border border-border hover:border-accent hover:text-accent transition-all duration-300">
                View Services
              </button>
            </div>

            {/* Feature Pills */}
            <div 
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
            </div>
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

              <div className="relative space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center shadow-lg">
                    <Server className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Enterprise Ready</h3>
                    <p className="text-muted-foreground">Scalable solutions</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 p-4 bg-secondary/50 rounded-xl">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="space-y-2 p-4 bg-secondary/50 rounded-xl">
                    <div className="text-3xl font-bold text-accent">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                  </div>
                  <div className="space-y-2 p-4 bg-secondary/50 rounded-xl">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                  <div className="space-y-2 p-4 bg-secondary/50 rounded-xl">
                    <div className="text-3xl font-bold text-accent">150+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-medium border-2 border-card"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">1000+</span> businesses trust us
                  </div>
                </div>
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
