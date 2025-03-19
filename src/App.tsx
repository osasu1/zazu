
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Page-specific doodle background component
const PageDoodles = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Return different doodle elements based on current route
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]">
      {/* Common elements across all pages */}
      <div className="absolute top-1/4 left-1/3 w-72 h-24 border-4 border-primary rotate-[10deg]"></div>
      
      {/* Home page specific doodles */}
      {path === "/" && (
        <>
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-8 border-dashed border-primary rotate-[30deg]"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full border-8 border-dotted border-primary rotate-[-20deg]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-32 h-32 border-4 border-primary rounded-full"></div>
        </>
      )}
      
      {/* About page specific doodles */}
      {path === "/about" && (
        <>
          <div className="absolute top-40 right-40 w-72 h-72 border-4 border-primary rounded-lg rotate-[15deg]"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 border-4 border-dotted border-primary rotate-[-10deg]"></div>
          <div className="absolute top-2/3 right-1/4 w-48 h-48 border-2 border-dashed border-primary rounded-full"></div>
        </>
      )}
      
      {/* Projects page specific doodles */}
      {path === "/projects" && (
        <>
          <div className="absolute top-60 right-10 w-40 h-40 border-4 border-primary rotate-[20deg]"></div>
          <div className="absolute bottom-40 left-60 w-80 h-30 border-4 border-dashed border-primary rotate-[-5deg]"></div>
          <div className="absolute top-1/3 right-1/3 w-36 h-36 border-2 border-dotted border-primary rounded-lg"></div>
        </>
      )}
      
      {/* Blog page specific doodles */}
      {path === "/blog" && (
        <>
          <div className="absolute top-20 left-20 w-48 h-48 border-4 border-primary rounded-lg rotate-[5deg]"></div>
          <div className="absolute bottom-30 right-40 w-56 h-56 border-3 border-dashed border-primary rotate-[-8deg]"></div>
          <div className="absolute top-2/3 left-1/4 w-24 h-24 border-4 border-dotted border-primary"></div>
          <div className="absolute top-1/2 right-1/2 w-64 h-16 border-2 border-primary rotate-[12deg]"></div>
        </>
      )}
      
      {/* Contact page specific doodles */}
      {path === "/contact" && (
        <>
          <div className="absolute top-10 right-30 w-32 h-32 rounded-full border-4 border-primary rotate-[40deg]"></div>
          <div className="absolute bottom-20 left-40 w-64 h-28 border-4 border-dashed border-primary"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 border-2 border-dotted border-primary rounded-full rotate-[-15deg]"></div>
        </>
      )}
      
      {/* 404 page specific doodles */}
      {path !== "/" && path !== "/about" && path !== "/projects" && path !== "/blog" && path !== "/contact" && (
        <>
          <div className="absolute top-30 right-10 w-56 h-56 border-8 border-dashed border-primary rotate-[25deg]"></div>
          <div className="absolute bottom-40 left-20 w-48 h-48 border-4 border-dotted border-primary rotate-[-30deg]"></div>
          <div className="absolute top-1/4 right-1/4 w-36 h-36 border-6 border-primary rounded-lg"></div>
        </>
      )}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          <Routes>
            <Route path="*" element={<PageDoodles />} />
          </Routes>
          
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
