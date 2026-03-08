"use client";

const ROWS = [
  {
    key: "Inputs",
    val: "8× RCA / Cinch  |  8× High-level speaker input  |  1× Optical SPDIF (12–96 kHz)  |  1× Coax SPDIF (12–192 kHz)  |  1× Remote In",
  },
  { key: "Input Sensitivity", val: "RCA / Cinch 1–8 V  |  High-level 4–32 V" },
  { key: "Outputs", val: "12× RCA / Cinch  |  1× Remote Out" },
  { key: "Output Voltage", val: "8 V" },
  { key: "Frequency Response", val: "10 Hz – 44,000 Hz" },
  { key: "DSP Resolution", val: "64 Bit" },
  { key: "DSP Power", val: "2× 295 MHz (2.4 billion MAC operations/second)" },
  { key: "DSP Type", val: "2× Audio signal processor" },
  { key: "Sampling Rate", val: "96 kHz" },
  {
    key: "Signal Converters",
    val: "A/D: Asahi Kasei 32 Bit  |  D/A: Asahi Kasei 32 Bit",
  },
  { key: "Signal-to-Noise Ratio (digital input)", val: "117 dB (A-weighted)" },
  { key: "Signal-to-Noise Ratio (analog input)", val: "111 dB (A-weighted)" },
  { key: "THD+N (digital input)", val: "< 0.0004 %" },
  { key: "THD+N (analog input)", val: "< 0.0008 %" },
  { key: "IM Distortion / IMD (digital input)", val: "< 0.0015 %" },
  { key: "IM Distortion / IMD (analog input)", val: "< 0.003 %" },
  { key: "Crosstalk", val: "> 90 dB" },
  { key: "Operating Voltage", val: "9.6–17 V (max. 5 sec. down to 6 V)" },
  { key: "Power Rating", val: "DC 12 V — 1.1 A max." },
  { key: "Current Draw", val: "550 mA" },
  { key: "Max. Remote Output Current", val: "500 mA" },
  { key: "Operating Temperature", val: "-40°C to +70°C" },
  {
    key: "Additional Features",
    val: "HEC slot  |  Ground lift switch  |  Smart Control Port  |  32 Bit CoProcessor  |  ADEP.3 circuit  |  Auto Remote switch",
  },
  {
    key: "Dimensions (H × W × D)",
    val: '40 × 177 × 170 mm  /  1.58" × 6.97" × 6.69"',
  },
];

export default function TwelveInOnePage() {
  const thClass = "px-4 py-2.5 text-left font-semibold text-gray-600";
  const tdKeyClass = "px-4 py-2.5 align-top text-gray-600";
  const tdValClass = "px-4 py-2.5 align-top text-gray-900";

  return (
    <div className="min-h-screen bg-white px-8 pt-4 pb-12 font-sans">
      <div className="mx-auto max-w-225">
        <div className="mb-4 text-center">
          <h1 className="mb-2 text-[20px] font-bold text-gray-900">
            Twelve-in-One Integrated Processor Specification
          </h1>
        </div>
        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr className="border-y-2 border-gray-300 bg-gray-100">
              <th className={`${thClass} w-[35%]`}>Parameter</th>
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
