import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";

const productTags = [
  { label: "Audio Processors", href: "/audio-processors" },
  { label: "Microphones", href: "/microphones" },
  { label: "Power Amplifiers", href: "/power-amplifiers" },
  { label: "AV over IP", href: "/av-over-ip" },
  { label: "Conference Systems", href: "/conference-systems" },
  { label: "MIDIS Systems", href: "/midis-systems" },
];

export default function AboutSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <m.div
              className="flex flex-col gap-7"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}

            >
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-red-500 mb-3">
                  Who We Are
                </p>
                <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-4">
                  Advanced AV Solutions,<br />Built to Perform
                </h2>
                <p className="text-[14px] text-gray-500 leading-[1.85] mb-4">
                  Tendzone designs and manufactures high-performance audio-visual
                  products trusted across industries globally. With deep R&D
                  expertise, every product is engineered to deliver exceptional
                  clarity, reliability, and control from boardrooms to large-scale venues.
                </p>
                <p className="text-[14px] text-gray-500 leading-[1.85]">
                  Backed by 100+ engineers with experience from leading technology
                  companies, our solutions serve conference rooms, command centers,
                  education facilities, stadiums, and more across 250,000+ spaces worldwide.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {productTags.map((tag, i) => (
                  <m.div
                    key={tag.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    whileHover={{rotate: [-2, 2, -2, 0], transition: { duration: 0.4 } }}
                  >
                    <Link
                      href={tag.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 bg-gray-50 hover:bg-red-50 hover:border-red-300 hover:text-red-600 text-[12px] font-medium text-gray-600 transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      {tag.label}
                    </Link>
                  </m.div>
                ))}
              </div>
            </m.div>

            <m.div
              className="relative overflow-hidden aspect-video"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/office/loby.png"
                alt="Tendzone Office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </m.div>

          </div>
        </div>
      </section>
    </LazyMotion>
  );
}