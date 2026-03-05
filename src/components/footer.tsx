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
    <footer className="bg-gray-100 text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-35 px-6 py-14">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xl font-semibold tracking-tight text-gray-900">Tendzone</p>
            <p className="text-xs text-gray-400 mt-1">
              High-performance AV solutions for every application.
            </p>
          </div>

    
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-red-500 transition-colors duration-200"
            aria-label="YouTube"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-red-500 hover:text-white transition-colors duration-200">
              <Youtube size={14} />
            </div>
            Follow us on YouTube
          </Link>
        </div>


        <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>


        <div className="border-t border-gray-100 mb-8" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-xs text-gray-400">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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

          <p className="shrink-0">
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