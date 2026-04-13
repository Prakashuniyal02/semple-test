import React from 'react';

export const metadata = { title: 'Media Gallery | University of Allahabad' };

export default function GalleryPage() {
  const images = Array(12).fill(0); // Dummy array for grid
  
  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Media Gallery</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Explore the visual heritage and vibrant events of the campus</p>
        </div>
      </section>

      <section className="w-full py-24 px-6 xl:px-24 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {images.map((_, i) => (
               <div key={i} className="w-full aspect-[4/3] bg-gray-200 overflow-hidden group border border-gray-200">
                 <img 
                   src={`https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sig=${i}`} // Added query to randomize if possible, but Unsplash doesn't work like this. Just using a placeholder.
                   alt="Campus Life" 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
               </div>
             ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-transparent text-[#7a1c22] font-bold border border-[#7a1c22] hover:bg-[#7a1c22] hover:text-white transition-colors">
              Load More Media
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
