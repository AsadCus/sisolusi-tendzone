"use client"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  Youtube,
  Globe,
  Search,
  ChevronDown,
  Menu,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link"
import Image from "next/image";


  const navLinks = [
  { label: "Home", href: "#", active: true, dropdown: false },
  { label: "Products", href: "#", dropdown: true },
  { label: "Solution", href: "#", dropdown: true },
  { label: "Application", href: "#", dropdown: true },
  { label: "Core Technology", href: "#", dropdown: false },
  { label: "News", href: "#", dropdown: true },
  { label: "Contact Us", href: "#", dropdown: true },
  { label: "About Us", href: "#", dropdown: true },
  { label: "Article", href: "#", dropdown: false },
];

const megaData = {
  Solution: {
    title: "Solutions",
    items: ["Smart City", "Industrial IoT", "Retail Analytics", "Security"],
  },
  Application: {
    title: "Applications",
    items: ["Traffic", "Retail", "Factory", "Healthcare"],
  },
  News: {
    title: "News Center",
    items: ["Company News", "Press Release", "Event"],
  },
  "Contact Us": {
    title: "Contact",
    items: ["Sales", "Support", "Partnership"],
  },
  "About Us": {
    title: "About",
    items: ["Company", "Careers", "Culture"],
  },
}

const productCategories = [
  {
    name: "All-in-one Solution",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/all-in-one",
  },
  {
    name: "Audio Processor",
    image: "/images/categories/audio-processor.jpg",
    href: "/products/audio-processor",
  },
  {
    name: "Network Audio Distribution",
    image: "/images/categories/network-audio-distributor.jpg",
    href: "/products/audio-over-ip",
  },
  {
    name: "Digital Conference System",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/conference-network",
  },
  {
    name: "Wireless Microphone System",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/uhf-wireless",
  },
  {
    name: "Microphone",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/ceiling-array",
  },
  {
    name: "Power Amplifier",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/digital-amplifier",
  },
  {
    name: "Speaker",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/ceiling-speaker",
  },
  {
    name: "Audio Accessories",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/dante-interface",
  },
  {
    name: "MIDIS AV Over IP Systems",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/midis-av",
  },
  {
    name: "Video Matrix",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/ip-matrix",
  },
  {
    name: "Video Wall Controller",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/video-wall",
  },
  {
    name: "HDMI Products",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/hdmi-extender",
  },
  {
    name: "Video Accessories",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/wireless-presentation",
  },
  {
    name: "Education Solution",
    image: "/images/categories/all-in-one.jpg",
    href: "/products/education-platform",
  },
];

export default function NavbarLanding(){
    const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null)
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current;
  }, [searchOpen]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);
  return (
 <div className="font-sans">
  <header className="fixed top-0 left-0 w-full z-999">
    <div className={cn(
  "bg-none transition-all duration-300",
  scrolled ? "h-0 opacity-0" : "h-8 md:h-10 opacity-100"
)}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4 text-xs text-white">
          <Link href="tel:8613632976066" className="flex items-center gap-1.5">
            <Phone size={13} />
            <span>8613632976066</span>
          </Link>
          <div className="w-px h-3.5 bg-none/20" />
          <Link href="mailto:sales@tendzone.net" className="flex items-center gap-1.5">
            <Mail size={13} />
            <span>sales@tendzone.net</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <Link href={"/"} className="w-7 h-7 bg-red-600 flex items-center justify-center rounded">
            <Youtube size={14} fill="white" />
          </Link>
          <button className="flex items-center gap-1.5 text-xs text-white">
            <Globe size={13} />
            <span>Language</span>
            <ChevronDown size={11} />
          </button>
        </div>
      </div>
    </div>

    <nav
  className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white text-black " : "bg-none text-black"
  }`}
>
          <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
            <Link href="#" className="flex flex-col items-center gap-0.5 mr-6 shrink-0 group">
             <Image
             src={"/images/logo/tendzone.png"}
             alt="logo company"
             width={80}
             height={80}
             />
            </Link>

            
            <ul className="hidden lg:flex flex-1">
  {navLinks.map((link) => (
    <li key={link.label} className="relative group">
    <Link
  href={link.href}
  className={cn(
    "flex items-center gap-1 px-3 h-16 text-sm font-medium transition-colors relative",
    scrolled ? "text-black hover:text-red-500" : "text-white hover:text-red-500",
    link.active ? "text-red-500" : ""
  )}
>
      {link.label}
  {link.dropdown && <ChevronDown size={12} />}
  <span
    className={cn(
      "absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transition-all duration-300",
      link.active ? "scale-x-80" : "scale-x-0 group-hover:scale-x-80"
    )}
  ></span>
</Link>

      {link.label !== "Products" &&
        link.dropdown &&
        megaData[link.label as keyof typeof megaData] && (
          <div className="absolute left-1/2 top-full -translate-x-1/2 w-screen max-w-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="mt-2 bg-white shadow-xl border border-white/10 rounded-xl p-4 grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <h4 className="text-red-500 font-bold mb-3">
                  {megaData[link.label as keyof typeof megaData].title}
                </h4>
              </div>
              <div className="col-span-3 grid grid-cols-1 gap-4">
                {megaData[link.label as keyof typeof megaData].items.map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="p-4 rounded-lg border border-white/10 hover:border-red-500/50 hover:bg-white/5 text-sm text-neutral-800 hover:text-red-500 transition"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        )}

      {link.label === "Products" && (
  <div className="absolute w-screen max-w-5xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
    <div className="mt-2 bg-white rounded-xl shadow-xl p-6">
      <div className="flex flex-warp gap-6 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
        {productCategories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="shrink-0 w-48 group rounded-xl overflow-hidden border border-neutral-200 hover:border-red-500 transition"
          >
            <div className="relative h-28">
              <Image
                src={cat.image || "/images/categories/placeholder.jpg"}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-3 text-center">
              <p className="text-sm font-medium text-neutral-800 group-hover:text-red-600 transition">
                {cat.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)}
    </li>
  ))}
</ul>

            <div className="hidden lg:flex items-center ml-3 gap-0">
              <div
                className={`flex items-center overflow-hidden transition-all duration-300 ${
                  searchOpen ? "w-44 border border-white/20 border-r-0 rounded-l" : "w-0"
                }`}
              >
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-200 text-sm text-neutral-200 placeholder-neutral-500 px-3 py-2 outline-none"
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className={`w-9 h-9 flex items-center justify-center bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 text-white ${searchOpen ? "rounded-r" : "rounded"}`}
              >
                <Search size={15} strokeWidth={2.5} />
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="lg:hidden ml-auto flex items-center justify-center w-9 h-9 border border-white/20 rounded text-neutral-300 hover:text-red-500 hover:border-red-500/50 transition-colors duration-200"
            >
              {mobileOpen
                ? <X size={18} strokeWidth={2} />
                : <Menu size={18} strokeWidth={2} />
              }
            </button>
          </div>
        </nav>

        <div
          className={`lg:hidden fixed inset-x-0 bottom-0 z-40 bg-gray-200/98 backdrop-blur-lg transition-all duration-300 overflow-y-auto
            ${mobileOpen
              ? "opacity-100 translate-y-0 pointer-events-auto top-25"
              : "opacity-0 -translate-y-2 pointer-events-none top-25"
            }`}
        >
          <div className="px-4 py-4 flex flex-col gap-0.5">
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-gray-200 border border-white/10 text-sm text-neutral-900 placeholder-neutral-500 px-3 py-2 rounded outline-none focus:border-red-500/50 transition-colors"
              />
              <button className="w-9 h-9 flex items-center justify-center bg-red-600 rounded text-white">
                <Search size={15} strokeWidth={2.5} />
              </button>
            </div>

            {navLinks.map((link) => {
  const isOpen = activeMobileMenu === link.label

  return (
    <div key={link.label} className="border-b border-white/5">
      <button
        onClick={() =>
          link.dropdown
            ? setActiveMobileMenu(isOpen ? null : link.label)
            : setMobileOpen(false)
        }
        className={`w-full flex items-center justify-between px-3 py-3 text-sm font-medium tracking-wide transition-colors
          ${link.active ? "text-red-500" : "text-neutral-900 hover:text-red-500"}
        `}
      >
        <span>{link.label}</span>
        {link.dropdown && (
          <ChevronDown
            size={14}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {isOpen && link.label !== "Products" && megaData[link.label as keyof typeof megaData] && (
        <div className="pl-4 pb-3 flex flex-col gap-2">
          {megaData[link.label as keyof typeof megaData].items.map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-neutral-900 hover:text-red-500 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      {isOpen && link.label === "Products" && (
        <div className="pl-4 pb-4 grid grid-cols-1 gap-4">
          <div>
            <p className="text-red-500 text-xs font-medium mb-1">Audio Processor</p>
            <Link href="/products/open-dsp" className="block text-sm text-neutral-900 hover:text-red-500">Open Architecture DSP</Link>
            <Link href="/products/web-dsp" className="block text-sm text-neutral-900 hover:text-red-500">Web Based Audio Processors</Link>
            <Link href="/products/fixed-dsp" className="block text-sm text-neutral-900 hover:text-red-500">Fixed Audio Processors</Link>
          </div>

          <div>
            <p className="text-red-500 text-xs font-medium mb-1">Network Audio</p>
            <Link href="/products/audio-over-ip" className="block text-sm text-neutral-900 hover:text-red-500">Audio Over IP</Link>
            <Link href="/products/network-mic" className="block text-sm text-neutral-900 hover:text-red-500">Network Microphone</Link>
            <Link href="/products/network-speaker" className="block text-sm text-neutral-900 hover:text-red-500">Network Speaker</Link>
          </div>

          <div>
            <p className="text-red-500 text-xs font-medium mb-1">Conference System</p>
            <Link href="/products/conference-network" className="block text-sm text-neutral-900 hover:text-red-500">Network Conference</Link>
            <Link href="/products/conference-24g" className="block text-sm text-neutral-900 hover:text-red-500">2.4G Wireless</Link>
          </div>
        </div>
      )}
    </div>
  )
})}

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="tel:8613632976066"
                className="flex items-center gap-2 text-sm text-neutral-900 hover:text-red-500 transition-colors no-underline"
              >
                <Phone size={14} strokeWidth={2} />
                <span>8613632976066</span>
              </Link>
              <Link
                href="mailto:sales@tendzone.net"
                className="flex items-center gap-2 text-sm text-neutral-900 hover:text-red-500 transition-colors no-underline"
              >
                <Mail size={14} strokeWidth={2} />
                <span>sales@tendzone.net</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}