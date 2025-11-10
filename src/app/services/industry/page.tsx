import type { Metadata } from "next";
import ServiceIndustry from "@/app/pages/ServiceIndustry"; // adjust path if needed

export const metadata: Metadata = {
  title: "Industry Development | Global Connect LLC",
  description:
    "Global Connect LLC empowers Africa's industry by connecting diaspora talent, investment, and expertise to develop sectors like technology, healthcare, entertainment, and more.",
  keywords: [
    "Global Connect",
    "industry development",
    "Africa industry",
    "diaspora talent",
    "investment",
    "industrial sectors",
    "technology",
    "healthcare",
    "entertainment",
    "professional expertise",
  ],
  openGraph: {
    title: "Industry Development | Global Connect LLC",
    description:
      "Global Connect LLC connects diaspora professionals and investors to African industry sectors, fostering growth, innovation, and reinvestment in technology, healthcare, entertainment, and more.",
    url: "https://global-connect-gold.vercel.app/pages/industry",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/industry-og-image.jpg", // replace with your image path
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Industry Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function IndustryPage() {
  return <ServiceIndustry />;
}
