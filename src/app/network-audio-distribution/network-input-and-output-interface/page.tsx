import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingNetworkAudioInputOutputSection from "@/components/network-audio-distribution/network-input-and-output-interface/best-selling";
import NetworkSpecificationTable from "@/components/network-audio-distribution/network-input-and-output-interface/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import FunctionsNetworkSection from "@/components/network-audio-distribution/network-input-and-output-interface/functionNetworkInOut";
import ApplicationNetworkSection from "@/components/network-audio-distribution/network-input-and-output-interface/application-network";
import AfterSalesSection from "@/components/section/after-sales";
import ProductNetworkInputOutputPage from "@/components/network-audio-distribution/network-input-and-output-interface/network-in-out";
import BasicPrincipleNetworkSection from "@/components/network-audio-distribution/network-input-and-output-interface/basic-principle-network-section";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Input And Output Interface" />
      <ProductNetworkInputOutputPage />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
      <BestSellingNetworkAudioInputOutputSection />
      <NetworkSpecificationTable />
      <FunctionsNetworkSection />
      <BasicPrincipleNetworkSection />
      <ApplicationNetworkSection />
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