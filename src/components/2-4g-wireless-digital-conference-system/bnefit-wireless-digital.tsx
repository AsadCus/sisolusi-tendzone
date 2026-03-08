"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    number: "01",
    title: "Stable Transmission",
    items: [
      "Wireless audio transmission is stable and free from distortion",
      "Ensures no signal loss even in complex wireless environments",
      "Reduces interference for clear and consistent conference communication",
    ],
  },
  {
    number: "02",
    title: "Efficient Allocation",
    items: [
      "Rational wireless signal distribution across the system",
      "Prevents signal attenuation caused by excessive concentration",
      "Ensures full coverage without dead zones in the conference room",
    ],
  },
  {
    number: "03",
    title: "Scalability",
    items: [
      "Flexible addition or reduction of microphones and receivers",
      "Supports expansion based on room size and number of participants",
      "Compatible with additional audio equipment and conference devices",
    ],
  },
  {
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
    <section className="w-full bg-white">
      <div className="container max-w-7xl py-20 mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            <span className="text-red-600">■</span> Benefits of 2.4G Wireless Digital Conference System <span className="text-red-600">■</span>
          </h2>
        </div>

        <Separator className="mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-all duration-300 border-muted"
            >
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="text-2xl font-medium text-primary">
                  {feature.number}/
                </div>
                <CardTitle className="text-lg font-medium">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="text-muted-foreground text-sm leading-relaxed">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}