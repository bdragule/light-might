
import ScrollReveal from "./ScrollReveal";

const ScienceSection = () => {
  return (
    <section id="science" className="py-20 bg-lightmight-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-light mb-2 text-lightmight-dark text-center tracking-wider">
              The <span className="text-lightmight-red">Science</span>
            </h2>
            <p className="text-xl text-center mb-12 text-lightmight-dark/70 font-extralight tracking-wide">
              The Technology Behind PBM
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200}>
              <div className="bg-gradient-radial from-lightmight-red/20 to-transparent p-8 rounded-xl">
                <img 
                  src="/lovable-uploads/d9a6a481-520c-4a9e-b202-85408c4e85cb.png" 
                  alt="Woman receiving red light therapy" 
                  className="w-24 mx-auto mb-6"
                />
                <p className="text-lg mb-6 text-balance">
                  PBM works by delivering precise red and near-infrared light (630-680 nm & 810-840 nm) to stimulate ATP production, boost metabolism, and promote tissue regeneration. It enhances blood flow, reduces inflammation, and accelerates healing<sup className="superscript">1,2</sup>.
                </p>
                <h3 className="text-lg font-semibold mb-3 text-lightmight-red">
                  Laser vs. Panels:
                </h3>
                <p className="text-balance">
                  We use Class III-B lasers and BioFlex panels, the gold standard in PBM. Unlike risky Class IV lasers that can burn tissue, our equipment ensures safe, effective treatment.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-lightmight-red">
                  Meet the Experts:
                </h3>
                <p className="mb-6 text-balance">
                  Dr. Elizabeth Lee Vliet, MD, a preventive medicine specialist with over 50 years of experience, leads our PBM practice alongside PBM-certified therapist Jim Houck.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-lightmight-red">
                  Get in Touch:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 text-lightmight-red">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">ViveLife! Center</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 text-lightmight-red">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">(520) 797-9131</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 text-lightmight-red">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium break-all">pollyleigh@vivelifecenter.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 text-lightmight-red">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Locations:</p>
                      <p>Tucson, AZ & Austin, TX</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 text-center">
              <p className="text-lg font-medium mb-6">
                Experience the power of PBM—heal faster, feel better, and get back to living.
              </p>
              <a 
                href="mailto:pollyleigh@vivelifecenter.com?subject=Consultation Request" 
                id="contact"
                className="inline-block bg-lightmight-red text-white font-medium px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Book a Consultation
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
