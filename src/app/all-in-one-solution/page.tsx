import PageHero from "@/components/layout/pageHero"
import NavbarLanding from "@/components/navbar-landing"
import HonorQualification from "@/components/section/honor-qualification"
import SendInquirySection from "@/components/section/SendInquirySection"
import FAQSection from "@/components/section/faq"
import WhyChooseUs from "@/components/all in-one-solution/why-choose"
import PopularProductsCarousel from "@/components/section/popularProducts"
import ProductGrid from "@/components/all in-one-solution/productGrid"
import OemOdmPage from "@/components/all in-one-solution/oem-bestSell"

export default function AllInOneAudioVisualSolutionsPage() {
    return(
        <>
        <NavbarLanding />
        <PageHero title="All in One Solutions"/>
        <WhyChooseUs />
        <ProductGrid />
        <OemOdmPage />
        <HonorQualification />
        <FAQSection/>
        <PopularProductsCarousel />
        <SendInquirySection/>
        </>
    )
}