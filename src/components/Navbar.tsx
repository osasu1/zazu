
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-black/70 backdrop-blur-md border-b border-white/5"
          : "py-5 bg-gradient-to-b from-black/80 to-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-red-600 transition-opacity hover:opacity-80"
          >
            Osasu.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm transition-all duration-200 hover:text-white",
                  location.pathname === item.href
                    ? "text-white font-medium"
                    : "text-white/70"
                )}
              >
                {item.title}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1BQa6mUeSTK3ujd92Dqo_gK7OdLHFZ0ZB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-white/70 transition-all duration-200 hover:text-white"
              download="Osasu_Resume.pdf"
            >
              <FileText className="h-4 w-4 mr-1" />
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="container mx-auto px-4 py-4 space-y-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "block py-2 text-base transition-colors",
                      location.pathname === item.href
                        ? "text-white font-medium"
                        : "text-white/70"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="https://drive.google.com/file/d/1BQa6mUeSTK3ujd92Dqo_gK7OdLHFZ0ZB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 text-base text-white/70 transition-colors"
                  download="Osasu_Resume.pdf"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
