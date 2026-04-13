import os

pages = [
  {"id": "admission", "title": "Admissions", "sections": ["UG Admissions", "PG Admissions", "PhD Admissions", "International Students"]},
  {"id": "notices", "title": "Notices & Circulars", "sections": ["Recent Notices", "Academic Circulars", "Administrative Orders", "Tenders"]},
  {"id": "results", "title": "Examination Results", "sections": ["UG Results", "PG Results", "Re-evaluation", "Archived Results"]},
  {"id": "contact", "title": "Contact Us", "sections": ["Important Contacts", "Campus Directory", "Enquiries", "Maps & Directions"]}
]

for p in pages:
    dirPath = os.path.join(os.path.dirname(__file__), 'src', 'app', p['id'])
    os.makedirs(dirPath, exist_ok=True)
    
    sections_links = "\\n              ".join(
        [f'<li><a href="#section-{i}" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> {sec}</a></li>' for i, sec in enumerate(p['sections'])]
    )
    
    sections_html = "\\n          ".join(
        [f"""
          {{/* Section {i} */}}
          <div id="section-{i}" className="scroll-mt-32 {'border-t border-gray-100 pt-10' if i > 0 else ''}">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{sec}</h2>
            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
              <p>
                This is a newly created section for <strong>{sec}</strong>. This layout mirrors the beautiful side-bar structure of the About page, ensuring a consistent user experience. 
              </p>
              <p>
                The content here is fully modular and dynamically structured to reflect actual CMS records.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border-l-[6px] border-[#A31F34]">
                <h3 className="text-2xl font-bold text-[#A31F34] mb-3">Notice/Info Box</h3>
                <p className="mb-0 text-gray-700 leading-relaxed text-lg">
                  Placeholders for real dynamic data from the CMS, applying identical design systems natively in React and Tailwind.
                </p>
              </div>
            </div>
          </div>""" for i, sec in enumerate(p['sections'])]
    )

    content = f"""import React from 'react';
import Image from 'next/image';

export const metadata = {{
  title: '{p["title"]} | University of Allahabad',
}};

export default function {p["id"].capitalize()}Page() {{
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col pt-0 lg:pt-[120px]">
      {{/* Hero Section */}}
      <section className="relative w-full h-[300px] md:h-[400px] bg-[#111] overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="{p["title"]}"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">{p["title"]}</h1>
            <p className="text-lg md:text-xl text-gray-200">University of Allahabad, A Central University</p>
          </div>
        </div>
      </section>

      {{/* Main Content Area */}}
      <section className="w-full max-w-[1300px] mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10">
        {{/* Sidebar */}}
        <aside className="w-full lg:w-[300px] shrink-0">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:sticky lg:top-32">
            <h3 className="font-bold text-xl text-[#A31F34] mb-6 border-b border-gray-100 pb-4">{p["title"]}</h3>
            <ul className="flex flex-col space-y-4 font-medium text-[15.5px] text-gray-700">
              {sections_links}
            </ul>
          </div>
        </aside>

        {{/* Content */}}
        <div className="flex-1 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 space-y-16">
          {sections_html}
        </div>
      </section>
    </div>
  );
}}
"""
    with open(os.path.join(dirPath, 'page.tsx'), 'w') as f:
        f.write(content)

print("Successfully created inner pages.")
