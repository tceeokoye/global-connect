import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo22.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      subItems: [
        { name: "Trade", path: "/services/trade" },
        { name: "Industry", path: "/services/industry" },
        { name: "Travel & Consulate", path: "/services/travel" },
        { name: "Conference & Education Workshop", path: "/services/conferences" },
        {name: "Education & Schorlarship", path: "/services/education"}
      ],
    },
    { name: "Partners", path: "/partners" },
    { name: "Team", path: "/team" },
    { name: "Submit Resume", path: "/intake" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Global Connect Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    onClick={() => navigate(item.path)} // 👈 Makes "Services" itself clickable
                    className={`flex items-center gap-1 text-base font-medium transition-smooth hover:text-primary ${
                      isActive(item.path) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 w-56 bg-background/90 backdrop-blur-md border border-border rounded-xl shadow-xl overflow-hidden"
                      >
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className={`block px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors ${
                              isActive(sub.path)
                                ? "text-primary"
                                : "text-foreground"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium transition-smooth hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/intake">
              <Button variant="default" className="shadow-elegant">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6"
            >
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name} className="border-b border-border pb-2">
                    <button
                      onClick={() => {
                        if (isServicesOpen) {
                          // If already open, clicking again closes dropdown
                          setIsServicesOpen(false);
                        } else {
                          // Open dropdown or go to services page
                          setIsServicesOpen(true);
                          navigate(item.path);
                        }
                      }}
                      className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground hover:text-primary"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4"
                        >
                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setIsOpen(false)}
                              className={`block py-2 text-sm font-medium hover:text-primary ${
                                isActive(sub.path)
                                  ? "text-primary"
                                  : "text-foreground"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-sm font-medium transition-smooth hover:text-primary ${
                      isActive(item.path) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link to="/intake" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full mt-4">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
