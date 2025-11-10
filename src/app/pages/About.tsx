"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Users, TrendingUp } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";


import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import heroAbout from "@/assets/hero-about.jpg";
import sectionPartnership from "@/assets/section-partnership.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparency and accountability in every engagement.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Progress through meaningful partnerships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Practical, creative solutions for global challenges.",
    },
    {
      icon: TrendingUp,
      title: "Empowerment",
      description: "Growth through opportunity and access.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Success measured by transformation.",
    },
  ];
  
const MotionImage = motion(Image);

  return (
    <div className="min-h-screen bg-background">
   

      {/* Hero Section */}
      <AnimatedHero
        image={heroAbout}
        title="Building Bridges. Creating Futures."
        subtitle="Connecting Africa, the Diaspora, and the World"
        height="h-[70vh]"
      />

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <motion.div
                className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-elegant"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <MotionImage
                  src={sectionPartnership}
                  alt="Global collaboration"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2 text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Who We Are
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-5">
                The Global Connect, LLC is an international consulting and
                facilitation firm dedicated to creating sustainable bridges
                between Africa, the diaspora, and the rest of the world.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-5">
                We connect students, entrepreneurs, investors, and professionals
                with global opportunities in education, business, and career
                advancement.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Our approach combines deep cultural understanding with practical
                global expertise, ensuring every partnership creates lasting
                value and mutual growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-muted/30 sm:px-6 md:px-10">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the leading global platform linking Africa's potential to international opportunity through education, investment, and collaboration.",
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "To empower individuals and institutions to engage in meaningful partnerships that drive mobility, innovation, and development across borders.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant hover:-translate-y-2 transition-smooth text-center md:text-left"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every partnership, project, and interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-elegant group hover:-translate-y-2 transition-smooth text-center sm:text-left"
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto sm:mx-0 group-hover:bg-primary/20 transition-smooth"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Let’s create meaningful partnerships that drive real transformation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="shadow-elegant text-base sm:text-lg px-8 sm:px-12"
            >
              Schedule a Call
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
