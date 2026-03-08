"use client";

export default function AudioProductFeatures() {
  return (
    <section className="w-full py-8">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-6">
          <p className="text-red-500 text-xl font-medium uppercase tracking-widest mb-2">
            Product Features
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Professional audio equipment designed for conference, lecture,
            and enterprise AV environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* MICROPHONE CARD */}
          <div className="bg-white p-8 flex flex-col gap-6 rounded-2xl shadow-lg border border-gray-200">
            <span className="text-gray-900 font-semibold">
              Vailink Rectangular Columnar Condenser Microphone
            </span>

            <p className="text-gray-400 text-sm leading-relaxed">
              Professional conference microphone designed to deliver clear
              sound capture with stable performance for conference rooms,
              lectures, and teaching environments.
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-500 leading-relaxed space-y-2">
              <li>Full metal microphone pedestal plus rectangular column microphone stem, simple and elegant.</li>
              <li>14 mm diameter gilded capacitance microphone with cardioid directed electred, can deliver clear sound effect.</li>
              <li>Built-in windproof cotton, optimizing the structure design of the acoustic chamber, and bringing better sound quality.</li>
              <li>Adjustable microphone angle, convenient for collecting the sound.</li>
              <li>Highly resistant to mobile phone interference.</li>
              <li>Black full metal pedestal covered by low-reflectance and grinding coatings.</li>
              <li>Stable and thick pedestal with shock-proof insulating rubber pad, effectively reducing friction vibration and mechanical noise on the installation surface.</li>
              <li>3-pin nickel-plated XLR male socket on the back of the pedestal serves as the output terminal of audio signal.</li>
              <li>Microphone supports 48V phantom power supply.</li>
              <li>Self-locking ON/OFF button is available; press the button, and see the red indicator lights, then the microphone is on; press again, the microphone is off.</li>
              <li>Suitable for conference, lecture, teaching and other occasions. It can co-work directly with audio processor or mixer.</li>
            </ul>
          </div>


          {/* SPEAKER CARD */}
          <div className="bg-white p-8 flex flex-col gap-6 rounded-2xl shadow-lg border border-gray-200">
            <span className="text-gray-900 font-semibold">
              12' Vailink Network Powered Full-range Speaker
            </span>

            <p className="text-gray-400 text-sm leading-relaxed">
              High performance powered loudspeaker designed for professional
              sound reinforcement with powerful amplification and wide
              coverage.
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-500 leading-relaxed space-y-2">
              <li>12-inch Woofer; 1.75-inch diaphragm compression driver</li>
              <li>75° conical DMT™ coverage</li>
              <li>Maximum SPL 131 dB peak</li>
              <li>Also functions as monitor floor wedge</li>
              <li>1000-watt Class D power modules in all models (2 × 500 W continuous)</li>
              <li>Onboard mixer with two combo XLR and ¼-inch inputs, and stereo RCA inputs (three audio input sources)</li>
              <li>Two direct channel outputs and single summed balanced output</li>
              <li>DMT ensures uniform coverage across the entire sound field</li>
              <li>Rugged, texture-painted birch enclosures</li>
              <li>Four-position Mic/Line gain (full-range models)</li>
              <li>Tour-grade 16 gauge steel grilles</li>
              <li>Comfortable ergonomic handles</li>
              <li>35 mm pole sockets</li>
              <li>M10 rigging points for suspended installation</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}