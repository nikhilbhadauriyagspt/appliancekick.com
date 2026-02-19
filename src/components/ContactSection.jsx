import React, { useState } from 'react';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true); // Fallback
    }
  };

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-0">
        <div className="bg-[#E9EEFF] rounded-[32px] p-10 md:p-16 lg:p-[70px] relative overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 relative z-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
                <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider">Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl  font-black text-[#0B0F3B] leading-[1.1] ">
                Your Free Growth Chat <br />
                <span className="text-gray-400">Starts Here</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col sm:flex-row gap-8 lg:gap-12">
              <div className="hidden flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E63FF] flex items-center justify-center text-white shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0B0F3B] font-black text-xs uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-[#0B0F3B] font-bold text-sm">+1 (530) 554-4817</p>
                  <p className="text-gray-400 text-xs font-medium">ApplianceKick@outlook.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E63FF] flex items-center justify-center text-white shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0B0F3B] font-black text-xs uppercase tracking-widest mb-1">Area</p>
                  <p className="text-[#0B0F3B] font-bold text-sm">Professional</p>
                  <p className="text-gray-400 text-xs font-medium">Home Service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#0B0F3B] to-[#1427B7] rounded-[26px] p-8 md:p-12 lg:p-16 relative z-10 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-16 text-white">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"><svg className="w-10 h-10 text-[#ff6a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div>
                <h3 className="text-3xl font-black mb-4">Inquiry Received</h3>
                <p className="text-white/60 mb-8 max-w-sm mx-auto">Thank you for your message. Our expert team will review your inquiry and contact you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="bg-white text-[#0B0F3B] px-8 py-3 rounded-full font-bold">New Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="name" required onChange={handleChange} type="text" placeholder="Your Name" className="w-full bg-white outline-none rounded-xl px-6 py-4 text-[#0B0F3B] font-medium transition-all" />
                  <input name="email" required onChange={handleChange} type="email" placeholder="Email Address" className="w-full bg-white outline-none rounded-xl px-6 py-4 text-[#0B0F3B] font-medium transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="subject" required onChange={handleChange} type="text" placeholder="Enter Subject" className="w-full bg-white outline-none rounded-xl px-6 py-4 text-[#0B0F3B] font-medium transition-all" />
                  <input name="phone" required onChange={handleChange} type="tel" placeholder="Enter Phone" className="w-full bg-white outline-none rounded-xl px-6 py-4 text-[#0B0F3B] font-medium transition-all" />
                </div>
                <textarea name="message" required onChange={handleChange} placeholder="Write a Message" rows="5" className="w-full bg-white outline-none rounded-xl px-6 py-4 text-[#0B0F3B] font-medium transition-all resize-none"></textarea>
                <div className="flex justify-center mt-4">
                  <button type="submit" className="bg-white text-[#0B0F3B] hover:bg-[#ff6a00] hover:text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[3px] shadow-lg transition-all duration-300 transform hover:-translate-y-1">SEND A MESSAGE</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

