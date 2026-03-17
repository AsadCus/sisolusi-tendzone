"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { Home, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TextureOverlay } from "../ui/texture-overlay";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage = "/images/banner/banner.png",
  breadcrumbs,
}: PageHeroProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Pakai breadcrumbs manual jika disediakan, fallback ke auto dari URL
  const crumbs = breadcrumbs ?? pathSegments.map((segment, index) => ({
    label: segment.replace(/-/g, " "),
    href: "/" + pathSegments.slice(0, index + 1).join("/"),
  }));

  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section className="relative w-full overflow-hidden bg-white border-b border-gray-100">

        <TextureOverlay texture="dots" opacity={0.2} />

        {/* Background circle */}
        <div className="pointer-events-none absolute -top-28 -right-28 w-[380px] h-[380px] rounded-full bg-gray-50" />

        {/* Geometric ornaments */}
        <div className="absolute bottom-6 right-20 w-12 h-12 border border-red-100 rotate-12 hidden md:block pointer-events-none" />
        <div className="absolute top-[44px] right-44 w-5 h-5 border border-red-100/70 rotate-45 hidden md:block pointer-events-none" />
        <div className="absolute top-[40px] right-20 w-2.5 h-2.5 bg-red-200 rotate-45 hidden md:block pointer-events-none" />

        {/* Dot cluster */}
        <div className="absolute bottom-8 left-8 items-center gap-1.5 hidden md:flex pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-red-200/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-red-100/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-200/50" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-8 pt-28 pb-10 md:pt-32 md:pb-14">

          {/* Eyebrow label */}
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-[2px] bg-red-500 shrink-0 rounded-full" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-red-400 leading-none">
              Tendzone Products
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900 leading-[1.1] tracking-tight max-w-xl">
            {title}
          </h1>

          {/* Decorative rule */}
          <div className="flex items-center gap-1.5 mt-5">
            <span className="w-9 h-[3px] bg-red-500 rounded-full" />
            <span className="w-3 h-[3px] bg-red-300 rounded-full" />
            <span className="w-1.5 h-[3px] bg-red-100 rounded-full" />
          </div>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-4 text-[13px] text-gray-400 max-w-md leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* ─── Breadcrumb Bar ─── */}
      <section className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 flex items-center gap-3 h-10">
          <span className="w-[3px] h-[14px] bg-red-500 shrink-0 rounded-full" />

          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-0.5 flex-wrap">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-1.5 text-[12px] font-medium text-gray-400 hover:text-red-500 transition-colors duration-150 px-1 py-0.5 rounded"
                  >
                    <Home className="h-3 w-3" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;

                return (
                  <div key={crumb.href} className="flex items-center gap-0.5">
                    <ChevronRight className="h-3 w-3 text-gray-200 mx-0.5" />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="capitalize text-[12px] font-semibold text-red-500 px-1 py-0.5">
                          {crumb.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link
                            href={crumb.href}
                            className="capitalize text-[12px] font-medium text-gray-400 hover:text-red-500 transition-colors duration-150 px-1 py-0.5 rounded"
                          >
                            {crumb.label}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>
    </>
  );
}