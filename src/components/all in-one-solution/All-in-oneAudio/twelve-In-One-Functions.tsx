"use client";

const features = [
  "Remote Video Conferencing",
  "Local Recording & Broadcasting",
  "Audio Amplification",
  "Video Matrix Switching",
  "Peripheral Environmental Control",
  "Centralized Unified Touch",
  "Distributed Input & Output Codecs",
  "IPC Access",
  "POE Gigabit Switch",
];

export default function TwelveInOneFunctions() {
  return (
    <section className="bg-white pt-4 pb-8 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">

          {/* Left — Text */}
          <div>
            <h2 className="text-[18px] font-bold text-gray-900 leading-snug mb-4">
              Functions of Twelve-In-One<br />Integrated Processor
            </h2>

            <p className="text-[12px] text-gray-500 leading-relaxed mb-4 text-justify">
              It integrates a range of functions including remote video conferencing, local recording
              and broadcasting, audio amplification, video matrix switching, peripheral environmental
              control, centralized unified touch, distributed input and output codecs, IPC access,
              POE gigabit switch, and more.
            </p>

            <p className="text-[12px] text-gray-500 leading-relaxed mb-5 text-justify">
              This 12-in-1 multifunctional terminal host supports local and remote meetings, remote
              live streaming, training, supervision, teaching, and mobile command. It offers seamless
              integration with various audio-visual and environmental peripherals, enabling intelligent
              and efficient operation — configurable as a hyper-converged all-in-one device with a
              built-in OPS computer, wireless screen projection, and wireless microphone modules.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                  <span className="text-[11.5px] text-gray-500">{f}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border border-gray-100 overflow-hidden bg-gray-50">
            <img
              src="https://www.tendzone.net/uploads/43135/twelve-in-one-integrated-processorea049.jpg"
              alt="Twelve-in-One Integrated Processor"
              className="w-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}