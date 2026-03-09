"use client";

const features = [
  "Engineered to deliver exceptional pro audio performance with faster, easier implementation",
  "Ready to go out of the box and extensively configurable",
  "Hybrid channel strip architecture",
  "Customizable inputs and outputs",
  "Eight internal aux buses",
  "Clean and intuitive software",
  "Real-time configuration and adjustment",
  "Work offline or live via Ethernet or USB",
  "Highest-quality converters, preamps, and line amps",
  "Twelve mic/line inputs with 66 dB gain range",
  "Eight +24 dB balanced line outputs",
];

export default function ThirteenInOneFeatures() {
  return (
    <section className="bg-white py-10 px-6 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <div className="w-7 h-[2px] bg-red-500 mb-3" />
          <h2 className="text-[18px] font-bold text-gray-900 leading-snug">
            Key Features of Thirteen-In-One Integrated Processor
          </h2>
          <p className="mt-2 text-[11.5px] text-gray-400 leading-relaxed max-w-lg">
            A professional-grade all-in-one AV processor built for performance, flexibility, and seamless integration.
          </p>
        </div>

        {/* Main card — horizontal split */}
        <div className="border border-gray-100 overflow-hidden">

          {/* Image strip */}
          <div className="w-full h-36 bg-gray-50 border-b border-gray-100 overflow-hidden">
            <img
              src="https://www.tendzone.net/uploads/43135/thirteen-in-one-integrated-processor6ace4.jpg"
              alt="Thirteen-in-One Integrated Processor"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Features — row by row, 3 cols */}
          <div className="divide-y divide-gray-100">
            {Array.from({ length: Math.ceil(features.length / 3) }).map((_, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-3 divide-x divide-gray-100">
                {[0, 1, 2].map((col) => {
                  const item = features[rowIdx * 3 + col];
                  return (
                    <div
                      key={col}
                      className="group flex items-start gap-2.5 px-4 py-3.5 hover:bg-gray-50 transition-colors duration-150 min-h-[48px]"
                    >
                      {item ? (
                        <>
                          <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0 mt-[6px]" />
                          <p className="text-[12.5px] text-gray-500 leading-relaxed group-hover:text-gray-800 transition-colors duration-150">
                            {item}
                          </p>
                        </>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}