const specs = [
  { label: "Power", value: "+12VDC to +16VDC, 1A max" },
  {
    label: "Power Management",
    value: "Adjustable backlight brightness  |  Ambient light sensor  |  Proximity sensor",
  },
  {
    label: "Touchscreen Display",
    value: "High-brightness color TFT LCD  |  WVGA (480×800 pixels) with 16.7M colors  |  Integrated high-resolution capacitive touch screen",
  },
  { label: "Display Size", value: "10.1 inches" },
  { label: "Display Backlight", value: "LED Backlit, 200nit" },
  {
    label: "Infrared Output",
    value: "One, through control port, 200mA output  |  Drives up to 1000 ft (300 m) of wire",
  },
  { label: "Serial Port", value: "Two RJ-45, RS-232 communication" },
  { label: "Ethernet Port", value: "10/100 Base-T with Power-over-Ethernet" },
  { label: "Relays", value: "Four, 2 Amps @ 30 VDC" },
  { label: "Sense Inputs", value: "Six, 2-24VDC" },
  {
    label: "Radio Frequency Control Range",
    value: "Up to 100 feet (30.5 meters)  |  Communication with optional wireless Interfaces",
  },
  {
    label: "Radio Frequency Carrier",
    value: "802.15.4 @ 2.4GHz (Zigbee® Wireless Networking)",
  },
  { label: "Microphone", value: "Silicon MEMS" },
  { label: "Speaker", value: "One (1) 2 Watt, 8 Ohm" },
  {
    label: "Device Capability",
    value: "Total number of devices is limited only by memory",
  },
  {
    label: "Macro Capability",
    value: "Unlimited steps in a single macro  |  Total number of macros is limited only by memory  |  Macro capability on every button",
  },
  { label: "Communications", value: "USB programming port" },
  { label: "Enclosure", value: "High-impact molded ABS plastic" },
  {
    label: "Mounting",
    value: "Integrated mounting wings, or screws through front plate",
  },
  {
    label: "Bezel Dimensions (W × H)",
    value: "4.352in (110.5mm) × 5.876in (149.25mm)",
  },
  {
    label: "Installation Cut-Out (W × H)",
    value: "2.942in (74.7mm) × 5.192in (131.8mm)",
  },
  {
    label: "Total Depth in Wall",
    value: "1.265in (32.1mm), with mounting wings 1.624in (41.2mm)  |  NOTE: Additional room may be required depending on connections",
  },
  { label: "Weight", value: "8.9 oz (252 g)" },
  { label: "Operating Temperature", value: "+32°F to +122°F (0°C to +50°C)" },
  { label: "Operating Humidity", value: "5% to 95% Non-condensing" },
];

export default function TouchPanelSpec() {
  const thClass = "px-4 py-2.5 text-left font-semibold text-gray-600";
  const tdKeyClass = "px-4 py-2.5 align-top text-gray-600";
  const tdValClass = "px-4 py-2.5 align-top text-gray-900";

  return (
    <div className="min-h-screen bg-white px-6 pt-4 pb-10 font-sans">
      <div className="mx-auto max-w-4xl">
        <div className="mb-3 text-center">
          <h1 className="mb-2 text-[20px] font-bold text-gray-900">
            Wired Control Touch Panel Specification
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
            {specs.map((row, i) => (
              <tr
                key={row.label}
                className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className={tdKeyClass}>{row.label}</td>
                <td className={tdValClass}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}