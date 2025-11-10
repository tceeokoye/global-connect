import type { Metadata } from "next";
import ServiceJobs from "@/app/pages/ServiceJobs"; // adjust path if needed

export const metadata: Metadata = {
  title: "International Job Placement & Career Linkage | Global Connect LLC",
  description:
    "Global Connect LLC connects skilled professionals and graduates to verified employers worldwide, providing job matching, candidate verification, work sponsorship, and career development services.",
  keywords: [
    "Global Connect",
    "jobs",
    "career opportunities",
    "international recruitment",
    "job placement",
    "work sponsorship",
    "candidate verification",
    "career development",
    "Africa",
    "global talent",
  ],
  openGraph: {
    title: "International Job Placement & Career Linkage | Global Connect LLC",
    description:
      "Explore Global Connect LLC’s international job placement and career linkage services. We connect talent to verified employers worldwide, providing work sponsorship, candidate verification, and career growth support.",
    url: "https://global-connect-gold.vercel.app/pages/jobs",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-jobs-visual.jpg", // replace with actual path if imported
        width: 1200,
        height: 630,
        alt: "Global Connect LLC International Job Placement & Career Linkage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function JobsPage() {
  return <ServiceJobs />;
}
