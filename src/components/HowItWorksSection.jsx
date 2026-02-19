import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: "01",
      title: "Inspection & Diagnosis",
      desc: "The technician inspects the appliance system to identify the root cause of the problem.",
      translate: "lg:translate-y-0"
    },
    {
      id: "02",
      title: "Fault Identification",
      desc: "Our experts pin-point the specific core issue and provide a detailed repair plan.",
      translate: "lg:translate-y-0"
    },
    {
      id: "03",
      title: "Repair or Replacement",
      desc: "We perform high-quality repairs or replace faulty parts with genuine factory components.",
      translate: "lg:translate-y-0"
    },
    {
      id: "04",
      title: "Testing & Final Check",
      desc: "A rigorous post-repair test is conducted to ensure the appliance is working at peak efficiency.",
      translate: "lg:translate-y-0"
    }
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-0">

        {/* Top Label */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
            <span className="text-[#0f172a] text-xs font-bold uppercase tracking-widest">How It Works</span>
          </div>
        </div>

        {/* Heading & Paragraph Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-[1.1]">
              Shaping the Future Through <br />
              <span className="text-gray-400">Step-by-Step Innovation</span>
            </h2>
          </div>
          <div className="max-w-lg lg:pt-2">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
              We provide systematic support for residential appliances delivering professional-grade maintenance protocols.            </p>
          </div>
        </div>

        {/* Steps Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-6 mb-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${step.translate}`}
            >
              {/* Floating Blue Badge -> Turns Orange on Hover. Now OUTSIDE the overflow hidden div */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#1738B5] group-hover:bg-[#ff6a00] flex items-center justify-center text-white font-black text-xl shadow-lg z-30 transition-colors duration-500">
                {step.id}
              </div>

              {/* Inner Card Wrapper with overflow hidden for the hover effect */}
              <div className="relative bg-white p-8 md:p-10 rounded-[28px] shadow-sm border border-gray-100 flex flex-col items-center text-center h-full overflow-hidden z-10">
                {/* Blue Overlay Layer on Hover */}
                <div className="absolute inset-0 bg-[#1738B5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

                {/* Card Content - Text turns white on hover */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-[#0f172a] group-hover:text-white mb-5 mt-4 leading-tight  transition-colors duration-500">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-white/80 text-sm md:text-base leading-relaxed font-medium transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default HowItWorksSection;
