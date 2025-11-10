

import Home from "./pages/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Connect LLC – Connecting Businesses Worldwide",
  description:
    "Global Connect LLC bridges opportunities across industries—education, immigration, trade, investment, and more. Join us to explore global partnerships and solutions.",
  keywords: [
    "Global Connect",
    "international business",
    "education consultancy",
    "immigration",
    "investment",
    "trade services",
    "business expansion",
  ],
  openGraph: {
    title: "Global Connect LLC – Connecting Businesses Worldwide",
    description:
      "Explore opportunities in education, immigration, trade, and investment with Global Connect LLC.",
    url: "https://global-connect-gold.vercel.app",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/og-image.jpg", // Place this image in your /public folder
        width: 1200,
        height: 630,
        alt: "Global Connect LLC – Connecting Businesses Worldwide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Connect LLC – Connecting Businesses Worldwide",
    description:
      "Join Global Connect LLC to explore global opportunities in education, investment, and trade.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return <Home />;
}
