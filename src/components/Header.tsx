
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      {/* Logo container that scrolls with the page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute z-50"
        style={{ 
          top: "20px", 
          left: "20px"
        }}
      >
        <img 
          src="/lovable-uploads/afbf2ba0-3062-4aa0-b8a0-4a351f48b5d8.png" 
          alt="Light Might Logo" 
          className="h-48 md:h-60"
        />
      </motion.div>
      
      {/* Fixed header for navigation */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
          <div className="w-40 md:w-48"></div> {/* Spacer to balance the layout */}
          
          <nav className="hidden md:flex space-x-8">
            {["About", "Benefits", "Science", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors font-extralight tracking-wider ${
                  scrolled ? "text-black hover:text-lightmight-red" : "text-white hover:text-lightmight-red"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <button 
              className={`p-2 transition-colors ${
                scrolled ? "text-black hover:text-lightmight-red" : "text-white hover:text-lightmight-red"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
