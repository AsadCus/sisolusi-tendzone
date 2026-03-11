"use client";

const reasons = [
  {
    number: "01",
    title: "Higher Efficiency",
    description:
      "Digital power amplifiers typically achieve efficiencies exceeding 90%, which means less power is wasted as heat and more is used for amplification.",
  },
  {
    number: "02",
    title: "Smaller Size",
    description:
      "Because they generate less heat, digital power amplifiers require smaller heat sinks. This compact design is ideal for space-conscious consumers and integrates seamlessly into home audio setups.",
  },
  {
    number: "03",
    title: "Lightweight",
    description:
      "The reduced need for large power supplies and heavy cooling systems makes digital power amplifiers incredibly light, enhancing their portability.",
  },
  {
    number: "04",
    title: "Lower Power Consumption",
    description:
      "With the increased efficiency, digital power amplifiers need less electricity to operate, which can lead to energy savings over time.",
  },
  {
    number: "05",
    title: "Consistency in Sound Quality",
    description:
      "Regardless of the volume level, digital power amplifiers continually provide a consistent sound without distortion.",
  },
  {
    number: "06",
    title: "Sound Character",
    description:
      "While some purists argue that digital power amplifiers lack the warmth offered by analog ones, technological advancements continue to narrow this gap.",
  },
  {
    number: "07",
    title: "Complexity in Design",
    description:
      "The intricate circuitry of digital power amplifiers might deter DIY enthusiasts who prefer the straightforwardness of analog systems.",
  },
  {
    number: "08",
    title: "EMI Susceptibility",
    description:
      "Digital power amplifiers can be more susceptible to electromagnetic interference (EMI) due to their high-frequency switching, although proper design can mitigate this issue.",
  },
];

export default function DigitalAmplifierProsSection() {
  return (
    <section className="w-full bg-white pt-4 pb-4 relative overflow-hidden">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex-1 h-px bg-gray-100" />
          <h3 className="text-[15px] font-bold text-black tracking-widest uppercase">
            Pros of Digital Power Amplifiers
          </h3>
          <span className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {reasons.map((item) => (
            <div
              key={item.number}
              className="group relative flex gap-4 items-start rounded-none border border-gray-100 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-red-100 hover:-translate-y-0.5"
            >
              <div className="shrink-0 w-10 h-10 rounded-none bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                <span className="text-[12px] font-black text-red-400 group-hover:text-white transition-colors duration-300 tracking-wide tabular-nums">
                  {item.number}
                </span>
              </div>

              <div>
                <h4 className="text-[13.5px] font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[12.5px] text-gray-600 leading-relaxed" style={{ textAlign: "justify" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}