import { Marquee } from "./ui/marquee";

export default function SertifiedBy() {
  const reviews = [
    { img: "https://css02.v15cdn.com/m432/imgs/logo-1.webp" },
    { img: "https://www.tendzone.net/Content/uploads/20241101384/202411221655012535337f5511487286b71430c3bb569b.png" },
    { img: "https://css02.v15cdn.com/m432/imgs/logo-4.webp" },
    { img: "https://www.tendzone.net/Content/uploads/20241101384/20241122165457b98aa2f641924392b8a3953887d4251b.png" },
  ];

  function ReviewCard({ img }: { img: string }) {
    return (
      <figure className="mx-4">
        <img
          src={img}
          className="object-contain h-10 w-auto"
          style={{ maxWidth: "110px" }}
        />
      </figure>
    );
  }

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto px-12 flex flex-col md:flex-row items-center gap-8">
        <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase whitespace-nowrap">
          Certified By
        </h2>

        <div className="flex-1 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {reviews.map((r) => (
              <ReviewCard key={r.img} {...r} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}