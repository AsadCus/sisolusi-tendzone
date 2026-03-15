import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const posts = [
  {
    img: "https://www.tendzone.net/uploads/43135/news/n20251226151850d19c2.jpg",
    title: "TENDZONE Empowers National Laboratory To Build Ultra-Large-Scale Integrated Audio-Visual Application Solution",
    category: "Audio Visual",
    date: "May 12, 2025",
    href: "/news/1",
  },
  {
    img: "https://www.tendzone.net/uploads/43135/news/n20251203203857f01d7.jpg",
    title: "Tendzone Audio-Visual Solutions: Empowering The Intelligent Transformation Of Emergency Command Centers",
    category: "Emergency Command",
    date: "Apr 28, 2025",
    href: "/news/2",
  },
  {
    img: "https://www.tendzone.net/uploads/43135/news/n20251212200059b10c0.jpg",
    title: "TENDZONE Smart Transportation Industry Case Studies",
    category: "Smart Transportation",
    date: "Apr 10, 2025",
    href: "/news/3",
  },
];

export default function BlogSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

          <m.div
            className="flex items-end justify-between mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-500 mb-2">
                Our Blog
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Latest News
              </h2>
            </div>
            <Link
              href="/news"
              className="hidden md:flex items-center gap-1.5 text-[13px] font-semibold text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              View All <ArrowRight size={14} />
            </Link>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <m.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={post.href}
                  className="group flex flex-col bg-gray-50 border border-gray-100 hover:border-red-100 hover:shadow-sm transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="overflow-hidden aspect-video">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col gap-2 p-5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10.5px] font-bold uppercase tracking-widest text-red-500 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-[14px] font-semibold text-gray-800 leading-snug group-hover:text-red-500 transition-colors duration-200 line-clamp-3">
                      {post.title}
                    </h3>
                    <div className="mt-auto pt-3 flex items-center gap-1 text-[12px] font-semibold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Read More <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>

          <div className="md:hidden flex justify-center mt-6">
            <Link
              href="/news"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}