
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface ContentSliderProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSlider = ({ title, children, className }: ContentSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 1.5
          : scrollLeft + clientWidth / 1.5;
      
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      
      // Show left arrow if we've scrolled right
      setShowLeftArrow(scrollLeft > 20);
      
      // Show right arrow if there's more content to scroll to
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  return (
    <div className={className}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="content-row-title text-shadow"
      >
        {title}
      </motion.h2>
      
      <div className="relative">
        {showLeftArrow && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-black/40 backdrop-blur-sm rounded-full shadow-lg text-white/80 hover:text-white ml-1"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft size={30} />
          </button>
        )}
        
        <div
          ref={sliderRef}
          className="content-slider"
          onScroll={handleScroll}
        >
          {children}
        </div>
        
        {showRightArrow && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-black/40 backdrop-blur-sm rounded-full shadow-lg text-white/80 hover:text-white mr-1"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight size={30} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentSlider;
