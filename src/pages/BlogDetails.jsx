import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData as blogs } from '../data/blogs';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaClock } from 'react-icons/fa';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
          <Link to="/blog" className="text-[#1E63FF] font-bold">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>{blog.title} | Appliance Kick Blog</title>
        <meta name="description" content={blog.excerpt || blog.title} />
      </Helmet>

      {/* Page Hero Section */}
      <section className="relative pt-44 pb-32 bg-[#0B0F3B] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            <FaArrowLeft className="text-[#ff6a00]" /> Back to Articles
          </Link>
          <h1 className="text-3xl md:text-6xl font-black text-white mb-8 max-w-5xl mx-auto">
            {blog.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 font-medium">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#ff6a00]" /> {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <FaTag className="text-[#1E63FF]" /> {blog.category}
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-[#ff6a00]" /> 5 Min Read
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            {/* Main Featured Image */}
            <div className="relative rounded-[40px] overflow-hidden mb-16 shadow-2xl">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-auto object-cover max-h-[600px]" 
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed space-y-8">
              <div dangerouslySetInnerHTML={{ __html: blog.longDesc }} />
            </div>

            {/* Share & Tag Section */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <span className="text-[#0f172a] font-bold">Post Tags:</span>
                <div className="flex gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-bold transition-all hover:bg-[#1E63FF] hover:text-white cursor-pointer">Repair</span>
                  <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-bold transition-all hover:bg-[#1E63FF] hover:text-white cursor-pointer">Maintenance</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#0f172a] font-bold text-sm">Follow Us for More Tips</span>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B0F3B] flex items-center justify-center text-white cursor-pointer hover:bg-[#ff6a00] transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
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

export default BlogDetails;

