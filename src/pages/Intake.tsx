import { motion } from "framer-motion";
import { Upload, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AnimatedHero from "@/components/AnimatedHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";
import heroIntake from "@/assets/hero-intake.jpg";

const Intake = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll contact you within 3-5 business days.");
    setFormData({ name: "", email: "", phone: "", country: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero
        image={heroIntake}
        title="Start Your Global Journey"
        subtitle="Complete the form below and take the first step toward partnership or placement"
        height="h-[60vh]"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Client Intake Form
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're a student, professional, investor, or organization, this is your first step. 
              Our team will contact you within 3–5 business days.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number (with country code) *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="country">Country of Residence *</Label>
                  <Input
                    id="country"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="service">Select Program Type *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose your area of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="education">Student Exchange / Study Abroad</SelectItem>
                    <SelectItem value="immigration">Immigration / Visa Assistance</SelectItem>
                    <SelectItem value="investment">Investment / Business Collaboration</SelectItem>
                    <SelectItem value="conferences">Conference / Training Program</SelectItem>
                    <SelectItem value="jobs">Job Placement / Career Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Brief Description of Your Goal or Project *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your background, goals, and what you hope to achieve..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  required
                  className="mt-2"
                />
              </div>

              <motion.div 
                className="border-2 border-dashed border-border rounded-xl p-8 text-center"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
                transition={{ duration: 0.2 }}
              >
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload Supporting Documents (Optional)
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Passport/ID, Resume, or Academic Transcript (PDF/JPEG)
                </p>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="max-w-xs mx-auto"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-elegant text-lg"
                >
                  Submit Application
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <p className="text-sm text-muted-foreground text-center">
                All submissions are reviewed within 72 hours. Confidentiality is guaranteed.
              </p>
            </form>
          </motion.div>

          {/* Resume Submission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              Submit Your Resume for International Opportunities
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Looking for work abroad or with global companies? Submit your updated resume 
              to join our international talent database.
            </p>
            <div className="bg-card rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="font-bold mb-4">Instructions:</h4>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Prepare your resume in PDF or Word format</li>
                <li>• Include a short cover note introducing yourself</li>
                <li>• Upload via the form above or email to: <span className="text-primary font-semibold">careers@theglobalconnect.com</span></li>
                <li>• Subject line: "Resume Submission – [Your Full Name]"</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Only shortlisted applicants will be contacted. Ensure all information is accurate and up to date.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Intake;
