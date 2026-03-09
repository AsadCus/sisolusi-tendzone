import { Layers, Users, ClipboardCheck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: <Layers width={22} height={22} strokeWidth={1.8} />,
    title: "Expertise & Experience",
    description:
      "With years of experience in manufacturing and systems integration, our skilled team optimizes your AV environment for exceptional performance and ease of use.",
  },
  {
    icon: <Users width={22} height={22} strokeWidth={1.8} />,
    title: "Tailored & Flexible Services",
    description:
      "Recognizing that each client has unique needs, we collaborate closely with you to create solutions that are perfectly suited to your specific requirements.",
  },
  {
    icon: <ClipboardCheck width={22} height={22} strokeWidth={1.8} />,
    title: "Quality Control",
    description:
      "All our products undergo rigorous testing to ensure they meet the highest standards of durability and performance, ensuring reliability and seamless integration.",
  },
  {
    icon: <Headphones width={22} height={22} strokeWidth={1.8} />,
    title: "Reliable Support & Maintenance",
    description:
      "Our dedicated team provides comprehensive support throughout the project lifecycle — from design and installation to technical assistance and ongoing maintenance.",
  },
];

export default function WhyChooseUsSectionSubcategory() {
  return (
    <section className="bg-white py-4 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Why Choose Us</h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group flex gap-4 bg-gray-50 border border-gray-100 px-5 py-5 hover:border-red-200 hover:bg-red-50 transition-colors duration-200"
            >
              <div className="shrink-0 w-10 h-10 bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-red-500 group-hover:border-red-200 transition-colors duration-200">
                {r.icon}
              </div>

              <div>
                <p className="text-[12.5px] font-bold text-gray-900 mb-1.5 group-hover:text-red-600 transition-colors duration-200">
                  {r.title}
                </p>
                <p className="text-[11.5px] text-gray-500 leading-relaxed">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}