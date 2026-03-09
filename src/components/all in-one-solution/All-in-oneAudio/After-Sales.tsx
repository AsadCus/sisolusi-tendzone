"use client";

const steps = [
  {
    number: "01",
    title: "Technical Support",
    description: "Professional tech support team ensures any issues with the AV system are promptly addressed with quick response times.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Maintenance Services",
    description: "Client-customized maintenance plans based on usage, equipment types, and preferences — increasing lifespan and reliability.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Upgrades & Updates",
    description: "We continuously provide software upgrades to keep your AV systems current and performing at their best.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Feedback & Improvement",
    description: "Customer feedback is actively collected and used to foster continuous improvement in our service quality.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
];

export default function AfterSalesServices() {
  return (
    <section className="bg-white py-8 px-6 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">After-Sales Services</h2>
          <div className="mt-3 w-7 h-[2px] bg-red-500" />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 px-4 py-5 flex flex-col gap-3 hover:border-red-200 hover:bg-red-50 transition-colors duration-200 group">

              {/* Number + Icon row */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-red-500 tracking-widest">{s.number}</span>
                <span className="text-gray-400 group-hover:text-red-400 transition-colors duration-200">{s.icon}</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 group-hover:bg-red-200 transition-colors duration-200" />

              {/* Title */}
              <p className="text-[12.5px] font-bold text-gray-900">{s.title}</p>

              {/* Description */}
              <p className="text-[11px] text-gray-500 leading-relaxed">{s.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}