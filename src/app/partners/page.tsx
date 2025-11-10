import type { Metadata } from "next";
import Partners from "../pages/Partners";

export const metadata: Metadata = {
  title: "Partners & Collaborators | Global Connect LLC",
  description:
    "Explore Global Connect LLC’s network of partners and collaborators — from universities and business organizations to international agencies and professional networks bridging Africa with the global community.",
  keywords: [
    "Global Connect",
    "partnerships",
    "business collaboration",
    "educational partnerships",
    "international agencies",
    "professional networks",
    "Africa diaspora",
    "strategic partners",
  ],
  openGraph: {
    title: "Partners & Collaborators | Global Connect LLC",
    description:
      "Discover Global Connect LLC’s global partnerships and collaborations connecting Africa, the diaspora, and international organizations for innovation and shared growth.",
    url: "https://global-connect-gold.vercel.app/pages/partners",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-partners.jpg", // or heroPartners.src if imported
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Partners and Collaborators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PartnersPage() {
  return <Partners />;
}
