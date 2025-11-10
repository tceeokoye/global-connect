"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Globe, Plane, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import africanBusiness from "@/assets/african-business.jpg";
import africanStudents from "@/assets/african-students.jpg";
import africanNetworking from "@/assets/african-networking.jpg";
import diasporaCommunity from "@/assets/diaspora-community.jpg";
import africanTrade from "@/assets/african-trade.jpg";
import HeroSlider3D from "@/components/HeroSlider3D";
import Image from "next/image";

// ScrollAnimate component
const ScrollAnimate = ({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) => {
  const xOffset = index % 2 === 0 ? -50 : 50; // alternate left/right

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const MotionImage = motion(Image);
  const services = [
    {
      icon: Building2,
      title: "Industry",
      description:
        "Harness Africa's natural & human talent resources for industry advancement stimulating investment in strategic growth areas.",
      link: "/services/industry",
    },
    {
      icon: Globe,
      title: "Trade",
      description:
        "Unleash Nigeria's commerce potential for global market penetration via strategies for import/export & shipping enterprises.",
      link: "/services/trade",
    },
    {
      icon: Plane,
      title: "Travel & Consulate",
      description:
        "Globalization of travel & tourism through enhanced consulate services. Premium concierge style, first class service.",
      link: "/services/travel",
    },
  ];

  const corePriorities = [
    {
      icon: Users,
      title: "Demography",
      description:
        "Leveraging Nigeria's 250M+ population as a key driver of global demographics and workforce potential",
    },
    {
      icon: TrendingUp,
      title: "Development",
      description:
        "Driving economic growth through technology, natural resources, and strategic market opportunities",
    },
    {
      icon: Globe,
      title: "Diaspora",
      description:
        "Connecting Nigerian diaspora talent and resources back to homeland opportunities",
    },
    {
      icon: Building2,
      title: "Democracy",
      description:
        "Strengthening institutions and governance for sustainable growth and international cooperation",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20">
        <HeroSlider3D />
      </section>

      {/* Bold Vision Section */}
      <section className="md:py-20 py-10 px-4 overflow-hidden">
        <div className="container md:mx-auto md:max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <ScrollAnimate
              index={0}
              className="flex flex-col justify-center text-center md:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
                Bold Vision. Global Gateway.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                The Global Connect LLC implements transformative strategies for
                growth & development in Nigeria, Africa & the Diaspora.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                As Nigeria`s most populous country & a major player in the
                continent's economy, Africainfluences everything from energy
                markets to cultural trends. With rich natural resources, a
                booming tech scene, & a vibrant youth population, Africa holds
                the potential for driving economic growth & shaping geopolitical
                conversations worldwide.
              </p>
            </ScrollAnimate>

            <ScrollAnimate index={1} className="flex justify-center">
              <motion.img
                src={africanBusiness.src}
                alt="African business professionals in Nigeria"
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover max-w-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="md:py-20 py-10 px-4 bg-muted/30  overflow-hidden">
        <div className="container mx-auto">
          <ScrollAnimate index={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                Premium Concierge Solutions
              </h2>
              <p className="text-xl text-muted-foreground">
                Industry | Trade | Travel - Connecting Africato Global
                Opportunities
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ScrollAnimate
                key={service.title}
                index={index}
                className="flex justify-center"
              >
                <ServiceCard {...service} />
              </ScrollAnimate>
            ))}
          </div>

          {/* Service Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[africanStudents, africanTrade, africanNetworking].map(
              (img, index) => (
                <ScrollAnimate
                  key={index}
                  index={index}
                  className="flex justify-center"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-elegant group w-full max-w-sm">
                    <Image
                      src={img}
                      alt="hero"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <h3 className="text-white text-xl font-bold">
                        {index === 0
                          ? "Education Excellence"
                          : index === 1
                          ? "Trade & Commerce"
                          : "Global Partnerships"}
                      </h3>
                    </div>
                  </div>
                </ScrollAnimate>
              )
            )}
          </div>
        </div>
      </section>

      {/* Core Priorities */}
      <section className="py-20 px-4 bg-muted/30  overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimate index={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
                Our Core Priorities
              </h2>
              <p className="text-xl text-muted-foreground">
                Fostering partnerships & driving innovation to advance Nigeria's
                4D foreign policy agenda
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePriorities.map((priority, index) => (
              <ScrollAnimate
                key={priority.title}
                index={index}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center hover:-translate-y-2 transition-smooth w-full max-w-xs">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <priority.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{priority.title}</h3>
                  <p className="text-muted-foreground">
                    {priority.description}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate>
            <MotionImage
              src={diasporaCommunity}
              alt="Nigerian diaspora community"
              className="rounded-2xl shadow-elegant w-full h-[400px] object-cover  mt-16"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </ScrollAnimate>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4  overflow-hidden">
        <ScrollAnimate index={0} className="flex justify-center">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-center shadow-glow">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Shape the World Stage?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Connect with us to explore how we can help you leverage
                Nigeria's potential for industry, trade, and travel
                opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-primary text-lg px-8"
                  >
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    className="border-white border bg-transparent text-white hover:text-blue-600 hover:bg-white text-lg px-8"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </section>

      
    </div>
  );
}
