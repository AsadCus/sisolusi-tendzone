"use client";

import Image from "next/image";

export default function ProductApplicationFeatureConference() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-8">
              2.4G Wireless Conference Host Features
            </h2>
            <ul className="space-y-3 text-sm text-gray-600 list-disc list-inside">
              <li>Wireless Conference System host (receiver)</li>
              <li>2.4G universal wireless control and transmission technology</li>
              <li>One system can support up to 255 wireless microphones (chairman units / delegate units)</li>
              <li>Mature self-adaptive FHSS technology, high privacy and ability of avoiding interference</li>
              <li>Can be used with Wi-Fi and Bluetooth devices without interfering each other</li>
              <li>4 conference modes: First in first out free mode (1–4 speakers programmable), Chairman mode, Time-limiting speech mode</li>
              <li>Support camera tracking function, 4 camera inputs, 2 video outputs</li>
              <li>Support multiple camera communication protocols: PELCO-D, PELCO-P, VISCA</li>
              <li>Intelligent power management — when host is shut down, wireless microphone shuts down automatically</li>
              <li>240×28 display screen with friendly menu setting, easy to use</li>
              <li>Working distance ≥60m</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-10 flex items-center justify-center">
            <Image
              src="/images/product/expansion-midis.png"
              alt="2.4G Wireless Conference Host"
              width={420}
              height={280}
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Chairman Rectangular Columnar Unit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-2xl border border-gray-200 p-10 flex items-center justify-center">
            <Image
              src="/images/product/premium-recording.png"
              alt="Desktop Chairman Rectangular Columnar Unit"
              width={420}
              height={300}
              className="object-contain"
            />
          </div>

          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-8">
              Desktop Chairman Rectangular Columnar Unit Features
            </h2>
            <ul className="space-y-3 text-sm text-gray-600 list-disc list-inside">
              <li>Elegant and ergonomic design with exquisite tabletop form factor for ease of use and transport</li>
              <li>Cable coming out of the base for tidier wiring</li>
              <li>Hi-Fi loudspeaker, priority button, and microphone On/Off button</li>
              <li>Braille present on all physical buttons</li>
              <li>Rectangular columnar microphone with adjustable pitching angle</li>
              <li>OLED screen with high brightness, high contrast, wide viewing angle, and low power consumption</li>
              <li>"Closed Loop – Daisy Chain" connection topology</li>
              <li>Transmits up to 64 channels of high-quality digital audio on a dedicated 8-pin cable</li>
              <li>Supports 48kHz audio sampling rate — all 64 channels reproduce frequencies between 30Hz and 20kHz</li>
              <li>Excellent immunity to RF interference from mobile phones</li>
              <li>Separate adjustment of gain and EQ (5-band) per microphone for perfect sound</li>
              <li>Supports "PnP" (plug and play)</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}