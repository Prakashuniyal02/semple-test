import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | University of Allahabad',
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">We are here to assist you with any inquiries or support you may need</p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="w-full py-16 px-6 xl:px-24 -mt-10 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 p-8 shadow-md">
            <div className="w-12 h-12 bg-[#f4ecea] text-[#7a1c22] flex items-center justify-center mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#352526] mb-3">General Enquiries</h3>
            <p className="text-gray-600 mb-2">+91 (532) 2460-XXX</p>
            <p className="text-gray-500 text-sm">Mon-Fri, 10:00 AM - 5:00 PM</p>
          </div>
          <div className="bg-white border border-gray-200 p-8 shadow-md">
            <div className="w-12 h-12 bg-[#f4ecea] text-[#7a1c22] flex items-center justify-center mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#352526] mb-3">Admissions Support</h3>
            <p className="text-[#7a1c22] font-medium mb-2 hover:underline cursor-pointer">admissions@allduniv.ac.in</p>
            <p className="text-gray-500 text-sm">Usually replies within 24 hours</p>
          </div>
          <div className="bg-white border border-gray-200 p-8 shadow-md">
            <div className="w-12 h-12 bg-[#f4ecea] text-[#7a1c22] flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#352526] mb-3">Campus Address</h3>
            <p className="text-gray-600 leading-relaxed">Senate House Campus,<br/>University of Allahabad,<br/>Old Katra, Prayagraj,<br/>Uttar Pradesh 211002</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-16 px-6 xl:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h4 className="text-[#a3222b] text-sm font-bold tracking-widest uppercase mb-3">WRITE TO US</h4>
            <h2 className="text-4xl font-serif font-bold text-[#352526] mb-8">Send a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7a1c22]" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7a1c22]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7a1c22]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject Category</label>
                <select className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#7a1c22]">
                  <option>Admissions</option>
                  <option>Examinations</option>
                  <option>Hostel/Accommodation</option>
                  <option>Other Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7a1c22]"></textarea>
              </div>
              <button type="submit" className="px-8 py-4 bg-[#7a1c22] text-white font-bold hover:bg-[#63141a] transition-colors border border-[#7a1c22] w-full md:w-auto">
                Submit Enquiry
              </button>
            </form>
          </div>

          <div className="bg-[#f4ecea] p-8 md:p-12 h-full flex flex-col justify-center">
             <h3 className="text-2xl font-serif font-bold text-[#352526] mb-6">Directory Quick Links</h3>
             <ul className="space-y-4">
               {[
                 'Office of the Vice Chancellor',
                 'Registrar Office',
                 'Controller of Examinations',
                 'Dean of Student Welfare',
                 'Proctor Office',
                 'Central Library',
                 'Placement Cell'
               ].map((dept, i) => (
                 <li key={i} className="flex items-center gap-3 pb-4 border-b border-gray-300 last:border-0 last:pb-0">
                    <ArrowRight className="w-4 h-4 text-[#7a1c22]" />
                    <a href="#" className="text-gray-700 hover:text-[#7a1c22] font-medium transition-colors">{dept}</a>
                 </li>
               ))}
             </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
