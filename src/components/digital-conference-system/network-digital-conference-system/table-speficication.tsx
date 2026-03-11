"use client"

export default function NetWorkDigitalSpecificationTable() {
  const sections = [
    {
      title: "Hardware Specification",
      rows: [
        { param: "Model", value: "MTZ-921C / MTZ-921D" },
        { param: "Conference Bus", value: <>1 RJ45 universal interface for hand-in-hand or ring connection. <br /> 1 XLR port for connecting audio processors and other devices.</> },
        { param: "LED Indicator", value: "LED indicators on microphone stem and switch button" },
        { param: "Earphone", value: "1 × 3.5mm headphone jack with adjustable volume" },
        { param: "Priority Button", value: "Chairman unit includes programmable priority button" },
        { param: "TF Interface", value: "Used for updating background image" },
        { param: "Type-C Interface", value: "For debugging and firmware upgrade" },
        { param: "Built-in DSP", value: "Gain, noise gate, high-pass filter, DEQ, and 10-band parametric EQ" },
      ],
    },
    {
      title: "Performance",
      rows: [
        { param: "Microphone Type", value: "Rectangular column microphone" },
        { param: "Pickup Head", value: "14mm condenser cardioid polar pattern" },
        { param: "Sensitivity", value: "-34dB/kHz at 1Pa" },
        { param: "Frequency Response", value: "50Hz – 18kHz" },
        { param: "Output Impedance", value: "600 Ω" },
        { param: "Signal-to-Noise Ratio", value: ">83dB / 1kHz at 1Pa" },
        { param: "Maximum Input Sound Pressure Level", value: "128dB SPL / 1kHz at 1% THD" },
      ],
    },
    {
      title: "Environmental Parameters",
      rows: [
        { param: "Operating Temperature", value: "0°C – 45°C" },
        { param: "Storage Temperature", value: "-20°C – 60°C" },
        { param: "Operating Humidity", value: "10% – 90% RH" },
        { param: "Non-Operating Humidity", value: "5% – 95% RH" },
      ],
    },
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Network Digital Conference System Specification
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