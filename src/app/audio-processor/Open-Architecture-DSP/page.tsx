"use client";

import OemOdmPage from "@/components/section/oem-odm-subcategory";
import OpenArchitectureDSP from "@/components/audio-processor/Open-DSP/Open-Architecture-DSP";
import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import ProductGrid from "@/components/all in-one-solution/productGrid";
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