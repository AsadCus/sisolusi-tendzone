"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    number: "01",
    title: "System Design",
    items: [
      "Customize the audio signal processing flow of the audio processing service platform",
      "Customize the signal routing relationship between network audio devices",
      "Freely configure presets, which can include all processing modules or some modules",
    ],
  },
  {
    number: "02",
    title: "User Interface Operation",
    items: [
      "Supports Windows, Android, and iOS platform control",
      "Supports designing personalized interfaces and multiple interfaces",
    ],
  },
  {
    number: "03",
    title: "User Interface Design",
    items: [
      "Users can customize interface elements, styles, and interaction methods",
      "Supports defining startup pages, page jumps, multiple controls, and resizing",
      "A single interface can support multiple pages",
      "Supports dynamic modification of control properties during operation",
      "Supports interface preview and project upload",
      "Supports multiple data controls, date & time controls, custom colors, fonts, and icons",
    ],
  },
  {
    number: "04",
    title: "User Interface Interaction",
    items: [
      "Supports visual audio routing scheduling, plan saving and calling",
      "Supports audio channel gain, mute control and level display",
      "Supports system mute control",
      "Supports matrix mixing control",
    ],
  },
]

export default function AudioOverIPUiDesignSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            <span className="text-red-600">■</span> Audio Over IP UI And Design <span className="text-red-600">■</span>
          </h2>
        </div>
        <Separator className="mb-12" />
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-all duration-300 border-muted rounded-none"
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