"use client"

export default function PackagingShipping() {
  const rows = [
    { param: "Packaging", value: "Plastic bag, paper box, customizable" },
    { param: "Transportation Methods", value: "Road transport, rail transport, sea transport, air transport" },
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Packaging and Shipping
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
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="px-4 py-2.5 align-top text-gray-600">{row.param}</td>
                <td className="px-4 py-2.5 align-top text-gray-900 leading-relaxed">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  )
}