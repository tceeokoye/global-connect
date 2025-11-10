import type { Metadata } from "next";
import ServiceConferences from "@/app/pages/ServiceConferences";

export const metadata: Metadata = {
  title: "Conferences & Professional Training | Global Connect LLC",
  description:
    "Explore Global Connect LLC's global conferences, professional development programs, and training opportunities. Connect with industry leaders, gain certifications, and expand your network.",
  keywords: [
    "Global Connect",
    "professional training",
    "global conferences",
    "networking events",
    "certifications",
    "leadership programs",
    "career development",
    "training workshops",
  ],
  openGraph: {
    title: "Conferences & Professional Training | Global Connect LLC",
    description:
      "Join Global Connect LLC's international conferences and training programs to strengthen skills, gain certifications, and build networks across industries worldwide.",
    url: "https://global-connect-gold.vercel.app/pages/conferences",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-conferences.jpg", // or heroConferences.src if imported
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Conferences & Professional Training",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ConferencesPage() {
  return <ServiceConferences />;
}
