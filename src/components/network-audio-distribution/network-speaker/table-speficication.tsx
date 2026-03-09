"use client"

export default function SpeakersSpecificationTable() {
  const sections = [
    {
      title: "General Parameters",
      rows: [
        { param: "Model", value: "Amber SM12" },
        { param: "Low Frequency Unit", value: "12 inches" },
        { param: "High Frequency Unit", value: "1.7 inch" },
        { param: "Speaker Rated Power", value: "450W" },
        { param: "Maximum SPL", value: "121dB continuous, 127dB peak" },
        { param: "Frequency Response (-10dB)", value: "60Hz – 20kHz" },
        { param: "Coverage Angle", value: "80° × 50°" },
        { param: "Working Mode", value: "Dual power amplifier drive (low frequency & high frequency); signal processing using domestic ARM" },
        { param: "Installation", value: "Bracket, wall mount" },
      ],
    },
    {
      title: "Electrical and Physical Parameters",
      rows: [
        { param: "Power Interface", value: "Neutrik PowerCon" },
        { param: "Power Switch", value: "Ship Type Switch" },
        { param: "Amplifier Power", value: "800W" },
        { param: "Amplification Type", value: "Class D technology, conversion efficiency up to 90% @360W" },
        { param: "Operating Voltage", value: "AC100V – 240V, 50/60Hz" },
        { param: "Operating Temperature", value: "0°C – 45°C" },
        { param: "Dimensions (W × H × D)", value: "362mm × 624mm × 367mm" },
        { param: "Weight", value: "31kg" },
      ],
    },
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Network Speaker Specification
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