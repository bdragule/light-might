import React from "react";
import ScrollReveal from "./ScrollReveal";

const ScienceSection = () => {
  return (
    <section id="science" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-light mb-2 text-lightmight-dark text-center tracking-wider">
              The <span className="text-lightmight-red">Science</span> Behind PBM
            </h2>
            <p className="text-xl text-center mb-12 text-lightmight-dark/70 font-extralight tracking-wide">
              How PBM Works At The Cellular Level
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <ScrollReveal delay={100}>
              <img 
                src="/lovable-uploads/81721b15-eda2-49ec-a212-397199565abd.png" 
                alt="Woman receiving red light therapy on neck and back" 
                className="w-24 mx-auto mb-6"
              />
              <h3 className="text-lg font-light mb-2 text-lightmight-red tracking-wide">
                Mitochondria Activation
              </h3>
              <p className="text-lightmight-dark/70 font-extralight">
                PBM stimulates mitochondria, the cell's energy producers, enhancing ATP production and cellular function.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <img 
                src="/lovable-uploads/08939cf5-8499-4943-a923-9025a09ff231.png" 
                alt="Nitric Oxide Release" 
                className="w-24 mx-auto mb-6"
              />
              <h3 className="text-lg font-light mb-2 text-lightmight-red tracking-wide">
                Nitric Oxide Release
              </h3>
              <p className="text-lightmight-dark/70 font-extralight">
                PBM promotes the release of nitric oxide, improving blood flow, reducing inflammation, and promoting tissue repair.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <img 
                src="/lovable-uploads/59999975-38a6-4145-8499-1456dd499999.png"
                alt="Reduced Oxidative Stress"
                className="w-24 mx-auto mb-6"
              />
              <h3 className="text-lg font-light mb-2 text-lightmight-red tracking-wide">
                Reduced Oxidative Stress
              </h3>
              <p className="text-lightmight-dark/70 font-extralight">
                By reducing oxidative stress and inflammation, PBM supports the body's natural healing processes and overall well-being.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
