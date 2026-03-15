import { LazyMotion, domAnimation, m } from "framer-motion";
import { Marquee } from "./ui/marquee";

const LOGOS = [
  { src: "https://css02.v15cdn.com/m432/imgs/logo-1.webp", alt: "Partner Logo 1" },
  { src: "https://www.tendzone.net/Content/uploads/20241101384/202411221655012535337f5511487286b71430c3bb569b.png", alt: "Partner Logo 2" },
  { src: "https://css02.v15cdn.com/m432/imgs/logo-4.webp", alt: "Partner Logo 3" },
  { src: "https://www.tendzone.net/Content/uploads/20241101384/20241122165457b98aa2f641924392b8a3953887d4251b.png", alt: "Partner Logo 4" },
];

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mx-10">
      <img
        src={src}
        alt={alt}
        className="object-contain h-9 w-auto opacity-40 hover:opacity-90 grayscale hover:grayscale-0 transition-all duration-300"
        style={{ maxWidth: "130px" }}
      />
    </figure>
  );
}

export default function CertifiedBy() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="w-full bg-white py-6 border-y border-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-10 px-6 md:px-16 lg:px-32 xl:px-48">

          <m.span
            className="text-[11px] font-semibold text-gray-300 tracking-[0.2em] uppercase whitespace-nowrap"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            Certified By
          </m.span>

          <m.div
            className="relative flex-1 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-white to-transparent pointer-events-none" />
            <Marquee pauseOnHover className="[--duration:24s]">
              {LOGOS.map((logo) => (
                <LogoCard key={logo.src} {...logo} />
              ))}
            </Marquee>
          </m.div>

        </div>
      </m.section>
    </LazyMotion>
  );
}