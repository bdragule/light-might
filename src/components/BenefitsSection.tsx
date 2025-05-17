import ScrollReveal from "./ScrollReveal";
const BenefitsSection = () => {
  return <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-light mb-2 text-lightmight-dark text-center tracking-wider">
              Why <span className="text-lightmight-red">Light Might?</span>
            </h2>
            <p className="text-xl text-center mb-12 text-lightmight-dark/70 font-extralight tracking-wide">
              Faster Healing, Better Value
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ScrollReveal delay={300}>
                <p className="text-lg mb-6 text-balance">Unlike most PBM providers who charge per light panel placement (around $80-$100 per cycle), Light Might maximizes results efficiently. Instead of slow, costly treatments over multiple visits, we use multiple panels simultaneously and run multiple cycles per session, delivering thousands of times more light energy per appointment.</p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-lightmight-gray rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-lightmight-red">
                    Our Pricing:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-lightmight-red mr-3"></div>
                      <span className="text-lg font-medium">$495 for a 90-minute session</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-lightmight-red mr-3"></div>
                      <span>Multiple panels and cycles for faster recovery</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <p className="text-lg text-balance">Traditional PBM clinics would charge over $2,100 for the same energy output. Our approach ensures you feel better, faster, more affordably.</p>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <p className="mt-4 text-lightmight-dark/80 italic text-sm">
                  Insurance: We don't bill insurance but provide documentation for reimbursement, depending on your plan.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200} className="order-1 md:order-2">
              <div className="relative">
                <img src="/lovable-uploads/36f57679-45fa-4e2c-96bf-f73b9c824b70.png" alt="Man standing by Jeep" className="rounded-lg shadow-xl w-full h-96 object-cover object-center" />
                <p className="text-sm italic mt-2 text-lightmight-dark/80">Colonel U.S. Army Special Forces (RET.) Conditions treated: tinnitus, brain fog/memory, chronic back pain, chronic hip pain, cervical injury. (Name withheld by request. Not actual likeness.)</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;