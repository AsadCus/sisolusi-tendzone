import PageHero from "@/components/layout/pageHero"
import NavbarProductLanding from "@/components/navbar-landing-product"
import HonorQualification from "@/components/section/honor-qualification"
import SendInquirySection from "@/components/section/SendInquirySection"
import FAQSection from "@/components/section/faq"
import Footer from "@/components/footer"
import PopularProductsCarousel from "@/components/section/popularProducts"
import CategoryItem from "@/components/layout/buttonnav"
import WhyChooseUs from "@/components/section/whyChooseCategory"
import Products from "@/components/products/product"


export default function AllInOneAudioVisualSolutionsPage() {
    return(
        <>
        <NavbarProductLanding />
        <PageHero title="Products"/>
        <Products />
        <WhyChooseUs />
        <HonorQualification />
        <PopularProductsCarousel />
        <SendInquirySection/>
        <FAQSection/>
        <Footer/>
        </>
    )
}