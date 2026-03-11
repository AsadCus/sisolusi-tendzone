"use client";

const items = [
  {
    label: "Packaging",
    value: "Plastic bag, paper box, customizable",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    label: "Transportation Methods",
    value: "Road transport, rail transport, sea transport, air transport",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

export default function PackagingShipping() {
  return (
    <section className="bg-white py-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Packaging & Shipping</h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-100 bg-gray-50 px-6 py-5 flex items-start gap-4 group hover:border-red-200 hover:bg-red-50 transition-colors duration-200">
              <div className="shrink-0 w-9 h-9 bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-red-500 group-hover:border-red-200 transition-colors duration-200">
                {item.icon}
              </div>
              <div>
                <p className="text-[11px] font-bold text-red-500 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-[12.5px] text-gray-700 leading-relaxed">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}