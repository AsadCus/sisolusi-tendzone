"use client"

export default function AudioSpecificationTable() {
  const sections = [
    {
      title: "General Performance",
      rows: [
        {
          param: "Processing Performance",
          value: <>Routing matrix capacity: 88×88 <br /> 16 AEC processing modules (tail length can reach 512ms) <br /> 32 AFC processing modules <br /> 2 AI algorithm modules</>,
        },
        { param: "Preset Management", value: "1000 preset management" },
      ],
    },
    {
      title: "UI and Design",
      rows: [
        {
          param: "System Design",
          value: <>Customize the audio signal processing flow of the audio processing service platform <br /> Customize the signal routing relationship between network audio devices <br /> Freely configure presets, which can include all processing modules or some modules</>,
        },
      ],
    },
    {
      title: "Electrical and Physical Parameters",
      rows: [
        { param: "Power Supply", value: "DC12V, 1A; supports PoE power supply" },
        { param: "Power Consumption", value: "10W" },
        { param: "Operating Temperature", value: "0°C – 45°C" },
        { param: "Dimensions", value: "482mm × 300mm × 44mm" },
        { param: "Package Size", value: "570mm × 410mm × 135mm" },
        { param: "Net Weight", value: "3.16 kg" },
        { param: "Shipping Weight", value: "4.6 kg" },
      ],
    },
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Audio Over IP Specification
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