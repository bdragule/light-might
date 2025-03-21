
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/56e62cbb-6ef9-4edf-9032-5110f59b2cd5.png" 
          alt="Woman with red light therapy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lightmight-dark/40 to-lightmight-dark/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wider leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to Healing that Starts<br />
            <span className="text-lightmight-red">at the Cellular Level</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the cutting-edge science of Photobiomodulation—the non-invasive therapy 
            that harnesses the power of light to stimulate cellular regeneration and natural healing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="mailto:pollyleigh@vivelifecenter.com?subject=Consultation Request" 
              className="inline-block bg-lightmight-red text-white text-lg font-light px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-glow tracking-wider"
            >
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1} 
          stroke="white" 
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
