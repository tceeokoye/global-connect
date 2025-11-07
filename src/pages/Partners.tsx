import React from "react";
import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroPartners from "@/assets/hero-partners.jpg";
import partnerEducation from "@/assets/partner-education.jpg";
import partnerBusiness from "@/assets/partner-business.jpg";
import partnerAgencies from "@/assets/partner-agencies.jpg";
import partnerNetworks from "@/assets/partner-networks.jpg";
import sectionBecomePartner from "@/assets/section-become-partner.jpg";

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

const Partners = () => {
  const partnerTypes = [
    {
      image: partnerEducation,
      title: "Educational Institutions",
      description: "Universities and colleges seeking diverse international students",
    },
    {
      image: partnerBusiness,
      title: "Business Organizations",
      description: "Companies looking for strategic partnerships and investment",
    },
    {
      image: partnerAgencies,
      title: "International Agencies",
      description: "Government and non-profit organizations focused on global development",
    },
    {
      image: partnerNetworks,
      title: "Professional Networks",
      description: "Industry associations and professional development organizations",
    },
  ];

  const benefits = [
    "Access to a diverse pool of talented professionals and students",
    "Strategic support for market entry and business development",
    "Collaborative opportunities for mutual growth and success",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <AnimatedHero
        image={heroPartners}
        title="Partners & Collaborators"
        subtitle="Building bridges across continents"
        height="h-[70vh]"
      />

      <section className="md:py-20 py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Intro */}
          <ScrollAnimate index={0} total={1} className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-6 text-gradient">
              Our Global Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We collaborate with leading institutions, businesses, and organizations
              worldwide to create opportunities for African professionals and students.
            </p>
          </ScrollAnimate>

          {/* Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {partnerTypes.map((type, index) => (
              <ScrollAnimate key={type.title} index={index} total={partnerTypes.length}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-elegant group cursor-pointer"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl text-nowrap font-bold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                </motion.div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Become a Partner Section */}
          <ScrollAnimate index={0} total={1}>
            <motion.div
              className="bg-card rounded-2xl overflow-hidden shadow-elegant"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto">
                  <img 
                    src={sectionBecomePartner} 
                    alt="Become a Partner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-6">Become a Partner</h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    Join our network of global partners committed to creating opportunities
                    for African talent and fostering international collaboration.
                  </p>
                  <div className="space-y-4 mb-8">
                    {benefits.map((item, i) => (
                      <ScrollAnimate key={i} index={i} total={benefits.length}>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      </ScrollAnimate>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link to="/contact">
                      <Button size="lg" className="shadow-elegant text-lg px-10">
                        Partner With Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
