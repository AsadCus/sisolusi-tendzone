import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingWirelessDigitalSection from "@/components/digital-conference-system/2-4g-wireless-digital-conference-system/best-selling";
import WirelessDigitalSpecificationTable from "@/components/digital-conference-system/2-4g-wireless-digital-conference-system/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import AfterSalesSection from "@/components/section/after-sales";
import ProductWirelessDigitalPage from "@/components/digital-conference-system/2-4g-wireless-digital-conference-system/wireless-digital";
import ConferenceFunctionWirelessSection from "@/components/digital-conference-system/2-4g-wireless-digital-conference-system/conference-function-wireless";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";
import WirelessDigitalBenefitSection from "@/components/digital-conference-system/2-4g-wireless-digital-conference-system/bnefit-wireless-digital";
import CompositionWirelessDigitalSection from "@/components/digital-conference-system/2-4g-wireless-digital-conference-system/2-4g-wireless-digital-composition";
import DigitalConferenceApplicationSection from "@/components/digital-conference-system/2-4g-wireless-digital-conference-system/digital-conference-application";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="2.4G Wireless Digital Conference System" />
      <ProductWirelessDigitalPage />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
      <BestSellingWirelessDigitalSection />
      <WirelessDigitalSpecificationTable />
      <WirelessDigitalBenefitSection />
      <CompositionWirelessDigitalSection />
      <ConferenceFunctionWirelessSection />
      <DigitalConferenceApplicationSection />
      <AfterSalesSection />
      <PackagingAndShippingSection />
      <HonorQualification />
      <FAQSection />
      <PopularProductsCarousel />
      <SendInquirySection />
      <Footer/>
    </>
  );
}