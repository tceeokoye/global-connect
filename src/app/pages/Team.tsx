"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

import AnimatedHero from "@/components/AnimatedHero";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero-team.jpg";
import teamCEO from "@/assets/CEO.jpeg";
import teamOperations from "@/assets/cto.svg";
import teamMarketing from "@/assets/team-marketing.jpg";
import teamImmigration from "@/assets/team-immigration.jpg";
import teamEducation from "@/assets/team-education.jpg";
import teamHR from "@/assets/team-hr.jpg";
import Image from "next/image";

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
const MotionImage = motion(Image);

export default function Team() {
  const ceo = {
    name: "Cajetan “CJ” Onu, JD",
    role: "\Principal – The Global Connect, LLC",
    sub:
      "Legal and Compliance Professional | Entrepreneur | Global Development Advocate",
    image: teamCEO,
    bio:
      "Cajetan “CJ” Onu, JD, is the Principal of The Global Connect, LLC, leading cross-continental initiatives that bridge Africa, the diaspora, and global partners. A legal and compliance professional, he brings multidisciplinary expertise in investigations, governance, regulatory oversight, real estate/construction management, and public administration. CJ has served in key roles ensuring regulatory integrity and healthcare compliance. Today, he connects governments, institutions, and businesses to strategic opportunities in trade, clean energy, and sustainable development.",
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
      bio:
        "Expert in visa processing and immigration law with a passion for helping families relocate.",
      linkedin: "#",
      email: "fatima@globalconnect.com",
    },
    {
      name: "Chidi Nwosu",
      role: "Education Counselor",
      image: teamEducation,
      bio:
        "Guiding students to find the perfect academic programs that match their goals.",
      linkedin: "#",
      email: "chidi@globalconnect.com",
    },
    {
      name: "Zara Kamara",
      role: "HR & Recruitment Specialist",
      image: teamHR,
      bio:
        "Connecting talented professionals with career opportunities across the globe.",
      linkedin: "#",
      email: "zara@globalconnect.com",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
 
      <AnimatedHero
        image={heroTeam}
        title="Meet Our Team"
        subtitle="The people dedicated to opening global doors for you"
        height="h-[60vh]"
      />

      <section className="md:py-20 py-10 px-4">
        <div className="container mx-auto w-full">
          <ScrollAnimate index={0}>
            <div className="relative bg-white rounded-[16px] shadow-lg p-6 md:p-10">
              {/* CEO Image floated left */}
              <div className="float-left w-full md:w-1/3 mr-6 mb-4 md:mb-0 rounded-2xl overflow-hidden shadow-md">
                <MotionImage
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              
              <div className="text-black text-base md:text-lg leading-relaxed">
                <h3 className="text-3xl md:text-4xl text-sky-600 font-bold mb-2">
                  {ceo.name}
                </h3>
                <p className="text-xl md:text-2xl font-medium mb-4">
                  {ceo.role}
                </p>
                <p className="mb-4">{ceo.bio}</p>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-black/30 text-black hover:bg-gray-100 hover:text-black flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-black/30 text-black hover:bg-gray-100  hover:text-black  flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" /> Email
                  </Button>
                </div>
              </div>

              {/* Clear float */}
              <div className="clear-both" />
            </div>
          </ScrollAnimate>
        </div>
      </section>
      {/* Mission Section (CJ’s Quote) */}
      <section className="py-16 px-6 bg-gradient-to-r from-sky-50 to-white">
        <ScrollAnimate index={1} className="text-center max-w-5xl mx-auto">
          <blockquote className="italic text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
            “Our mission is to empower Africa’s growth by building credible,
            transparent, and sustainable partnerships that benefit people,
            communities, and economies worldwide.”
          </blockquote>
          <p className="mt-6 text-lg text-sky-600 font-semibold">
            — Cajetan “CJ” Onu, JD
          </p>
        </ScrollAnimate>
      </section>


      {/* Team Members Section */}
      <section className="md:py-20 py-10 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <ScrollAnimate index={0} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated professionals committed to your success
            </p>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimate key={member.name} index={index}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 flex flex-col">
                  <div className="relative h-80 w-full">
                    <MotionImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-lg text-white/90">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex gap-3 flex-col sm:flex-row">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 flex items-center justify-center"
                      >
                        <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 flex items-center justify-center"
                      >
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

      
      <section className="py-20 px-4">
        <ScrollAnimate index={0} className="flex justify-center">
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-center shadow-glow max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented individuals who share our
              passion for connecting people with global opportunities.
            </p>
            {/* <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
            >
              View Open Positions
            </Button> */}
          </div>
        </ScrollAnimate>
        
      </section>
      
    </div>
  );
}
