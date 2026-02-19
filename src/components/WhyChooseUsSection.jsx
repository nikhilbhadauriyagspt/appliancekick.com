import React from 'react';

const WhyChooseUsSection = () => {
  const imgUrl = "/service-7.jpg"; // Using an existing high-quality AC repair image from the project

  const features = [
    {
      title: "Safety & reliable service",
      desc: "Our service division follows strict safety protocols for all cooling maintenance.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Affordable Pricing Plans",
      desc: "We offer transparent and competitive pricing for all residential HVAC solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-0">
        <div className=" mx-auto rounded-[15px] overflow-hidden flex flex-col lg:flex-row">

          {/* Left Side: Image Panel */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
            <img
              src={imgUrl}
              alt="Reliable Cooling Solutions"
              className="w-full h-full object-cover"
            />
            {/* Darker overlay for professional depth */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Right Side: Gradient Content Panel */}
          <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#0B0F3B] to-[#1427B7] p-10 lg:p-16 flex flex-col justify-center">

            {/* Top Pill Label */}
            <div className="flex justify-start mb-8">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#0B0F3B] border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
                <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[3px]">Why Choose Us</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl  font-black text-white leading-[1.3] mb-8 ">
              Trusted by Hundreds
              for Reliable  <span className="text-white/80"> Cooling Solutions</span>
            </h2>

            {/* Small Paragraph */}
            <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium mb-12">
                             We provide systematic support for residential appliances delivering professional-grade maintenance protocols for your essential home equipment.            </p>

            {/* Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-start gap-5">
                  {/* Circular Icon Container */}
                  <div className="w-14 h-14 rounded-full bg-[#0B0F3B] border border-white/10 flex items-center justify-center text-[#ff6a00] shadow-xl transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-black text-white ">
                      {feature.title}
                    </h4>
                    <p className="text-white/40 text-xs font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
