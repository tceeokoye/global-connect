"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedHero from "@/components/AnimatedHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroHome from "@/assets/industry-section.jpg";
import sectionIndustry from "@/assets/bussiness.jpg";
import industrySectors from "@/assets/investment.jpg";
import { useInView } from "react-intersection-observer";

/* ✅ Reusable Animated Wrapper */
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

const ServiceIndustry = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ✅ Navigation and Hero */}
      <Navigation />
      <AnimatedHero
        image={heroHome}
        title="Industry"
        subtitle="Harness Nigeria's natural & human talent resources for industry advancement"
        height="h-[70vh]"
      />

      {/* ✅ Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-24">

          {/* CHALLENGE SECTION */}
          <AnimatedBlock direction="left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gradient">Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bringing new industry sectors to Nigeria can pose daunting challenges including
                  the high cost of doing business, the need to duplicate essential infrastructure,
                  insecurity, corruption, the lack of effective judicial due process, and
                  nontransparent economic decision-making in government procurement.
                </p>
              </div>
              <motion.img
                src={sectionIndustry}
                alt="Industry challenges"
                className="rounded-2xl shadow-elegant"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </AnimatedBlock>

          {/* OPPORTUNITY SECTION */}
          <AnimatedBlock direction="right">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.img
                src={industrySectors}
                alt="Industry sectors"
                className="rounded-2xl shadow-elegant order-2 md:order-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-6 text-gradient">Opportunity</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  U.S. direct investment in Nigeria is led by mining, information services, and
                  professional, scientific, and technical services. Many Nigerian Diaspora citizens
                  have excelled as a professional talent pool within these sectors with opportunities
                  to re-integrate them into Nigeria’s industrial infrastructure.
                </p>
              </div>
            </div>
          </AnimatedBlock>

          {/* SOLUTION SECTION */}
          <AnimatedBlock direction="up">
            <motion.div
              className="bg-card rounded-2xl p-10 shadow-elegant"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The Global Connect LLC will coalesce Diaspora citizens with professional credentials,
                abroad experience, and expertise with high net worth to reinvest back into their
                homeland with both financial and talent resources. TGC LLC will restore confidence
                through security and good corporate governance.
              </p>

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
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
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

          {/* CTA SECTION */}
          <AnimatedBlock direction="down">
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <Button size="lg" className="shadow-elegant text-lg px-10">
                  Get in Touch
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

export default ServiceIndustry;
