import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Despite tight deadlines and complex project demands, the team worked diligently and ensured every major activity ran smoothly. Their professionalism and strong technical support made a significant contribution to our project's success.",
    name: "Air Force Command College Warfighting Laboratory",
    designation: "Judicial System",
    src: "https://i.pinimg.com/736x/3e/42/09/3e4209dcaef03edf05106b5f5ea7f9b6.jpg",
  },
  {
    quote:
      "They are highly responsible, responsive, and technically capable. Their dedication and consistent support have played an important role in strengthening our department's information systems.",
    name: "Operations Laboratory",
    designation: "Corporate Sector",
    src: "https://i.pinimg.com/control1/736x/40/0e/50/400e503002688cfc298959f17beb9b90.jpg",
  },
  {
    quote:
      "Their professional AV setup transformed our large-scale event into a seamless and unforgettable experience. The sound quality, visual clarity, and technical support were absolutely outstanding. From planning to execution, every detail was handled with precision and professionalism.",
    name: "Event Support",
    designation: "Event Industry",
    src: "https://i.pinimg.com/control1/736x/b6/79/71/b67971113c8375ad55c46f180b80e69b.jpg",
  },
  {
    quote:
      "We rely on their safety communication systems for maximum protection and efficiency. The reliability, fast response, and advanced technology give us complete peace of mind. Their commitment to safety standards and consistent performance truly sets them apart in the industry.",
    name: "Fire Protection",
    designation: "Safety Infrastructure",
    src: "https://i.pinimg.com/control1/1200x/6a/07/d4/6a07d4e19a759abcebd15d771154ae9f.jpg",
  },
];

export default function TestimoniesAreasSection() {
  return (
    <section className="bg-white py-12 md:py-20 w-full overflow-hidden">
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