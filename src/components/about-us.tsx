import Image from "next/image";
import Link from "next/link";
import { Building2, Users, Globe } from "lucide-react";

const stats = [
  { icon: Building2, value: "2010", label: "Est. Year" },
  { icon: Users, value: "100+", label: "Engineers" },
  { icon: Globe, value: "250K+", label: "Spaces Globally" },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-500">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              About Us
            </h2>
          </div>

          <p className="text-gray-500 text-[15px] leading-relaxed">
            Established in 2010, Shenzhen Tendzone Intelligent Technology Co.,
            Ltd. is a global leader in advanced audio-visual (AV) solutions 
            specializing in audio processors, microphones, speakers, power
            amplifiers, AV over IP, digital conference systems, and MIDIS
            Distributed Multimedia Transmission Control Systems.
          </p>

          <div className="flex flex-wrap gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
              >
                <Icon size={14} className="text-red-500 shrink-0" />
                <span className="text-[13px] font-bold text-gray-900">
                  {value}
                </span>
                <span className="text-[12px] text-gray-400">{label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-red-500 hover:gap-3 transition-all duration-200"
          >
            Read More <span>→</span>
          </Link>
        </div>

        <div className="relative w-full aspect-video lg:aspect-auto lg:h-80  overflow-hidden shadow-md">
          <Image
            src="/images/office/loby.png"
            alt="Tendzone Office"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
