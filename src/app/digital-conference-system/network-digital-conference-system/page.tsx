import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingNetworkDigital from "@/components/network-digital-conference-system/best-selling";
import NetWorkDigitalSpecificationTable from "@/components/network-digital-conference-system/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import AfterSalesSection from "@/components/section/after-sales";
import NetworkDigitalPage from "@/components/network-digital-conference-system/network-digital";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";
import NetworkDigitalFeature from "@/components/network-digital-conference-system/feature-network-digital";
import NetworkDigitalConference from "@/components/network-digital-conference-system/network-digital-conference";
import BasicCompositionNetwork from "@/components/network-digital-conference-system/basic-composition-of-network-digital";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="network-digital-conference-system" />
      <NetworkDigitalPage/>
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
      <BestSellingNetworkDigital />
      <NetWorkDigitalSpecificationTable />
      <NetworkDigitalFeature />
      <NetworkDigitalConference />
      <BasicCompositionNetwork />
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