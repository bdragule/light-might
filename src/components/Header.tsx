
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
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
        {/* Large logo positioned to bleed off the left and top of the page */}
        <div className="absolute -top-20 -left-20 pointer-events-none z-0">
          <img 
            src="/lovable-uploads/692e0c87-28ab-42cb-8a55-74ddcd3783fa.png" 
            alt="Light Might Hero Logo" 
            className="w-[400px] md:w-[500px] max-w-none"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative z-10"
        >
          <img 
            src="/lovable-uploads/437d98ee-9fcc-464a-8786-5e4e099c5007.png" 
            alt="Light Might Logo" 
            className="h-10 md:h-12"
          />
        </motion.div>
        
        <nav className="hidden md:flex space-x-8 relative z-10">
          {["About", "Benefits", "Science", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-lightmight-red transition-colors font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        
        <motion.div
          className="md:hidden relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button 
            className="p-2 text-white hover:text-lightmight-red transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
