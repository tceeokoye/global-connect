"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  FileCheck,
  Award,
  Globe2,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedHero from "@/components/AnimatedHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroEducation from "@/assets/hero-education-visual.jpg";
import africanStudents from "@/assets/african-students.jpg";
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

const ServiceEducation = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Placement",
      description:
        "Guidance and direct placement into globally recognized universities across the U.S., Canada, U.K., and Europe.",
    },
    {
      icon: FileCheck,
      title: "Application & Visa Support",
      description:
        "End-to-end assistance with school applications, admission processing, and visa documentation.",
    },
    {
      icon: Award,
      title: "Scholarship & Financial Aid",
      description:
        "Access exclusive scholarships, grants, and tuition aid for undergraduate, postgraduate, and professional programs.",
    },
    {
      icon: Globe2,
      title: "Cultural & Academic Orientation",
      description:
        "Comprehensive pre-departure and orientation sessions for smooth transition and integration abroad.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ✅ Hero Section */}
      <AnimatedHero
        image={heroEducation}
        title="Education & Scholarship Programs"
        subtitle="Empowering Africa’s students through global opportunities"
        height="h-[70vh]"
      />

      {/* ✅ Main Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-24">

          {/* INTRO SECTION */}
          <AnimatedBlock direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Global Access to Education & Scholarships
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We bridge students across Africa and the diaspora to top-tier universities around the world.
                Our programs are designed to open doors to world-class education, scholarships, and professional
                development opportunities abroad.
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
                src={africanStudents}
                alt="African students abroad"
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
                  We are committed to helping ambitious students unlock global educational opportunities through
                  transparent counseling, reliable support, and access to fully or partially funded study programs.
                </p>
                <div className="space-y-4">
                  {[
                    "University admission processing",
                    "Scholarship and funding opportunities",
                    "Visa and travel documentation support",
                    "Pre-departure training & orientation",
                    "Post-arrival mentorship & guidance",
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
              <Link to="/intake">
                <Button size="lg" className="shadow-elegant text-lg px-10">
                  Apply for Scholarship
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

export default ServiceEducation;
