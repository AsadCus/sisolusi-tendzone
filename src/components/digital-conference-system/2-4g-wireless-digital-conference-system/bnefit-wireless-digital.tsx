"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Signal, Expand, SlidersHorizontal, Check } from "lucide-react"

const features = [
  {
    icon: Signal,
    number: "01",
    title: "Stable Transmission",
    items: [
      "Wireless audio transmission is stable and free from distortion",
      "Ensures no signal loss even in complex wireless environments",
      "Reduces interference for clear and consistent conference communication",
    ],
  },
  {
    icon: Wifi,
    number: "02",
    title: "Efficient Allocation",
    items: [
      "Rational wireless signal distribution across the system",
      "Prevents signal attenuation caused by excessive concentration",
      "Ensures full coverage without dead zones in the conference room",
    ],
  },
  {
    icon: Expand,
    number: "03",
    title: "Scalability",
    items: [
      "Flexible addition or reduction of microphones and receivers",
      "Supports expansion based on room size and number of participants",
      "Compatible with additional audio equipment and conference devices",
    ],
  },
  {
    icon: SlidersHorizontal,
    number: "04",
    title: "User-Friendly Operation",
    items: [
      "Carefully designed interface with intuitive controls",
      "Avoids complicated setup and operation procedures",
      "Easy to operate for hosts, participants, and technical staff",
    ],
  },
]

export default function WirelessDigitalBenefitSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center gap-3 mb-12">
          <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
            <Wifi className="w-3 h-3" />
            Wireless Conference
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            Benefits of{" "}
            <span className="text-red-500">2.4G Wireless Digital Conference System</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden border border-gray-100 rounded-2xl shadow-none transition-all duration-200 group"
              >
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-500 ease-out z-10" />
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-red-500" strokeWidth={1.75} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-red-300">{feature.number}</span>
                      <h3 className="text-sm font-semibold text-gray-600 group-hover:text-red-500 transition-colors duration-200">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}