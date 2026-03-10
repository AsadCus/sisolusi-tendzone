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

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Adapters" />
    <ProductPowerAmplifier />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
        <BestSellingPowerAmplifiersPage />
      < PowerAmplifierSpecificationTable />
      <FeaturesPowersAmplifier />
      {/* <FunctionsNetworkSection /> */}
        <PowerAmplifierClassesSection />
        <PowerAmplifierApplicationType />
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