import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingSpeakers from "@/components/speaker/best-selling";
import SpeakerSpecTable from "@/components/video-wall-controller/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingAndShippingSection from "@/components/section/Packaging-and-Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";
import ProductSpeaker from "@/components/speaker/speaker";
import FeaturesPowersAmplifier from "@/components/power-amplifier/FeaturesPowerAmplifier";
import PowerAmplifierClassesSection from "@/components/power-amplifier/power-amplifier-classes";
import PowerAmplifierApplicationType from "@/components/power-amplifier/power-amplifier-application";
import NavbarProductLanding from "@/components/navbar-landing-product";
import SpeakerBenefits from "@/components/speaker/speaker-bnefit";
import ApllicationSpeakers from "@/components/speaker/speaker-application";
import SafetyInstructionsSpeakerSection from "@/components/speaker/instruction-speaker";

export default function ProductsPage() {
  return (
    <>
    <NavbarProductLanding />
      <PageHero title="Network Adapters" />
    <ProductSpeaker />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
        <BestSellingSpeakers />
      <SpeakerSpecTable />
      <SpeakerBenefits />
      {/* <FunctionsNetworkSection /> */}
        <ApllicationSpeakers />
        <SafetyInstructionsSpeakerSection />
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