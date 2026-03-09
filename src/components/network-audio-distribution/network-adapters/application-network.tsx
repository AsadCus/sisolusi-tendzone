"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mic, Radio, Mic2 } from "lucide-react";

const applications = [
  {
    icon: Mic,
    description: "Connect analog mixers and consoles to a Dante network",
  },
  {
    icon: Radio,
    description: "Connect your Streaming Gear to a Dante network",
  },
  {
    icon: Mic2,
    description: "Connect wireless mic receiver to a Dante network",
  },
];

export default function NetworkAdapterApplicationsSection({
  title = "Network Adapter Applications",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            {title}
          </h2>
          <div className="flex justify-center gap-1.5 mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {applications.map((app, i) => {
            const Icon = app.icon;
            return (
              <Card
                key={i}
                className="border border-gray-200 rounded-2xl shadow-none hover:border-red-200 hover:shadow-sm transition-all duration-200 group"
              >
                <CardContent className="flex flex-col items-center text-center px-8 py-2 gap-5">
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-red-500" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}