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
    <section className="w-full bg-white pt-4 pb-4 relative overflow-hidden">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 relative">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-xl font-medium text-red-600">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {reasons.map((item) => (
            <div
              key={item.number}
              className="group relative flex gap-4 items-start rounded-none border border-gray-100 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-red-100 hover:-translate-y-0.5"
            >
              <div className="shrink-0 w-10 h-10 bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                <span className="text-[12px] font-black text-red-400 group-hover:text-white transition-colors duration-300 tracking-wide tabular-nums">
                  {item.number}
                </span>
              </div>

              <div className="flex-1">
                <h4 className="text-[13.5px] font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[12.5px] text-gray-600 leading-relaxed" style={{ textAlign: "justify" }}>
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