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

export default function ProductsHero() {
  return (
    <>
      <section
        className="relative w-full h-75 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/images/banner/banner.png')", // ganti dengan image kamu
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white">
            Products
          </h1>
        </div>
      </section>
      <section className="w-full bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h2 className="text-lg font-semibold text-gray-800">
            Products
          </h2>
        </div>
      </section>
    </>
  );
}