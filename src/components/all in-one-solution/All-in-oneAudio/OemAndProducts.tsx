const oemOdm = [
  {
    type: "OEM",
    title: "OEM Service",
    description:
      "As a professional AV provider, we focus on understanding the unique requirements of our clients — identifying technical limitations, space constraints, budget, and specific user needs.",
    points: ["Logo", "Package", "Colors", "Materials"],
  },
  {
    type: "ODM",
    title: "ODM Service",
    description:
      "We offer client-customized plans based on usage, equipment types, and preferences — increasing the lifespan and reliability of your AV systems for a better overall experience.",
    points: ["Communicating", "Confirming", "Customizing"],
  },
];

const products = [
  {
    title: "Twelve-in-one Integrated Processor",
    tag: "CLIMBER-1009",
    image: "https://www.tendzone.net/uploads/43135/twelve-in-one-integrated-processord45e9.jpg",
    description:
      "The latest 12-in-1 multifunctional terminal host from TENDZONE, built on years of integrated product development experience.",
  },
  {
    title: "Embedded Wired Control Touch Panel",
    tag: "TCP-200",
    image: "https://www.tendzone.net/uploads/43135/embedded-wired-control-touch-panel9b6ec.jpg",
    description:
      "A network PoE wall-mounted touch screen developed by TENDZONE for the CLIMBER series all-in-one terminals.",
  },
  {
    title: "Thirteen-in-one Integrated Processor",
    tag: "CLIMBER-2009",
    image: "https://www.tendzone.net/uploads/43135/thirteen-in-one-integrated-processor22896.jpg",
    description:
      "A state-of-the-art 13-in-1 multifunctional terminal host, leveraging years of experience in integrated product development.",
  },
];

export default function OemAndProducts() {
  return (
    <div className="bg-white font-sans">

      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">OEM / ODM Service</h2>
            <div className="mt-3 w-7 h-[2px] bg-red-500" />
            <p className="mt-4 text-[12.5px] text-gray-500 max-w-xl leading-relaxed">
              Our dedicated customer support team offers reliable technical support, quick response times, and preventive maintenance service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {oemOdm.map((s) => (
              <div key={s.type} className="border border-gray-100 bg-gray-50 px-5 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-white bg-red-500 px-2 py-0.5 tracking-wider">
                    {s.type}
                  </span>
                  <p className="text-[12.5px] font-bold text-gray-900">{s.title}</p>
                </div>
                <p className="text-[11.5px] text-gray-500 leading-relaxed mb-3">
                  {s.description}
                </p>
                <ul className="space-y-1">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="text-[11.5px] text-gray-500">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Our Best-Selling All-in-one Audio Visual Solutions
            </h2>
            <div className="mt-3 w-7 h-[2px] bg-red-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <div key={i} className="border border-gray-100 bg-gray-50 group hover:border-red-200 transition-colors duration-200">

                <div className="w-full h-44 bg-gray-50 border-b border-gray-100 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain p-3"
                  />
                </div>

                <div className="px-4 py-4">
                  <p className="text-[12px] font-bold text-gray-900 mb-1.5 group-hover:text-red-600 transition-colors duration-200">
                    {p.title}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {p.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}