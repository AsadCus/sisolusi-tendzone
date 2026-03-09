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

export default function ProductAllInOneSolution() {
  return (
    <section className="w-full bg-white pt-12 pb-4 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(239,68,68,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-[1.85rem] font-extrabold text-gray-900 leading-snug tracking-tight">
            Your Professional All-in-one Solution Manufacturer
          </h2>

          <div className="flex justify-center mt-3 mb-4">
            <span className="block w-12 h-1 rounded-full bg-red-500" />
          </div>

          <p
            className="text-[14.5px] text-gray-800 leading-7 max-w-2xl mx-auto"
            style={{ textAlign: "center" }}
          >
            Tendzone, established in 2010, is a global leader in providing advanced audio-visual
            (AV) solutions and manufacturing high-quality AV products. We specialize in a wide range
            of cutting-edge technologies, including audio processors, microphones, speakers, power
            amplifiers, AV over IP systems, digital conference systems, and MIDIS Distributed
            Multimedia Transmission Control Systems.
          </p>
        </div>
      </div>
    </section>
  );
}