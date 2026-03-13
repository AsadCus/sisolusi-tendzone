import { Marquee } from "./ui/marquee";

const LOGOS = [
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo11.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo13.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo2.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo6.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo10.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo14.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo12.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo1.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo9.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo15.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo3.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo4.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo8.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo5.jpg?size=226x0",
  "https://www.tendzone.net/uploads/43135/index/homelogo/logo16.jpg?size=226x0",
];

function LogoCard({ src }: { src: string }) {
  return (
    <figure className="mx-6">
      <img
        src={src}
        alt="Partner logo"
        className="object-contain h-12 w-auto rounded-md opacity-70 hover:opacity-100 transition-opacity duration-300"
        style={{ maxWidth: "120px" }}
      />
    </figure>
  );
}

export default function SponsoredBy() {
  return (
    <section className="w-full bg-white py-6 border-y border-gray-100">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex items-center gap-8">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300 whitespace-nowrap">
            Trusted By
          </span>

          <div className="relative flex-1 overflow-hidden">
            <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            <Marquee pauseOnHover className="[--duration:30s]">
              {LOGOS.map((src) => (
                <LogoCard key={src} src={src} />
              ))}
            </Marquee>
          </div>
        </div>

      </div>
    </section>
  );
}