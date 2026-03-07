"use client";

const functions = [
  {
    number: "01",
    title: "Dynamic Routing",
    description:
      "Unlike fixed point-to-point connections, audio over IP allows any input to be routed to any output without physical recabling. This enables instant reconfiguration of audio paths through software interfaces rather than physical patching.",
  },
  {
    number: "02",
    title: "Format Agnosticism",
    description:
      "Audio over IP systems can simultaneously handle multiple audio formats, sample rates, and bit depths within the same network infrastructure, automatically managing format conversion when needed.",
  },
  {
    number: "03",
    title: "Distance Independence",
    description:
      "Audio over IP can transmit high-quality audio across buildings, campuses, or even cities using standard network infrastructure without degradation.",
  },
  {
    number: "04",
    title: "Integration Capabilities",
    description:
      "Audio over IP readily interfaces with software-based audio processing, virtual sound cards, and cloud services, creating workflow possibilities that would be impractical with conventional connections.",
  },
];

export default function AudioIpFunctionsSection() {
  return (
    <section className="w-full py-">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-16">
          Functions Of Audio Over IP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {functions.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-2 hover:shadow-lg transition duration-300"
            >
              <span className="text-4xl font-bold text-red-600 block mb-6">
                {item.number}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}