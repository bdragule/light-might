
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-light mb-2 text-lightmight-dark text-center tracking-wider">
              What is <span className="text-lightmight-red">PBM?</span>
            </h2>
            <p className="text-xl text-center mb-12 text-lightmight-dark/70 font-extralight tracking-wide">
              Photobiomodulation Therapy
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/09923529-4994-493f-9b9c-5559a5930499.png" 
                  alt="Man receiving red light therapy on his back" 
                  className="rounded-lg shadow-xl w-full h-96 object-cover object-center"
                />
                <p className="text-sm italic mt-2 text-lightmight-dark/80">
                  Colonel U.S. Army Special Forces (RET.) Conditions treated: tinnitus, brain fog/memory, chronic back pain, chronic hip pain, cervical injury. (Name withheld by request. Not actual likeness.)
                </p>
              </div>
            </ScrollReveal>

            <div className="order-2 md:order-1">
              <ScrollReveal delay={400}>
                <p className="text-lg mb-6 text-balance">
                  Photobiomodulation (PBM) is a non-invasive therapy that uses red and near-infrared light to stimulate, heal, and regenerate damaged tissue. It's like photosynthesis for humans—light energy converts into chemical energy, boosting cellular function.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <p className="text-lg text-balance">
                  PBM is backed by decades of research and thousands of studies, demonstrating its effectiveness in treating a wide range of conditions, from wound healing and pain relief to neurodegenerative diseases and mental health disorders.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={800}>
            <p className="mt-6 text-lg text-balance">
              When applied correctly—by a skilled professional using high-quality equipment—PBM accelerates recovery, reduces pain, and improves overall well-being. That's why professional athletes, military personnel, and medical professionals trust PBM for use across a staggering spectrum of injuries and illnesses.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
