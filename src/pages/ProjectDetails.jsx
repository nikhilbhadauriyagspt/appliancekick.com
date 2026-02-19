import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../data/projects';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaMapMarkerAlt, FaCheckCircle, FaArrowRight, FaCogs } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
        <Helmet>
           <title>Project Not Found | Appliance Kick</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-6xl font-black text-[#0B0F3B] mb-6">404</h2>
          <p className="text-gray-500 mb-8 font-medium">The project you are looking for does not exist.</p>
          <Link to="/projects" className="inline-block bg-[#0B0F3B] text-white px-10 py-4 rounded-full font-bold hover:bg-[#ff6a00] transition-all shadow-xl">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>{project.title} | Service Case Study | Appliance Kick</title>
        <meta name="description" content={project.description || project.title} />
      </Helmet>

      {/* Page Hero Section */}
      <section className="relative pt-44 pb-32 bg-[#0B0F3B] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            <FaArrowLeft className="text-[#ff6a00]" /> Back to Portfolio
          </Link>
          <h1 className="text-3xl md:text-6xl font-black text-white mb-8 max-w-5xl mx-auto">
            {project.title}
          </h1>
          <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
            <span className="text-white text-[10px] font-black uppercase tracking-widest">{project.category}</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left side: Project Narrative */}
            <div className="w-full lg:w-2/3">
              <div className="relative rounded-[40px] overflow-hidden mb-16 shadow-2xl">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto object-cover max-h-[600px]" 
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-8">Service Narrative</h2>
              <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed space-y-8">
                <p className="text-xl text-[#0f172a] font-bold">
                  {project.description || "This project involved a complex restoration of high-end residential equipment, focusing on professional integrity and long-term reliability."}
                </p>
                <div className="space-y-6">
                  {project.fullDescription || (
                    <>
                      <p>
                        The diagnostic phase began with a comprehensive audit of the appliance's electronic and mechanical subsystems. Our team utilized advanced sensors to identify precision faults that were affecting overall performance.
                      </p>
                      <p>
                        Using manufacturer-grade spare parts, we systematically replaced the faulty components and recalibrated the control logic. This approach ensures that the appliance not only works again but operates at its original performance specifications.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Highlights/Features Grid */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                {(project.features || ["System Audit", "Component Fix", "Logic Reset", "Safety Test"]).map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:border-[#1E63FF]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#1E63FF] group-hover:bg-[#1E63FF] group-hover:text-white transition-all">
                      <FaCheckCircle />
                    </div>
                    <span className="text-[#0f172a] font-bold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Sidebar Info */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-[#E9EEFF] rounded-[40px] p-10 relative overflow-hidden shadow-sm">
                  <h3 className="text-2xl font-black text-[#0B0F3B] mb-8 pb-6 border-b border-white">Project Details</h3>
                  
                  <div className="space-y-8">
                    {[
                      { icon: <FaUser />, label: "Client", val: project.client || "Residential" },
                      { icon: <FaCalendarAlt />, label: "Date", val: project.date || "Dec 2025" },
                      { icon: <FaClock />, label: "Duration", val: project.duration || "4 Hours" },
                      { icon: <FaMapMarkerAlt />, label: "Location", val: project.location || "Service Area" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-5 group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1E63FF] shadow-sm group-hover:bg-[#1E63FF] group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                          <p className="text-[#0B0F3B] font-bold text-lg">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-10 border-t border-white">
                    <p className="text-[#0B0F3B] font-bold mb-6">Need a similar expert repair?</p>
                    <Link 
                      to="/contact" 
                      className="w-full bg-[#0B0F3B] text-white py-5 rounded-full font-black tracking-widest text-sm text-center flex items-center justify-center gap-3 hover:bg-[#ff6a00] transition-all shadow-xl"
                    >
                      GET A QUOTE <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;

