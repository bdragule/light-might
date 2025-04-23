
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const conditions = [
    "Muscle, tendon, and ligament injuries",
    "Chronic pain (back, neck, joints, migraines)",
    "Post-surgical recovery",
    "Skin conditions (acne, psoriasis, wrinkles, scars)",
    "Neuropathy, inflammation, and arthritis",
    "Hair loss (alopecia)",
    "Long COVID symptoms, including brain fog and fatigue"
  ];

  // Split conditions into two arrays for left and right columns
  const leftColumnConditions = conditions.slice(0, Math.ceil(conditions.length / 2));
  const rightColumnConditions = conditions.slice(Math.ceil(conditions.length / 2));

  return (
    <section id="about" className="py-20 bg-lightmight-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-light mb-2 text-lightmight-dark text-center tracking-wider">
              What is <span className="text-lightmight-red">Photobiomodulation?</span>
            </h2>
            <p className="text-xl text-center mb-12 text-lightmight-dark/70 font-extralight tracking-wide">
              Harnessing Light for Healing
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/c81730eb-d0ca-46e4-8c15-205c1f6d221c.png" 
                  alt="Red light therapy treatment" 
                  className="rounded-lg shadow-xl w-full h-96 object-cover object-center"
                />
                <p className="text-sm italic mt-2 text-lightmight-dark/80">
                  Two weeks ago her morning training walk was not possible.
                </p>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={300}>
                <p className="text-lg mb-6 text-balance">
                  Photobiomodulation (PBM) is a non-invasive therapy using specific light frequencies to stimulate healing at the cellular level. Also known as red-light therapy or laser therapy, PBM has been FDA-approved for over 30 years<sup className="superscript">1,3</sup> and is widely used in sports medicine, rehabilitation, and chronic pain management.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <h3 className="text-lg font-light mb-4 text-lightmight-red tracking-wide">
                  PBM effectively treats a wide range of conditions<sup className="superscript">2</sup>, including:
                </h3>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-x-4">
                {/* Left column */}
                <div className="space-y-4">
                  {leftColumnConditions.map((condition, index) => (
                    <ScrollReveal key={index} delay={500 + (index * 50)}>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-lightmight-red mt-2 flex-shrink-0"></div>
                        <p className="text-lightmight-dark font-light">{condition}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                
                {/* Right column */}
                <div className="space-y-4">
                  {rightColumnConditions.map((condition, index) => (
                    <ScrollReveal key={index + leftColumnConditions.length} delay={500 + ((index + leftColumnConditions.length) * 50)}>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-lightmight-red mt-2 flex-shrink-0"></div>
                        <p className="text-lightmight-dark font-light">{condition}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal delay={800}>
                <p className="mt-6 text-lg text-balance">
                  When applied correctly—by a skilled professional using high-quality equipment—PBM accelerates recovery, reduces pain, and improves overall well-being. That's why elite athletes, military personnel, and medical professionals trust PBM for optimal healing.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
