import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedHero from "@/components/AnimatedHero";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero-team.jpg";
import teamCEO from "@/assets/team-ceo.jpg";
import teamOperations from "@/assets/cto.svg";
import teamMarketing from "@/assets/team-marketing.jpg";
import teamImmigration from "@/assets/team-immigration.jpg";
import teamEducation from "@/assets/team-education.jpg";
import teamHR from "@/assets/team-hr.jpg";

const Team = () => {
  const ceo = {
    name: "Cajetan “CJ” Onu, JD",
    role: "Chief Executive Officer",
    image: teamCEO,
    bio: "a distinguished legal and compliance professional, entrepreneur, and global development advocate. CJ brings a unique and powerful blend of experience across law, regulatory compliance, investigations, real estate, and public administration. He earned his Juris Doctor and completed advanced legal studies in litigation and criminal law, along with academic training at UCLA and a bachelor’s degree in public administration and criminal justice",
    linkedin: "#",
    email: "onucajetan@gmail.com",
  };

  const teamMembers = [
    {
      name: "Obichukwu Truth C.",
      role: "Chief Technical Officer (CTO)",
      image: teamOperations,
      bio: "Software Engineer. www.tceetechnologies.com",
      linkedin: "https://www.linkedin.com/in/tceetechnologies/",
      email: "truthokoye@gmail.com",
    },
    {
      name: "Kofi Asante",
      role: "Marketing Director",
      image: teamMarketing,
      bio: "Building our global brand and connecting with clients worldwide.",
      linkedin: "#",
      email: "kofi@globalconnect.com",
    },
    {
      name: "Fatima Ibrahim",
      role: "Immigration Services Lead",
      image: teamImmigration,
      bio: "Expert in visa processing and immigration law with a passion for helping families relocate.",
      linkedin: "#",
      email: "fatima@globalconnect.com",
    },
    {
      name: "Chidi Nwosu",
      role: "Education Counselor",
      image: teamEducation,
      bio: "Guiding students to find the perfect academic programs that match their goals.",
      linkedin: "#",
      email: "chidi@globalconnect.com",
    },
    {
      name: "Zara Kamara",
      role: "HR & Recruitment Specialist",
      image: teamHR,
      bio: "Connecting talented professionals with career opportunities across the globe.",
      linkedin: "#",
      email: "zara@globalconnect.com",
    },
  ];

  // Function to alternate fly-in directions
  const getDirection = (index) => {
    const directions = [
      { x: -100, y: 0 }, // left
      { x: 100, y: 0 },  // right
      { x: 0, y: -100 }, // top
      { x: 0, y: 100 },  // bottom
    ];
    return directions[index % directions.length];
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero
        image={heroTeam}
        title="Meet Our Team"
        subtitle="The people dedicated to opening global doors for you"
        height="h-[60vh]"
      />

      {/* CEO Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl overflow-hidden shadow-glow h-fit"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[538px]"
              >
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 text-white"
              >
                <h3 className="text-4xl font-bold mb-2">{ceo.name}</h3>
                <p className="text-2xl mb-6 text-white/90">{ceo.role}</p>
                <p className="text-lg mb-8 text-white/80 leading-relaxed">
                  {ceo.bio}
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated professionals committed to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{
                  opacity: 0,
                  ...getDirection(index),
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 3,
                  transition: { duration: 0.3 },
                }}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-lg text-white/90">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl"
        >
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-center shadow-glow">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented individuals who share our passion
              for connecting people with global opportunities.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
            >
              View Open Positions
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
