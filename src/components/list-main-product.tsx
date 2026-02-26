import Image from "next/image";
import Link from "next/link";

const productCategories = [
  {
    name: "All-in-one Solution",
    image: "/images/product/2k60-hdmi.png",
    href: "/products/all-in-one",
  },
  {
    name: "Audio Processor",
    image: "/images/product/2x2-dante.png",
    href: "/products/audio-processor",
  },
  {
    name: "Network Audio Distribution",
    image: "/images/product/expansion-midis.png",
    href: "/products/audio-over-ip",
  },
  {
    name: "Digital Conference System",
    image: "/images/product/premium-recording.png",
    href: "/products/conference-network",
  },

  {
    name: "All-in-one Solution",
    image: "/images/product/2k60-hdmi.png",
    href: "/products/all-in-one",
  },
  {
    name: "Audio Processor",
    image: "/images/product/2x2-dante.png",
    href: "/products/audio-processor",
  },
  {
    name: "Network Audio Distribution",
    image: "/images/product/expansion-midis.png",
    href: "/products/audio-over-ip",
  },
  {
    name: "Digital Conference System",
    image: "/images/product/premium-recording.png",
    href: "/products/conference-network",
  },
];

export default function MainProduct() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4 space-y-2">
          <h1 className="text-center lg:text-5xl text-xl">Main Product</h1>
          <p className="text-center lg:text-xl text-md text-gray-600 font-light">
            We promise to find you the right equipment
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group rounded-xl overflow-hidden border border-neutral-200 hover:border-red-500 transition bg-white"
              >
                <div className="relative h-80 w-80 overflow-hidden">
                  <Image
                    src={cat.image || "/images/categories/placeholder.jpg"}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3 text-center">
                  <p className="text-sm font-semibold text-neutral-800 group-hover:text-red-600 transition">
                    {cat.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
