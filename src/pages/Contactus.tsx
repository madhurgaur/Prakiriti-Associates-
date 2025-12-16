import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Form validation schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(100, "Subject is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contactus() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      // Get Web3Forms access key from environment variable
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      // Check if access key is configured
      if (!accessKey || accessKey === "your_access_key_here") {
        toast.error("Form service not configured. Please contact the administrator.");
        setIsSubmitting(false);
        return;
      }

      // Prepare form data for Web3Forms API
      const formData = {
        access_key: accessKey,
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        from_name: "Prakriti Associate Contact Form",
      };

      // Send POST request to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setIsSuccess(true);
        reset(); // Clear the form
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred while sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              We're Here to Help
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from you and discuss how we can help achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Reach out to us through any of these channels. Our team is ready to provide expert guidance and support for your technology needs.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:info@prakriti-associate.com" 
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        mayanktripathi@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a 
                        href="tel:+911234567890" 
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        +91 7275342889
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                       Gorakhpur, India
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business Hours */}
              <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="font-semibold text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-border shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Success Message */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800 dark:text-green-200">
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="mt-1">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      {...register("name")}
                      className={`mt-1.5 ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="youremail@gmail.com"
                      {...register("email")}
                      className={`mt-1.5 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9988776655"
                      {...register("phone")}
                      className={`mt-1.5 ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <Label htmlFor="subject" className="text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      {...register("subject")}
                      className={`mt-1.5 ${errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-sm text-destructive">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your requirements..."
                      rows={5}
                      {...register("message")}
                      className={`mt-1.5 resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-destructive">{errors.message.message}</p>
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <p className="mt-4 text-xs text-muted-foreground text-center">
                  * All fields are required
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
