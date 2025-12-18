import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Search, 
  Filter,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobListings } from "@/data/jobs";
import { Job } from "@/types/job";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [employmentTypeFilter, setEmploymentTypeFilter] = useState("all");

  // Filter and search logic
  const filteredJobs = useMemo(() => {
    return jobListings.filter((job) => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.requiredSkills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter;
      const matchesLocation = locationFilter === "all" || job.location === locationFilter;
      const matchesEmploymentType = employmentTypeFilter === "all" || job.employmentType === employmentTypeFilter;

      return matchesSearch && matchesDepartment && matchesLocation && matchesEmploymentType;
    });
  }, [searchQuery, departmentFilter, locationFilter, employmentTypeFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setDepartmentFilter("all");
    setLocationFilter("all");
    setEmploymentTypeFilter("all");
  };

  const hasActiveFilters = departmentFilter !== "all" || locationFilter !== "all" || employmentTypeFilter !== "all" || searchQuery !== "";

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case "Engineering":
        return <Building2 className="w-5 h-5" />;
      case "Sales":
        return <TrendingUp className="w-5 h-5" />;
      case "Marketing":
        return <Users className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getDepartmentGradient = (department: string) => {
    switch (department) {
      case "Engineering":
        return "from-blue-500 to-cyan-500";
      case "Sales":
        return "from-green-500 to-emerald-500";
      case "Marketing":
        return "from-purple-500 to-pink-500";
      case "Operations":
        return "from-orange-500 to-red-500";
      case "HR":
        return "from-indigo-500 to-blue-500";
      case "Finance":
        return "from-teal-500 to-cyan-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Join Our Growing Team
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Build Your Career with <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover opportunities to work on cutting-edge technology projects with a talented team. 
              We're looking for passionate individuals to drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{jobListings.length}+</div>
                <div className="text-sm text-muted-foreground">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Departments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search jobs by title, skills, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Operations">Operations</SelectItem>
                      <SelectItem value="HR">HR</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                      <SelectItem value="Onsite">Onsite</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={employmentTypeFilter} onValueChange={setEmploymentTypeFilter}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Employment Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                    </SelectContent>
                  </Select>

                  {hasActiveFilters && (
                    <Button variant="outline" onClick={clearFilters} className="h-11">
                      <Filter className="w-4 h-4 mr-2" />
                      Clear Filters
                    </Button>
                  )}
                </div>

                {/* Results Count */}
                <div className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span> of{" "}
                  <span className="font-semibold text-foreground">{jobListings.length}</span> positions
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <Link key={job.id} to={`/jobs/${job.id}`}>
                  <Card className="border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex gap-4">
                          {/* Department Icon */}
                          <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${getDepartmentGradient(job.department)} p-3 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            {getDepartmentIcon(job.department)}
                          </div>

                          {/* Job Info */}
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                {job.title}
                              </h3>
                              <Badge variant="secondary" className="text-xs">
                                {job.department}
                              </Badge>
                            </div>

                            <p className="text-muted-foreground line-clamp-2">
                              {job.description}
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Briefcase className="w-4 h-4" />
                                <span>{job.employmentType}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                <span>{job.experienceMin}-{job.experienceMax} years</span>
                              </div>
                            </div>

                            {/* Skills Preview */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {job.requiredSkills.slice(0, 4).map((skill, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {job.requiredSkills.length > 4 && (
                                <Badge variant="outline" className="text-xs">
                                  +{job.requiredSkills.length - 4} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Apply Button */}
                        <div className="lg:ml-4">
                          <Button className="w-full lg:w-auto">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="border-border">
              <CardContent className="p-12 text-center">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">No Jobs Found</h3>
                  <p className="text-muted-foreground">
                    We couldn't find any positions matching your criteria. Try adjusting your filters or search terms.
                  </p>
                  {hasActiveFilters && (
                    <Button onClick={clearFilters} variant="outline">
                      Clear All Filters
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join <span className="text-primary">True InfraLabs Associate</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a team that values innovation, growth, and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Growth Opportunities",
                description: "Continuous learning with certifications and training programs",
                icon: TrendingUp,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Work-Life Balance",
                description: "Flexible hours and remote work options for better balance",
                icon: Clock,
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Collaborative Culture",
                description: "Work with talented professionals in a supportive environment",
                icon: Users,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Competitive Benefits",
                description: "Health insurance, bonuses, and comprehensive benefits package",
                icon: CheckCircle2,
                gradient: "from-orange-500 to-red-500"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} p-3 mb-3`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
