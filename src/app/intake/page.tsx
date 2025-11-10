import type { Metadata } from "next";
import Intake from "../pages/Intake";

export const metadata: Metadata = {
  title: "Client Intake | Global Connect LLC",
  description:
    "Start your global journey with Global Connect LLC. Complete our intake form to explore opportunities in education, immigration, investment, conferences, and career services.",
  keywords: [
    "Global Connect",
    "client intake",
    "intake form",
    "study abroad",
    "immigration services",
    "investment opportunities",
    "career placement",
    "conferences",
    "training programs",
  ],
  openGraph: {
    title: "Client Intake | Global Connect LLC",
    description:
      "Complete the Global Connect LLC intake form to take your first step toward partnership, study abroad, career services, or investment opportunities bridging Africa and the global community.",
    url: "https://global-connect-gold.vercel.app/pages/intake",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-intake.jpg", // or heroIntake.src if imported
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Client Intake",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function IntakePage() {
  return <Intake />;
}
