import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials = [
  {
    quote: "Faced with the severe situation of heavy project tasks and tight time, Dongwei's technical comrades overcame difficulties and worked overtime to carry out the work, effectively ensuring the smooth progress of major activities and providing strong support for our unit to complete the renovation and construction of a core site and technical support work. Here, I would like to express my sincere gratitude for your strong support!",
    name: "Air Force Command College Warfighting Laboratory",
    designation: "Judicial System",
    src: "/images/apllications/office.png",
  },
  {
    quote: "They work conscientiously and responsibly, respond to needs in a timely manner, and take the initiative to provide support with strong technical capabilities. They sacrifice a lot of personal rest time, work overtime to deploy equipment and develop and debug systems, and have made important contributions to the information construction of our department. For this, we would like to express our sincere gratitude to the above-mentioned personnel for their hard work, and thank your company for its strong support to our department.",
    name: "Operations Laboratory",
    designation: "Corporate Sector",
    src: "/images/apllications/office2.png",
  },
  {
    quote: "Professional AV setup for large scale events.",
    name: "Event Support",
    designation: "Event Industry",
    src: "/images/apllications/office3.png",
  },
  {
    quote: "Reliable safety communication systems.",
    name: "Fire Protection",
    designation: "Safety Infrastructure",
    src: "/images/apllications/office4.png",
  },
];


export default function TestimoniesAreasSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 mx-auto">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold">
          What Our Customers Said
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
         Our dedicated customer support team offers reliable technical support
        </p>
      </div>

      <AnimatedTestimonials
        testimonials={testimonials}
        autoplay={true}
      />
    </section>
  );
}