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

  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero
        image={heroPartners}
        title="Partners & Collaborators"
        subtitle="Building bridges across continents"
        height="h-[70vh]"
      />

      <section className="md:py-20  py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-5xl font-bold mb-6 text-gradient">
              Our Global Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We collaborate with leading institutions, businesses, and organizations
              worldwide to create opportunities for African professionals and students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant group hover:-translate-y-2 transition-smooth cursor-pointer"
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
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                <h3 className="text-2xl font-bold mb-6">
                  Become a Partner
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Join our network of global partners committed to creating opportunities
                  for African talent and fostering international collaboration.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Access to a diverse pool of talented professionals and students
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Strategic support for market entry and business development
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Collaborative opportunities for mutual growth and success
                    </p>
                  </div>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
