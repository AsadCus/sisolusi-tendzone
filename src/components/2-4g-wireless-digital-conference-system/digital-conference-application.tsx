"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  GraduationCap,
  Landmark,
  Trophy,
  MonitorPlay,
  Globe,
  ChevronRight,
} from "lucide-react";

const applications = [
  { icon: Building2, label: "Corporate Meetings" },
  { icon: GraduationCap, label: "Academic Conferences and Seminars" },
  { icon: Landmark, label: "Government Meetings" },
  { icon: Trophy, label: "Religious Gatherings" },
  { icon: MonitorPlay, label: "Training Sessions" },
  { icon: Globe, label: "International Conferences and Summits" },
];

export default function DigitalConferenceApplicationSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12 tracking-tight">
          2.4G Wireless Digital Conference System Application
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {applications.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Card className="flex-1 h-52 border border-gray-200 shadow-none rounded-xl hover:border-red-300 hover:shadow-md transition-all duration-200 group">
                  <CardContent className="flex flex-col items-center justify-between h-full pt-7 pb-5 px-4 text-center">
                    <div className="w-12 h-12 rounded-full border border-red-200 flex items-center justify-center group-hover:bg-red-50 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-red-500" strokeWidth={1.5} />
                    </div>

                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.label}
                    </p>

                    <Badge
                      variant="secondary"
                      className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-[10px] text-gray-400 bg-gray-100 border-0 font-medium"
                    >
                      {index + 1}
                    </Badge>
                  </CardContent>
                </Card>

                {index < applications.length - 1 && (
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