"use client";

const ROWS = [
  {
    key: "Safe and Stable",
    val: "Adopting industrial-grade system architecture, developed based on embedded system, free from virus intrusion",
  },
  {
    key: "Data Interface",
    val: "2× USB Type-A  |  1× USB Type-B",
  },
  {
    key: "Network Camera",
    val: "16 local network cameras  |  8 network audio and video forwarding",
  },
  {
    key: "Video Codec",
    val: "Up to 4 channels of 1080P@60 encoding / decoding, or 8 channels of 1080P@30 encoding and 8 channels of 1080P@30 decoding",
  },
  {
    key: "Built-in OPS Computer",
    val: "Fusion OPS computer  |  16G memory  |  512G hard disk",
  },
  {
    key: "Built-in Wireless Screen Projection",
    val: "Supports one-click screen projection with wireless transmitter, portable terminal PC / mobile phone / PAD client, and external antenna to extend receiving signal",
  },
  {
    key: "Built-in Wireless Speaking Module",
    val: "Supports 2 simultaneous microphones — wireless handheld / collar clip / headset transmitter; supports external antenna to extend reception signal",
  },
  {
    key: "Installation",
    val: "3U telecommunications standard cabinet installation",
  },
  {
    key: "Device Size (with handle)",
    val: "Width × Depth × Height: 437 mm × 442 mm × 132.5 mm",
  },
  {
    key: "Device Size (without handle)",
    val: "Width × Depth × Height: 437 mm × 410 mm × 132.5 mm",
  },
  {
    key: "Input Voltage & Current",
    val: "AC 100–240 V / 50–60 Hz",
  },
  {
    key: "Power Consumption",
    val: "Typical: 50W  |  Full load: 750W",
  },
  {
    key: "Equipment Weight",
    val: "Net weight: 14.6 KG  |  Gross weight: 16 KG",
  },
  {
    key: "Operating Temperature",
    val: "0–45°C",
  },
  {
    key: "Humidity & Altitude",
    val: "10%–90% humidity  |  Altitude ≤ 5,000 meters",
  },
  {
    key: "Host Chassis",
    val: "Main control board and audio board are standard; other boards are optional",
  },
];

export default function ThirteenInOneSpec() {
  const thClass = "px-4 py-2.5 text-left font-semibold text-gray-600";
  const tdKeyClass = "px-4 py-2.5 align-top text-gray-600";
  const tdValClass = "px-4 py-2.5 align-top text-gray-900";

  return (
    <div className="min-h-screen bg-white px-8 pt-4 pb-12 font-sans">
      <div className="mx-auto max-w-225">
        <div className="mb-4 text-center">
          <h1 className="mb-2 text-[20px] font-bold text-gray-900">
            Thirteen-in-One Integrated Processor Specification
          </h1>
        </div>
        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr className="border-y-2 border-gray-300 bg-gray-100">
              <th className={`${thClass} w-[30%]`}>Parameter</th>
              <th className={thClass}>Value</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.key}
                className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className={tdKeyClass}>{row.key}</td>
                <td className={tdValClass}>{row.val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}