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

// ScrollAnimate Component
const ScrollAnimate = ({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) => {
  const xOffset = index % 2 === 0 ? -50 : 50; // alternate left/right
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // <-- animate only once
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Team = () => {
  const ceo = {
    name: "Cajetan “CJ” Onu, JD",
    role: "Chief Executive Officer",
    image: teamCEO,
    bio: "a distinguished legal and compliance professional, entrepreneur, and global development advocate. CJ brings a unique and powerful blend of experience across law, regulatory compliance, investigations, real estate, and public administration. He earned his Juris Doctor and completed advanced legal studies in litigation and criminal law, along with academic training at UCLA and a bachelor’s degree in public administration and criminal justice. CJ served the State of California in critical enforcement roles, including as an Inspector for the Medical Board and a Special Investigator with the Division of Investigation, where he led compliance oversight, complex investigations, and regulatory enforcement matters protecting public safety and professional integrity. In the private sector, he has excelled as a Realtor, Project Engineer, and founder of California Legal Network & Services, providing legal support and compliance advisory services to individual professionals, healthcare organizations, and business entities..",
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

  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero
        image={heroTeam}
        title="Meet Our Team"
        subtitle="The people dedicated to opening global doors for you"
        height="h-[60vh]"
      />

      {/* CEO Section */}
      <section className="md:py-20 py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimate index={0}>
            <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl overflow-hidden shadow-glow h-fit">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[538px] w-full">
                  <img
                    src={ceo.image}
                    alt={ceo.name}
                    className="w-full h-full object-cover rounded-l-3xl"
                  />
                </div>
                <div className="p-8 md:p-12 text-center md:text-left text-white">
                  <h3 className="text-3xl font-bold mb-2">{ceo.name}</h3>
                  <p className="text-2xl mb-6 text-white/90">{ceo.role}</p>
                  <p className="text-lg mb-8 text-white/80 leading-relaxed">{ceo.bio}</p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center justify-center"
                    >
                      <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center justify-center"
                    >
                      <Mail className="w-5 h-5 mr-2" /> Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="md:py-20 py-10 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <ScrollAnimate index={0} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Dedicated professionals committed to your success</p>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimate key={member.name} index={index}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 flex flex-col">
                  <div className="relative h-80 w-full">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-lg text-white/90">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex gap-3 flex-col sm:flex-row">
                      <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center">
                        <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center">
                        <Mail className="w-4 h-4 mr-2" /> Email
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 px-4">
        <ScrollAnimate index={0} className="flex justify-center">
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-center shadow-glow max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented individuals who share our passion for connecting people with global opportunities.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              View Open Positions
            </Button>
          </div>
        </ScrollAnimate>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
