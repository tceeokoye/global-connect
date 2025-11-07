import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileCheck, Shield, Users, Plane } from "lucide-react";
import heroImmigration from "@/assets/hero-immigration-visual.jpg";
import africanNetworking from "@/assets/african-networking.jpg";

const ServiceImmigration = () => {
  const features = [
    {
      icon: FileCheck,
      title: "Student & Work Visas",
      description: "Complete assistance for study and employment visas",
    },
    {
      icon: Plane,
      title: "Investor Visas",
      description: "Support for business and investor visa categories",
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Expert guidance on immigration laws and regulations",
    },
    {
      icon: Users,
      title: "Residency & Relocation",
      description: "Guidance for permanent residency and family reunification",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero
        video="/videos/hero-immigration.mp4"
        image={heroImmigration}
        title="Immigration & Visa Consulting"
        subtitle="We make global mobility possible"
        overlay={
          <Link to="/intake">
            <Button size="lg" className="shadow-glow text-lg px-8">
              Get Started
            </Button>
          </Link>
        }
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Simplifying International Migration
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our consultants provide end-to-end immigration and visa services for students, professionals, 
              investors, and families seeking global opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-card rounded-2xl p-8 shadow-elegant text-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl overflow-hidden shadow-elegant"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <motion.div 
                className="h-64 lg:h-auto overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={africanNetworking} 
                  alt="Global visa and immigration services"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-6">
                  We Provide
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Student, work, and investor visa assistance",
                    "Residency and relocation guidance",
                    "Document preparation and submission support",
                    "Legal and compliance advisory services",
                    "Application tracking and follow-up"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                      />
                      <p className="text-muted-foreground">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="mt-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/intake">
                    <Button size="lg" className="shadow-elegant text-lg px-10">
                      Schedule Consultation
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceImmigration;
