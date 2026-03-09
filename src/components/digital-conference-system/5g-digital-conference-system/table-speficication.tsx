"use client"

export default function MicrophoneDigitalConferenceSpecificationTable() {
  const sections = [
    {
      title: "Microphone Parameters",
      rows: [
        { param: "Microphone Capsule", value: "14mm Gold-plated Capacitor Microphone Capsule" },
        { param: "Directional Pattern", value: "Supercardioid Electret" },
        { param: "Frequency Response", value: "80Hz – 16kHz" },
        { param: "Microphone Input Impedance", value: "1KΩ" },
        { param: "Sensitivity", value: "-45 ±1.5dB (0dB = 1V/Pa, at 1kHz)" },
        { param: "Maximum SPL", value: "100dB (THD > 3%)" },
      ],
    },
    {
      title: "Audio Performance",
      rows: [
        { param: "Signal-to-Noise Ratio", value: ">80dB(A)" },
        { param: "Crosstalk", value: ">70dB" },
        { param: "Dynamic Range", value: ">80dB" },
        { param: "THD", value: "<0.1%" },
      ],
    },
    {
      title: "Physical & Power",
      rows: [
        { param: "Maximum Power Consumption", value: "1.5W" },
        { param: "Power Supply", value: "Lithium Battery" },
        { param: "Battery Capacity", value: "11000mAh" },
        { param: "Microphone Rod Length", value: "230mm" },
        { param: "Dimensions (L × W × H)", value: "135 × 123 × 134mm" },
        { param: "Weight", value: "0.9kg" },
        { param: "Color", value: "Grey" },
      ],
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Microphone Specification
          </h2>
        </div>

        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr className="border-y-2 border-gray-300 bg-gray-100">
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600 w-[35%]">
                Parameter
              </th>
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600">
                Value
              </th>
            </tr>
          </thead>

          <tbody>
            {sections.map((sec) => (
              <>
                <tr
                  key={sec.title + "-header"}
                  className="border-b border-gray-200 bg-gray-50"
                >
                  <td
                    colSpan={2}
                    className="px-4 py-2.5 font-semibold text-gray-600"
                  >
                    {sec.title}
                  </td>
                </tr>

                {sec.rows.map((row, i) => (
                  <tr
                    key={sec.title + row.param}
                    className={`border-b border-gray-200 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-4 py-2.5 align-top text-gray-600">
                      {row.param}
                    </td>
                    <td className="px-4 py-2.5 align-top text-gray-900 leading-relaxed">
                      {row.value}
                    </td>
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