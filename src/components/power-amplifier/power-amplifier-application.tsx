"use client";

const applications = [
  {
    title: "Live Concerts & Outdoor Events",
    description: "For live concerts or outdoor events, prioritize amps that deliver high wattage and durable performance.",
  },
  {
    title: "Studio Setups",
    description: "For studio setups, focus on amplifiers optimized for accuracy and clarity.",
  },
  {
    title: "Fixed Installations",
    description: "For fixed installations in venues, look for scalable options with multi-channel configurations.",
  },
];

export default function PowerAmplifierApplicationType({
  title = "Power Amplifier Application Type",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight">
            {title}
          </h2>
          <div className="flex justify-center mt-3">
            <span className="block w-10 h-0.5 bg-red-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-gray-200">
          {applications.map((app, i) => (
            <div
              key={i}
              className="relative overflow-hidden group flex flex-col gap-3 px-6 py-6 border-r border-gray-200 last:border-r-0 bg-white hover:bg-gray-50 transition-colors duration-200 cursor-default"
            >
              <span className="absolute top-0 left-0 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-500 ease-out z-10" />
              <h3 className="text-sm font-semibold text-gray-700 group-hover:text-red-500 transition-colors duration-200">
                {app.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}