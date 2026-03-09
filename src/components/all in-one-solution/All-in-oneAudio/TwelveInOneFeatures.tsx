"use client";

const features = [
  {
    label: "12-ch MIC/linear inputs",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  },
  {
    label: "12-ch linear outputs",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="18" r="3"/><circle cx="15" cy="6" r="3"/><path d="M9 15V9"/><path d="M15 9v6"/></svg>,
  },
  {
    label: "Seamless audio signal routing with 12-ch balanced/unbalanced MIC/linear inputs and outputs",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    label: "DANTE network audio interfaces",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    label: "Intuitive interface for easy configuration, volume control, monitoring, and scene management",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    label: "48V phantom power supply for all 12-ch MIC inputs",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    label: "48KHz sampling rate and 24-bit A/D or D/A conversion for high-fidelity audio reproduction",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="8" y2="18"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="16" y1="8" x2="16" y2="16"/><line x1="4" y1="10" x2="4" y2="14"/><line x1="20" y1="10" x2="20" y2="14"/></svg>,
  },
  {
    label: "8-ch programmable GPIO function for enhanced flexibility and control",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
  },
  {
    label: "Standard RJ45 interface control for easy integration into existing setups",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  },
  {
    label: "High Signal-to-Noise ratio for a clear, clean, and resonant sound",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  },
];

export default function TwelveInOneFeatures() {
  return (
    <section className="bg-white py-10 px-6 font-sans">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Features of Twelve-In-One Integrated Processor
          </h2>
          <div className="mt-3 w-7 h-[2px] bg-red-500" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-600 transition-colors duration-200 overflow-hidden px-4 pt-4 pb-3"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <span className="text-red-500 mb-2">{f.icon}</span>

              <p className="text-[11px] text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-200 mb-4">
                {f.label}
              </p>

              <span className="self-end text-[22px] font-bold text-gray-200 group-hover:text-red-200 leading-none select-none transition-colors duration-200">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}