import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaCoins,
  FaHeadset,
  FaTools,
} from "react-icons/fa";
import { FiClock, FiMapPin, FiMail, FiPlus, FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import { servicesData } from "../data/services.js";

const Header = () => {
  const { openBookingModal } = useBooking();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setPagesOpen(false);
    document.body.style.overflow = "unset";
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services", dropdown: true },
    { name: "BLOGS", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[120] font-sans">
      {/* ===== Top Bar ===== */}
      <div className="hidden bg-[#f6f7f9] border-b border-slate-200/70 relative">
        <div className="container mx-auto px-0 md:px-4">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-10">
            {/* Left section */}
            <div className="relative self-stretch flex items-center w-full md:w-auto">
              <div
                className="absolute inset-y-0 -left-96 right-0 bg-[#ff6a00] z-0"
                style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }}
              />
              <div className="relative z-10 py-3.5 pl-6 md:pl-8 pr-12 flex items-center gap-2 text-white text-[12px] font-bold tracking-wide">
                <FaCoins className="text-white/90 text-sm" />
                <span>Professional Repair Solutions</span>
              </div>
            </div>

            {/* Right section */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-3 px-4 text-[12px] text-slate-600 font-medium">
              <span className="inline-flex items-center gap-2">
                <FiClock className="text-[#ff6a00] text-[15px]" />
                Mon - Sat: 8AM - 9PM
              </span>

              <div className="hidden md:block w-px h-4 bg-slate-200 mx-2"></div>

              <a
                href="mailto:ApplianceKick@outlook.com"
                className="inline-flex items-center gap-2 hover:text-[#ff6a00] transition-colors"
              >
                <FiMail className="text-[#ff6a00] text-[15px]" />
                ApplianceKick@outlook.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Header ===== */}
      <header
        className={`bg-white transition-all ${scrolled ? "shadow-md" : "shadow-none"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="h-[84px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo/logo.png"
                alt="Appliance Kick"
                className="w-44 "
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((item) => {
                const isActive =
                  item.path !== "#" && location.pathname === item.path;

                return (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1.5 text-[13px] font-bold tracking-wider transition ${isActive
                        ? "text-[#1e63ff]"
                        : "text-slate-800 hover:text-[#1e63ff]"
                        }`}
                    >
                      {item.name} {item.dropdown && <FiPlus className="text-[10px] stroke-[3]" />}
                    </Link>

                    {item.name === "SERVICES" && (
                      <div className="absolute top-full -left-[150px] pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[999]">
                        <div className="w-[700px] bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden p-8 grid grid-cols-2 gap-x-8 gap-y-2 relative z-[999]">
                          <div className="col-span-2 pb-4 mb-4 border-b border-slate-50 flex items-center justify-between">
                            <span className="text-[14px] font-extrabold text-slate-900 tracking-wide uppercase">Our Specialized Services</span>
                            <Link to="/services" className="text-[11px] font-bold text-[#1e63ff] flex items-center gap-1 hover:underline">
                              VIEW ALL <FiChevronRight />
                            </Link>
                          </div>
                          {servicesData.map((service) => (
                            <Link
                              key={service.id}
                              to={`/service/${service.slug}`}
                              className="group/item flex items-center gap-4 p-2.5 rounded-xl hover:bg-slate-50 transition-all"
                            >
                              <div className="w-9 h-9 rounded-lg bg-[#1e63ff]/5 text-[#1e63ff] grid place-items-center shrink-0 group-hover/item:bg-[#1e63ff] group-hover/item:text-white transition-colors">
                                <FaTools className="text-xs" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#1e63ff] transition-colors truncate">
                                  {service.title}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right CTA Block */}
            <div className="hidden lg:flex items-center h-full">
              <div className="bg-[#1e63ff] h-full flex items-center pl-16 pr-8 relative ml-8 z-10 after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-[2000px] after:bg-[#1e63ff] after:-z-10">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#ff6a00] grid place-items-center border-4 border-white text-white z-20">
                  <FaHeadset className="text-xl" />
                </div>

                <div className="flex items-center gap-8 relative z-20">
                  <div className="hidden flex flex-col">
                    <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Call for support</span>
                    <span className="text-white text-lg font-extrabold tracking-tight whitespace-nowrap">
                      +1 (530) 554-4817
                    </span>
                  </div>

                  <button
                    onClick={() => openBookingModal()}
                    className="bg-white text-[#1e63ff] px-6 py-2.5 rounded-full font-bold text-[13px] hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile buttons */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className="w-11 h-11 rounded-xl border border-slate-200 grid place-items-center text-slate-700"
                aria-label="Open menu"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Mobile Drawer ===== */}
      <div
        className={`lg:hidden fixed inset-0 z-[200] transition ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="font-extrabold text-lg text-slate-900">
              Menu
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 rounded-xl border border-slate-200 grid place-items-center"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-5 overflow-y-auto max-h-[calc(100vh-100px)]">
            <div className="space-y-2">
              {navLinks.map((item) => {
                if (item.dropdown && item.name === "SERVICES") {
                  return (
                    <div key="mobile-services" className="border border-slate-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setPagesOpen((s) => !s)}
                        className="w-full px-4 py-3 flex items-center justify-between font-bold text-slate-800 uppercase"
                      >
                        {item.name} <FaChevronDown className={`transition ${pagesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {pagesOpen && (
                        <div className="bg-slate-50">
                          {servicesData.map((s) => (
                            <Link
                              key={s.id}
                              to={`/service/${s.slug}`}
                              className="block px-4 py-3 text-sm font-semibold text-slate-700 border-t border-slate-200"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 rounded-xl border border-slate-200 font-bold text-slate-800 hover:bg-slate-50 uppercase"
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="hidden mt-6 p-4 rounded-2xl bg-[#1e63ff] text-white">
                <div className="text-xs opacity-80 font-semibold">Call Us</div>
                <div className="text-lg font-extrabold mt-1">+1 (530) 554-4817</div>
                <a
                  href="tel:+15305544817"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-white text-[#1e63ff] font-bold text-sm"
                >
                  <FaPhoneAlt /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

