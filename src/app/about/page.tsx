


import About from "../pages/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Global Connect LLC",
  description:
    "Learn more about Global Connect LLC — a global consulting and facilitation firm connecting Africa, the diaspora, and the world through education, business, and innovation.",
  keywords: [
    "Global Connect",
    "Africa diaspora",
    "international partnerships",
    "global business",
    "education opportunities",
    "cross-border collaboration",
  ],
  openGraph: {
    title: "About Global Connect LLC",
    description:
      "We build sustainable bridges between Africa, the diaspora, and the world through education, investment, and collaboration.",
    url: "https://global-connect.vercel.app/pages/about",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-about.jpg", // You can use heroAbout.src if it's imported
        width: 1200,
        height: 630,
        alt: "About Global Connect LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutUsPage() {
  return <About />;
}
