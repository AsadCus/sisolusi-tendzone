import PageHero from "@/components/layout/pageHero"
import NavbarProductLanding from "@/components/navbar-landing-product"
import HonorQualification from "@/components/section/honor-qualification"
import SendInquirySection from "@/components/section/SendInquirySection"
import FAQSection from "@/components/section/faq"
import PopularProductsCarousel from "@/components/section/popularProducts"
import ProductGrid from "@/components/all in-one-solution/productGrid"
import OemOdmSectionCategory from "@/components/section/oem-odm-category"
import SpecTable from "@/components/all in-one-solution/Thirteen-in-One"
import TwelveInOnePage from "@/components/all in-one-solution/Twelve-In-One-Page"
import NineInOneSpecs from "@/components/all in-one-solution/Nine-in-One"
import Footer from "@/components/footer"
import TouchPanelSpec from "@/components/all in-one-solution/Touch-Panel-Spec"
import ProductFeatures from "@/components/all in-one-solution/product-Features"
import OurService from "@/components/section/ourServices"
import WhyChooseUsCategory from "@/components/section/whyChooseCategory"
import AllInOneSolutionFAQ from "@/components/all in-one-solution/all-in-one-solution-faq"
import AboutSection from "@/components/all in-one-solution/about-all-in-solution"


export default function AllInOneAudioVisualSolutionsPage() {
  return (
    <div>
      <NavbarProductLanding />
      <PageHero title="All in One Solutions" />
      <AboutSection />
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
      <AllInOneSolutionFAQ />
      <PopularProductsCarousel />
      <SendInquirySection />
      <Footer />
    </div>
  )
}