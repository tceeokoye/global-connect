"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plane, Ship, FileCheck, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedHero from "@/components/AnimatedHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroTravel from "@/assets/section-travel.jpg";
import travelServices from "@/assets/travel-consulate.jpg";
import { useInView } from "react-intersection-observer";

/* ✅ Reusable Animated Block */
const AnimatedBlock = ({ children, direction = "up" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  let x = 0,
    y = 0;
  if (direction === "left") x = -80;
  if (direction === "right") x = 80;
  if (direction === "up") y = 80;
  if (direction === "down") y = -80;

  return (
    <div ref={ref}>
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, x, y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x, y }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServiceTravel = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Passport & VISA Services",
      description:
        "Comprehensive assistance with passport renewals and visa applications for seamless international travel.",
    },
    {
      icon: Ship,
      title: "Customs Navigation",
      description:
        "Expert guidance through customs procedures and documentation requirements.",
    },
    {
      icon: Globe,
      title: "Consolidated Shipping",
      description:
        "Efficient shipping solutions for personal and commercial goods with full tracking.",
    },
    {
      icon: Plane,
      title: "Immigration Services",
      description:
        "Professional support for immigration processes and documentation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ✅ Hero Section */}
      <AnimatedHero
        image={heroTravel}
        title="Travel & Consulate Services"
        subtitle="Premium concierge solutions for seamless global travel"
        height="h-[70vh]"
      />

      {/* ✅ Main Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-24">

          {/* INTRO SECTION */}
          <AnimatedBlock direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Globalization of Travel & Tourism Renaissance
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Enhanced consulate services through premium concierge solutions. We provide
                comprehensive support for passport services, visa applications, customs
                navigation, consolidated shipping, and immigration services.
              </p>
            </div>
          </AnimatedBlock>

          {/* SERVICES GRID */}
          <AnimatedBlock direction="up">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="bg-card rounded-2xl p-8 shadow-elegant"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 shadow-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedBlock>

          {/* IMAGE + TEXT SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedBlock direction="left">
              <motion.img
                src={travelServices}
                alt="Travel services"
                className="rounded-2xl shadow-elegant"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </AnimatedBlock>

            <AnimatedBlock direction="right">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gradient">
                  Our Commitment
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We streamline international travel processes through enhanced consulate services
                  and premium concierge solutions, ensuring smooth transitions for business and
                  leisure travelers.
                </p>
                <div className="space-y-4">
                  {[
                    "Expedited processing",
                    "24/7 customer support",
                    "Expert consultation",
                    "Secure document handling",
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedBlock>
          </div>

          {/* CTA SECTION */}
          <AnimatedBlock direction="down">
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <Button size="lg" className="shadow-elegant text-lg px-10">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </AnimatedBlock>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceTravel;
