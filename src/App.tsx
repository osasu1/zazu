
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          {/* Decorative background elements for the doodle aesthetic */}
          <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]">
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-8 border-dashed border-primary rotate-[30deg]"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full border-8 border-dotted border-primary rotate-[-20deg]"></div>
            <div className="absolute top-1/4 left-1/3 w-72 h-24 border-4 border-primary rotate-[10deg]"></div>
            <div className="absolute bottom-1/4 right-1/3 w-32 h-32 border-4 border-primary rounded-full"></div>
            <div className="absolute top-2/3 left-2/3 w-48 h-16 border-2 border-primary rotate-[-5deg]"></div>
          </div>
          
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
