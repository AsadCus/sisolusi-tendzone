"use client";

import Image from "next/image";

export default function ProductInterfaceSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-2xl border border-gray-200 p-10 flex items-center justify-center">
            <Image
              src="/images/product/2x2-dante.png"
              alt="8x8 Vailink I/O Interface"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>

          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
              8x8 Vailink I/O Interface Features
            </h2>

            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Video matrix</h4>
                <p>Connect any of the 8 inputs to any of the 8 outputs</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Multiple control options</h4>
                <p>Take control by utilizing front panel buttons, IR remote, RS232, Web Interface, and Control 4</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Audio de-embedding</h4>
                <p>De-embed audio from any of the 8 Coax S/PDIF outputs up to 7.1 channel</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">HDCP 2.2</h4>
                <p>High-Bandwidth Digital Content Protection Supported</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Crystal clear images</h4>
                <p>Stunning image quality up to 4K@60Hz 4:4:4</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">EDID management</h4>
                <p>Smart EDID to ensure reliable signal quality</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
              Vailink 2CH Analog Input Adapter Features
            </h2>

            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>2 XLR connectors, 2-Channel analog audio input</li>
              <li>Supports DHCP & static IP configuration</li>
              <li>Supports Input sample rates up to 96kHz, Output up to 48kHz (firmware update required)</li>
              <li>S/N ratio: &gt; 90dB, THD+N &lt; 0.005%</li>
              <li>Easy drop-points for interfacing with overflow areas to a Dante network</li>
              <li>Dante audio over IP and AES67 RTP transport formats</li>
              <li>Excellent dynamic range, SNR and RHD performance</li>
              <li>Dual power input options: POE / USB</li>
              <li>Power Consumption: &lt; 1W</li>
              <li>Low latency over long transmission distance</li>
            </ul>
          </div>

          <div className="order-1 lg:order-2 bg-white rounded-2xl border border-gray-200 p-10 flex items-center justify-center">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Vailink 2CH Analog Input Adapter"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}