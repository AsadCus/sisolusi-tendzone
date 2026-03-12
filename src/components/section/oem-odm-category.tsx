"use client";

import { CheckCircle2 } from "lucide-react";

const oemOdm = [
  {
    type: "OEM",
    title: "OEM Service",
    description:
      "As a professional AV provider, we focus on understanding the unique requirements of our clients — identifying technical limitations, space constraints, budget, and specific user needs.",
    points: ["Logo", "Package", "Colors", "Materials"],
  },
  {
    type: "ODM",
    title: "ODM Service",
    description:
      "We offer client-customized plans based on usage, equipment types, and preferences — increasing the lifespan and reliability of your AV systems for a better overall experience.",
    points: ["Communicating", "Confirming", "Customizing"],
  },
];

export default function OemOdmSectionCategory() {
  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
         
          <h2 className="text-2xl md:text-xl font-medium text-red-600">
            OEM / ODM Service
          </h2>
          <p className="mt-4 text-gray-600 text-xs md:text-sm max-w-xl">
            Our dedicated customer support team offers reliable technical support, quick response times, and preventive maintenance service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {oemOdm.map((s) => (
            <div key={s.type} className="border border-gray-100 bg-gray-50 px-5 py-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-white bg-red-500 px-2 py-0.5 tracking-wider">
                  {s.type}
                </span>
                <p className="text-[12.5px] font-bold text-gray-900">{s.title}</p>
              </div>
              <p className="text-[11.5px] text-gray-500 leading-relaxed mb-3">
                {s.description}
              </p>
              <ul className="space-y-1">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-red-500 shrink-0" />
                    <span className="text-[11.5px] text-gray-500">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}