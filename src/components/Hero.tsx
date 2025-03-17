
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLink: string;
  ctaText: string;
  secondaryLink?: string;
  secondaryText?: string;
  backgroundImage?: string;
}

const Hero = ({
  title,
  subtitle,
  ctaLink,
  ctaText,
  secondaryLink,
  secondaryText,
  backgroundImage = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2070",
}: HeroProps) => {
  return (
    <div className="relative min-h-[85vh] w-full flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl text-shadow">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              to={ctaLink}
              className="inline-flex items-center justify-center h-14 px-8 py-0 bg-white text-black rounded-md text-base font-medium transition-all hover:bg-white/90"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            {secondaryLink && secondaryText && (
              <a
                href={secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 py-0 bg-white/10 backdrop-blur-sm text-white rounded-md text-base font-medium transition-all hover:bg-white/20"
              >
                {secondaryText}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
