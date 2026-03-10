"use client";

import { CheckCircle2 } from "lucide-react";

const applications = [
  "Corporate",
  "Academic Field",
  "Entertainment and Media",
  "Government and Public Sector",
];

export default function ConferenceApplicationSection({
  title = "Application of 5G Digital Conference System",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-3">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-2">
            <div className="w-14 h-0.5 bg-red-300 rounded-full" />
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
            <div className="w-14 h-0.5 bg-red-300 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {applications.map((app, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-none border border-gray-200 hover:border-red-200 hover:bg-red-50 transition-all duration-200 group"
            >
              <CheckCircle2
                className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 transition-transform duration-200"
                strokeWidth={2}
              />

              <span className="text-lg text-gray-700 group-hover:text-red-600 transition-colors duration-200 text-center">
                {app}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}