import PageHero from "@/components/layout/pageHero"
import NavbarLanding from "@/components/navbar-landing"
import AboutSection from "@/components/all in-one-solution/All-in-oneAudio/AudioVisual-solutions"
import ProductGrid from "@/components/all in-one-solution/productGrid"
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory"
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory"
import TwelveInOnePage from "@/components/all in-one-solution/All-in-oneAudio/twelveInOne"
import TwelveInOneFunctions from "@/components/all in-one-solution/All-in-oneAudio/twelve-In-One-Functions"
import TwelveInOneFeatures from "@/components/all in-one-solution/All-in-oneAudio/TwelveInOneFeatures"
import ThirteenInOneSpec from "@/components/all in-one-solution/All-in-oneAudio/thirteenInOne"
import ThirteenInOneFeatures from "@/components/all in-one-solution/All-in-oneAudio/keyFeatures"
import ThirteenInOneApplications from "@/components/all in-one-solution/All-in-oneAudio/thirteenInOneApp"
import PackagingShipping from "@/components/all in-one-solution/All-in-oneAudio/packagingShipping"
import HonorQualification from "@/components/all in-one-solution/All-in-oneAudio/honorQualification"
import FAQSection from "@/components/section/faq"
import PopularProductsCarousel from "@/components/section/popularProducts"
import SendInquirySection from "@/components/section/SendInquirySection"
import Footer from "@/components/footer"
import AfterSalesServices from "@/components/section/after-sales"

export default function AllInOneAudioVisualSolutionsPage() {
    return(
        <>
        <NavbarLanding />
        <PageHero title="All in One Audio Visual Solutions"/>
        <AboutSection />
        <ProductGrid/>
        <WhyChooseUsSectionSubcategory />
        <OemOdmSubcategorySection   />
        <TwelveInOnePage/> 
        <TwelveInOneFunctions/>
        <TwelveInOneFeatures/>
        <ThirteenInOneSpec />
        <ThirteenInOneFeatures />
        <ThirteenInOneApplications />
        <AfterSalesServices />
        <PackagingShipping />
        <HonorQualification />
        <FAQSection />
        <PopularProductsCarousel />
        <SendInquirySection />
        <Footer />
        </>
    )
}   