"use client"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail, Globe, Search, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link"
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/", dropdown: false },
  { label: "Products", href: "/products", dropdown: true },
  { label: "Solution", href: "#solusi", dropdown: false },
  { label: "Application", href: "#application", dropdown: false },
  { label: "Core Technology", href: "#core-technology", dropdown: false },
  { label: "News", href: "#news", dropdown: false },
  { label: "Contact Us", href: "#contact-us", dropdown: false },
  { label: "About Us", href: "#about-us", dropdown: false },
  { label: "Article", href: "#article", dropdown: false },
];

const megaData = {
  Solution: { title: "Solutions", items: ["Smart City", "Industrial IoT", "Retail Analytics", "Security"] },
  Application: { title: "Applications", items: ["Traffic", "Retail", "Factory", "Healthcare"] },
  News: { title: "News Center", items: ["Company News", "Press Release", "Event"] },
  "Contact Us": { title: "Contact", items: ["Sales", "Support", "Partnership"] },
  "About Us": { title: "About", items: ["Company", "Careers", "Culture"] },
};

const productCategories = [
  { category: "All-in-one Solution", href: "/all-in-one-solution" },
  { category: "Audio Processor", href: "/audio-processor" },
  { category: "Network Audio Distribution", href: "/network-audio-distribution" },
  { category: "Digital Conference System", href: "/digital-conference-system" },
  { category: "Wireless Microphone System", href: "/products/uhf-wireless" },
  { category: "Microphone", href: "/products/ceiling-array" },
  { category: "Power Amplifier", href: "/power-amplifer" },
  { category: "Speaker", href: "/speaker" },
  { category: "Audio Accessories", href: "/products/dante-interface" },
  { category: "MIDIS AV Over IP Systems", href: "/midis-distributed-multimedia-transmission-control" },
  { category: "Video Matrix", href: "/video-matrix" },
  { category: "Video Wall Controller", href: "/video-wall-controller" },
  { category: "HDMI Products", href: "/hdmi-products" },
  { category: "Video Accessories", href: "/video-accessories" },
  { category: "Education Solution", href: "/education-solution" },
];

export default function NavbarProductLanding() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href.startsWith("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isCategoryActive = (href: string) => {
    if (!href || href === "#") return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Smooth scroll handler — compensates for fixed navbar height
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();

      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      // Navbar height: utility bar (36px) + main nav (64px) = 100px when expanded,
      // or just 64px when scrolled. Add 16px breathing room.
      const navHeight = scrolled ? 64 + 16 : 100 + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: "smooth" });
      setMobileOpen(false);
    },
    [scrolled]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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

          {/* Utility bar */}
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
              <button className={cn(
                "flex items-center gap-1 text-xs transition-colors",
                isTransparent ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-gray-800"
              )}>
                <Globe size={11} strokeWidth={2} /><span>Language</span><ChevronDown size={10} />
              </button>
            </div>
          </div>

          {/* Main nav */}
          <nav className={cn(
            "transition-all duration-300",
            isTransparent ? "bg-transparent" : "bg-white shadow-sm border-b border-gray-100"
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
                  const isAnchor = link.href.startsWith("#");
                  return (
                    <li key={link.label} className="relative group">
                      <Link
                        href={link.href}
                        onClick={isAnchor ? (e) => handleAnchorClick(e, link.href) : undefined}
                        scroll={!isAnchor}
                        className={cn(
                          "relative flex items-center gap-0.5 px-3 py-2 text-[13.5px] font-medium transition-all duration-200",
                          isTransparent
                            ? active ? "text-white" : "text-white/80 hover:text-white"
                            : active ? "text-red-600" : "text-gray-700 hover:text-red-600"
                        )}
                      >
                        {link.label}
                        {link.dropdown && (
                          <ChevronDown size={12} strokeWidth={2.5}
                            className="transition-transform duration-200 group-hover:rotate-180 opacity-60 mt-px" />
                        )}
                        <span className={cn(
                          "absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-300 origin-left bg-red-500",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )} />
                      </Link>

                      {/* Products mega menu */}
                      {link.label === "Products" && (
                        <div className="fixed left-0 right-0 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                          style={{
                            top: isTransparent ? "100px" : "64px",
                            zIndex: 100,
                            transition: "opacity 180ms ease, visibility 180ms ease, top 300ms ease"
                          }}>
                          <div className="mega-enter bg-white max-w-6xl w-full mx-4 rounded-sm shadow-2xl shadow-black/15 overflow-hidden border border-red-100">
                            <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">All Products</span>
                              </div>
                              <span className="text-xs text-gray-400">{productCategories.length} categories</span>
                            </div>
                            <div className="px-8 py-6">
                              <div className="grid grid-cols-5 gap-x-6 gap-y-3">
                                {productCategories.map((cat) => {
                                  const catActive = isCategoryActive(cat.href);
                                  return (
                                    <Link
                                      key={cat.category}
                                      href={cat.href}
                                      className={cn(
                                        "flex items-center gap-2 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 group/cat",
                                        catActive
                                          ? "bg-red-50 text-red-600"
                                          : "text-gray-600 hover:bg-gray-50 hover:text-red-600"
                                      )}
                                    >
                                      <span className={cn(
                                        "w-1 h-1 rounded-full bg-red-500 shrink-0 transition-all duration-200",
                                        catActive ? "opacity-100" : "opacity-0 group-hover/cat:opacity-100"
                                      )} />
                                      {cat.category}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Other dropdowns */}
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

              {/* Search */}
              <div className="hidden lg:flex items-center gap-2 ml-2">
                <div className={cn(
                  "flex items-center transition-all duration-300 rounded-xl overflow-hidden",
                  isTransparent ? "bg-white/10 border border-white/25" : "bg-gray-100",
                  searchOpen ? "w-36 pr-0" : "w-9"
                )}>
                  <button onClick={() => setSearchOpen(!searchOpen)}
                    className="w-9 h-9 shrink-0 flex items-center justify-center transition-colors">
                    {searchOpen
                      ? <X size={14} strokeWidth={2.5} className={isTransparent ? "text-white ml-4" : "text-gray-500"} />
                      : <Search size={14} strokeWidth={2.5} className={isTransparent ? "text-white" : "text-gray-500"} />
                    }
                  </button>
                  {searchOpen && (
                    <input ref={searchRef} type="text" placeholder="Search..."
                      className={cn(
                        "flex-1 text-[13px] pr-3 py-2 outline-none bg-transparent",
                        isTransparent ? "text-white placeholder-white/60" : "text-gray-800 placeholder-gray-400"
                      )}
                      onBlur={() => setSearchOpen(false)} />
                  )}
                </div>
                <Link href="/contact"
                  className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 text-white text-[13px] font-semibold px-4 py-2 rounded-xl">
                  Get Quote
                </Link>
              </div>

              {/* Mobile hamburger */}
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

          {/* Mobile drawer */}
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
                const isAnchor = link.href.startsWith("#");
                return (
                  <div key={link.label}>
                    <div className={cn(
                      "flex items-center rounded-xl transition-colors",
                      active ? "bg-red-50" : "hover:bg-gray-50"
                    )}>
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (isAnchor) handleAnchorClick(e, link.href);
                          else if (!link.dropdown) setMobileOpen(false);
                        }}
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

                    {/* Mobile Products — categories only */}
                    {isOpen && link.label === "Products" && (
                      <div className="mx-3 mb-3 mt-1 bg-gray-50 rounded-xl p-3 grid grid-cols-2 gap-1">
                        {productCategories.map((cat) => {
                          const catActive = isCategoryActive(cat.href);
                          return (
                            <Link
                              key={cat.category}
                              href={cat.href}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-medium transition-colors",
                                catActive
                                  ? "bg-red-50 text-red-600"
                                  : "text-gray-600 hover:text-red-500 hover:bg-white"
                              )}
                            >
                              <ArrowRight size={10} strokeWidth={2.5} className={cn(
                                "shrink-0 transition-colors",
                                catActive ? "text-red-400" : "text-gray-300"
                              )} />
                              {cat.category}
                            </Link>
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
                  <Mail size={13} strokeWidth={2}/><span>sales@tendzone.net</span>
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