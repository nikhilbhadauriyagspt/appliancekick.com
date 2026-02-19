import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      category: "AC Running",
      date: "December 1, 2025",
      title: "How to Keep Your AC Running Efficiently All Year Long",
      image: "/service-1.jpg"
    },
    {
      id: 2,
      category: "Installation",
      date: "December 1, 2025",
      title: "Why Regular AC Maintenance Saves You Money Long Run",
      image: "/service-2.jpg"
    },
    {
      id: 3,
      category: "Thermostat",
      date: "December 1, 2025",
      title: "The Ultimate Guide to Choosing the Right Air Conditioner",
      image: "/service-3.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF6A3D]"></span>
            <span className="text-[#07124A] text-xs font-bold uppercase tracking-wider">Our Blog</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#07124A] leading-[1.1] ">
            Stay Informed with Our <br />
            Latest Blog Posts
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col group cursor-pointer">

              {/* Image Container */}
              <div className="relative rounded-[22px] overflow-hidden mb-8 aspect-[4/3]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Meta Info: Category & Date */}
              <div className="flex items-center gap-4 mb-5">
                <div className="px-4 py-1.5 rounded-full bg-[#EEF1FF] inline-block">
                  <span className="text-[#07124A] text-[10px] md:text-xs font-bold uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
                <span className="text-gray-400 text-xs md:text-sm font-medium">
                  {blog.date}
                </span>
              </div>

              {/* Blog Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#07124A] leading-tight mb-6 transition-colors duration-300 group-hover:text-[#FF6A3D]">
                {blog.title}
              </h3>

              {/* Read More Link */}
              <div className="mt-auto flex items-center gap-3 group/link">
                <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">
                  Read More
                </span>
                <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover/link:bg-[#FF6A3D] group-hover/link:border-[#FF6A3D]">
                  <svg
                    className="w-4 h-4 text-[#FF6A3D] group-hover/link:text-white transition-all duration-300 transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
