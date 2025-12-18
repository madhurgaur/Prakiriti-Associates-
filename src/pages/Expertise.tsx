import { 
  Code, 
  Cloud, 
  Cog, 
  Shield, 
  Database, 
  Server,
  Smartphone,
  Globe,
  Lock,
  BarChart3,
  Building2,
  CheckCircle2,
  ArrowRight,
  Layers,
  GitBranch,
  Container,
  MonitorPlay,
  FileCode2,
  Cpu,
  HardDrive,
  Workflow
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Code,
      title: "Web & App Development",
      description: "Enterprise-grade applications built with modern frameworks and industry best practices.",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Flutter", "React Native"],
      outcomes: [
        "Reduced time-to-market by 40%",
        "Scalable architecture for growth",
        "Cross-platform compatibility"
      ],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      description: "Strategic cloud migration and infrastructure optimization for operational excellence.",
      technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
      outcomes: [
        "30% reduction in infrastructure costs",
        "99.9% uptime SLA achievement",
        "Auto-scaling for traffic peaks"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Cog,
      title: "DevOps & Automation",
      description: "Streamlined CI/CD pipelines and infrastructure automation for rapid deployment cycles.",
      technologies: ["Jenkins", "GitLab CI", "Ansible", "Terraform", "PowerShell", "Bash"],
      outcomes: [
        "Deploy frequency increased 10x",
        "Recovery time reduced to minutes",
        "Zero-downtime deployments"
      ],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security posture management with proactive threat detection and response.",
      technologies: ["SIEM", "Firewall", "IAM", "Encryption", "Penetration Testing", "Compliance"],
      outcomes: [
        "Zero security breaches post-implementation",
        "Compliance with SOC2, ISO 27001",
        "24/7 threat monitoring"
      ],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Transform raw data into actionable insights through advanced analytics and visualization.",
      technologies: ["SQL", "MongoDB", "PostgreSQL", "Redis", "Power BI", "Tableau"],
      outcomes: [
        "Real-time business intelligence",
        "Data-driven decision making",
        "Predictive analytics capabilities"
      ],
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: Building2,
      title: "Enterprise Systems",
      description: "Mission-critical system integration and legacy modernization for enterprise environments.",
      technologies: ["SAP", "Oracle", "Microsoft 365", "SharePoint", "API Integration", "Microservices"],
      outcomes: [
        "Seamless system integration",
        "Legacy system modernization",
        "Improved operational efficiency"
      ],
      gradient: "from-teal-600 to-cyan-600"
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: [
        "React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux"
      ]
    },
    {
      category: "Backend",
      icon: Server,
      technologies: [
        "Node.js", "Python", "Java", "C#", ".NET Core", "Go"
      ]
    },
    {
      category: "Cloud",
      icon: Cloud,
      technologies: [
        "AWS", "Azure", "Google Cloud", "DigitalOcean", "CloudFlare"
      ]
    },
    {
      category: "DevOps",
      icon: GitBranch,
      technologies: [
        "Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible"
      ]
    },
    {
      category: "Databases",
      icon: Database,
      technologies: [
        "PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"
      ]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      technologies: [
        "React Native", "Flutter", "Swift", "Kotlin", "Expo"
      ]
    }
  ];

  const methodology = [
    {
      phase: "Discovery",
      icon: MonitorPlay,
      description: "Comprehensive requirement analysis and technical feasibility assessment",
      deliverables: ["Technical audit", "Requirements document", "Architecture proposal"]
    },
    {
      phase: "Design",
      icon: Layers,
      description: "Solution architecture and detailed technical design with stakeholder alignment",
      deliverables: ["System architecture", "Database schema", "API specifications"]
    },
    {
      phase: "Build",
      icon: FileCode2,
      description: "Agile development with continuous integration and code quality enforcement",
      deliverables: ["Working software", "Unit tests", "Documentation"]
    },
    {
      phase: "Test",
      icon: CheckCircle2,
      description: "Multi-tier testing including functional, performance, and security validation",
      deliverables: ["Test reports", "Bug fixes", "Performance metrics"]
    },
    {
      phase: "Deploy",
      icon: Workflow,
      description: "Controlled production deployment with rollback capabilities and monitoring",
      deliverables: ["Production release", "Deployment runbook", "Monitoring setup"]
    },
    {
      phase: "Support",
      icon: Cpu,
      description: "Ongoing maintenance, optimization, and incident response management",
      deliverables: ["SLA compliance", "Performance optimization", "Issue resolution"]
    }
  ];

  const industries = [
    {
      name: "Finance",
      icon: Building2,
      expertise: "Banking systems, payment processing, compliance automation",
      clients: "Regional banks, fintech startups, payment processors"
    },
    {
      name: "Healthcare",
      icon: Shield,
      expertise: "HIPAA-compliant systems, patient portals, telehealth platforms",
      clients: "Hospitals, clinics, health-tech companies"
    },
    {
      name: "Retail",
      icon: Globe,
      expertise: "E-commerce platforms, inventory management, POS systems",
      clients: "Online retailers, brick-and-mortar chains, marketplaces"
    },
    {
      name: "Education",
      icon: MonitorPlay,
      expertise: "Learning management systems, student portals, virtual classrooms",
      clients: "Universities, e-learning platforms, training providers"
    },
    {
      name: "Startups",
      icon: Smartphone,
      expertise: "MVP development, cloud infrastructure, rapid prototyping",
      clients: "Early-stage startups, tech accelerators, venture-backed companies"
    },
    {
      name: "Enterprise",
      icon: HardDrive,
      expertise: "Legacy modernization, system integration, digital transformation",
      clients: "Fortune 500 companies, government agencies, large corporations"
    }
  ];

  return (
    <div className="min-h-screen bg-background" id="expertise-section">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-2 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Trusted by 100+ Enterprise Clients
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              True InfraLabs <span className=" block text-primary pt-4">"Where System Connects"</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We deliver enterprise-grade technology solutions backed by proven methodologies, 
              deep technical expertise, and a commitment to measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Expertise Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology capabilities aligned with your business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${area.gradient} p-3 mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Business Outcomes</p>
                      <ul className="space-y-1">
                        {area.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, proven technologies that ensure scalability, security, and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/10 to-accent/10 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{stack.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className=" bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Methodology */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Delivery Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured approach ensuring predictable outcomes and transparent collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-all hover:border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center font-bold shadow-md">
                        {index + 1}
                      </div>
                      <Icon className="w-6 h-6 text-primary" />
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs font-semibold text-foreground mb-2">Key Deliverables</p>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Domain expertise across multiple sectors with proven track records
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-border hover:border-accent/50 transition-all hover:shadow-lg bg-gradient-to-br from-accent/10 via-primary/5 to-transparent">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br  flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{industry.name}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {industry.expertise}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Typical Clients:</span> {industry.clients}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with our technical experts to explore how we can help achieve your business objectives 
              through strategic technology implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="group">
                  Talk to Our Experts
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>NDA protection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Expertise;
