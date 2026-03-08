import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingNetworkMicrophoneSection from "@/components/network-microphone/best-selling";
import NetworkMicrophoneSpecificationTable from "@/components/network-microphone/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import MicrophoneFunctionsSection from "@/components/network-microphone/function-network-microphone";
import AfterSalesSection from "@/components/section/after-sales";
import ProductNetworkAdaptersPage from "@/components/network-adapters/network-adapters";
import AdvantagesSection from "@/components/network-microphone/advantages-network-mircophone";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";
import MicrophoneApplicationSection from "@/components/network-microphone/application-network-microphone";
import PrecautionsNetworkMicrophone from "@/components/network-microphone/precause-network-microphone";


export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Microphone" />
      <ProductNetworkAdaptersPage /> 
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
      <BestSellingNetworkMicrophoneSection />
      <NetworkMicrophoneSpecificationTable />   
      <AdvantagesSection />
      <MicrophoneFunctionsSection />
      <MicrophoneApplicationSection />
        <PrecautionsNetworkMicrophone />
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