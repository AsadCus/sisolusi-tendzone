"use client";

const reasons = [
  {
    number: "01",
    title: "Comprehensive Solutions",
    description:
      "From high-quality AV products to custom solutions and ongoing support, we provide everything you need for a seamless AV experience.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "We invest heavily in R&D to stay ahead of technological trends and provide cutting-edge solutions.",
  },
  {
    number: "03",
    title: "Expertise & Experience",
    description:
      "With years of experience in manufacturing and systems integration, our skilled team optimizes your AV environment for exceptional performance and ease of use.",
  },
  {
    number: "04",
    title: "Tailored & Flexible Services",
    description:
      "Recognizing that each client has unique needs, we collaborate closely with you to create solutions perfectly suited to your specific requirements. Your vision is our blueprint.",
  },
  {
    number: "05",
    title: "Quality Control",
    description:
      "All our products undergo rigorous testing to ensure they meet the highest standards of durability and performance. Our commitment to cutting-edge technology ensures reliability, outstanding performance, and seamless integration.",
  },
  {
    number: "06",
    title: "Reliable Support & Maintenance",
    description:
      "Our dedicated team provides comprehensive support throughout the project lifecycle — project design, product recommendation, installation, technical assistance, and ongoing maintenance.",
  },
];

export default function WhyChooseUsCategory() {
  return (
   <section className="w-full bg-gray-white pt-24 pb-4 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(239,68,68,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 md:px-6 relative">

        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-[1.85rem] font-medium text-gray-900 leading-snug tracking-tight">
        Your Professional Network Audio Distribution Manufacturer!

          </h2>

          <div className="flex justify-center mt-3 mb-6">
            <span className="block w-12 h-1 rounded-full bg-red-500" />
          </div>

          <p
            className="text-sm text-gray-800 leading-7 max-w-7xl mx-auto"
            style={{ textAlign: "justify" }}
          >
        Tendzone, established in 2010, is a global leader in providing advanced audio-visual (AV) solutions and manufacturing high-quality AV products. We specialize in a wide range of cutting-edge technologies, including audio processors, microphones, speakers, power amplifiers, AV over IP systems, digital conference systems, and MIDIS Distributed Multimedia Transmission Control Systems. Our solutions are trusted across industries such as conference rooms, command centers, education, multi-functional halls, and stadiums.
          </p>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <span className="flex-1 h-px bg-gray-100" />
          <div className="flex items-center gap-2.5">
           
            <h3 className="text-20px font-medium text-black tracking-widest uppercase">
              Why Choose Us
            </h3>
          
          </div>
          <span className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((item) => (
            <div
              key={item.number}
              className="group relative flex gap-5 items-start rounded-xl border border-gray-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-red-100 hover:-translate-y-0.5"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                <span className="text-[12px] font-black text-red-400 group-hover:text-white transition-colors duration-300 tracking-wide tabular-nums">
                  {item.number}
                </span>
              </div>

              <div>
                <h4 className="text-[14.5px] font-semibold text-gray-800 mb-1.5 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p
                  className="text-[13px] font-light text-gray-800 leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}