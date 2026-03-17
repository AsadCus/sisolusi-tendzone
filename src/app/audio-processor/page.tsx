"use client";

import AboutAudioProcessor from "@/components/audio-processor/product-audio-processor";
import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import ProductGrid from "@/components/all in-one-solution/productGrid";
import OemOdmSectionCategory from "@/components/section/oem-odm-category";
import BestSellingAudioProcessor from "@/components/audio-processor/best-Selling-Audio";
import AudioProcessorSpec from "@/components/audio-processor/audio-processor-spec";
import AudioFeatures from "@/components/audio-processor/audio-Processor-Features";
import AudioProcessorApplication from "@/components/audio-processor/application-of-audio";
import OurServiceSection from "@/components/section/ourServices";
import HonorQualification from "@/components/section/honor-qualification";
import AudioProcessorFAQ from "@/components/audio-processor/audio-Processor-FAQ";
import PopularProductsCarousel from "@/components/section/popularProducts";
import SendInquirySection from "@/components/section/SendInquirySection";
import Footer from "@/components/footer";
import NavbarProductLanding from "@/components/navbar-landing-product";
import AudioProcessorProduct from "@/components/audio-processor/audio-processor";
import AudioAccessoriesProduct from "@/components/audio-accessories/audio-accesories";

export default function AudioProcessorPage() {
    return(
        <>
         <NavbarProductLanding />
         <PageHero title="Audio Processor"/>
        <AboutAudioProcessor />
        <WhyChooseUsCategory />
        <AudioProcessorProduct/>
        <OemOdmSectionCategory />
        <BestSellingAudioProcessor />
        <AudioProcessorSpec />
        <AudioFeatures />
        <AudioProcessorApplication />
        <OurServiceSection />
        <HonorQualification />
        <AudioProcessorFAQ />
        <PopularProductsCarousel />
        <SendInquirySection />
        <Footer />
        </>
    )
}