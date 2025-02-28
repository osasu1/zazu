
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-medium">
              Osasu Omangbon
            </Link>
            <p className="text-muted-foreground max-w-md">
              Building impactful solutions at the intersection of Product, Data, and Technology
            </p>
          </div>
          <div className="space-y-4 md:text-right">
            <div className="flex space-x-4 md:justify-end">
              <a
                href="mailto:omangbonosasu@hotmail.com"
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Osasu Omangbon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
