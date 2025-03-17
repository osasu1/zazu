
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NetflixCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
}

const NetflixCard = ({
  title,
  description,
  image,
  link,
  className,
}: NetflixCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("netflix-card group", className)}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="aspect-video relative overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300">
            <h3 className="text-lg font-medium text-white text-shadow mb-1 group-hover:text-primary-foreground transition-colors">
              {title}
            </h3>
            <p className="text-sm text-white/80 text-shadow line-clamp-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {description}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default NetflixCard;
