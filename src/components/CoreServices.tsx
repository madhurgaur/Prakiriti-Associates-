import { Server, Cog, Code, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CoreServices = () => {
  const services = [
    {
      icon: Server,
      title: "Server Management",
      description: "Expert Linux and Windows server administration and optimization.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cog,
      title: "Automation",
      description: "Streamline operations with Bash, PowerShell, and cloud automation.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-stack web and mobile app development with modern technologies.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, and Terraform infrastructure deployment and management.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="relative py-24 bg-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Core <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardHeader className="space-y-4">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg blur-xl`}
                    />
                    <div
                      className={`relative w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} p-3 flex items-center justify-center`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
