"use client";

import { CheckCircle2 } from "lucide-react";

const oemPoints = ["Logo", "Package", "Colors", "Materials"];
const odmPoints = ["Communicating", "Confirming", "Customizing"];

const ServiceCard = ({ title, description, points } : { title: string; description: string; points: string[] }) => (
  <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300">
    <div>
      <h3 className="text-[17px] font-extrabold text-gray-900 mb-2">{title}</h3>
      <p className="text-[13.5px] text-gray-500 leading-relaxed" style={{ textAlign: "justify" }}>
        {description}
      </p>
    </div>
    <ul className="space-y-2">
      {points.map((p) => (
        <li key={p} className="flex items-center gap-2.5 text-[13px] text-gray-700 font-medium">
          <CheckCircle2 size={14} className="text-red-500 shrink-0" />
          {p}
        </li>
      ))}
    </ul>
  </div>
);

export default function OemOdmSectionCategory() {
  return (
    <main className="w-full bg-white">
      <section className="w-full border-b border-gray-100 pt-8 pb-4">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-xl md:text-2xl font-medium text-gray-900 tracking-tight mb-6">
            OEM / ODM Service
          </h1>
          <p className="text-[14.5px] text-gray-800 leading-7 max-w-2xl mx-auto text-center">
            Our dedicated customer support team offers reliable technical support, quick response
            times, and preventive maintenance service tailored to each client's unique requirements.
          </p>
        </div>
      </section>

      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-8 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              title="OEM Service"
              description="As a professional AV provider, we focus on understanding the unique requirements of our clients. We identify any technical limitations or challenges the client currently faces — such as space constraints, budget limitations, or specific user needs — and deliver tailored branding solutions."
              points={oemPoints}
            />
            <ServiceCard
              title="ODM Service"
              description="We offer client-customized maintenance plans based on usage, equipment types, and client preferences. Our approach increases the lifespan and reliability of AV systems, leading to a better overall client experience through a structured three-step process."
              points={odmPoints}
            />
          </div>
        </div>
      </section>
    </main>
  );
}