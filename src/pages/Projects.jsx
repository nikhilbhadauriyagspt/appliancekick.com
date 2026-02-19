import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { FaArrowRight, FaProjectDiagram } from 'react-icons/fa';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Projects | Success Stories & Case Studies | Appliance Kick</title>
        <meta name="description" content="Explore our portfolio of successful appliance repair projects. See how we've helped homeowners restore their essential equipment to peak performance." />
      </Helmet>

      {/* Page Hero Section */}
      <section className="relative pt-44 pb-32 bg-[#0B0F3B] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse"></span>
            <span className="text-white text-[10px] font-black uppercase tracking-[4px]">Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8">
            Service Case Studies
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            A curated selection of complex restoration projects demonstrating our commitment to engineering perfection and client satisfaction.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {projectsData.map((project) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`}
                className="group relative flex flex-col rounded-[32px] overflow-hidden bg-[#0B0F3B] shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Area */}
                <div className="relative h-[300px] overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F3B] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ff6a00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium mb-8 line-clamp-2">
                    {project.shortDesc || "Detailed expert restoration and performance optimization for residential equipment."}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[3px] text-[#ff6a00]">View Case Study</span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#ff6a00] group-hover:border-[#ff6a00] transition-all duration-500">
                      <FaArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

