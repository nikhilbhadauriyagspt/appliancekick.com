import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useBooking } from '../context/BookingContext';

const Services = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Services | Appliance Kick - Expert Repair Solutions</title>
        <meta name="description" content="Precision maintenance for high-end residential and commercial equipment. Delivering professional perfection across all appliance categories." />
        <link rel="canonical" href="https://www.appliancekick.com/services" />
      </Helmet>

      {/* Page Hero Section */}
      <section className="relative pt-44 pb-32 bg-[#0B0F3B] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full mb-8 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse"></span>
            <span className="text-white text-[10px] font-black uppercase tracking-[4px]">Service Directory</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight ">
            Our Professional <span className="text-[#ff6a00]">Services</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Precision maintenance for residential equipment. Delivering expert perfection across all home appliance categories.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {servicesData.map((service) => (
              <div key={service.id} className="flex flex-col group cursor-pointer border-b border-gray-100 pb-10 transition-all duration-300">
                {/* Image Container */}
                <div className="relative rounded-[24px] overflow-hidden mb-8 aspect-[16/10] shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-black text-[#0f172a] uppercase tracking-tight group-hover:text-[#1E63FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/service/${service.slug}`}
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 transition-all duration-500 group-hover:bg-[#ff6a00] group-hover:border-[#ff6a00] group-hover:shadow-lg group-hover:shadow-[#ff6a00]/30"
                  >
                    <svg
                      className="w-5 h-5 text-[#0f172a] group-hover:text-white transition-all duration-500 -rotate-45 group-hover:rotate-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <Link
                    to={`/service/${service.slug}`}
                    className="text-[10px] font-black uppercase tracking-[3px] text-gray-400 group-hover:text-[#ff6a00] transition-colors"
                  >
                    Learn More
                  </Link>
                  <div className="h-[1px] flex-grow bg-gray-100 group-hover:bg-[#ff6a00]/20 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CTA Banner */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-[#0B0F3B] rounded-[40px] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff6a00]/10 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse"></div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight  relative z-10">
              Professional Perfection <br />
              <span className="text-[#ff6a00]">At Your Doorstep</span>
            </h2>

            <div className="flex justify-center relative z-10">
              <button
                onClick={() => openBookingModal()}
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

export default Services;

