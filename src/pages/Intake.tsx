"use client";
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
import heroIntake from "@/assets/hero-intake.jpg";

const ButtonLoader = () => (
  <motion.div
    className="w-5 h-5 border-2 border-t-white border-r-transparent border-b-white border-l-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
  />
);

const Modal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
      <h2 className="text-2xl font-bold text-primary mb-3">Message Sent!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for your submission. We'll contact you within 3–5 business days.
      </p>
      <Button onClick={onClose} className="bg-primary text-white px-6 py-3 rounded-lg">
        Close
      </Button>
    </div>
  </div>
);

const Intake = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("country", formData.country);
    data.append("service", formData.service);
    data.append("message", formData.message);
    if (file) data.append("file", file);

    const res = await fetch("https://global-connect-gold.vercel.app/api/intake", {
      method: "POST",
      body: data, // send as FormData
      // do NOT set Content-Type; the browser sets multipart/form-data automatically
    });

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const json = await res.json();
      if (json.success) {
        setShowModal(true);
        setFormData({ name: "", email: "", phone: "", country: "", service: "", message: "" });
        setFile(null);
      } else {
        alert("Failed to send: " + json.message);
      }
    } else {
      alert("Server returned non-JSON response. Check console.");
      console.log(await res.text());
    }
  } catch (err: any) {
    console.error(err);
    alert("An error occurred: " + err.message);
  } finally {
    setLoading(false);
  }
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

      <section className="md:py-20 py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Client Intake Form
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're a student, professional, investor, or organization, this is your
              first step. Our team will contact you within 3–5 business days.
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
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Enter your country"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="service">Select Program Type *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose your area of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="education">
                      Student Exchange / Study Abroad
                    </SelectItem>
                    <SelectItem value="immigration">
                      Immigration / Visa Assistance
                    </SelectItem>
                    <SelectItem value="investment">
                      Investment / Business Collaboration
                    </SelectItem>
                    <SelectItem value="conferences">
                      Conference / Training Program
                    </SelectItem>
                    <SelectItem value="jobs">Job Placement / Career Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Brief Description *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  required
                  placeholder="Tell us about your goals or background..."
                  className="mt-2"
                />
              </div>

              <motion.div
                className="border-2 border-dashed border-border rounded-xl p-8 text-center"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
              >
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload Supporting Documents (Optional)
                </p>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="max-w-xs mx-auto"
                  onChange={handleFileChange}
                />
                {file && (
                  <p className="mt-3 text-sm text-primary font-medium">
                    Selected file: {file.name}
                  </p>
                )}
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full flex items-center justify-center shadow-elegant text-lg"
                >
                  {loading ? (
                    <>
                      <ButtonLoader />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" /> Submit Application
                    </>
                  )}
                </Button>
              </motion.div>

              <p className="text-sm text-muted-foreground text-center">
                All submissions are reviewed within 72 hours. Confidentiality guaranteed.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <Footer />
    </div>
  );
};

export default Intake;
