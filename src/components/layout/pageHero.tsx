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
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage = "/images/banner/banner.png",
}: PageHeroProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <>
      <section className="relative w-full h-56 md:h-64 bg-white overflow-hidden flex items-center">
        <TextureOverlay texture="dots" opacity={0.3}/>
        
        <div className="absolute bottom-5 right-20 w-14 h-14 border border-red-100 rotate-12 hidden md:block" />
        <div className="absolute top-7 right-44 w-7 h-7 border border-red-100 rotate-45 hidden md:block" />
        <div className="absolute top-5 right-20 w-3 h-3 bg-red-100 rotate-45 hidden md:block" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-8 md:px-12 mt-12">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-5 h-[2px] bg-red-500 shrink-0" />
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-red-400 leading-none">
              Tendzone Products
            </span>
          </div>

          <h1 className="text-[28px] md:text-[38px] font-bold text-gray-900 leading-[1.15] tracking-tight max-w-lg">
            {title}
          </h1>

          <div className="flex items-center gap-3 mt-3">
            <span className="w-8 h-[2px] bg-red-500" />
            <span className="w-2 h-[2px] bg-red-200" />
          </div>

          {subtitle && (
            <p className="mt-3 text-[13px] text-gray-400 max-w-md leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section className="w-full bg-white border-b border-gray-100 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-2.5 flex items-center gap-3">
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

              {pathSegments.map((segment, index) => {
                const href = "/" + pathSegments.slice(0, index + 1).join("/");
                const isLast = index === pathSegments.length - 1;
                const label = segment.replace(/-/g, " ");

                return (
                  <div key={href} className="flex items-center gap-0.5">
                    <ChevronRight className="h-3 w-3 text-gray-200 mx-0.5" />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="capitalize text-[12px] font-semibold text-red-500 px-1 py-0.5">
                          {label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link
                            href={href}
                            className="capitalize text-[12px] font-medium text-gray-400 hover:text-red-500 transition-colors duration-150 px-1 py-0.5 rounded"
                          >
                            {label}
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