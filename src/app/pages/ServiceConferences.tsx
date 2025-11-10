"use client"


import React from "react";
import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Award, Calendar, Network } from "lucide-react";
import heroConferences from "@/assets/hero-conferences.jpg";
import africanNetworking from "@/assets/african-networking.jpg";
import Image from "next/image";

// Reusable scroll animation
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

export default function ServiceConferences  ()  {
    const MotionImage = motion(Image);
  const features = [
    {
      icon: Calendar,
      title: "Global Conferences",
      description: "Access to international professional development events",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Globally recognized professional credentials",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Build connections with industry leaders worldwide",
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Corporate and government leadership development",
    },
  ];

  const programItems = [
    "Corporate and government leadership training",
    "Thematic global conferences and summits",
    "Institutional collaboration forums",
    "Technical and vocational workshops",
    "Professional certification programs",
  ];

  return (
    <div className="min-h-screen">
    

      <AnimatedHero
        image={heroConferences}
        title="Conferences & Professional Training"
        subtitle="Where ideas meet opportunity"
        overlay={
          <Link href="/intake">
            <Button size="lg" className="shadow-glow text-lg px-8">
              Register Now
            </Button>
          </Link>
        }
      />

      <section className="m:py-20 py-10 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Intro */}
          <ScrollAnimate index={0} total={1} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Professional Development & Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design and manage global conferences and training programs to strengthen capacity 
              and foster international partnerships
            </p>
          </ScrollAnimate>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <ScrollAnimate key={feature.title} index={index} total={features.length}>
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
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Programs + Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimate index={0} total={2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant"
              >
                <MotionImage 
                  src={africanNetworking} 
                  alt="Professional networking and conferences"
                  className="w-full h-64 object-cover lg:h-full"
                />
              </motion.div>
            </ScrollAnimate>

            <ScrollAnimate index={1} total={2}>
              <div className="bg-card rounded-2xl p-10 shadow-elegant">
                <h3 className="text-3xl font-bold mb-6">Programs Include</h3>
                <div className="space-y-4 mb-8">
                  {programItems.map((item, i) => (
                    <ScrollAnimate key={i} index={i} total={programItems.length}>
                      <div className="flex items-start gap-3">
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                        />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    </ScrollAnimate>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Link href="/contact">
                    <Button size="lg" className="shadow-elegant text-lg px-10">
                      View Upcoming Events
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </ScrollAnimate>
          </div>

          
          <ScrollAnimate index={0} total={1}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-elegant"
            >
              <MotionImage
                src={africanNetworking} 
                alt="Professional conference networking"
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </ScrollAnimate>
        </div>
      </section>

   
    </div>
  );
};


