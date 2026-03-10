"use client";

export default function BasicPrinsipleDigitalPower() {
  return (
    <section className="bg-white pt-4 pb-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div className="border border-gray-100 overflow-hidden bg-gray-50">
            <img
              src="https://www.tendzone.net/uploads/43135/twelve-in-one-integrated-processorea049.jpg"
              alt="Digital Power Amplifier"
              className="w-full object-contain"
            />
          </div>
          <div>
            <div className="w-8 h-0.5 bg-red-500 mb-4" />
            <h2 className="text-[18px] font-bold text-gray-900 leading-snug mb-4">
              The Basic Principle Of Digital Power Amplifiers
            </h2>
            <p className="text-[12px] text-gray-500 leading-relaxed mb-4 text-justify">
              Digital power amplifiers, also known as Class D amplifiers, operate by converting an
              analog input signal into a digital format that uses pulse-width modulation (PWM) or
              pulse-density modulation (PDM).
            </p>

            <p className="text-[12px] text-gray-500 leading-relaxed mb-4 text-justify">
              This digital signal drives the output transistors, which rapidly switch on and off,
              feeding pulses of power to the speakers.
            </p>

            <p className="text-[12px] text-gray-500 leading-relaxed text-justify">
              A digital power amplifier's power stage efficiently amplifies these pulses and an
              in-built low-pass filter removes any high-frequency switching noise, leaving
              considerably amplified audio signals for our enjoyment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}