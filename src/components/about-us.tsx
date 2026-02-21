import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Established in 2010, Shenzhen Tendzone Intelligent Technology Co., Ltd.
            is a global leader in providing advanced audio-visual (AV) solutions
            and manufacturing high-quality AV products. We specialize in a wide
            range of cutting-edge technologies, including audio processors,
            microphones, speakers, power amplifiers, AV over IP systems, digital
            conference systems, and MIDIS Distributed Multimedia Transmission
            Control Systems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With over 14 years of experience, Tendzone has become a recognized
            industry leader, serving more than 260 provincial-level units and
            over 1,600 listed companies, spanning over 250,000 spaces globally.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Backed by a team of 100+ engineers, including experts from top-tier
            companies like Huawei, ZTE, Konka, and Skyworth, our R&D capabilities
            ensure continuous product innovation.
          </p>
          <Link
            href="/about"
            className="inline-block text-red-600 font-medium hover:underline"
          >
            read more &gt;&gt;
          </Link>
        </div>
        <div className="relative w-full h-87.5 md:h-112.5 lg:h-125 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/office/loby.png"
            alt="About Tendzone"
            fill
            className="object-cover  transition duration-150 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}