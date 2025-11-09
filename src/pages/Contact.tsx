"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedHero from "@/components/AnimatedHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Lottie from "lottie-react";
import { useState } from "react";
import heroContact from "@/assets/hero-contact.jpg";

const ButtonLoader = () => (
  <motion.div
    className="w-5 h-5 border-2 border-t-white border-r-transparent border-b-white border-l-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
  />
);

// Confirmation Modal
const Modal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
      <h2 className="text-2xl font-bold text-primary mb-3">Message Sent!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for reaching out. We'll get back to you as soon as possible.
      </p>
      <Button onClick={onClose} className="bg-primary text-white px-6 py-3 rounded-lg">
        Close
      </Button>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("https://global-connect-gold.vercel.app/app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server error: ${res.status} ${text}`);
    }

    const json = await res.json();

    if (json.success) {
      setShowModal(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      alert("Failed to send email: " + json.message);
    }
  } catch (err: any) {
    console.error(err);
    alert("An error occurred: " + err.message);
  } finally {
    setLoading(false);
  }
};



  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello, I’d like to make an inquiry about your services.`);
    const phone = "+2348162768597";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <AnimatedHero
        image={heroContact}
        title="Contact Us"
        subtitle="Centre #1 - West Coast USA | Los Angeles, CA"
        height="h-[60vh]"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                <strong>Cajetan CJ Onu, JD</strong><br/>
                Founder & CEO, The Global Connect LLC
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions about our services? Ready to explore Africa's potential 
                for global opportunities? We're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Office</h3>
                    <p className="text-muted-foreground">
                     Los Angeles, California.<br/>
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Anytime</h3>
                    <p className="text-muted-foreground">
                      +1 (818) 300 5881 (USA)<br/>
                      +234 816 276 8597 (NIG)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Send Email</h3>
                    <p className="text-muted-foreground">
                      cconuglobal@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  required
                />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="w-full sm:flex-1 shadow-elegant flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <ButtonLoader />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" /> Send Message
                      </>
                    )}
                  </Button>

                  <Button
                    type="button"
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full sm:flex-1 flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 w-5 h-5 text-green-600" /> WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <Footer />
    </div>
  );
};

export default Contact;
