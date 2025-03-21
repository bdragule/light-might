
import { motion } from "framer-motion";

const Footer = () => {
  const disclaimers = [
    "The statements on this page have not been evaluated by the FDA. This service is not intended to diagnose, treat, cure, or prevent any disease.",
    "Results may vary. Photobiomodulation therapy is not guaranteed to treat all conditions listed.",
    "While some PBM devices have received FDA clearance for specific uses, not all applications of PBM therapy have been FDA-approved for the conditions mentioned.",
    "Consult with your healthcare provider before beginning any new therapy, especially if you have a medical condition or take medications."
  ];

  return (
    <footer className="bg-lightmight-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <img 
            src="/lovable-uploads/437d98ee-9fcc-464a-8786-5e4e099c5007.png" 
            alt="Light Might Logo" 
            className="h-10 md:h-12 mb-6 md:mb-0 invert"
          />
          
          <div className="flex space-x-6">
            {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label={social}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 pb-4">
          <h3 className="text-lg font-medium mb-4">Disclaimers:</h3>
          <div className="space-y-3 text-sm text-white/70">
            {disclaimers.map((disclaimer, index) => (
              <p key={index} className="flex">
                <span className="superscript mr-1">{index + 1}</span>
                <span>{disclaimer}</span>
              </p>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Light Might. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
