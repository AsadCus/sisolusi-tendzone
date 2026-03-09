"use client"

export default function NetworkAdaptersSpecificationTable() {
  const sections = [
    {
      title: "General Performance",
      rows: [
        { param: "Maintenance Function", value: "Support web page upgrade, network configuration, factory reset, log export functions" },
        { param: "Network Interface", value: "1 × 1000M adaptive Ethernet port, supporting power supply via PoE" },
        { param: "Frequency Response", value: "20Hz – 20kHz (±0.2dB)" },
        { param: "Sampling Rate", value: "48kHz / 24bit" },
        { param: "Dynamic Range", value: ">110 dB (A-weighted)" },
        { param: "THD + N", value: "<0.005% @ 1kHz, 4 dBu" },
        { param: "Noise Floor", value: "≤ -90 dBu (A-weighted)" },
      ],
    },
    {
      title: "Analog Audio Output",
      rows: [
        { param: "Output Interface", value: "2 CH balanced outputs, XLR-M professional audio interfaces" },
        { param: "Analog Output Level", value: "0 dBu, -10 dBu, -20 dBu, -30 dBu, -40 dBu" },
        { param: "Maximum Output Level", value: "20 dBu" },
      ],
    },
    {
      title: "Electrical and Physical Parameters",
      rows: [
        { param: "Device Power Consumption", value: "5W" },
        { param: "Operating Temperature", value: "0°C – 40°C" },
        { param: "Humidity", value: "10% ~ 90% (no condensation)" },
        { param: "Weight", value: "0.2 kg" },
      ],
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Network Adapters Specification
          </h2>
        </div>

        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr className="border-y-2 border-gray-300 bg-gray-100">
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600 w-[35%]">Parameter</th>
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600">Value</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((sec) => (
              <>
                <tr key={sec.title + "-header"} className="border-b border-gray-200 bg-gray-50">
                  <td colSpan={2} className="px-4 py-2.5 font-semibold text-gray-600">
                    {sec.title}
                  </td>
                </tr>
                {sec.rows.map((row, i) => (
                  <tr
                    key={sec.title + row.param}
                    className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="px-4 py-2.5 align-top text-gray-600">{row.param}</td>
                    <td className="px-4 py-2.5 align-top text-gray-900 leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  )
}