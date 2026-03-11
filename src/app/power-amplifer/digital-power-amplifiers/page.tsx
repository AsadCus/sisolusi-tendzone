import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingPowerAmplifiersPage from "@/components/power-amplifier/best-selling";
import PowerAmplifierSpecificationTable from "@/components/power-amplifier/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import NetworkAdapterApplicationsSection from "@/components/network-audio-distribution/network-adapters/application-network";
import AfterSalesServices from "@/components/section/after-sales";
import ProductNetworkAdaptersPage from "@/components/network-audio-distribution/network-adapters/network-adapters";
import NetworkAdapterTipsSection from "@/components/network-audio-distribution/network-adapters/basic-principle-network-section";
import FeaturesNetworkAdaptersSection from "@/components/network-audio-distribution/network-adapters/features-product-adapters";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";
import ProductPowerAmplifier from "@/components/power-amplifier/power-amplifier";
import FeaturesPowersAmplifier from "@/components/power-amplifier/FeaturesPowerAmplifier";
import PowerAmplifierClassesSection from "@/components/power-amplifier/power-amplifier-classes";
import PowerAmplifierApplicationType from "@/components/power-amplifier/power-amplifier-application";
import ProductDigitalPowerAmplifier from "@/components/power-amplifier/digital-power-amplifiers/digital-power-amplifier";
import BestSellingDigitalPowerAmplifiersPage from "@/components/power-amplifier/digital-power-amplifiers/best-selling";
import DigitalPowerAmplifierSpecificationTable from "@/components/power-amplifier/digital-power-amplifiers/table-speficication";
import DigitalAmplifierProsSection from "@/components/power-amplifier/digital-power-amplifiers/pros-digital-power-amplifier";
import BasicPrinsipleDigitalPower from "@/components/power-amplifier/digital-power-amplifiers/basic-digital-principle";
import DigitalAmplifierApplicationScenarios from "@/components/power-amplifier/digital-power-amplifiers/digital-amplifier-application";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Adapters" />
    <ProductDigitalPowerAmplifier />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
        <BestSellingDigitalPowerAmplifiersPage />
      < DigitalPowerAmplifierSpecificationTable />
      <DigitalAmplifierProsSection />
      <BasicPrinsipleDigitalPower />
      <DigitalAmplifierApplicationScenarios />
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