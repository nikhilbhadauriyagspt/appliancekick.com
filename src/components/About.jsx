import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-24 bg-white font-sans overflow-hidden" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Technician Image */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full relative group">
              {/* Subtle background element behind image */}
              <div className="absolute -inset-4 bg-gray-50 rounded-3xl -z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <img
                src="/aboutus/mainforntside.png"
                className="w-full h-auto object-cover"
                alt="Our Expert Technicians"
              />
            </div>
          </div>

          {/* Right Side: Professional Content Area */}
          <div className="w-full lg:w-1/2">
            {/* Small Rounded Label with a Point */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
              <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider">Who We Are</span>
            </div>

            {/* Adjusted Size Bold Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[55px] font-semibold text-[#0f172a] mb-5 lg:leading-[66px] ">
              Quality Service For Your <br />
              <span >Home Appliances</span>
            </h2>

            {/* Short Descriptive Paragraph */}
            <p className="text-gray-500 text-lg md:text-[18px] leading-relaxed mb-10 max-w-xl font-medium">
              We are a dedicated team of professionals providing reliable and high-quality repair services. Our focus is on delivering service excellence and ensuring your essential home equipment is fixed right the first time.
            </p>

            {/* Authentic Bullet Points - One Per Line */}
            <div className="flex flex-col gap-3 mb-12">
              {[
                "Certified and highly skilled expert team you can trust",
                "Transparent pricing with no hidden charges or surprises",
                "Prompt and dependable same-day service at your convenience",
                "Genuine spare parts with complete quality assurance"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6a00] transition-colors duration-300">
                    <FaCheckCircle className="text-[#ff6a00] group-hover:text-white text-md transition-colors duration-300" />
                  </div>
                  <span className="text-[#424242] font-bold text-md">{item}</span>
                </div>
              ))}
            </div>

            {/* Premium Custom CTA Button */}
            <div className="flex justify-start">
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-6 pl-10 pr-2 py-1 bg-[#1E63FF] hover:bg-[#0f172a] text-white rounded-full font-black  tracking-wider text-sm transition-all duration-500  hover:shadow-[#1E63FF]/30"
              >
                Discover Our Mission
                <div className="w-12 h-12 rounded-full bg-[#ff6a00] flex items-center justify-center transition-all duration-500 group-hover:rotate-[-45deg]">
                  <svg
                    className="w-5 h-5 text-white transform rotate-[-45deg] group-hover:rotate-[45deg] transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
