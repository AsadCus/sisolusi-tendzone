"use client";

const certificates = [
  "https://www.tendzone.net/uploads/43135/page/p20241129092059a6ef8.jpg?size=500x0",
  "https://www.tendzone.net/uploads/43135/page/p202411290921118a7c3.jpg?size=500x0",
  "https://www.tendzone.net/uploads/43135/page/p2024112909211821e3b.jpg?size=500x0",
  "https://www.tendzone.net/uploads/43135/page/p20241129092125737a9.jpg?size=500x0",
  "https://www.tendzone.net/uploads/43135/page/p20241129092134a20f2.jpg?size=500x0",
];

export default function HonorQualification() {
  return (
    <section className="bg-white py-8 px-6 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Honor & Qualification</h2>
          <div className="mt-3 w-7 h-[2px] bg-red-500" />
        </div>

        {/* Certificates grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {certificates.map((url, i) => (
            <div
              key={i}
              className="border border-gray-100 bg-gray-50 overflow-hidden group hover:border-red-200 transition-colors duration-200"
            >
              <img
                src={url}
                alt={`Certificate ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}