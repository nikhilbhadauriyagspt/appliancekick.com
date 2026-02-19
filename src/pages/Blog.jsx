import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogsData as blogs } from '../data/blogs';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Blog | Expert Appliance Repair Tips & Guides | Appliance Kick</title>
        <meta name="description" content="Stay updated with the latest appliance repair trends, maintenance tips, and expert guides from the Appliance Kick team." />
      </Helmet>

      {/* Page Hero Section */}
      <section className="relative pt-44 pb-32 bg-[#0B0F3B] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse"></span>
            <span className="text-white text-[10px] font-black tracking-widest">Repair Insights</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8">
            Expert Guides and Maintenance Tips
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Explore our latest articles to learn how to keep your home appliances running efficiently and when to call in the professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className="relative rounded-[24px] overflow-hidden mb-8 aspect-[16/10] shadow-xl">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="px-4 py-1.5 rounded-full bg-[#EEF1FF] inline-block">
                    <span className="text-[#07124A] text-xs font-bold">
                      {blog.category}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">
                    {blog.date}
                  </span>
                </div>

                {/* Blog Title */}
                <h3 className="text-2xl font-bold text-[#07124A] mb-6 transition-colors duration-300 group-hover:text-[#1E63FF]">
                  {blog.title}
                </h3>

                {/* Content Snippet */}
                <p className="text-gray-500 text-base mb-8 line-clamp-3 font-medium">
                  {blog.excerpt || "Learn more about high-quality appliance maintenance and expert repair solutions from our certified technical team."}
                </p>

                {/* Read More Button */}
                <Link 
                  to={`/blog/${blog.id}`}
                  className="mt-auto flex items-center gap-3 group/link"
                >
                  <span className="text-gray-400 text-sm font-bold tracking-widest">
                    Read More
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover/link:bg-[#ff6a00] group-hover/link:border-[#ff6a00]">
                    <svg className="w-5 h-5 text-[#ff6a00] group-hover/link:text-white transition-all duration-300 transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

