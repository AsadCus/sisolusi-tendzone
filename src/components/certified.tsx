import { Marquee } from "./ui/marquee";

export default function SertifiedBy(){
   const reviews = [
  {
    img: "https://avatar.vercel.sh/jack",
  },
  {
    img: "https://avatar.vercel.sh/jill",
  },
  {
    img: "https://avatar.vercel.sh/john",
  },
  {
    img: "https://avatar.vercel.sh/jane",
  },
  {
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

function ReviewCard({ img }: { img: string }) {
  return (
    <figure>
      <div className="flex items-center gap-2">
        <img src={img} width={80} height={80} className="rounded-full" />
      </div>
    </figure>
  );
}

function MarqueeDemo() {
  return (
    <div className="relative w-fullmax-w-5xl overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((r) => (
          <ReviewCard key={r.img} {...r} />
        ))}
      </Marquee>
    </div>
  );
}
   
    return (
       <div className="w-full bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <h2 className="text-4xl font-bold whitespace-nowrap">
              Certified By
            </h2>

            <div className="flex-1 overflow-hidden">
              <MarqueeDemo />
            </div>
          </div>
        </div> 
    )
}