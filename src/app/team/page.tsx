import type { Metadata } from "next";
import Team from "../pages/Team";

export const metadata: Metadata = {
  title: "Our Team | Global Connect LLC",
  description:
    "Meet the visionary leadership and talented professionals behind Global Connect LLC — experts in technology, law, education, marketing, and international development working to connect Africa with the world.",
  keywords: [
    "Global Connect",
    "Global Connect team",
    "leadership team",
    "executive team",
    "Cajetan Onu",
    "Obichukwu Truth",
    "global development professionals",
    "international business leaders",
    "Africa diaspora team",
  ],
  openGraph: {
    title: "Our Team | Global Connect LLC",
    description:
      "Get to know the leadership and dedicated experts at Global Connect LLC — connecting Africa, the diaspora, and global opportunities through innovation, strategy, and collaboration.",
    url: "https://global-connect-gold.vercel.app/pages/team",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-team.jpg", // or heroTeam.src if imported
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TeamPage() {
  return <Team />;
}
