"use client";

import OemOdmPage from "@/components/all in-one-solution/oem-bestSell";
import OpenArchitectureDSP from "@/components/audio-processor/Open-DSP/Open-Architecture-DSP";
import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import ProductGrid from "@/components/section/productGrid";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";

    
export default function AudioProcessorPage() {
    return(
        <>
         <NavbarLanding />
         <PageHero title="Open Architecture DSP"/>
         <OpenArchitectureDSP />
         <ProductGrid/> 
        <WhyChooseUsSectionSubcategory />
        <OemOdmPage />
        </>
    )
}