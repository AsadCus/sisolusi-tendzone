type ServiceItem = {
  title: string;
  description: string;
};

type ServicePhase = {
  phase: string;
  label: string;
  items: ServiceItem[];
};

const services: ServicePhase[] = [
  {
    phase: "Pre-Sales",
    label: "Pre-Sales Services",
    items: [
      {
        title: "Requirement Assessment",
        description:
          "We focus on understanding the unique requirements of our clients — identifying technical limitations, space constraints, budget, and specific user needs.",
      },
      {
        title: "Consultation & Recommendations",
        description:
          "After understanding your requirements, we provide tailored advice on AV products and solutions best suited for your environment.",
      },
      {
        title: "Demonstrations & Trials",
        description:
          "We offer product demonstrations or trial installations to showcase the potential benefits and functionalities of the proposed solutions.",
      },
      {
        title: "System Design",
        description:
          "Creating customized designs and configurations for AV systems that fit your space, workflow, and budget.",
      },
    ],
  },
  {
    phase: "In-Sales",
    label: "In-Sales Services",
    items: [
      {
        title: "Sales Proposal",
        description:
          "We provide clients with a clear understanding of the project scope and costs through a detailed, transparent proposal.",
      },
      {
        title: "Project Management",
        description:
          "Coordinating timelines, resources, and stakeholder communication to ensure successful implementation as per the agreed proposal.",
      },
      {
        title: "Training & Support",
        description:
          "Providing initial training sessions for clients and their teams to ensure familiarity with the new AV technologies from day one.",
      },
    ],
  },
  {
    phase: "After-Sales",
    label: "After-Sales Services",
    items: [
      {
        title: "Technical Support",
        description:
          "Our professional tech support team ensures any issues with the AV system are promptly addressed with quick response times.",
      },
      {
        title: "Maintenance Services",
        description:
          "Client-customized maintenance plans based on usage, equipment types, and preferences — increasing lifespan and reliability of your AV systems.",
      },
      {
        title: "Upgrades & Updates",
        description:
          "We continuously provide software upgrades to keep your AV systems current and performing at their best.",
      },
      {
        title: "Feedback & Improvement",
        description:
          "Customer feedback is actively collected and used to foster continuous improvement in our service quality.",
      },
    ],
  },
];

export default function OurServiceSection() {
  return (
    <section className="bg-white py-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Our Services</h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl mt-2">
            Our dedicated customer support team offers reliable technical support,
            quick response times, and preventive maintenance service.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((s) => (
            <div key={s.phase}>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-4 bg-red-500 rounded-sm" />
                <h2 className="text-[13px] font-bold text-gray-800 uppercase tracking-wider">
                  {s.label}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.items.map((item, i) => (
                  <div key={i} className="border border-gray-100 bg-gray-50 px-5 py-4">
                    <p className="text-[12.5px] font-bold text-gray-900 mb-1.5">{item.title}</p>
                    <p className="text-[11.5px] text-gray-500 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}