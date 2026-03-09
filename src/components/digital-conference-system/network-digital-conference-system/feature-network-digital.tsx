import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Grid3x3, Network } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Digitization",
    description:
      'All internal transmissions are digital signals, and the microphones used by the participants all use "mode-to-digital" conversion technology. Most devices also use mode-count and count-to-mode converters so that external analog devices (such as broadcast, recording, wired or wireless audio equipment, etc.) can access the digital system network directly through the audio media interface.',
  },
  {
    icon: Grid3x3,
    title: "Modularization",
    description:
      "Meetings with any level of requirements can configure the system by modularly selecting a combination of equipment that meets the requirements. For the established system, more multimedia devices can be added, which can be controlled by computer software to further expand the system.",
  },
];

export default function ConferenceFeatures() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center gap-3 mb-12">
          <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
            <Network className="w-3 h-3" />
            Conference System
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            The Main Features Of{" "}
            <span className="text-red-500">Network Digital Conference System</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden border border-gray-100 rounded-2xl shadow-none transition-all duration-200 group"
              >
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-500 ease-out z-10" />
                <CardContent className="flex flex-col px-5 pt-6 pb-6 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-red-500" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-600 group-hover:text-red-500 transition-colors duration-200">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {feature.description}
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