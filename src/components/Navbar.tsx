
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

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
          ? "py-3 glass border-b border-border/10"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="text-2xl font-medium tracking-tight transition-opacity hover:opacity-80"
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
                  "text-sm transition-all duration-200 hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1BQa6mUeSTK3ujd92Dqo_gK7OdLHFZ0ZB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-muted-foreground transition-all duration-200 hover:text-primary"
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
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "block py-2 text-base transition-colors",
                  location.pathname === item.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1BQa6mUeSTK3ujd92Dqo_gK7OdLHFZ0ZB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2 text-base text-muted-foreground transition-colors"
            >
              <FileText className="h-4 w-4 mr-2" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
