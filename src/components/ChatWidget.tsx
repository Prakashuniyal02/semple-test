"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-[75] w-[350px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-[#a8142b] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#a8142b] font-bold text-sm">AU</span>
              </div>
              <div>
                <h4 className="font-bold text-[15px]">AU Assistant</h4>
                <p className="text-[11px] text-white/80">Online - How can I help?</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/20 p-1.5 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="h-[300px] overflow-y-auto p-4 bg-[#f8f9fa] flex flex-col gap-3">
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-[#a8142b] rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                <span className="text-white text-[10px] font-bold">AU</span>
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm text-[13px] text-gray-800 border border-gray-100 max-w-[85%]">
                Welcome to the University of Allahabad! I am your virtual assistant. How can I help you today?
              </div>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 bg-white flex gap-2 items-center">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-grow bg-gray-100 border-none rounded-full px-4 py-2 text-[13px] outline-none focus:ring-1 focus:ring-[#a8142b]/50"
            />
            <button className="bg-[#a8142b] text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#8A1A2C] transition-colors flex-shrink-0">
              <svg className="w-4 h-4 -ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-8 z-[70] w-[60px] h-[60px] bg-[#a8142b] hover:bg-[#8A1A2C] rounded-full shadow-[0_4px_14px_rgba(168,20,43,0.4)] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ${isOpen ? 'bottom-10' : 'bottom-[110px] md:bottom-[90px]'}`}
      >
        {isOpen ? (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white mt-1 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </>
  );
}
