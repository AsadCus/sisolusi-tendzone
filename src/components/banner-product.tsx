import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function BannerCarousel(){

const slides = [
  {
    title: "AI Audio Process Technology",
    subtitle:
      "AI- Dereverberation, AI-Noise Cancellation, AI-AGC and AI auto-tuning systems",
    image: "/images/categories/all-in-one.jpg", // ganti dengan path gambar hero-mu
    cta: "Get A Quote",
  },
  {
    title: "Next Slide Title",
    subtitle: "Deskripsi slide kedua",
    image: "/images/categories/all-in-one.jpg",
    cta: "Get Started",
  },
];
    return (
        <div className="relative w-full h-full overflow-x-hidden">
        <div className="w-full h-screen relative">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {slides.map((slide, i) => (
                <CarouselItem key={i} className="h-full">
                  <div className="relative w-full h-full">
                    <Image
                      width={1920}
                      height={1080}
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-screen object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute left-12 top-1/3 text-white max-w-xl lg:mx-20 mx-4 space-y-4 z-10">
                      <h1 className="text-4xl md:text-5xl font-bold">
                        {slide.title}
                      </h1>
                      <p className="text-lg text-gray-200">{slide.subtitle}</p>
                      <button className="mt-4 rounded bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700 transition">
                        {slide.cta}
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNavigation className="bg-none absolute" />
            <CarouselIndicator className="bg-none absolute mb-4 " />
          </Carousel>
        </div>
      </div>
    )
}