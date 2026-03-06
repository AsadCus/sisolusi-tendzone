"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CategoryNav from "./buttonnav";
interface PageHeroProps {
  title: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  backgroundImage = "/images/banner/banner.png",
}: PageHeroProps) {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <>
      <section
        className="relative w-full h-68 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        
        
      </section>

      <section className="w-full bg-gray-100 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {pathSegments.map((segment, index) => {
                const href = "/" + pathSegments.slice(0, index + 1).join("/");
                const isLast = index === pathSegments.length - 1;

                return (
                  <div key={href} className="flex items-center">
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="capitalize">
                          {segment.replace("-", " ")}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link href={href} className="capitalize">
                            {segment.replace("-", " ")}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>

          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
        </div>
      {/* <CategoryNav /> */}
      </section>
    </>
  );
}