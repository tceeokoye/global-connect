import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Plane,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedHero from "@/components/AnimatedHero";
import ServiceCard from "@/components/ServiceCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroHome from "@/assets/hero-home-visual.jpg";
import africanBusiness from "@/assets/african-business.jpg";
import africanStudents from "@/assets/african-students.jpg";
import africanNetworking from "@/assets/african-networking.jpg";
import diasporaCommunity from "@/assets/diaspora-community.jpg";
import africanTrade from "@/assets/african-trade.jpg";
import HeroSlider3D from "@/components/HeroSlider3D";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Industry",
      description: "Harness Nigeria's natural & human talent resources for industry advancement stimulating investment in strategic growth areas.",
      link: "/services/industry",
    },
    {
      icon: Globe,
      title: "Trade",
      description: "Unleash Nigeria's commerce potential for global market penetration via strategies for import/export & shipping enterprises.",
      link: "/services/trade",
    },
    {
      icon: Plane,
      title: "Travel & Consulate",
      description: "Globalization of travel & tourism through enhanced consulate services. Premium concierge style, first class service.",
      link: "/services/travel",
    },
  ];

  return (
    <div className="min-h-screen">
      
      <Navigation />
      

      <section className="relative pt-20">
        <HeroSlider3D />
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Bold Vision. Global Gateway.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                The Global Connect LLC implements transformative strategies for growth & development 
                in Nigeria, Africa & the Diaspora.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                As Africa's most populous country & a major player in the continent's economy, 
                Nigeria influences everything from energy markets to cultural trends. With rich 
                natural resources, a booming tech scene, & a vibrant youth population, Nigeria 
                holds the potential for driving economic growth & shaping geopolitical conversations worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.img 
                src={africanBusiness} 
                alt="African business professionals in Nigeria" 
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Premium Concierge Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry | Trade | Travel - Connecting Nigeria to Global Opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Service Images Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-elegant group"
            >
              <img 
                src={africanStudents} 
                alt="African students studying abroad" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Education Excellence</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-elegant group"
            >
              <img 
                src={africanTrade} 
                alt="African trade and commerce" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Trade & Commerce</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-elegant group"
            >
              <img 
                src={africanNetworking} 
                alt="African professionals networking" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Global Partnerships</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Priorities - 4D */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Core Priorities
            </h2>
            <p className="text-xl text-muted-foreground">
              Fostering partnerships & driving innovation to advance Nigeria's 4D foreign policy agenda
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-elegant text-center hover:-translate-y-2 transition-smooth"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Demography</h3>
              <p className="text-muted-foreground">
                Leveraging Nigeria's 250M+ population as a key driver of global demographics and workforce potential
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-elegant text-center hover:-translate-y-2 transition-smooth"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Development</h3>
              <p className="text-muted-foreground">
                Driving economic growth through technology, natural resources, and strategic market opportunities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-elegant text-center hover:-translate-y-2 transition-smooth"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Diaspora</h3>
              <p className="text-muted-foreground">
                Connecting Nigerian diaspora talent and resources back to homeland opportunities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-elegant text-center hover:-translate-y-2 transition-smooth"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Democracy</h3>
              <p className="text-muted-foreground">
                Strengthening institutions and governance for sustainable growth and international cooperation
              </p>
            </motion.div>
          </div>

          {/* Diaspora Community Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <img 
              src={diasporaCommunity} 
              alt="Nigerian diaspora community" 
              className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl"
        >
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-center shadow-glow">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape the World Stage?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with us to explore how we can help you leverage Nigeria's potential 
              for industry, trade, and travel opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className=" text-primary  text-lg px-8"
                >
                  Get in Touch
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  
                  className="border-white border  bg-transparent text-white hover:text-blue-600 hover:bg-white  text-lg px-8"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
