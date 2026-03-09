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
  Wifi,
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
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center gap-3 mb-12">
          <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
            <Wifi className="w-3 h-3" />
            Applications
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            2.4G Wireless Digital Conference{" "}
            <span className="text-red-500">System Application</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {applications.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Card className="relative overflow-hidden flex-1 h-60 border border-gray-300 shadow-none rounded-xl transition-all duration-200 group">
                  <span className="absolute top-0 left-0 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-500 ease-out z-10" />
                  <CardContent className="flex flex-col items-center justify-between h-full pt-7 pb-5 px-4 text-center">
                    <div className="w-12 h-12 rounded-full border border-red-100 bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-red-500" strokeWidth={1.5} />
                    </div>

                    <p className="text-gray-400 text-md leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
                      {item.label}
                    </p>

                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-gray-400 bg-gray-100 font-medium">
                      {index + 1}
                    </span>
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