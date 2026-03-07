import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingNetworkSpeakersPage from "@/components/network-speaker/best-selling";
import SpeakersSpecificationTable from "@/components/network-speaker/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import AfterSalesSection from "@/components/section/after-sales";
import ProductNetworkInputOutputPage from "@/components/network-input-and-output-interface/network-in-out";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";
import BasicPrincipleNetworkSpeaker from "@/components/network-speaker/basic-principle-network-section";
import SpeakerFeatureSection from "@/components/network-speaker/FeaturesNetworkSpeakers";
import FrequencyNetworkSpeakersSection from "@/components/network-speaker/frequency-network-speakers";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Input And Output Interface" />
      <ProductNetworkInputOutputPage />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
      <BestSellingNetworkSpeakersPage />
      <SpeakersSpecificationTable />
      <SpeakerFeatureSection />
      <BasicPrincipleNetworkSpeaker/>
      <FrequencyNetworkSpeakersSection />
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