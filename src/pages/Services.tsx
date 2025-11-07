import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Plane,
  Users,
  GraduationCap,
} from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import ServiceCard from "@/components/ServiceCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroServices from "@/assets/hero-services.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Industry",
      description:
        "Harness Nigeria's natural & human talent resources for industry advancement stimulating outside investment in strategic growth areas including Aerospace, Entertainment (Nollywood), Healthcare, Technology, AI, and more.",
      link: "/services/industry",
    },
    {
      icon: Globe,
      title: "Trade",
      description:
        "Unleash Nigeria's commerce potential for global market penetration via strategies for Nigerian & African led import/export & shipping enterprises across Agriculture, Oil/Gas/Mining, Textiles, and Machinery/Automotive sectors.",
      link: "/services/trade",
    },
    {
      icon: Plane,
      title: "Travel & Consulate Services",
      description:
        "Globalization of travel & tourism renaissance through enhanced consulate services. Premium concierge solutions including Passport/VISA services, Customs Navigation, Consolidated Shipping, and Immigration Services.",
      link: "/services/travel",
    },
    {
      icon: Users,
      title: "Conferences & Educational Workshops",
      description:
        "High-impact conferences, seminars, and educational workshops for Nigerians and government officials looking to host events in the U.S., Canada, and the U.K.",
      link: "/services/conferences",
    },
    {
      icon: GraduationCap,
      title: "Education & Scholarship Programs",
      description:
        "Empowering Nigerian students through international education partnerships and scholarship opportunities that support undergraduate, postgraduate, and professional training programs abroad.",
      link: "/services/education",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero
        image="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1920&q=80"
        title="Premium Concierge Solutions"
        subtitle="Industry | Trade | Travel - Connecting Nigeria to Global Opportunities"
        height="h-[70vh]"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Centre for Industry | Trade | Travel
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A privatized gateway agency empowered by public/private partnership with the Nigerian government 
              & US Nigerian Embassy to augment consulate services, promote trade, advance industry & investment 
              economic growth as an office of implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
