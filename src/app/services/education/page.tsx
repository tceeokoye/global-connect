import type { Metadata } from "next";
import ServiceEducation from "@/app/pages/ServiceEducation";

export const metadata: Metadata = {
  title: "Education & Scholarship Programs | Global Connect LLC",
  description:
    "Global Connect LLC empowers African students with university placement, scholarship opportunities, and professional development programs worldwide.",
  keywords: [
    "Global Connect",
    "African students",
    "university placement",
    "scholarships",
    "study abroad",
    "visa support",
    "financial aid",
    "professional development",
    "education programs",
    "international study",
  ],
  openGraph: {
    title: "Education & Scholarship Programs | Global Connect LLC",
    description:
      "Explore Global Connect LLC's education and scholarship programs. Access university placements, funding opportunities, and support services for students across Africa and the diaspora.",
    url: "https://global-connect-gold.vercel.app/pages/education",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-education-visual.jpg", // or heroEducation.src if imported
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Education & Scholarship Programs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function EducationPage() {
  return <ServiceEducation />;
}
