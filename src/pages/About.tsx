import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Users, TrendingUp } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroAbout from "@/assets/hero-about.jpg";
import sectionPartnership from "@/assets/section-partnership.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparency and accountability in every engagement",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Progress through meaningful partnerships",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Practical, creative solutions for global challenges",
    },
    {
      icon: TrendingUp,
      title: "Empowerment",
      description: "Growth through opportunity and access",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Success measured by transformation",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero
        video="/videos/hero-about.mp4"
        image={heroAbout}
        title="Building Bridges. Creating Futures."
        subtitle="Connecting Africa, the Diaspora, and the World"
        height="h-[70vh]"
      />

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-elegant"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={sectionPartnership}
                  alt="Global collaboration"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Who We Are
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                The Global Connect, LLC is an international consulting and facilitation firm 
                dedicated to creating sustainable bridges between Africa, the diaspora, and 
                the rest of the world.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                We connect students, entrepreneurs, investors, and professionals with global 
                opportunities in education, business, and career advancement.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our approach combines deep cultural understanding with practical global expertise, 
                ensuring every partnership creates lasting value and mutual growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-10 shadow-elegant hover:-translate-y-2 transition-smooth"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading global platform linking Africa's potential to international 
                opportunity through education, investment, and collaboration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-10 shadow-elegant hover:-translate-y-2 transition-smooth"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower individuals and institutions to engage in meaningful partnerships 
                that drive mobility, innovation, and development across borders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every partnership, project, and interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-elegant group hover:-translate-y-2 transition-smooth cursor-pointer"
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth"
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

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create meaningful partnerships that drive real transformation
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-elegant text-lg px-12">
              Schedule a Call
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
