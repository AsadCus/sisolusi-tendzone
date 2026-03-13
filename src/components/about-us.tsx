import Image from "next/image";

const productTags = [
  "Audio Processors",
  "Microphones",
  "Power Amplifiers",
  "AV over IP",
  "Conference Systems",
  "MIDIS Systems",
];

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div className="flex flex-col gap-7">

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
                clarity, reliability, and control from boardrooms to
                large-scale venues.
              </p>
              <p className="text-[14px] text-gray-500 leading-[1.85]">
                Backed by 100+ engineers with experience from leading technology
                companies, our solutions serve conference rooms, command centers,
                education facilities, stadiums, and more across 250,000+ spaces
                worldwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {productTags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-2 text-[13px] text-gray-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {tag}
                </span>
              ))}
            </div>

          </div>

          <div className="relative overflow-hidden aspect-16/10">
            <Image
              src="/images/office/loby.png"
              alt="Tendzone Office"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}