import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Send,
  Building2,
  Users,
  TrendingUp,
  Upload,
  Loader2,
  X
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { jobListings } from "@/data/jobs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const applicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number"),
  yearsOfExperience: z.coerce
    .number()
    .min(0, "Experience cannot be negative")
    .max(50, "Please enter valid experience"),
  coverNote: z.string().min(50, "Cover note must be at least 50 characters").max(1000),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const job = jobListings.find((j) => j.id === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: "onChange",
  });

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-8">The position you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/jobs")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case "Engineering":
        return <Building2 className="w-6 h-6" />;
      case "Sales":
        return <TrendingUp className="w-6 h-6" />;
      case "Marketing":
        return <Users className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Please upload a PDF file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    if (!selectedFile) {
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - In production, this would upload to your backend
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically:
      // 1. Upload file to cloud storage (AWS S3, Azure Blob, etc.)
      // 2. Send application data to MongoDB via API
      const applicationData = {
        jobId: job.id,
        jobTitle: job.title,
        ...data,
        resumeFileName: selectedFile.name,
        appliedDate: new Date().toISOString(),
      };

      console.log("Application submitted:", applicationData);

      toast.success("Application submitted successfully! We'll review it and get back to you soon.");
      reset();
      setSelectedFile(null);
      setShowApplicationForm(false);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Application submission error:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />

        <div className="relative container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/jobs")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Button>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${getDepartmentGradient(job.department)} p-4 flex items-center justify-center flex-shrink-0`}>
              {getDepartmentIcon(job.department)}
            </div>

            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {job.title}
                  </h1>
                  <Badge variant="secondary">{job.department}</Badge>
                </div>
                <p className="text-lg text-muted-foreground">{job.description}</p>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">{job.employmentType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">
                    {job.experienceMin}-{job.experienceMax} years
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  size="lg"
                  onClick={() => setShowApplicationForm(true)}
                  className="text-base"
                >
                  Apply for this Position
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Job Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Responsibilities */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Required Skills */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Required Skills</CardTitle>
                  <CardDescription>Must-have qualifications for this role</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {job.requiredSkills.map((skill, idx) => (
                      <Badge key={idx} variant="default" className="text-sm py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Preferred Skills */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Preferred Skills</CardTitle>
                  <CardDescription>Nice-to-have qualifications that give you an edge</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {job.preferredSkills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application Form */}
              {showApplicationForm && (
                <Card className="border-primary/50 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">Apply for this Position</CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowApplicationForm(false)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardDescription>Fill out the form below to submit your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          {...register("fullName")}
                          placeholder="John Doe"
                          className={`mt-1.5 ${errors.fullName ? "border-destructive" : ""}`}
                          disabled={isSubmitting}
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 text-sm text-destructive">{errors.fullName.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="john.doe@example.com"
                          className={`mt-1.5 ${errors.email ? "border-destructive" : ""}`}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="+91 12345 67890"
                          className={`mt-1.5 ${errors.phone ? "border-destructive" : ""}`}
                          disabled={isSubmitting}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-sm text-destructive">{errors.phone.message}</p>
                        )}
                      </div>

                      {/* Years of Experience */}
                      <div>
                        <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
                        <Input
                          id="yearsOfExperience"
                          type="number"
                          {...register("yearsOfExperience")}
                          placeholder="5"
                          min="0"
                          className={`mt-1.5 ${errors.yearsOfExperience ? "border-destructive" : ""}`}
                          disabled={isSubmitting}
                        />
                        {errors.yearsOfExperience && (
                          <p className="mt-1.5 text-sm text-destructive">{errors.yearsOfExperience.message}</p>
                        )}
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <Label htmlFor="resume">Resume (PDF) *</Label>
                        <div className="mt-1.5">
                          <label
                            htmlFor="resume"
                            className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors bg-muted/50"
                          >
                            <div className="text-center">
                              {selectedFile ? (
                                <div className="space-y-2">
                                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto" />
                                  <p className="text-sm text-foreground font-medium">{selectedFile.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {(selectedFile.size / 1024).toFixed(2)} KB
                                  </p>
                                </div>
                              ) : (
                                <div className="space-y-2">
                                  <Upload className="w-8 h-8 text-muted-foreground mx-auto" />
                                  <p className="text-sm text-muted-foreground">
                                    Click to upload your resume (PDF, max 5MB)
                                  </p>
                                </div>
                              )}
                            </div>
                          </label>
                          <input
                            id="resume"
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="hidden"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      {/* Cover Note */}
                      <div>
                        <Label htmlFor="coverNote">Cover Note *</Label>
                        <Textarea
                          id="coverNote"
                          {...register("coverNote")}
                          placeholder="Tell us why you're a great fit for this role..."
                          rows={5}
                          className={`mt-1.5 resize-none ${errors.coverNote ? "border-destructive" : ""}`}
                          disabled={isSubmitting}
                        />
                        {errors.coverNote && (
                          <p className="mt-1.5 text-sm text-destructive">{errors.coverNote.message}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full h-12 text-base font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Application
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Benefits & Quick Apply */}
            <div className="space-y-6">
              {/* Quick Apply Card */}
              {!showApplicationForm && (
                <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5 sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl">Ready to Apply?</CardTitle>
                    <CardDescription>Join our team and grow your career</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        setShowApplicationForm(true);
                        setTimeout(() => {
                          document.getElementById("fullName")?.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 100);
                      }}
                    >
                      Apply Now
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                    <div className="text-xs text-muted-foreground text-center">
                      Application review typically takes 3-5 business days
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Benefits Card */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Benefits & Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Share Job */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Share this Job</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Know someone who'd be perfect for this role? Share it with them!
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Job link copied to clipboard!");
                  }}>
                    Copy Job Link
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetails;
