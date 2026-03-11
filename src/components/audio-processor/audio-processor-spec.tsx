"use client";

const sections = [
  {
    title: "Audio",
    rows: [
      { key: "Analog-To-Digital Conversion", val: "24-bit 48 kHz" },
      { key: "Digital-to-Analog Conversion", val: "24-bit 48 kHz" },
      { key: "Frequency Response", val: "20 Hz to 20 kHz ±0.5 dB" },
      { key: "THD", val: "0.001%, 20 Hz to 20 kHz, 0 dB gain, +4 dBu input; 0.01%, 22 Hz to 22 kHz, 54 dB gain, -50 dBu input" },
      { key: "EIN", val: "-125 dBu, 22 Hz to 22 kHz, no weighting" },
      { key: "Dynamic Range", val: "110 dB, 22 Hz to 22 kHz, 0 dB gain" },
      { key: "Crosstalk", val: "-85 dB, 1 kHz, +4 dBu input, channel to channel; -75 dB, 1 kHz, -50 dBu input, channel to channel" },
      { key: "Latency", val: "3.0 ms (analog in to analog out)" },
    ],
  },
  {
    title: "Communications",
    rows: [
      { key: "Ethernet", val: "10/100/1000 Mbps, auto-switching, auto-negotiating, auto-discovery, full/half duplex, TCP/IP, UDP/IP, CIP, DHCP, SSL, SSH, SFTP" },
      { key: "USB Device", val: "USB device port for computer console (setup)" },
    ],
  },
  {
    title: "Connectors",
    rows: [
      { key: "MIC/LINE Inputs 1–12", val: "(12) 3-pin 3.5 mm detachable terminal blocks; Balanced mic/line-level inputs; Input Level: +24 dBu max; Gain Range: 66 dB; Input Impedance: 10k Ohms balanced; Phantom Power: +48V DC, 12 mA, software enabled per channel" },
      { key: "Line Outputs 1–8", val: "(8) 3-pin 3.5 mm detachable terminal blocks; Balanced/unbalanced line-level outputs; Output Level: +24 dBu max; Output Impedance: 150 Ohms balanced" },
      { key: "LAN", val: "(1) 8-pin RJ45 female; 10Base-T/100Base-TX/1000Base-T Ethernet LAN port" },
      { key: "Main Power", val: "(1) IEC 60320 C14 main power inlet; Mates with removable power cord (included); 100-240V~ 1.8A 50/60 Hz" },
      { key: "Ground", val: "(1) 6-32 screw, chassis ground lug" },
      { key: "Computer (front)", val: "(1) USB Type B female; USB computer console port (for setup only)" },
    ],
  },
  {
    title: "Controls & Indicators",
    rows: [
      { key: "PWR", val: "Bi-color green/amber LED; turns amber while booting, green when operating, alternates if no network connection" },
      { key: "Reset", val: "(1) Recessed pushbutton; restores last saved settings" },
      { key: "LAN (rear)", val: "(2) Bi-color green/amber LEDs; indicate Ethernet activity and link status" },
      { key: "Setup (rear)", val: "(1) Red LED and (1) pushbutton for Ethernet setup" },
    ],
  },
  {
    title: "Power Requirements",
    rows: [
      { key: "Main Power", val: "1.8 Amps @ 100–240 Volts AC, 50/60 Hz" },
      { key: "Power Consumption", val: "30 Watts typical" },
    ],
  },
  {
    title: "Environmental",
    rows: [
      { key: "Temperature", val: "41° to 104° F (5° to 40° C)" },
      { key: "Humidity", val: "10% to 90% RH (non-condensing)" },
      { key: "Heat Dissipation", val: "102 BTU/hr" },
      { key: "Ambient Noise Level", val: "30 dBA" },
    ],
  },
  {
    title: "Enclosure",
    rows: [
      { key: "Chassis", val: "Metal, fan-cooled, vented sides" },
      { key: "Front Panel", val: "Metal, black finish with polycarbonate label overlay" },
      { key: "Mounting", val: "Freestanding or 1 RU 19-inch rack-mountable (adhesive feet and rack ears included)" },
    ],
  },
  {
    title: "Dimensions & Weight",
    rows: [
      { key: "Height", val: "1.72 in (44 cm) without feet" },
      { key: "Width", val: "17.28 in (439 mm); 19.00 in (483 mm) with rack ears" },
      { key: "Depth", val: "14.35 in (365 mm)" },
      { key: "Weight", val: "8.8 lb (4.0 kg)" },
    ],
  },
];

export default function AudioProcessorSpec() {
  return (
    <div className="bg-white mx-auto py-8 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl  mx-auto px-4">

        <div className="mb-6">
          <h2 className="text-2xl md:text-xl font-medium text-center text-red-600">
            Audio Processor Specification
          </h2>
        </div>

        <div className="space-y-4">
          {sections.map((section, si) => (
            <div key={si} className="border border-gray-100 overflow-hidden">

              <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                <div className="w-1 h-4 bg-red-500 rounded-sm shrink-0" />
                <h3 className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>

              <div className="divide-y divide-gray-100">
                {section.rows.map((row, ri) => (
                  <div key={ri} className={`grid grid-cols-3 ${ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <div className="px-4 py-3 border-r border-gray-100">
                      <p className="text-[13px] font-bold text-gray-800">{row.key}</p>
                    </div>
                    <div className="col-span-2 px-4 py-3">
                      <p className="text-[13px] font-medium text-gray-700 leading-relaxed">{row.val}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}