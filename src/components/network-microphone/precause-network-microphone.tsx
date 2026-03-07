"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const precautions = [
  "The proper way to position network microphones is to adjust it so that it points towards the sound source at an appropriate distance to ensure optimal sound quality and reduce feedback.",
  "Regular testing is crucial to ensure your network microphone is functioning correctly and to maintain the best possible sound quality during its use.",
  "When not in use, store your network microphone in a dry, clean place free from dust and other contaminants that could affect its performance.",
];

export default function MicrophonePrecautionsSection({
  title = "Precautions for Use Network Microphone",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4 text-red-500" strokeWidth={1.75} />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {precautions.map((text, i) => (
            <Card
              key={i}
              className="border border-gray-200 rounded-2xl shadow-none hover:border-red-200 hover:shadow-sm transition-all duration-200"
            >
              <CardContent className="px-6 py-7">
                <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}