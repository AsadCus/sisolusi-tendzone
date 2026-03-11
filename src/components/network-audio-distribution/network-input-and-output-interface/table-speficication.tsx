"use client"

export default function NetworkSpecificationTable() {
  const sections = [
    {
      title: "General Performance",
      rows: [
        { param: "Frequency Response", value: "20Hz～20kHz (±0.5dB)" },
        { param: "Sampling Rate", value: "48kHz, 24bit" },
        { param: "Dynamic Range", value: ">103dB" },
        { param: "THD", value: "≤0.006%" },
        { param: "Noise Floor", value: "<-90dBu @ 0dB Gain" },
        { param: "Channel Isolation", value: ">110dB" },
      ],
    },
    {
      title: "Audio Input / Output",
      rows: [
        { param: "Connector", value: "3.81mm terminal blocks" },
        { param: "Number of Analog Channels", value: "8 in / 8 out" },
        { param: "Number of Vailink Channels", value: "8 in / 8 out" },
        { param: "Phantom Power", value: "DC 48" },
        { param: "Sensitivity Select", value: "0dBu, -10dBu, -20dBu, -30dBu, -40dBu" },
        { param: "Input Impedance", value: "10KΩ balance" },
        { param: "Output Impedance", value: "200Ω balance" },
        { param: "Maximum Input Level", value: "+18 dBu @ 0dB Gain" },
        { param: "Maximum Output Level", value: "+18 dBu" },
      ],
    },
    {
      title: "Electrical and Physical Parameters",
      rows: [
        { param: "Power Supply", value: "DC 12V, <2A" },
        { param: "Power Consumption", value: "10W" },
        { param: "Operating Temperature", value: "0°C – 40°C working" },
        { param: "Relative Humidity", value: "10% ~ 90% no condensation" },
        { param: "Dimensions", value: "220mm × 191mm × 44.5mm" },
        { param: "Net Weight", value: "0.46 kg" },
      ],
    },
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Network Input And Output Interface Specification
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