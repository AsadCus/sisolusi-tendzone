import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingNetworkAdaptersPage from "@/components/network-adapters/best-selling";
import NetworkAdaptersSpecificationTable from "@/components/network-adapters/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import FunctionsNetworkSection from "@/components/network-input-and-output-interface/functionNetworkInOut";
import NetworkAdapterApplicationsSection from "@/components/network-adapters/application-network";
import AfterSalesSection from "@/components/section/after-sales";
import ProductNetworkAdaptersPage from "@/components/network-adapters/network-adapters";
import NetworkAdapterTipsSection from "@/components/network-adapters/basic-principle-network-section";
import FeaturesNetworkAdaptersSection from "@/components/network-adapters/features-product-adapters";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";


export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Adapters" />
      <ProductNetworkAdaptersPage /> 
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
      <BestSellingNetworkAdaptersPage />
      <NetworkAdaptersSpecificationTable />
      <FeaturesNetworkAdaptersSection />
      {/* <FunctionsNetworkSection /> */}
      <NetworkAdapterApplicationsSection />
      <NetworkAdapterTipsSection />
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