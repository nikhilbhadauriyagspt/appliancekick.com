import React from 'react';
import { FaShieldAlt, FaUserCheck, FaTools, FaClock } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaShieldAlt />,
    title: "Warranty",
    desc: "45 Days Warranty",
    color: "text-blue-600"
  },
  {
    icon: <FaUserCheck />,
    title: "Expertise",
    desc: "Certified Techs",
    color: "text-orange-600"
  },
  {
    icon: <FaTools />,
    title: "Quality",
    desc: "Genuine Spares",
    color: "text-green-600"
  },
  {
    icon: <FaClock />,
    title: "Speed",
    desc: "Same Day Fix",
    color: "text-purple-600"
  }
];

const Highlights = () => {
  return (
    <section className="bg-white py-12 lg:py-16 border-b border-gray-100 font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 lg:gap-0">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-5 w-full sm:w-[45%] lg:w-auto lg:flex-1 px-4 ${
                index !== highlights.length - 1 ? 'lg:border-r border-gray-100' : ''
              } group transition-all duration-300`}
            >
              {/* Icon with soft background circle */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#1E63FF] group-hover:text-white transition-all duration-500 text-gray-400">
                {React.cloneElement(item.icon, { size: 28, className: "group-hover:scale-110 transition-transform duration-500" })}
              </div>

              {/* Textual Content */}
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-1 group-hover:text-[#ff6a00] transition-colors">
                  {item.title}
                </span>
                <h4 className="text-lg lg:text-xl font-black text-[#0f172a] leading-tight">
                  {item.desc}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
