import PageHero from "@/components/layout/pageHero"
import NavbarLanding from "@/components/navbar-landing"
import HonorQualification from "@/components/section/honor-qualification"
import SendInquirySection from "@/components/section/SendInquirySection"
import FAQSection from "@/components/section/faq"
import PopularProductsCarousel from "@/components/section/popularProducts"
import ProductGrid from "@/components/all in-one-solution/productGrid"
import OemOdmSectionCategory from "@/components/section/oem-odm-category"
import SpecTable from "@/components/all in-one-solution/Thirteen-in-One"
import TwelveInOnePage from "@/components/all in-one-solution/TwelveInOnePage"
import NineInOneSpecs from "@/components/all in-one-solution/Nine-in-One"
import Footer from "@/components/footer"
import TouchPanelSpec from "@/components/all in-one-solution/TouchPanelSpec"
import ProductFeatures from "@/components/all in-one-solution/productFeatures"
import OurService from "@/components/section/ourServices"
import WhyChooseUsCategory from "@/components/section/whyChooseCategory"


export default function AllInOneAudioVisualSolutionsPage() {
  return (
    <div>
      <NavbarLanding />
      <PageHero title="All in One Solutions" />
      <WhyChooseUsCategory />
      <ProductGrid />
      <OemOdmSectionCategory/>
      <TwelveInOnePage />
      <SpecTable />
      <NineInOneSpecs />
      <TouchPanelSpec/>
      <ProductFeatures />
      <OurService />
      <HonorQualification />
      <FAQSection />
      <PopularProductsCarousel />
      <SendInquirySection />
      <Footer />
    </div>
  )
}