import ContactUs from "../pages/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Global Connect LLC",
  description:
    "Get in touch with Global Connect LLC. Reach out to us for inquiries, partnerships, or consulting opportunities that bridge Africa, the diaspora, and the global community.",
  keywords: [
    "Global Connect",
    "contact Global Connect",
    "business inquiry",
    "Africa diaspora",
    "international consulting",
    "cross-border partnership",
    "investment opportunities",
  ],
  openGraph: {
    title: "Contact Global Connect LLC",
    description:
      "We’d love to hear from you. Reach out to Global Connect LLC for partnership, consulting, or project inquiries across Africa and the diaspora.",
    url: "https://global-connect-gold.vercel.app/pages/contact",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-contact.jpg", // You can use heroContact.src if imported
        width: 1200,
        height: 630,
        alt: "Contact Global Connect LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactUsPage() {
  return <ContactUs />;
}
