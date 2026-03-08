"use client";

const ROWS = [
  {
    key: "Safe and Stable",
    val: "Adopting industrial-grade system architecture, developed based on LINUX system, virus-free",
  },
  {
    key: "Data Interface",
    val: "2× USB Type-A  |  1× USB Type-B",
  },
  {
    key: "Network Camera",
    val: "12 local network cameras  |  4 network forwarding",
  },
  {
    key: "Video Codec",
    val: "Up to 4 channels of 1080P@60 encoding / decoding, or 8 channels of 1080P@30 encoding and 8 channels of 1080P@30 decoding",
  },
  {
    key: "Audio & Video Protocol",
    val: "Audio: G.711, G.722, G722.1, G722.1C, AAC — supports decoding audio code streams  |  Video: H.264 HP/MP/BP, H.265 MP",
  },
  {
    key: "Display Terminal",
    val: "Built-in video splitting — single screen / picture-in-picture / picture-out-picture synthesis, subtitle overlay, terminal name overlay, station logo display in 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 13 / 16 split screens",
  },
  {
    key: "Control Panel",
    val: "Supports a variety of control panels — optional 10.1\" wired Android touch screen (standard, no wall mount, no PoE)  |  10.1\" network PoE desktop touch screen  |  10.1\" network PoE wall-mounted touch screen (standard with wall-mounted bottom box)",
  },
  {
    key: "Codec Rate",
    val: "Maximum 16 channels of 1080P codec  |  512 Kbps – 16 Mbps per channel",
  },
  {
    key: "Audio Input",
    val: "8× Phoenix terminal input (supports 48V phantom power MIC / line-in)  |  4× HDMI embedded audio input  |  1× OPS audio input  |  1× wireless projection audio input (optional)  |  1× wireless speech module audio input (optional)",
  },
  {
    key: "Communication Protocol",
    val: "SIP, BFCP dual stream, H.323, H.239, E.164, H.245, NAT, H.225, Q.931, RTSP, RTMP, TCP/IP, HTTP, FTP, TCP, UDP, NTP, RTP, RTCP, Telnet, TLS",
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