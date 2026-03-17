"use client"

import { Package, Truck } from "lucide-react"

const items = [
  {
    icon: Package,
    label: "Packaging",
    value: "Plastic bag, paper box, customizable",
  },
  {
    icon: Truck,
    label: "Transportation Methods",
    value: "Road transport, rail transport, sea transport, air transport",
  },
]

export default function PackagingShipping() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Packaging & Shipping
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-start gap-4 border border-gray-200 px-6 py-5 hover:border-red-200 transition-colors duration-150"
              >
                <div className="shrink-0 w-9 h-9 flex items-center justify-center bg-red-50">
                  <Icon className="w-4 h-4 text-red-500" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}