import { cn } from "@/lib/utils";

const posts = [
  {
    img: "https://www.tendzone.net/uploads/43135/news/n20251226151850d19c2.jpg",
    title: "TENDZONE Empowers National Laboratory To Build Ultra-Large-Scale Integrated Audio-Visual Application Solution",
    category: "Audio Visual",
    date: "May 12, 2025",
  },
  {
    img: "https://www.tendzone.net/uploads/43135/news/n20251203203857f01d7.jpg",
    title: "Tendzone Audio-Visual Solutions: Empowering The Intelligent Transformation Of Emergency Command Centers",
    category: "Emergency Command",
    date: "Apr 28, 2025",
  },
  {
    img: "https://www.tendzone.net/uploads/43135/news/n20251212200059b10c0.jpg",
    title: "TENDZONE Smart Transportation Industry Case Studies",
    category: "Smart Transportation",
    date: "Apr 10, 2025",
  },
];

export default function BlogSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="flex flex-col items-center w-full px-4 py-16">
        <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-2">Our Blog</p>
        <h1 className="text-3xl font-semibold text-slate-900">Latest News</h1>
        <p className="text-sm text-slate-400 mt-2 max-w-md text-center">
          We promise to find you the right equipment
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="max-w-72 w-full group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="flex items-center gap-2 mt-3">
                <span className="text-[11px] font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-[11px] text-slate-400">{post.date}</span>
              </div>

              <h3 className="text-sm text-slate-800 font-medium mt-2 leading-snug group-hover:text-red-600 transition duration-200">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}