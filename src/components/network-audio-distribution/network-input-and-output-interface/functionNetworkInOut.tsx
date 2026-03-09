"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  SlidersHorizontal,
  Radio,
  Database,
  ShieldAlert,
  ArrowLeftRight,
  Waves,
  ChevronRight,
} from "lucide-react";

const functions = [
  {
    icon: Cpu,
    description: "Synchronizes the operating speed of CPU with respect to input-output devices.",
  },
  {
    icon: SlidersHorizontal,
    description: "Selects the I/O device appropriate for interpreting the input-output signal.",
  },
  {
    icon: Radio,
    description: "Capable of providing signals like control and timing signals.",
  },
  {
    icon: Database,
    description: "Data buffering can be achieved through the data bus.",
  },
  {
    icon: ShieldAlert,
    description: "Equipped with various error detection mechanisms.",
  },
  {
    icon: ArrowLeftRight,
    description: "Converts serial data into parallel data and vice-versa.",
  },
  {
    icon: Waves,
    description: "Converts digital data into analog signals and vice-versa.",
  },
];

export default function FunctionsNetworkSection({
  title = "Functions of Network Input And Output Interface",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12 tracking-tight">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {functions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Card className="flex-1 h-52 border border-gray-200 shadow-none rounded-xl hover:border-red-300 hover:shadow-md transition-all duration-200 group">
                  <CardContent className="flex flex-col items-center justify-between h-full pt-7 pb-5 px-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-red-500" strokeWidth={1.75} />
                    </div>

                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.description}
                    </p>

                    <Badge
                      variant="secondary"
                      className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-[10px] text-gray-500 bg-gray-100 border-0 font-medium"
                    >
                      {index + 1}
                    </Badge>
                  </CardContent>
                </Card>

                {index < functions.length - 1 && (
                  <ChevronRight className="hidden lg:block w-3 h-3 text-gray-300 shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}