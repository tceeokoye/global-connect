import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedHero from "@/components/AnimatedHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import sectionTrade from "@/assets/clearance-trade.jpg";
import tradeAreas from "@/assets/global-trade.jpg";
import HeroImage from "@/assets/hero-trade.jpg"

const ServiceTrade = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero
        image={HeroImage}
        title="Trade"
        subtitle="Unleash Nigeria's commerce potential for global market penetration"
        height="h-[70vh]"
      />

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-24">
          {/* SECTION 1 - CHALLENGE */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gradient">Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Clearance of goods at local ports can be slow, cumbersome, & highly bureaucratic.
                  Companies indicate that corruption & congestion remain major issues at ports. One
                  of the most daunting challenges is the lack of access to foreign exchange,
                  reducing the ability to import necessary inputs & equipment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={sectionTrade}
                  alt="Trade challenges"
                  className="rounded-2xl shadow-elegant"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SECTION 2 - OPPORTUNITY */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="order-2 md:order-1"
              >
                <img
                  src={tradeAreas}
                  alt="Trade areas"
                  className="rounded-2xl shadow-elegant"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="order-1 md:order-2"
              >
                <h2 className="text-4xl font-bold mb-6 text-gradient">Opportunity</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  U.S. goods & services trade with Nigeria totaled an estimated $10.6 billion in 2022.
                  Nigeria strives to build its agricultural, mining, & manufacturing sectors,
                  especially in automotive assembly, cement, textile, & clothing areas. Nigeria is
                  eligible for AGOA preferential trade benefits.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SECTION 3 - SOLUTION */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card rounded-2xl p-10 shadow-elegant"
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The Global Connect LLC will coordinate US corporate presence in Nigeria, connecting
                agent or distributor relationships with vetted, rated, & verified locally registered
                companies. TGC LLC will carefully conduct representative arrangements navigating
                through Nigeria's complicated custom & legal environment.
              </p>

              <h3 className="text-2xl font-bold mb-6">Trade Areas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Agriculture",
                  "Oil, Gas & Mining",
                  "Textiles",
                  "Services Export",
                  "Machinery/Automotive",
                  "Trade Agreements",
                ].map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to="/contact">
                <Button size="lg" className="shadow-elegant text-lg px-10">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServiceTrade;
