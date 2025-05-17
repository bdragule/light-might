import { motion } from "framer-motion";
const Footer = () => {
  const disclaimers = ["The statements on this page have not been evaluated by the FDA. This service is not intended to diagnose, treat, cure, or prevent any disease.", "Results may vary. Photobiomodulation therapy is not guaranteed to treat all conditions listed.", "While some PBM devices have received FDA clearance for specific uses, not all applications of PBM therapy have been FDA-approved for the conditions mentioned.", "Consult with your healthcare provider before beginning any new therapy, especially if you have a medical condition or take medications."];
  return <footer className="bg-lightmight-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <img src="/lovable-uploads/437d98ee-9fcc-464a-8786-5e4e099c5007.png" alt="Light Might Logo" className="h-12 mb-4" />
            <p className="text-white/70 text-sm mt-4 font-light tracking-wide">
              Cutting-edge Photobiomodulation therapy to rejuvenate your skin at the cellular level.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-light mb-4 tracking-wider">Contact Us</h3>
            <div className="space-y-2 text-white/80 font-light">
              <p>Light Might: (786) 316-9984</p>
              <p>Email: Zebrayankee@protonmail.com</p>
              <p>Locations: Austin, Texas; Tucson, Arizona</p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-light mb-4 tracking-wider">Quick Links</h3>
            <div className="space-y-2 font-light">
              <p><a href="#about" className="text-white/80 hover:text-white transition-colors">About PBM</a></p>
              <p><a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a></p>
              <p><a href="#science" className="text-white/80 hover:text-white transition-colors">The Science</a></p>
              <p><a href="#contact" className="text-white/80 hover:text-white transition-colors">Book Now</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-xs text-white/60 font-extralight tracking-wide">
          <div className="space-y-2">
            {disclaimers.map((disclaimer, index) => <p key={index} className="flex items-start">
                <span className="superscript mr-1">{index + 1}</span>
                <span>{disclaimer}</span>
              </p>)}
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-6 text-center text-sm text-white/50 font-light">
          <p>© {new Date().getFullYear()} Light Might. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;