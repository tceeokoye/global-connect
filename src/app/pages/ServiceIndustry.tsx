"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedHero from "@/components/AnimatedHero";
import Image from "next/image";
import heroHome from "@/assets/industry-section.jpg";
import sectionIndustry from "@/assets/investment-opportunities.jpg";
import industrySectors from "@/assets/investment.jpg";
import { useInView } from "react-intersection-observer";
import { AnimatedBlockProps } from "@/types/global";

const AnimatedBlock: React.FC<AnimatedBlockProps> = ({ children, direction = "up" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -80;
      break;
    case "right":
      x = 80;
      break;
    case "up":
      y = 80;
      break;
    case "down":
      y = -80;
      break;
  }

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

export default function ServiceIndustry() {
  const MotionImage = motion(Image);

  const investmentBenefits = [
    "Access to a large and growing market",
    "Competitive operating and labor costs",
    "Strong government support and incentives",
    "High potential for innovation and expansion",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <AnimatedHero
        image={heroHome}
        title="Opportunities & Benefits of Bringing Industries to Africa"
        subtitle="Harness Africa's natural & human talent resources for industry advancement"
        height="h-[70vh]"
      />

      {/* Main Content */}
      <section className="md:py-20 py-10 px-4">
        <div className="container mx-auto max-w-6xl md:space-y-24 space-y-10">

          {/* Intro Section */}
          <AnimatedBlock direction="left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <MotionImage
                src={sectionIndustry}
                alt="Industry in Africa"
                className="rounded-2xl shadow-elegant"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Africa especially Nigeria offers exceptional opportunities for industrial growth and investment.
                  With expanding sectors such as mining, information services, and professional services, the continent
                  is rapidly emerging as a strategic destination for global industry. A key advantage is the depth of
                  the Nigerian Diaspora, whose worldwide expertise strengthens local capacity and accelerates innovation.
                </p>
              </div>
            </div>
          </AnimatedBlock>

          {/* Benefits Section */}
          <AnimatedBlock direction="right">
            <motion.div
              className="bg-card rounded-2xl p-10 shadow-elegant"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">Benefits for Investors</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Africa presents a compelling investment environment with strong long-term value:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {investmentBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Why Africa, Why Now?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bringing industries to Africa creates shared value for investors, the diaspora, and local communities.
                It strengthens economies, empowers workforce development, and positions the continent as a strategic hub
                for global growth, innovation, and enterprise.
              </p>
            </motion.div>
          </AnimatedBlock>

          {/* Industry Sectors */}
          <AnimatedBlock direction="up">
            <motion.div
              className="bg-card rounded-2xl p-10 shadow-elegant"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Industry Sectors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Aerospace",
                  "Nollywood Entertainment",
                  "Healthcare",
                  "Film, Television & Music",
                  "Technology & AI",
                  "LA Olympics 2028",
                  "Brownskin Global Brands",
                ].map((sector, index) => (
                  <motion.div
                    key={sector}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{sector}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedBlock>

          {/* CTA Section */}
          <AnimatedBlock direction="down">
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button size="lg" className="shadow-elegant text-lg px-10">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </AnimatedBlock>
        </div>
      </section>
    </div>
  );
}
