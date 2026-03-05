"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const oemPoints = ["Logo", "Package", "Colors", "Materials"];
const odmPoints = ["Communicating", "Confirming", "Customizing"];

const bestSelling = [
  {
    id: 1,
    title: "Twelve-in-one Integrated Processor",
    tag: "CLIMBER-1009",
    description:
      "The CLIMBER-1009 series is the latest 12-in-1 multifunctional terminal host from TENDZONE, built on years of integrated product development experience. This advanced solution combines TENDZONE's latest audio algorithms, video codecs, centralized control, media processing, remote communication, and other technologies.",
  },
  {
    id: 2,
    title: "Wired Control Touch Panel",
    tag: "TCP-600",
    description:
      "The network PoE desktop touch screen TCP-600 is a desktop conference control tablet developed by TENDZONE for the CLIMBER series all-in-one terminals. It supports one-touch switching of system power, video screen switching, audio amplification management, recording and broadcasting, video conference dual-stream call management, and plan scene calls.",
  },
  {
    id: 3,
    title: "Thirteen-in-one Integrated Processor",
    tag: "CLIMBER-2009",
    description:
      "The CLIMBER-2009 series is a state-of-the-art 13-in-1 multifunctional terminal host leveraging years of experience in integrated product development. It integrates advanced technologies such as audio algorithms, video codecs, centralized control, media processing, and remote communication, powered by domestic core processors with a flexible plug-in card design.",
  },
  {
    id: 4,
    title: "Nine-in-one Integrated Processor",
    tag: "CLIMBER-1008",
    description:
      "CLIMBER-1008 encompasses a wide range of functionalities including Peripheral Environmental Control, Video Matrix Switching, Audio Processor, Power Amplifier, PoE Switch, Remote Video Conferencing, Local Recording and Broadcasting, Centralized Touch Control, Distributed System I/O Codecs, and IPC Access — ideal for multimedia conference rooms, smart classrooms, lecture halls, and multifunctional venues.",
  },
];

const ServiceCard = ({
  title,
  description,
  points,
}: {
  title: string;
  description: string;
  points: string[];
}) => (
<div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300">
    <div>
      <h3 className="text-[17px] font-extrabold text-gray-900 mb-2">{title}</h3>
      <p className="text-[13.5px] text-gray-500 leading-relaxed" style={{ textAlign: "justify" }}>
        {description}
      </p>
    </div>
    <ul className="space-y-2">
      {points.map((p) => (
        <li key={p} className="flex items-center gap-2.5 text-[13px] text-gray-700 font-medium">
          <CheckCircle2 size={14} className="text-red-500 shrink-0" />
          {p}
        </li>
      ))}
    </ul>
  </div>
);

const BestSellingTabs = () => {
  const [active, setActive] = useState(0);
  const current = bestSelling[active];

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50">
        {bestSelling.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActive(i)}
            className={`shrink-0 px-5 py-4 text-[12px] font-semibold tracking-wide transition-all duration-200 border-b-2 whitespace-nowrap ${
              active === i
                ? "border-red-500 text-red-600 bg-white"
                : "border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className={`mr-2 text-[10px] font-black ${active === i ? "text-red-400" : "text-gray-300"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.tag}
          </button>
        ))}
      </div>

      <div key={active} className="bg-white p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center shadow-md">
              <span className="text-[13px] font-black text-white">
                {String(active + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-[18px] font-extrabold text-gray-900 mb-4 leading-snug">
              {current.title}
            </h3>
            <p className="text-[13.5px] text-gray-800 leading-7" style={{ textAlign: "justify" }}>
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OemOdmPage() {
  return (
    <main className="w-full min-h-screen bg-gray-100">

      <section className="w-full bg-gray-100 border-b border-gray-100 pt-16 pb-14">
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            OEM / ODM Service
          </h1>
          <p
            className="text-[14.5px] text-gray-800 leading-7 max-w-2xl mx-auto"
            style={{ textAlign: "center" }}
          >
            Our dedicated customer support team offers reliable technical support, quick response
            times, and preventive maintenance service tailored to each client&apos;s unique requirements.
          </p>
        </div>
      </section>

    <section className="w-full pb-15">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              title="OEM Service"
              description="As a professional AV provider, we focus on understanding the unique requirements of our clients. We identify any technical limitations or challenges the client currently faces — such as space constraints, budget limitations, or specific user needs — and deliver tailored branding solutions."
              points={oemPoints}
            />
            <ServiceCard
              title="ODM Service"
              description="We offer client-customized maintenance plans based on usage, equipment types, and client preferences. Our approach increases the lifespan and reliability of AV systems, leading to a better overall client experience through a structured three-step process."
              points={odmPoints}
            />
          </div>
        </div>
      </section>

      <section className="w-full pb-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Our Best-Selling All-in-one Solution
            </h2>
            <div className="flex justify-center mt-3">
              <span className="block w-10 h-1 rounded-full bg-red-500" />
            </div>
          </div>

          <BestSellingTabs />
        </div>
      </section>

    </main>
  );
}