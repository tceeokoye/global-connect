"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Handshake, Globe2, Target } from "lucide-react";
import heroInvestment from "@/assets/investment.jpg";
import africanBusiness from "@/assets/african-business.jpg";
import tradeImage from "@/assets/african-trade.jpg";
import investmentImage from "@/assets/investment-opportunities.jpg";
import Image from "next/image";

const ScrollAnimate = ({
  children,
  index = 0,
  className = "",
  total = 1,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
  total?: number;
}) => {
  const [isLg, setIsLg] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsLg(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let initial: any = { opacity: 0, x: 0, y: 30 };
  if (isLg) {
    if (total === 1) initial = { opacity: 0, y: 30 };
    else initial = { opacity: 0, y: index % 2 === 0 ? 50 : -50 };
  } else {
    initial = { opacity: 0, x: index % 2 === 0 ? -50 : 50 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function ServiceInvestment() {
  const MotionImage = motion(Image);

  const investmentBenefits = [
    {
      icon: TrendingUp,
      title: "Market Access",
      description: "Access to a large and growing African market.",
    },
    {
      icon: Handshake,
      title: "Government Support",
      description: "Strong government incentives for investors.",
    },
    {
      icon: Globe2,
      title: "Innovation Potential",
      description: "High potential for growth and innovative projects.",
    },
    {
      icon: Target,
      title: "Competitive Costs",
      description: "Affordable operating and labor costs.",
    },
  ];

  const tradeOpportunities = [
    {
      icon: Globe2,
      title: "Agriculture & Agro-Processing",
      description: "Driving food security and export growth.",
    },
    {
      icon: TrendingUp,
      title: "Energy & Clean Tech",
      description: "Expanding renewable and infrastructure investment.",
    },
    {
      icon: Handshake,
      title: "Healthcare & Medical Supply",
      description: "Strengthening clinical and public health capacity.",
    },
    {
      icon: Target,
      title: "Digital Trade & Innovation",
      description: "Empowering fintech, logistics, and e-commerce.",
    },
    {
      icon: Globe2,
      title: "Infrastructure Development",
      description: "Building ports, transport, and logistics hubs.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <AnimatedHero
        image={heroInvestment}
        title="Investment, Trade & Collaboration"
        subtitle="Building partnerships that grow economies"
        overlay={
          <Link href="/intake">
            <Button size="lg" className="shadow-glow text-lg px-8">
              Explore Opportunities
            </Button>
          </Link>
        }
      />

      <section className="md:py-20 py-10 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Intro Section */}
          <ScrollAnimate index={0} className="text-center mb-16" total={1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Opportunities & Benefits of Bringing Industries to Africa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Africa especially Nigeria offers exceptional opportunities for industrial growth and investment.
              Expanding sectors such as mining, information services, and professional services make the continent
              a strategic destination. A key advantage is the depth of the Nigerian Diaspora, whose worldwide
              expertise strengthens local capacity and accelerates innovation.
            </p>
          </ScrollAnimate>

          {/* Investment Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {investmentBenefits.map((item, index) => (
              <ScrollAnimate key={item.title} index={index} total={investmentBenefits.length}>
                <motion.div
                  whileHover={{ y: -10, rotateY: 5, scale: 1.05 }}
                  className="bg-card rounded-2xl p-8 shadow-elegant text-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Trade Opportunities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tradeOpportunities.map((item, index) => (
              <ScrollAnimate key={item.title} index={index} total={tradeOpportunities.length}>
                <motion.div
                  whileHover={{ y: -10, rotateY: 5, scale: 1.05 }}
                  className="bg-card rounded-2xl p-6 shadow-elegant flex gap-4 items-start"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <item.icon className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Image + Text Section */}
          <ScrollAnimate index={0} total={1}>
            <div className="bg-card rounded-2xl overflow-hidden shadow-elegant grid grid-cols-1 lg:grid-cols-2 gap-0">
              <motion.div
                className="h-64 lg:h-auto overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <MotionImage
                  src={africanBusiness}
                  alt="African business and investment opportunities"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="p-10">
                <h3 className="text-3xl font-bold mb-6">Why Invest in Africa</h3>
                <p className="text-muted-foreground mb-6">
                  Favorable investment policies, skilled workforce, and strong diaspora engagement create a
                  fertile environment for growth. Expanding partnerships in energy, logistics, and technology sectors
                  ensure sustainable opportunities for investors.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Link href="/partners">
                    <Button size="lg" className="shadow-elegant text-lg px-10">
                      Let’s Build Global Bridges
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
}
