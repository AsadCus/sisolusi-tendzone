import { Phone, Mail, MapPin, Youtube } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Solution', href: '/solution' },
  { label: 'Application', href: '/application' },
  { label: 'Core Technology', href: '/core-technology' },
  { label: 'News', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'About Us', href: '/about' },
  { label: 'Showroom', href: '/showroom' },
  { label: 'Article', href: '/article' },
  { label: 'Sitemap', href: '/sitemap' },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <p className="text-base font-bold tracking-tight text-gray-900">Tendzone</p>
            <p className="text-[12px] font-medium text-gray-500 mt-1">
              High-performance AV solutions for every application.
            </p>
          </div>

          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-medium text-gray-500 hover:text-red-500 transition-colors duration-200"
            aria-label="YouTube"
          >
            <div className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-200">
              <Youtube size={13} />
            </div>
            Follow us on YouTube
          </Link>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12.5px] font-semibold text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-gray-100 mb-5" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] font-medium text-gray-500">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <div className="flex items-center gap-1.5">
              <Phone size={12} className="text-red-500 shrink-0" />
              <span>8613632976066</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={12} className="text-red-500 shrink-0" />
              <a href="mailto:sales@tendzone.net" className="hover:text-red-500 transition-colors duration-200">
                sales@tendzone.net
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-red-500 shrink-0" />
              <span>Nanshan District, Shenzhen</span>
            </div>
          </div>

          <p className="shrink-0 text-gray-400">
            © Shenzhen Tendzone Intelligent Technology Co., Ltd.{' '}
            <Link href="/privacy-policy" className="hover:text-red-500 transition-colors duration-200">
              Privacy Policy
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}