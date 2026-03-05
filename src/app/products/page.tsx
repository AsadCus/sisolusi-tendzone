import PageHero from "@/components/layout/pageHero"
import NavbarLanding from "@/components/navbar-landing"
import HonorQualification from "@/components/section/honor-qualification"
import SendInquirySection from "@/components/section/SendInquirySection"
import FAQSection from "@/components/section/faq"
import Footer from "@/components/footer"
import PopularProductsCarousel from "@/components/section/popularProducts"
import CategoryItem from "@/components/layout/buttonnav"
import WhyChooseUs from "@/components/section/whyChoose"


export default function AllInOneAudioVisualSolutionsPage() {
    return(
        <>
        <NavbarLanding />
        <PageHero title="Products"/>
        {/* <WhyChooseUs />
        <HonorQualification />
        <PopularProductsCarousel /> */}
        <SendInquirySection/>
        {/* <FAQSection/> */}
        <Footer/>
        </>
    )
}