import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Despite tight deadlines and complex project demands, the team worked diligently and ensured every major activity ran smoothly. Their professionalism and strong technical support made a significant contribution to our project's success.",
    name: "Air Force Command College Warfighting Laboratory",
    designation: "Judicial System",
    src: "/images/apllications/office.png",
  },
  {
    quote:
      "They are highly responsible, responsive, and technically capable. Their dedication and consistent support have played an important role in strengthening our department's information systems.",
    name: "Operations Laboratory",
    designation: "Corporate Sector",
    src: "/images/apllications/office2.png",
  },
  {
    quote:
      "Their professional AV setup transformed our large-scale event into a seamless and unforgettable experience. The sound quality, visual clarity, and technical support were absolutely outstanding. From planning to execution, every detail was handled with precision and professionalism.",
    name: "Event Support",
    designation: "Event Industry",
    src: "/images/apllications/office3.png",
  },
  {
    quote:
      "We rely on their safety communication systems for maximum protection and efficiency. The reliability, fast response, and advanced technology give us complete peace of mind. Their commitment to safety standards and consistent performance truly sets them apart in the industry.",
    name: "Fire Protection",
    designation: "Safety Infrastructure",
    src: "/images/apllications/office4.png",
  },
];

export default function TestimoniesAreasSection() {
  return (
    <section className="bg-[#f5f5f5] py-12 md:py-20 w-full overflow-hidden">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          What Our Customers Said
        </h2>
        <p className="mt-3 md:mt-4 text-gray-600 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto px-2">
          Our dedicated customer support team offers reliable technical support
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}