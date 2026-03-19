import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingPowerAmplifiersPage from "@/components/power-amplifier/best-selling";
import PowerAmplifierSpecificationTable from "@/components/power-amplifier/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingAndShippingSection from "@/components/section/Packaging-and-Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import PowerAmplifierFAQ from "@/components/power-amplifier/faq";
import ProductPowerAmplifier from "@/components/power-amplifier/power-amplifier";
import FeaturesPowersAmplifier from "@/components/power-amplifier/FeaturesPowerAmplifier";
import PowerAmplifierClassesSection from "@/components/power-amplifier/power-amplifier-classes";
import PowerAmplifierApplicationType from "@/components/power-amplifier/power-amplifier-application";
import NavbarProductLanding from "@/components/navbar-landing-product";

export default function ProductsPage() {
  return (
    <>
    <NavbarProductLanding/>
      <PageHero title="Power Amplifer" />
    <ProductPowerAmplifier />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
        <BestSellingPowerAmplifiersPage />
      < PowerAmplifierSpecificationTable />
      <FeaturesPowersAmplifier />
        <PowerAmplifierClassesSection />
        <PowerAmplifierApplicationType />
      <AfterSalesServices />
      <PackagingAndShippingSection />
      <HonorQualification />
       <PowerAmplifierFAQ />
            <PopularProductsCarousel />
      <SendInquirySection />
      <Footer/>
    </>
  );
}