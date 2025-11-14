import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo22.png";
import Image from "next/image";

export default function Footer(){
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image width={48} height={48} src={logo} alt="Global Connect Logo" className="h-12 mb-4" />
            <p className="text-muted-foreground text-sm">
              Connecting Africa, the Diaspora, and the World
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/education"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link
                  href="/services/immigration"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Immigration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/investment"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Investment
                </Link>
              </li>
              <li>
                <Link
                  href="/services/jobs"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Job Placement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/travel"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Travel & Consulate
                </Link>
              </li>
              <li>
                <Link
                  href="/services/conferences"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Conference and Education Workshop
                </Link>
              </li>
              <li>
                <Link
                  href="/services/trade"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Trade
                </Link>
              </li>
              <li>
                <Link
                  href="/services/industry"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Industry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>United States & Africa</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>+1 (818) 300 5881 (USA)</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span> +234 816 276 8597 (NIG)</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>cconuglobal@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} Global Connect LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


