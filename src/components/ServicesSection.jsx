import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ServicesSection = () => {
  const imgUrl = "/service-10.jpg";

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-0">
        {/* Outer Container with Gradient and Rounded Corners */}
        <div className="rounded-[32px] overflow-hidden bg-gradient-to-b from-[#0B0F3B] to-[#1427B7] p-8 md:p-12 lg:p-[70px] shadow-2xl">

          {/* Top Heading Area */}
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#0B0F3B] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6A3D]"></span>
              <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[3px]">Service We Offer</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.2] mb-10 uppercase tracking-tight">
              What We are Offering to <br />
              Our Potential Client
            </h2>

            <div className="w-32 h-[1px] bg-white/20"></div>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

            {/* Left Services List - Vertical Slider */}
            <div className="w-full lg:w-[55%] flex flex-col gap-6">
              <div className="h-[550px] relative">
                <Swiper
                  direction={'vertical'}
                  slidesPerView={4}
                  spaceBetween={0}
                  loop={true}
                  speed={1500}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: '.services-next',
                    prevEl: '.services-prev',
                  }}
                  modules={[Autoplay, Navigation]}
                  className="h-full w-full"
                >
                  {servicesData.map((service) => (
                    <SwiperSlide key={service.id}>
                      <Link to={`/service/${service.slug}`} className="flex items-center justify-between py-6 border-b border-white/10 group cursor-pointer h-full">
                        <div className="flex items-center gap-6 pr-4">
                          {/* Small Rounded Image from servicesData */}
                          <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white/10">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-semibold text-white/60 group-hover:text-white transition-all duration-300 ">
                              {service.title}
                            </h3>
                            <p className="text-white/30 group-hover:text-white/60 text-xs md:text-sm leading-relaxed max-w-sm font-medium transition-all duration-300 line-clamp-2">
                              {service.shortDesc}
                            </p>
                          </div>
                        </div>

                        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-500 bg-white/5 border border-white/10 group-hover:bg-[#FF6A3D] group-hover:border-[#FF6A3D] group-hover:shadow-lg group-hover:shadow-[#FF6A3D]/30">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-500 -rotate-45 group-hover:rotate-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 z-50">
                <button className="services-prev w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-[#FF6A3D] hover:border-[#FF6A3D] transition-all duration-300 active:scale-95 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" /></svg>
                </button>
                <button className="services-next w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-[#FF6A3D] hover:border-[#FF6A3D] transition-all duration-300 active:scale-95 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="w-full lg:w-[45%] relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FF6A3D] rounded-3xl -z-0 opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#FF6A3D] rounded-[40px] -z-0"></div>

              <div className="relative z-10 rounded-[24px] overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src={imgUrl}
                  alt="Our Expert Technical Service"
                  className="w-full h-[400px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F3B]/40 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
