"use client";

export default function ThirteenInOneApplications() {
  return (
    <section className="bg-white py-6 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="mb-4">
          <div className="w-7 h-0.5 bg-red-500 mb-3" />
          <h2 className="text-[18px] font-bold text-gray-900">
            Applications of Thirteen-In-One Integrated Processors
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="bg-gray-50 border border-gray-100 overflow-hidden">
            <img
              src="https://www.tendzone.net/uploads/43135/nine-in-one-integrated-processora0570.jpg"
              alt="Thirteen-in-One Integrated Processor"
              className="w-full object-contain p-4"
            />
          </div>
          <div className="space-y-4">
            <p className="text-[12px] text-gray-500 leading-relaxed text-justify">
              The widespread application of thirteen-in-one integrated processors is due to their powerful processing
              capabilities and flexible signal switching functions. In conference systems, they can easily achieve clear
              transmission of the speaker's voice; in studios, they can precisely select audio sources, bringing a rich
              auditory experience to the audience.
            </p>
            <p className="text-[12px] text-gray-500 leading-relaxed text-justify">
              Thirteen-in-one integrated processors excel in fine-tuning audio effects in music performances and
              recording studios. Sound engineers can make real-time adjustments and mix audio signals through the
              hardware control elements on the mixing consoles, creating mesmerizing sound effects.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}