import React, { useState } from 'react';

const FAQSection = () => {
  const [openLeft, setOpenLeft] = useState(1); // Second item open by default in left col
  const [openRight, setOpenRight] = useState(0); // First item open by default in right col

  const leftFaqs = [
    {
      id: 0,
      question: "What types of air conditioning systems do you install?",
      answer: "We install a wide range of systems including split ACs, window units, central air conditioning, and multi-split systems. Our experts help you choose the best fit for your space."
    },
    {
      id: 1,
      question: "How often should my AC be serviced or cleaned?",
      answer: "For optimal performance, we recommend professional servicing at least twice a year—once before the summer peak and once after. Regular filter cleaning can be done monthly by the user."
    },
    {
      id: 2,
      question: "What brands of air conditioners do you work with?",
      answer: "We work with all major global brands including Daikin, Mitsubishi, LG, Samsung, Carrier, and many more. Our technicians are factory-trained for these specific brands."
    },
    {
      id: 3,
      question: "Are your technicians certified and insured?",
      answer: "Yes, all our technicians are fully certified and insured. We follow strict safety protocols and industry standards to ensure a professional and safe repair environment."
    }
  ];

  const rightFaqs = [
    {
      id: 0,
      question: "Is there a warranty on your repair services?",
      answer: "Absolutely. We provide a 45-day warranty on all our labor and use only genuine spare parts that come with their own manufacturer warranties."
    },
    {
      id: 1,
      question: "How quickly can you respond to an emergency fix?",
      answer: "We offer same-day service for emergency repairs if you call before 12 Noon. We strive to reach most locations within 2-4 hours of booking."
    },
    {
      id: 2,
      question: "Do you provide transparent pricing upfront?",
      answer: "Yes, we provide a detailed diagnostic audit and a fixed-price quote before any work begins. There are no hidden charges or surprise costs."
    },
    {
      id: 3,
      question: "Can I book a service appointment online?",
      answer: "Yes, you can use our 'Hire Us Now' button to book an appointment instantly, or call our direct line for priority scheduling."
    }
  ];

  const AccordionItem = ({ item, isOpen, toggle }) => (
    <div className={`mb-4 transition-all duration-300`}>
      <button
        onClick={toggle}
        style={{
          fontWeight: 700,
          backgroundColor: '#FFFFFF',
          padding: '10px 10px 10px 20px',
          borderRadius: '20px',
          boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
          borderStyle: 'solid',
          borderWidth: '2px 0px 0px 0px',
          marginBottom: '10px',
          borderColor: '#E1E7FD00',
        }}
        className={`flex w-full items-center justify-between text-left transition-all duration-300 ${isOpen ? 'text-[#1E63FF]' : 'text-[#0f172a]'}`}
      >
        <span className="text-[.9rem] pr-4 text-[#011d81]">
          {item.question}
        </span>
        <span
          style={{
            fontSize: '20px',
            color: '#1E63FF',
            backgroundColor: '#E1E7FD',
            padding: '6px',
            borderRadius: '100px',
            transition: 'all 0.3s ease'
          }}
          className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-45 !bg-[#ff6a00] !text-white' : ''}`}
        >
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-500 ease-in-out bg-white rounded-b-[20px] -mt-2 overflow-hidden ${isOpen ? 'max-h-60 opacity-100 pb-5 shadow-sm' : 'max-h-0 opacity-0'}`}>
        <div className="px-[30px] pt-4 border-t border-gray-100/50">
          <p className="text-sm leading-relaxed text-gray-500 font-medium">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-0">

        {/* Inner Card with Background Color and Shape */}
        <div className="relative w-full rounded-[40px] bg-[#E1E7FD] p-10 md:p-16 lg:p-20 overflow-hidden">

          {/* Background Image - Absolute Positioned INSIDE the card */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/faq/shape11.png"
              alt="Background Decoration"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-4 rounded-full bg-white/60 border border-white/80 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
                <span className="text-[#0f172a] text-xs font-bold tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-4xl font-semibold text-[#1738B5] mb-2 ">
                Information & FAQs
              </h2>
            </div>

            {/* Two-Column Accordion Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12">

              {/* Left Column Accordion */}
              <div className="flex flex-col">
                {leftFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    item={faq}
                    isOpen={openLeft === faq.id}
                    toggle={() => setOpenLeft(openLeft === faq.id ? -1 : faq.id)}
                  />
                ))}
              </div>

              {/* Right Column Accordion */}
              <div className="flex flex-col">
                {rightFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    item={faq}
                    isOpen={openRight === faq.id}
                    toggle={() => setOpenRight(openRight === faq.id ? -1 : faq.id)}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section >
  );
};

export default FAQSection;
