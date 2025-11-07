import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Global Connect Logo" className="h-12 mb-4" />
            <p className="text-muted-foreground text-sm">
              Connecting Africa, the Diaspora, and the World
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-primary transition-smooth">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-smooth">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/education" className="text-muted-foreground hover:text-primary transition-smooth">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link to="/services/immigration" className="text-muted-foreground hover:text-primary transition-smooth">
                  Immigration
                </Link>
              </li>
              <li>
                <Link to="/services/investment" className="text-muted-foreground hover:text-primary transition-smooth">
                  Investment
                </Link>
              </li>
              <li>
                <Link to="/services/jobs" className="text-muted-foreground hover:text-primary transition-smooth">
                  Job Placement
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
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>info@globalconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Global Connect LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
