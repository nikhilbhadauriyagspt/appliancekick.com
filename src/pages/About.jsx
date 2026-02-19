import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaShieldAlt, FaCheckCircle, FaUserCheck, FaClock } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const About = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: <FaShieldAlt />,
      title: "Technical Excellence",
      desc: "We adhere to strict manufacturer-mandated diagnostic protocols for every repair.",
      color: "bg-blue-50 text-[#1E63FF]"
    },
    {
      icon: <FaUserCheck />,
      title: "Certified Team",
      desc: "Our technicians are factory-trained professionals with deep expertise in all major brands.",
      color: "bg-orange-50 text-[#ff6a00]"
    },
    {
      icon: <FaClock />,
      title: "Reliable Response",
      desc: "We value your time, offering same-day service and prompt technical support.",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>About Us | Appliance Kick - Professional Repair Standards</title>
        <meta name="description" content="Learn about Appliance Kick's commitment to professional appliance repair standards, technical expertise, and transparent service delivery." />
        <link rel="canonical" href="https://www.appliancekick.com/about" />
      </Helmet>

      {/* Page Hero Section */}
      <section className="relative pt-44 pb-32 bg-[#0B0F3B] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full mb-8 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse"></span>
            <span className="text-white text-[10px] font-black uppercase tracking-[4px]">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight ">
            About <span className="text-[#ff6a00]">Appliance Kick</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Leading the industry with systematic technical support and professional-grade maintenance protocols for essential home equipment.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gray-50 rounded-[40px] -z-10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                <img
                  src="/aboutus/mainforntside.png"
                  className="w-full h-auto object-cover rounded-[32px] shadow-2xl"
                  alt="Our Expert Technical Team"
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-[#1E63FF]"></span>
                <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider">Who We Are</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-8 leading-tight uppercase tracking-tight">
                Dedicated to <span className="text-[#1E63FF]">Technical Integrity</span> & Quality Care
              </h2>

              <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                Appliance Kick was founded on the principle that modern household equipment requires a systematic, technical approach. We focus on delivering professional-grade maintenance and repair protocols that prioritize your safety and equipment performance.
              </p>

              <div className="flex flex-col gap-5 mb-12">
                {[
                  "Verified manufacturer-grade diagnostic procedures",
                  "Transparent communication and fixed pricing",
                  "Fast, same-day response for all major brands",
                  "Commitment to long-term appliance efficiency"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E63FF] transition-colors duration-300">
                      <FaCheckCircle className="text-[#1E63FF] group-hover:text-white text-xl transition-colors duration-300" />
                    </div>
                    <span className="text-[#0f172a] font-bold text-lg tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Principles Section */}
      <section className="py-24 bg-[#E1E7FD] relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 z-0">
          <img src="/faq/shape11.png" className="w-full h-full object-cover" alt="" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-white border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
              <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider">Our Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 leading-tight ">
              Operational <span className="text-[#ff6a00]">Principles</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium">The core standards that guide our professional service delivery every single day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] shadow-xl shadow-blue-900/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-[#1E63FF]/20">
                <div className={`w-20 h-20 rounded-[28px] ${v.color} flex items-center justify-center text-3xl mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                  {v.icon}
                </div>
                <h4 className="text-2xl font-black text-[#0f172a] mb-5 ">{v.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-[#0B0F3B] rounded-[40px] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff6a00]/10 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse"></div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight  relative z-10">
              Ready to Restore Your <br />
              <span className="text-[#ff6a00]">Appliance Performance?</span>
            </h2>

            <div className="flex justify-center relative z-10">
              <button
                onClick={() => openBookingModal()}
                className="group relative inline-flex items-center gap-6 pl-10 pr-2 py-2 bg-[#1E63FF] hover:bg-white hover:text-[#0B0F3B] text-white rounded-full font-black uppercase tracking-wider text-sm transition-all duration-500 shadow-xl"
              >
                Book Your Fix Today
                <div className="w-12 h-12 rounded-full bg-[#ff6a00] flex items-center justify-center transition-all duration-500 group-hover:rotate-[-45deg]">
                  <svg className="w-5 h-5 text-white transform rotate-[-45deg] group-hover:rotate-[45deg] transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

