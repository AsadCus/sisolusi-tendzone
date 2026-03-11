"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info, FlaskConical, Package } from "lucide-react";

const precautions = [
  {
    icon: Info,
    text: "The proper way to position network microphones is to adjust it so that it points towards the sound source at an appropriate distance to ensure optimal sound quality and reduce feedback.",
  },
  {
    icon: FlaskConical,
    text: "Regular testing is crucial to ensure your network microphone is functioning correctly and to maintain the best possible sound quality during its use.",
  },
  {
    icon: Package,
    text: "When not in use, store your network microphone in a dry, clean place free from dust and other contaminants that could affect its performance.",
  },
];

export default function MicrophonePrecautionsSection({
  title = "Precautions for Use Network Microphone",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center gap-3 mb-12">
          <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
            <AlertTriangle className="w-3 h-3" />
            Precautions
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            Precautions for Use{" "}
            <span className="text-red-500">Network Microphone</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {precautions.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={i}
                className="relative overflow-hidden border border-gray-100 rounded-none shadow-none transition-all duration-200 group"
              >
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-500 ease-out z-10" />
                <CardContent className="px-6 py-7 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-none bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                    <Icon className="w-4 h-4 text-red-500" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                    {item.text}
                  </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}