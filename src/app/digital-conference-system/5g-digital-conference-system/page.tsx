import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingNetworkSpeakersPage from "@/components/digital-conference-system/5g-digital-conference-system/best-selling";
import MicrophoneDigitalConferenceSpecificationTable from "@/components/digital-conference-system/5g-digital-conference-system/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import AfterSalesServices from "@/components/section/after-sales";
import ProductWirelessEnvironment from "@/components/digital-conference-system/5g-digital-conference-system/5g-wireless-environment";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";
import DigitalConferenceApplicationSection from "@/components/digital-conference-system/5g-digital-conference-system/FeaturesNetworkSpeakers";
import DigitalConferenceFunctionsSection from "@/components/digital-conference-system/5g-digital-conference-system/frequency-network-speakers";
import DigitalConferenceFunctionWirelessSection from "@/components/digital-conference-system/5g-digital-conference-system/conference-function-wireless";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Input And Output Interface" />
      <ProductWirelessEnvironment />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
      <BestSellingNetworkSpeakersPage />
      <MicrophoneDigitalConferenceSpecificationTable />
      <DigitalConferenceApplicationSection />
      <DigitalConferenceFunctionsSection />
      <DigitalConferenceFunctionWirelessSection />
      <AfterSalesServices />
      <PackagingAndShippingSection />
      <HonorQualification />
      <FAQSection />
      <PopularProductsCarousel />
      <SendInquirySection />
      <Footer/>
    </>
  );
}