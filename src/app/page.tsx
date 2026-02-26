"use client";

import { Header } from "@/components/ui/header-1";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import NavbarLanding from "@/components/navbar-landing";
import Image from "next/image";
import Link from "next/link";
import MainProduct from "@/components/list-main-product";
import AboutSection from "@/components/about-us";
import WhyChooseUs from "@/components/feature";
import OdmOemSection from "@/components/oem-odm"
import BannerCarousel from "@/components/banner-product";
import CertifiedBy from "@/components/certified"
import ApplicationAreasSection from "@/components/application-areas";
import TestimoniesAreasSection from "@/components/testminonies";
import SponsoredBy from "@/components/sponsored";
import BlogSection from "@/components/blog";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <NavbarLanding />
      <BannerCarousel/>
      <MainProduct />
     <CertifiedBy/>
      <AboutSection />
      <WhyChooseUs />
      <OdmOemSection/>
      <ApplicationAreasSection/>
      <TestimoniesAreasSection/>
      <div className="bg-white p-12">
      <SponsoredBy/>
      <BlogSection/>
      </div>
      <Footer/>
    </div>
  );
}
