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
    <footer className='bg-[#f5f5f5] border-t border-gray-200'>
      <div className='max-w-7xl mx-auto px-6 py-10'>

        <nav className='flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8'>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='text-sm text-gray-600 hover:text-red-500 transition-colors duration-200'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='flex justify-center mb-8'>
          <Link
            href='https://youtube.com'
            target='_blank'
            rel='noopener noreferrer'
            className='w-9 h-9 flex items-center justify-center rounded bg-gray-800 hover:bg-red-500 transition-colors duration-200'
            aria-label='YouTube'
          >
            <Youtube size={16} className='text-white' />
          </Link>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mb-8'>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <Phone size={14} className='text-red-500 shrink-0' />
            <span>8613632976066</span>
          </div>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <Mail size={14} className='text-red-500 shrink-0' />
            <a
              href='mailto:sales@tendzone.net'
              className='hover:text-red-500 transition-colors duration-200'
            >
              sales@tendzone.net
            </a>
          </div>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <MapPin size={14} className='text-red-500 shrink-0' />
            <span>
              Building 1A, Building 16, Shenzhen International Innovation Valley,
              Dashi 1st Road, Nanshan District, Shenzhen
            </span>
          </div>
        </div>

        <div className='text-center text-xs text-gray-500'>
          Copyright © Shenzhen Tendzone Intelligent Technology Co., Ltd. All Rights Reserved.{' '}
          <Link
            href='/privacy-policy'
            className='hover:text-red-500 transition-colors duration-200'
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}