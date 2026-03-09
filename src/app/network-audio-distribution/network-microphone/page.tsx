import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingNetworkMicrophoneSection from "@/components/network-audio-distribution/network-microphone/best-selling";
import NetworkMicrophoneSpecificationTable from "@/components/network-audio-distribution/network-microphone/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import MicrophoneFunctionsSection from "@/components/network-audio-distribution/network-microphone/function-network-microphone";
import AfterSalesSection from "@/components/section/after-sales";
import ProductNetworkMicrophonePage from "@/components/network-audio-distribution/network-microphone/network-microphone";
import AdvantagesSection from "@/components/network-audio-distribution/network-microphone/advantages-network-mircophone";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";
import MicrophoneApplicationSection from "@/components/network-audio-distribution/network-microphone/application-network-microphone";
import PrecautionsNetworkMicrophone from "@/components/network-audio-distribution/network-microphone/precause-network-microphone";


export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Microphone" />
      <ProductNetworkMicrophonePage /> 
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