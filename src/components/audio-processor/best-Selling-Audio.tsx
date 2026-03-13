"use client";

const products = [
  {
    tag: "01",
    name: "8x8 Web Based Audio Processor",
    model: "WebGem 0808 DSP",
    description:
      "A comprehensive suite of versatile audio DSP tools designed specifically for AV integrators. Features eight analog audio input channels and eight analog audio output channels.",
  },
  {
    tag: "02",
    name: "16x16 Web Based Audio Processor",
    model: "WebGem 1616 DSP",
    description:
      "A thorough array of adaptable audio DSP tools tailored for AV integrators. Features 16 analog audio inputs and outputs, meeting a wide range of audio processing requirements.",
  },
  {
    tag: "03",
    name: "8x8 Web Based Dante Audio Processor",
    model: "WebGem 0808D DSP",
    description:
      "An extensive range of adaptable audio DSP tools for AV integrators. Eight channels for analog audio I/O plus a 16×16 model supporting Dante™ signal extension for diverse processing needs.",
  },
  {
    tag: "04",
    name: "DANTE DSP",
    model: "RUBY T16 DSP",
    description:
      "A medium-sized network audio processor adopting Dante protocol, supporting 32-in/32-out audio channels over network for mixing, routing, and general audio processing in medium to large venues.",
  },
];

export default function BestSellingAudioProcessor() {
  return (
    <section className="bg-white py-8 px-4 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-xl mx-15 font-medium text-black">
            Our Best-Selling Audio Processor
          </h2>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p, i) => (
            <div
              key={i}
              className="group border border-gray-100 bg-gray-50 hover:border-red-200 hover:bg-red-50 transition-colors duration-200 px-5 py-5 flex gap-4"
            >
              <span className="text-[28px] font-bold text-gray-100 group-hover:text-red-100 leading-none select-none shrink-0 transition-colors duration-200">
                {p.tag}
              </span>
              <div>
                <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">
                  {p.model}
                </p>
                <p className="text-[12.5px] font-bold text-gray-900 mb-2 group-hover:text-gray-900 leading-snug">
                  {p.name}
                </p>
                <p className="text-[11.5px] text-gray-800 leading-relaxed text-justify">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}