"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Radio,
  Home,
  ShoppingBag,
  Building2,
  GraduationCap,
  PlaneTakeoff,
  DoorOpen,
} from "lucide-react";

const applications = [
  {
    icon: Radio,
    title: "Overview",
    description:
      "The versatility of Audio Over IP makes it suitable for a wide range of applications, from domestic audio setups to large-scale commercial and public installations. By transmitting IP audio over network infrastructure, these systems provide efficient sound distribution with centralized control.",
  },
  {
    icon: Home,
    title: "Residential",
    description:
      "Homeowners use IP network speaker systems for multi-room audio distribution. A single source such as a streaming service or media player can send sound to different rooms, with users controlling playback and volume remotely via zoning capabilities.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Hospitality",
    description:
      "Shops, restaurants, and hotels broadcast music to enhance customer experience while delivering real-time messages, emergency alerts, or promotional content to specific areas.",
  },
  {
    icon: Building2,
    title: "Corporate & Office",
    description:
      "Zoned audio enables public announcements, paging systems, and conference room integration. Employees receive live or pre-recorded messages across departments with high-quality IP audio solutions.",
  },
  {
    icon: GraduationCap,
    title: "Education & Public",
    description:
      "Schools and universities use IP audio for announcements, safety instructions, and scheduled bell systems, while government buildings benefit from centralized paging across all zones.",
  },
  {
    icon: PlaneTakeoff,
    title: "Transport Hubs",
    description:
      "Airports and train stations use IP audio for passenger announcements and safety messaging. Multi-zone control ensures that information reaches the correct locations efficiently.",
  },
  {
    icon: DoorOpen,
    title: "Outdoor & Large Venues",
    description:
      "Stadiums, event spaces, and amusement parks use these systems to deliver clear audio across wide areas and integrate seamlessly with lighting and display systems.",
  },
];

export default function ApplicationsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center gap-3 mb-12">
          <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
            <Radio className="w-3 h-3" />
            Use Cases
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            Applications of <span className="text-red-500">Audio Over IP</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="border border-gray-100 shadow-none rounded-2xl hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/30 transition-all duration-200 group"
              >
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                    <Icon className="w-4 h-4 text-red-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-600 group-hover:text-red-500 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
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