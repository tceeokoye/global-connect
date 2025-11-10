"use client"


import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Plane,
  Users,
  GraduationCap,
  DollarSign,
  UserCheck,
  Briefcase,
} from "lucide-react";

import ServiceCard from "@/components/ServiceCard";

import HeroSlider3D from "@/components/HeroSlider3D";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Industry",
      description:
        "Harness Africa's natural & human talent resources for industry advancement stimulating outside investment in strategic growth areas including Aerospace, Entertainment (Nollywood), Healthcare, Technology, AI, and more.",
      link: "/services/industry",
    },
   
    {
      icon: DollarSign,
      title: "Investment & Trade",
      description:
        "Provide strategic investment opportunities to Africa and international investors, supporting economic growth through targeted capital allocation, funding programs, and advisory services across sectors.",
      link: "/services/investment",
    },
    {
      icon: Plane,
      title: "Travel & Consulate Services",
      description:
        "Globalization of travel & tourism renaissance through enhanced consulate services. Premium concierge solutions including Passport/VISA services, Customs Navigation, Consolidated Shipping, and Immigration Services.",
      link: "/services/travel",
    },
    {
      icon: UserCheck,
      title: "Immigration Services",
      description:
        "Comprehensive immigration support for individuals and families including visa applications, residency processing, and relocation assistance to ensure smooth transitions abroad.",
      link: "/services/immigration",
    },
    {
      icon: Users,
      title: "Conferences & Educational Workshops",
      description:
        "High-impact conferences, seminars, and educational workshops for Africans and government officials looking to host events in the U.S., Canada, and the U.K.",
      link: "/services/conferences",
    },
    {
      icon: GraduationCap,
      title: "Education & Scholarship Programs",
      description:
        "Empowering African students through international education partnerships and scholarship opportunities that support undergraduate, postgraduate, and professional training programs abroad.",
      link: "/services/education",
    },
    {
      icon: Briefcase,
      title: "Job & Career Services",
      description:
        "Providing career guidance, recruitment, and job placement assistance for Africans seeking global employment opportunities, connecting talent with companies worldwide.",
      link: "/services/jobs",
    },
  ];

  return (
    <div className="min-h-screen">
     

      {/* Hero Section */}
     <HeroSlider3D />

      <section className="md:py-20 py-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Centre for Industry | Trade | Investment | Travel | Immigration | Jobs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A privatized gateway agency empowered by public/private partnership with the Nigerian government 
              & US Nigerian Embassy to augment consulate services, promote trade, advance industry & investment 
              economic growth as an office of implementation.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

    
    </div>
  );
};


