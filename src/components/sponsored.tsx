import { Marquee } from "./ui/marquee";

export default function SponsoredBy(){
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
    <div className="relative w-full">
      <Marquee pauseOnHover className="[--duration:5s]">
        {firstRow.map((r) => (
          <ReviewCard key={r.img} {...r} />
        ))}
      </Marquee>
    </div>
  );
}
   
    return (
       <div className="w-full py-16">
          <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex-1 overflow-hidden">
              <MarqueeDemo />
            </div>
          </div>
        </div> 
    )
}