import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaShieldAlt, FaTools, FaArrowLeft, FaWrench, FaSearch, FaFan, FaWind } from 'react-icons/fa';
import { useBooking } from '../../context/BookingContext';

const KitchenChimneyRepair = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Motor Restoration",
      desc: "Repairing or replacing high-suction motors to restore efficient exhaust performance.",
      icon: <FaFan />
    },
    {
      title: "Filter Deep Clean",
      desc: "Professional degreasing and cleaning of baffle and charcoal filters for optimal airflow.",
      icon: <FaWind />
    },
    {
      title: "Switch Panel Fix",
      desc: "Repairing touch controls and push-button interfaces for seamless operation.",
      icon: <FaTools />
    },
    {
      title: "Ducting Service",
      desc: "Checking and repairing exhaust ducts to ensure smoke is vented safely and effectively.",
      icon: <FaWrench />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Kitchen Chimney Repair | Professional Exhaust Service | Appliance Kick</title>
        <meta name="description" content="Expert repair and cleaning services for all kitchen chimneys. Certified technicians for motor fixes, filter cleaning, and ducting maintenance." />
      </Helmet>

      {/* Page Hero Section */}
      <section className="relative pt-44 pb-32 bg-[#0B0F3B] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[3px] hover:bg-white/10 transition-all"
          >
            <FaArrowLeft className="text-[#ff6a00]" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8">
            Kitchen Chimney <span className="text-[#ff6a00]">Service</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Professional restoration and deep cleaning for all types of kitchen exhaust systems. Keeping your kitchen fresh and smoke-free.
          </p>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left side: Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gray-50 rounded-[40px] -z-10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                <img
                  src="/service-12.jpg"
                  className="w-full h-[500px] md:h-[650px] object-cover rounded-[32px] shadow-2xl"
                  alt="Kitchen Chimney Repair Service"
                />
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-[#1E63FF]"></span>
                <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider">Kitchen Hygiene</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-8">
                Expert Solutions for <span className="text-[#1E63FF]">Exhaust Technology</span>
              </h2>

              <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                A clogged chimney can lead to poor ventilation and oil accumulation in your kitchen. Our certified technicians specialize in identifying motor efficiency drops, repairing electronic switch panels, and performing deep-cleaning protocols to ensure your chimney operates at its full potential.
              </p>

              <div className="flex flex-col gap-5 mb-12">
                {[
                  "Systematic motor cleaning and bearing lubrication",
                  "Repairing auto-clean and touch-sense modules",
                  "Fixing excessive noise and vibration issues",
                  "Certified service for all leading global chimney brands"
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

      {/* Feature Grid Section */}
      <section className="py-24 bg-[#E1E7FD] relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 z-0">
          <img src="/faq/shape11.png" className="w-full h-full object-cover" alt="" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-white border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
              <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider">Our Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 leading-tight ">
              Chimney Repair <span className="text-[#ff6a00]">Specialists</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl shadow-blue-900/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-[#1E63FF]/20">
                <div className="w-16 h-16 rounded-[24px] bg-blue-50 text-[#1E63FF] flex items-center justify-center text-2xl mb-8 group-hover:bg-[#1E63FF] group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h4 className="text-xl font-black text-[#0f172a] mb-4 ">{v.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">{v.desc}</p>
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
              Ensure a Smoke-Free Kitchen <br />
              <span className="text-[#ff6a00]">Book a Professional Service Now</span>
            </h2>

            <div className="flex justify-center relative z-10">
              <button
                onClick={() => openBookingModal('Kitchen Chimney')}
                className="group relative inline-flex items-center gap-6 pl-10 pr-2 py-2 bg-[#1E63FF] hover:bg-white hover:text-[#0B0F3B] text-white rounded-full font-black uppercase tracking-wider text-sm transition-all duration-500 shadow-xl"
              >
                Schedule Your Repair
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

export default KitchenChimneyRepair;

