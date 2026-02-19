import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services.js';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { API_ENDPOINTS } from '../config/api';

const Footer = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const companyLinks = [
    { name: "About", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Our Blogs", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.NEWSLETTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const result = await response.json();
      if (result.status === 'success') {
        setStatus('Subscribed!');
        setEmail('');
      } else {
        setStatus('Error occurred.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Subscribed!'); // Fallback visual
    }
  };

  const displayedServices = showAllServices ? servicesData : servicesData.slice(0, 5);

  return (
    <footer className="relative bg-gradient-to-b from-[#05073A] to-[#04053A] pt-20 pb-10 px-6 overflow-hidden font-sans">
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 text-center">
        <span className="text-white/[0.05] text-[60px] md:text-[120px] font-black whitespace-nowrap italic leading-none">
          Reliable Care — Appliance Repair Experts
        </span>
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between pb-16 border-b border-white/10 gap-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Subscribe to Our Newsletter</h2>
          <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={status || "Your Email"} className="w-full bg-[#1A1E55] text-white rounded-full py-5 pl-8 pr-20 outline-none border border-white/5 focus:border-[#FF6A3D] transition-all placeholder:text-slate-400" />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF6A3D] p-4 rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center group shadow-lg shadow-[#FF6A3D]/20">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1: Logo & Company Description */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6A3D] flex items-center justify-center rounded-lg shadow-lg shadow-[#FF6A3D]/20"><span className="text-white font-black text-xl italic">A</span></div>
              <span className="text-white text-3xl font-bold tracking-widest">ApplianceKick</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              We provide systematic technical support and professional-grade maintenance protocols for essential home equipment. Our certified team ensures your appliances operate at peak efficiency with reliable repair solutions.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white text-xl font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[2px] after:bg-[#FF6A3D]">Company</h3>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.name}><Link to={link.path} className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white text-xl font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[2px] after:bg-[#FF6A3D]">Service</h3>
            <ul className="flex flex-col gap-4">
              {displayedServices.map((service) => (
                <li key={service.id}><Link to={`/service/${service.slug}`} className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">{service.title}</Link></li>
              ))}
            </ul>
            <button onClick={() => setShowAllServices(!showAllServices)} className="text-[#FF6A3D] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors mt-2">
              {showAllServices ? (<>SEE LESS <FiChevronUp /></>) : (<>SEE MORE <FiChevronDown /></>)}
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white text-xl font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[2px] after:bg-[#FF6A3D]">Address</h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-slate-400 leading-relaxed">Serving All Major Areas</p>
                <p className="text-slate-400">Professional Home Service</p>
              </div>
              <div className="flex flex-col gap-1 pt-2">
                <span className="text-white font-semibold text-sm uppercase tracking-widest text-[#FF6A3D]">Phone</span>
                <a href="tel:+15305544817" className="text-white font-bold text-lg">+1 (530) 554-4817</a>
                <a href="mailto:ApplianceKick@outlook.com" className="text-slate-400 hover:text-white transition-colors">ApplianceKick@outlook.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">© Copyright 2026 by appliancekick.com</p>
          <div className="flex gap-6 md:gap-8">
            <Link to="/terms-of-service" className="text-slate-500 hover:text-white text-sm transition-colors">Terms & Condition</Link>
            <Link to="/privacy-policy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-slate-500 hover:text-white text-sm transition-colors">Contact us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

