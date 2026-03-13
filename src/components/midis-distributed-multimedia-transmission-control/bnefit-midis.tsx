"use client";

import { TrendingUp, Shuffle, DollarSign } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Scalability",
    description:
      "MIDIS AV over IP systems can be easily expanded by adding new endpoints to the network. Unlike traditional matrix switchers with fixed input/output configurations, network-based systems can grow organically as needs change.",
  },
  {
    number: "02",
    icon: Shuffle,
    title: "Flexibility",
    description:
      "The ability to route any source to any destination without physical limitations provides unprecedented flexibility in system design and operation. Systems can be reconfigured through software without changing physical connections.",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "Cost-Effective",
    description:
      "MIDIS AV over IP systems often prove more cost-effective in the long run due to reduced cable infrastructure, easier maintenance and troubleshooting, lower costs for system expansion, and the use of standard network equipment.",
  },
];

export default function MIDISBenefits() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
            Why Choose MIDIS
          </p>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
              Benefits of <span className="text-red-500">MIDIS AV Over IP Systems</span>
            </h2>
            <div className="hidden md:block w-10 h-0.5 bg-red-500 mb-1.5 shrink-0" />
            <span className="hidden md:block flex-1 h-px bg-gray-100" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative bg-white px-6 py-6 hover:bg-red-50/30 transition-colors duration-300 cursor-default"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold tracking-[0.15em] text-gray-200 tabular-nums">
                    {item.number}
                  </span>
                  <div className="w-9 h-9 flex items-center justify-center border border-gray-100 bg-gray-50 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                    <Icon size={15} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}