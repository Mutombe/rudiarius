import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Shield,
  TrendingUp,
  Globe,
  Users,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";

// Color palette from images
const colors = {
  primary: "#001D39",
  secondary: "#0A4174",
  tertiary: "#49769F",
  quaternary: "#4E8EA2",
  light: "#6EA2B3",
  lighter: "#7BBDE8",
  lightest: "#BDD8E9",
};

// Layout wrapper with animated background
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Approach", path: "/approach" },
    { name: "Strategies", path: "/strategies" },
    { 
      name: "Resources", 
      dropdown: [
        { name: "Newsletter", path: "/newsletter" },
        { name: "Downloads", path: "/downloads" },
         { name: "Reports", path: "/reports" },
         { name: "Commentary and Insights", path: "/insights" },
      ]
    },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">
                <img src="/logob.png" alt="Logo" className="w-45 h-12" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsResourcesOpen(true)}
                      onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                      <button className="gellix-font text-sm font-medium text-white hover:text-blue-200 transition-colors duration-300 flex items-center space-x-1">
                        <span>{item.name}</span>
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isResourcesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                to={dropdownItem.path}
                                className={`gellix-font block px-4 py-3 text-sm font-medium transition-colors ${
                                  location.pathname === dropdownItem.path
                                    ? "text-blue-300 bg-white/10"
                                    : "text-white hover:text-blue-200 hover:bg-white/5"
                                }`}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`gellix-font text-sm font-medium transition-colors duration-300 ${
                        location.pathname === item.path
                          ? "text-blue-300"
                          : "text-white hover:text-blue-200"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMenuOpen ? <IoClose size={24} /> : <CgMenuRight size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
              >
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <div className="gellix-font px-6 py-3 text-sm font-medium text-gray-300">
                          {item.name}
                        </div>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className={`gellix-font block px-8 py-2 text-sm font-medium transition-colors ${
                              location.pathname === dropdownItem.path
                                ? "text-blue-300"
                                : "text-white hover:text-blue-200"
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`gellix-font block px-6 py-3 text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? "text-blue-300"
                            : "text-white hover:text-blue-200"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Page Content */}
      <div className="gellix-font relative z-10">{children}</div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 px-6 py-12 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-xl font-bold text-white mb-4">
                <img src="/logob.png" alt="Logo" className="w-24 h-6" />
              </div>
              <p className="gellix-font text-gray-300 text-sm">
                Passion. Independence. Rigour.
              </p>
            </div>
            <div>
              <h3 className="gellix-font text-white font-semibold mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span className="gellix-font">info@rudiarius.co.za</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span className="gellix-font">+27 10 017 6996</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span className="gellix-font">Sandton, Johannesburg</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="gellix-font text-white font-semibold mb-4">
                Legal
              </h3>
              <div className="text-sm text-gray-300">
                <Link
                  to="/privacy-policy"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/client-privacy-policy"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  Client Privacy Policy
                </Link>
                <Link
                  to="/cookie-policy"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  Cookie Policy
                </Link>
                <Link
                  to="/terms-conditions"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/complaints-policy"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  Complaints Policy
                </Link>
                <Link
                  to="/conflict-of-interest"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  Conflict of Interest
                </Link>
                <Link
                  to="/whistleblowing-policy"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  Whistleblowing Policy
                </Link>
                <Link
                  to="/esg-policy"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  ESG Policy
                </Link>
                <Link
                  to="/stewardship-code"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  Stewardship Code
                </Link>
                <Link
                  to="/sfdr"
                  className="gellix-font block hover:text-blue-200 transition-colors"
                >
                  SFDR
                </Link>
                <p className="gellix-font mt-4 pt-2 border-t border-gray-600">
                  FSP License 45286
                </p>
                <p className="gellix-font">
                  Authorized Financial Services Provider
                </p>
              </div>
            </div>
          </div>
          <div className="gellix-font border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2025 Rudiarius Capital Management. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;