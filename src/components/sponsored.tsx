import { Marquee } from "./ui/marquee";

const reviews = [
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo11.jpg?size=226x0"

   },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo13.jpg?size=226x0" 

  },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo2.jpg?size=226x0" 

  },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo6.jpg?size=226x0" 

  },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo10.jpg?size=226x0" 

  },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo14.jpg?size=226x0"

   },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo12.jpg?size=226x0"

   },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo1.jpg?size=226x0"

   },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo9.jpg?size=226x0"

   },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo15.jpg?size=226x0" 

  },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo3.jpg?size=226x0"

   },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo4.jpg?size=226x0" 

  },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo8.jpg?size=226x0"

   },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo5.jpg?size=226x0"

   },
  { img: "https://www.tendzone.net/uploads/43135/index/homelogo/logo16.jpg?size=226x0"
   },
];

function ReviewCard({ img }: { img: string }) {
  return (
    <figure className="mx-4">
      <img
        src={img}
        className="object-contain h-14 w-auto rounded-md"
        style={{ maxWidth: "120px" }}
      />
    </figure>
  );
}

export default function SponsoredBy() {
  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto px-28 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((r) => (
            <ReviewCard key={r.img} {...r} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}