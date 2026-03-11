const products = [
  {
    id: "twelve-in-one",
    title: "Twelve-In-One Integrated Processor",
    image: "https://www.tendzone.net/uploads/43135/4ch-8k60-4-2-0-hdr-hdmi-switcher9f3a1.jpg",
    features: [
      "12 Analog Inputs",
      "8 Analog Outputs",
      "Configurable Signal Processing",
      "Rich Palette of Processing and Logic Objects",
      "48 Channel, Low Latency, Fault Tolerant Digital Audio Bus",
      "Clear Front Panel LED Indication",
      "Bi-Directional Locate Functionality",
      "12 Control Inputs and 6 Logic Outputs for GPIO Integration",
    ],
  },
  {
    id: "thirteen-in-one",
    title: "Thirteen-In-One Integrated Processor",
    image: "https://www.tendzone.net/uploads/43135/16ch-4k60-4-4-4-hdr-hdmi-distributorda297.jpg",
    features: [
      "Stereo graphic equalization",
      "Low frequency controls",
      "Pre-amp gain of 20dB",
      "Line driver: 13 volts peak output",
      "Balanced differential inputs and outputs",
      "High-headroom PWM switching power supply",
      "Main and auxiliary switchable inputs",
      "Switchable back-lighting color (amber/green)",
      "Master volume and fader control",
      "Selectable ground isolation",
      "Optimum voltage LED",
    ],
  },
  {
    id: "touch-panel",
    title: "Wired Control Touch Panel",
    image: "https://www.tendzone.net/uploads/43135/4ch-4k60-4-4-4-hdr-hdmi-distributored7e8.jpg",
    features: [
      "10.1 inches, ARM architecture, up to 1.8Ghz main frequency",
      "Android 9.0 or above, 8GB Emmc Flash, 2GB DDR4 RAM",
      "1280×800 (16:10) resolution, desktop screen design",
      "Supports industry standard network communication protocols",
      "Supports 1 Gigabit network interface, with a maximum rate of up to 1G/bps",
      "Support POE power supply or independent DC 12V / 1A power supply",
      "Supports data transmission through POE network port and APP control software, realizing one-line function",
      "Capacitive touch screen, supports multi-touch",
      "Android tablet design, can install third-party applications, and supports secondary development",
    ],
  },
  {
    id: "nine-in-one",
    title: "Nine-In-One Integrated Processor",
    image: "https://www.tendzone.net/uploads/43135/2ch-2k60-4-4-4-network-av-encoder-decoderd608c.jpg",
    features: [
      "Engineered to deliver exceptional pro audio performance with faster, easier implementation",
      "Ready to go out of the box and extensively configurable",
      "Hybrid channel strip architecture",
      "Customizable inputs and outputs",
      "9 internal aux buses",
      "Clean and intuitive software",
      "Real-time configuration and adjustment",
      "Work offline or live via Ethernet or USB",
      "Quickly programmable",
      "Highest-quality converters, preamps, and line amps",
      "9 mic/line inputs with 66 dB gain range",
      "Six +24 dB balanced line outputs",
      "Internal universal power supply",
    ],
  },
  {
    id: "workspaces",
    title: "Workspaces",
    image: "https://www.tendzone.net/uploads/43135/expansion-midis-system-serveredbbf.jpg",
    features: [
      "Conference rooms",
      "Training rooms",
      "Lecture halls",
      "Courtrooms",
      "Telemedicine theaters",
      "Houses of Worship",
    ],
  },
  {
    id: "operation",
    title: "Operation Condition",
    image: "https://www.tendzone.net/uploads/43135/4k-av-over-ip-encoder-decoder351b2.jpg",
    features: [
      "Standard operating temperature: 0°C to 40°C (32°F to 104°F)",
      "Non-operating temperature: -10°C to 60°C (14°F to 140°F)",
      "Standard operating humidity: 20% to 80% non-condensing",
      "Non-operating humidity: 20% to 80% non-condensing",
    ],
  },
];

function FeatureCard({ product }: { product: (typeof products)[0] }) {
  return (
    <div className="group flex flex-col bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:border-gray-200 hover:shadow-lg hover:-translate-y-0.5">
      <div className="relative w-full h-44 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600" />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-[13px] font-bold text-gray-900 leading-snug mb-3">
          {product.title}
        </h2>
        <ul className="space-y-1.5">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.75 shrink-0 w-0.75 h-0.75 rounded-full bg-red-500" />
              <span className="text-[11.5px] text-gray-500 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default function ProductFeatures() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <FeatureCard key={p.id} product={p} />
          ))}
        </div>

      </div>
    </section>
  );
}