"use client"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail, Youtube, Globe, Search, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link"
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/", dropdown: false },
  { label: "Products", href: "/products", dropdown: true },
  { label: "Solution", href: "#", dropdown: true },
  { label: "Application", href: "#", dropdown: true },
  { label: "Core Technology", href: "#", dropdown: false },
  { label: "News", href: "#", dropdown: true },
  { label: "Contact Us", href: "#", dropdown: true },
  { label: "About Us", href: "#", dropdown: true },
  { label: "Article", href: "#", dropdown: false },
];

const megaData = {
  Solution: { title: "Solutions", items: ["Smart City", "Industrial IoT", "Retail Analytics", "Security"] },
  Application: { title: "Applications", items: ["Traffic", "Retail", "Factory", "Healthcare"] },
  News: { title: "News Center", items: ["Company News", "Press Release", "Event"] },
  "Contact Us": { title: "Contact", items: ["Sales", "Support", "Partnership"] },
  "About Us": { title: "About", items: ["Company", "Careers", "Culture"] },
};

const productFlat = [
  { category: "All-in-one Solution", href: "/all-in-one-solution",
    items: [
      { label: "All in One Video Conference Camera With Built-in Speakerphone", href: "/all-in-one-solution/all-in-one-audio-visual-solutions" },
      { label: "Twelve-in-one Integrated Processor", href: "/all-in-one-solution/all-in-one-audio-visual-solutions" },
      { label: "Embedded Wired Control Touch Panel", href: "/all-in-one-solution/all-in-one-audio-visual-solutions" },
      { label: "Wired Control Touch Panel", href: "/all-in-one-solution/all-in-one-audio-visual-solutions" },
      { label: "Thirteen-in-one Integrated Processor", href: "/all-in-one-solution/all-in-one-audio-visual-solutions" },
      { label: "Nine-in-one Integrated Processor", href: "/all-in-one-solution/all-in-one-audio-visual-solutions" },
      { label: "All-in-one Integrated Processor", href: "/all-in-one-solution/all-in-one-audio-visual-solutions" }
    ] },
  { category: "Audio Processor", href: "/audio-processor",
    items: [
      { label: "Open Architecture DSP", href: "/audio-processor/Open-Architecture-DSP" },
      { label: "Web Based Audio Processors", href: "/products/web-dsp" },
      { label: "Fixed Audio Processors", href: "/products/fixed-dsp" },
      { label: "Digital Audio Processor", href: "/products/digital-audio" },
    ] },
  { category: "Network Audio Distribution", href: "/network-audio-distribution",
    items: [
      { label: "Audio Over IP", href: "/network-audio-distribution/audio-over-ip" },
      { label: "Network Input And Output Interface", href: "/network-audio-distribution/network-input-and-output-interface" },
      { label: "Network Adapters", href: "/network-audio-distribution/network-adapters" },
      { label: "Network Microphone", href: "/network-audio-distribution/network-microphone" },
      { label: "Network Speaker", href: "/network-audio-distribution/network-speaker" },
    ] },
  { category: "Digital Conference System", href: "/digital-conference-system",
    items: [
      { label: "Network Digital Conference System", href: "/digital-conference-system/network-digital-conference-system" },
      { label: "2.4G Wireless Digital Conference System", href: "/digital-conference-system/2-4g-wireless-digital-conference-system" },
      { label: "5G Digital Conference System", href: "/digital-conference-system/5g-digital-conference-system" },
    ] },
  { category: "Wireless Microphone System", href: "/products/uhf-wireless",
    items: [{ label: "UHF Wireless Microphone System", href: "/products/uhf-wireless" }] },
  { category: "Microphone", href: "/products/ceiling-array",
    items: [
      { label: "Ceiling Array Microphones", href: "/products/ceiling-array" },
      { label: "Analog Condenser Microphones", href: "/products/condenser-mic" },
    ] },
  { category: "Power Amplifier", href: "/power-amplifer",
    items: [{ label: "Digital Power Amplifiers", href: "/power-amplifer/digital-power-amplifiers" }] },
  { category: "Speaker", href: "/speaker",
    items: [
      { label: "Ceiling Speakers", href: "/products/ceiling-speaker" },
      { label: "Conference Speakers", href: "/products/conference-speaker" },
      { label: "Point Source Speakers", href: "/products/point-source" },
      { label: "Column Speakers", href: "/products/column-speaker" },
      { label: "Monitor Speaker", href: "/products/monitor-speaker" },
    ] },
  { category: "Audio Accessories", href: "/products/dante-interface",
    items: [
      { label: "Dante Interface", href: "/products/dante-interface" },
      { label: "Dante Adapters", href: "/products/dante-adapters" },
      { label: "Audio Control Panels", href: "/products/audio-control" },
    ] },
  { category: "MIDIS AV Over IP Systems", href: "/products/midis-av",
    items: [
      { label: "MIDIS AV Over IP Systems", href: "/products/midis-av" },
      { label: "AV Over IP Encoder Decoder", href: "/products/av-encoder" },
    ] },
  { category: "Video Matrix", href: "/products/ip-matrix",
    items: [
      { label: "IP Matrix", href: "/products/ip-matrix" },
      { label: "Seamless Video Matrix", href: "/products/seamless-matrix" },
      { label: "Seamed Video Matrix", href: "/products/seamed-matrix" },
      { label: "Modular Matrix", href: "/products/modular-matrix" },
    ] },
  { category: "Video Wall Controller", href: "/products/video-wall",
    items: [{ label: "Hybrid Modular Video Wall Controller", href: "/products/video-wall" }] },
  { category: "HDMI Products", href: "/products/hdmi-extender",
    items: [
      { label: "HDMI Extenders", href: "/products/hdmi-extender" },
      { label: "HDMI Distributors", href: "/products/hdmi-distributor" },
      { label: "HDMI Switcher", href: "/products/hdmi-switcher" },
    ] },
  { category: "Video Accessories", href: "/products/wireless-presentation",
    items: [
      { label: "Wireless Presentation", href: "/products/wireless-presentation" },
      { label: "BYOD Switcher", href: "/products/byod-switcher" },
    ] },
  { category: "Education Solution", href: "/products/education-platform",
    items: [
      { label: "Education Application Platform", href: "/products/education-platform" },
      { label: "Education Terminals", href: "/products/education-terminals" },
      { label: "Microphones And Speakers", href: "/products/edu-mic-speaker" },
      { label: "Teaching Cameras", href: "/products/teaching-camera" },
      { label: "IOT Control Products", href: "/products/iot-control" },
      { label: "Control Panels", href: "/products/control-panels" },
    ] },
];

export default function NavbarProductLanding() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const lastScrollY = useRef(0);

  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isCategoryActive = (href: string) => {
    if (!href || href === "#") return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isSubItemActive = (href: string) => {
    if (!href || href === "#") return false;
    return pathname === href;
  };

  const isCategoryGroupActive = (group: typeof productFlat[0]) => {
    return (
      isCategoryActive(group.href) ||
      group.items.some((item) => isSubItemActive(item.href))
    );
  };

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onProductPage = productFlat.some((g) => isCategoryGroupActive(g));
    if (onProductPage && activeMobileMenu !== "Products") {
      setActiveMobileMenu("Products");
    }
  }, [pathname]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mega-enter { animation: slideDown 180ms ease forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="font-sans">
        <header className="fixed top-0 left-0 w-full z-50 flex flex-col">

          <div className={cn(
            "transition-all duration-300 overflow-hidden",
            isTransparent
              ? "bg-transparent border-b border-white/10 h-9 opacity-100"
              : scrolled
                ? "h-0 opacity-0"
                : "bg-white border-b border-gray-100 h-9 opacity-100"
          )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
              <div className="flex items-center gap-5 text-xs">
                <Link href="tel:8613632976066" className={cn(
                  "flex items-center gap-1.5 transition-colors duration-200",
                  isTransparent ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-red-500"
                )}>
                  <Phone size={12} strokeWidth={2} /><span>8613632976066</span>
                </Link>
                <span className={cn("w-px h-3", isTransparent ? "bg-white/20" : "bg-gray-200")} />
                <Link href="mailto:sales@tendzone.net" className={cn(
                  "flex items-center gap-1.5 transition-colors duration-200",
                  isTransparent ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-red-500"
                )}>
                  <Mail size={12} strokeWidth={2} /><span>sales@tendzone.net</span>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <button className={cn(
                  "flex items-center gap-1 text-xs transition-colors",
                  isTransparent ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-gray-800"
                )}>
                  <Globe size={11} strokeWidth={2} /><span>Language</span><ChevronDown size={10} />
                </button>
              </div>
            </div>
          </div>

          <nav className={cn(
            "transition-all duration-300",
            isTransparent
              ? "bg-transparent"
              : "bg-white shadow-sm border-b border-gray-100"
          )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center h-16">

              <Link href="/" className="mr-8 shrink-0">
                <Image src="/images/logo/tendzone.png" alt="Tendzone" width={130} height={40}
                  className={cn(
                    "h-10 w-auto object-contain transition-all duration-300",
                    isTransparent ? "brightness-0 invert" : "brightness-100"
                  )} />
              </Link>

              <ul className="hidden lg:flex flex-1 items-center gap-0">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.label} className="relative group">
                      <Link
                        href={link.href}
                        className={cn(
                          "relative flex items-center gap-0.5 px-3 py-2 text-[13.5px] font-medium transition-all duration-200",
                          isTransparent
                            ? active
                              ? "text-white"
                              : "text-white/80 hover:text-white"
                            : active
                              ? "text-red-600"
                              : "text-gray-700 hover:text-red-600"
                        )}
                      >
                        {link.label}
                        {link.dropdown && (
                          <ChevronDown size={12} strokeWidth={2.5}
                            className="transition-transform duration-200 group-hover:rotate-180 opacity-60 mt-px" />
                        )}
                        <span className={cn(
                          "absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-300 origin-left",
                          isTransparent ? "bg-red-500" : "bg-red-500",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )} />
                      </Link>

                      {link.label === "Products" && (
                        <div className="fixed left-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                          style={{
                            top: isTransparent ? "100px" : "64px",
                            zIndex: 100,
                            transition: "opacity 180ms ease, visibility 180ms ease, top 300ms ease"
                          }}>
                          <div className="mega-enter bg-white rounded-3xl shadow-2xl shadow-black/15 overflow-hidden border border-red-100">
                            <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">All Products</span>
                              </div>
                              <span className="text-xs text-gray-400">{productFlat.length} categories</span>
                            </div>
                            <div className="px-8 py-6 overflow-y-auto no-scrollbar" style={{ maxHeight: "62vh" }}>
                              <div className="grid grid-cols-4 gap-x-8 gap-y-7">
                                {productFlat.map((group) => {
                                  const catActive = isCategoryActive(group.href);
                                  return (
                                    <div key={group.category} className="group/cat">
                                      <Link href={group.href} className="flex items-center gap-1.5 mb-2.5 group/heading">
                                        <span className={cn(
                                          "w-1 rounded-full bg-red-500 shrink-0 transition-all duration-200 group-hover/heading:h-5",
                                          catActive ? "h-5" : "h-3.5"
                                        )} />
                                        <span className={cn(
                                          "text-[13px] font-bold transition-colors duration-200",
                                          catActive
                                            ? "text-red-600"
                                            : "text-gray-800 group-hover/heading:text-red-600"
                                        )}>
                                          {group.category}
                                        </span>
                                        {catActive && (
                                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                        )}
                                      </Link>
                                      <ul className="space-y-1.5 pl-3.5">
                                        {group.items.map((item) => {
                                          const subActive = isSubItemActive(item.href);
                                          return (
                                            <li key={item.label}>
                                              <Link
                                                href={item.href}
                                                className={cn(
                                                  "text-[13px] transition-colors duration-150 leading-snug flex items-center gap-1",
                                                  subActive
                                                    ? "text-red-500 font-semibold"
                                                    : "text-gray-500 hover:text-red-500"
                                                )}
                                              >
                                                {subActive && (
                                                  <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" />
                                                )}
                                                {item.label}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {link.label !== "Products" && link.dropdown && megaData[link.label as keyof typeof megaData] && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-100"
                          style={{ transition: "opacity 150ms ease, visibility 150ms ease" }}>
                          <div className="mega-enter bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden min-w-47.5">
                            <div className="px-5 pt-4 pb-2.5">
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                {megaData[link.label as keyof typeof megaData].title}
                              </p>
                            </div>
                            <div className="mx-5 h-px bg-gray-100" />
                            <div className="px-5 py-2.5 flex flex-col">
                              {megaData[link.label as keyof typeof megaData].items.map((item, i) => (
                                <Link key={item} href="#"
                                  className="py-2 text-[13px] text-gray-600 hover:text-red-500 transition-colors duration-150 flex items-center gap-2 group/item"
                                  style={{ animationDelay: `${i * 30}ms` }}>
                                  <span className="w-0 group-hover/item:w-3 h-px bg-red-400 transition-all duration-200 rounded-full" />
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="hidden lg:flex items-center gap-2 ml-2">
                <div className={cn(
                  "flex items-center transition-all duration-300 rounded-xl overflow-hidden",
                  isTransparent ? "bg-white/10 border border-white/25" : "bg-gray-100",
                  searchOpen ? "w-36 pr-0" : "w-9"
                )}>
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="w-9 h-9 shrink-0 flex items-center justify-center transition-colors"
                  >
                    {searchOpen
                      ? <X size={14} strokeWidth={2.5} className={isTransparent ? "text-white ml-4" : "text-gray-500"} />
                      : <Search size={14} strokeWidth={2.5} className={isTransparent ? "text-white" : "text-gray-500"} />
                    }
                  </button>
                  {searchOpen && (
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Search..."
                      className={cn(
                        "flex-1 text-[13px] pr-3 py-2 outline-none bg-transparent",
                        isTransparent ? "text-white placeholder-white/60" : "text-gray-800 placeholder-gray-400"
                      )}
                      onBlur={() => setSearchOpen(false)}
                    />
                  )}
                </div>
                <Link href="/contact"
                  className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 text-white text-[13px] font-semibold px-4 py-2 rounded-xl">
                  Get Quote
                </Link>
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  "lg:hidden ml-auto flex items-center justify-center w-9 h-9 rounded-xl transition-colors",
                  isTransparent
                    ? "text-white border border-white/30 hover:border-white/60"
                    : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                )}
              >
                {mobileOpen ? <X size={17} strokeWidth={2} /> : <Menu size={17} strokeWidth={2} />}
              </button>
            </div>
          </nav>

          <div className={cn(
            "lg:hidden fixed inset-x-3 bottom-3 z-100 bg-white rounded-2xl shadow-2xl overflow-y-auto transition-all duration-300 border border-gray-100",
            mobileOpen ? "opacity-100 pointer-events-auto top-30" : "opacity-0 pointer-events-none top-30"
          )}>
            <div className="px-4 py-5 flex flex-col">
              <div className="flex items-center gap-2 mb-5 bg-gray-50 rounded-xl px-3 py-2">
                <Search size={14} className="text-gray-400 shrink-0" />
                <input type="text" placeholder="Search products..."
                  className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none" />
              </div>

              {navLinks.map((link) => {
                const active = isActive(link.href);
                const isOpen = activeMobileMenu === link.label;
                return (
                  <div key={link.label}>
                    <div className={cn(
                      "flex items-center rounded-xl transition-colors",
                      active ? "bg-red-50" : "hover:bg-red-500"
                    )}>
                      <Link
                        href={link.href === "#" ? "#" : link.href}
                        onClick={() => !link.dropdown && setMobileOpen(false)}
                        className={cn(
                          "flex-1 px-3 py-3 text-sm font-medium transition-colors",
                          active ? "text-red-600" : "text-gray-700"
                        )}
                      >
                        {link.label}
                      </Link>
                      {link.dropdown && (
                        <button
                          onClick={() => setActiveMobileMenu(isOpen ? null : link.label)}
                          className="px-3 py-3 flex items-center justify-center"
                        >
                          <ChevronDown size={13} className={cn("text-gray-400 transition-transform", isOpen && "rotate-180 text-red-400")} />
                        </button>
                      )}
                    </div>

                    {isOpen && link.label === "Products" && (
                      <div className="mx-3 mb-3 mt-1 bg-gray-50 rounded-xl p-4 flex flex-col gap-4">
                        {productFlat.map((group) => {
                          const catActive = isCategoryActive(group.href);
                          const groupHasActiveChild = isCategoryGroupActive(group);
                          return (
                            <div key={group.category}>
                              <Link
                                href={group.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                  "flex items-center justify-between mb-1.5 rounded-lg px-1 py-0.5 -mx-1 transition-colors",
                                  catActive ? "text-red-600" : "text-gray-800 hover:text-red-600"
                                )}
                              >
                                <span className="flex items-center gap-1.5 text-[13px] font-bold">
                                  <span className={cn(
                                    "w-1 rounded-full bg-red-500 shrink-0 transition-all duration-200",
                                    groupHasActiveChild ? "h-4" : "h-3"
                                  )} />
                                  {group.category}
                                </span>
                                <ArrowRight size={12} strokeWidth={2.5}
                                  className={cn("shrink-0 transition-colors", catActive ? "text-red-400" : "text-gray-300")} />
                              </Link>
                              {group.items.map((item) => {
                                const subActive = isSubItemActive(item.href);
                                return (
                                  <Link key={item.label} href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                      "flex items-center gap-1.5 text-[13px] py-0.5 pl-3.5 transition-colors",
                                      subActive ? "text-red-500 font-semibold" : "text-gray-500 hover:text-red-500"
                                    )}
                                  >
                                    {subActive && <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" />}
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {isOpen && link.label !== "Products" && megaData[link.label as keyof typeof megaData] && (
                      <div className="mx-3 mb-3 mt-1 bg-gray-50 rounded-xl px-4 py-2 flex flex-col">
                        {megaData[link.label as keyof typeof megaData].items.map((item) => (
                          <Link key={item} href="#" onClick={() => setMobileOpen(false)}
                            className="text-[13px] text-gray-500 hover:text-red-500 py-2">
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link href="tel:8613632976066" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-red-500 transition-colors">
                  <Phone size={13} strokeWidth={2} /><span>8613632976066</span>
                </Link>
                <Link href="mailto:sales@tendzone.net" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-red-500 transition-colors">
                  <Mail size={13} strokeWidth={2} /><span>sales@tendzone.net</span>
                </Link>
                <Link href="/contact"
                  className="mt-2 flex items-center justify-center bg-red-600 hover:bg-red-700 transition-colors text-white text-sm font-semibold py-3 rounded-xl">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

        </header>
      </div>
    </>
  );
}