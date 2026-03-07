import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import ProductAudioIpPage from "@/components/audioOverIp/audio-over-ip";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import BestSellingSection from "@/components/audioOverIp/best-selling";
import TableSpecification from "@/components/audioOverIp/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import AudioIpFunctionsSection from "@/components/audioOverIp/functionAudioOverIp";
import AudioOverIPUiDesignSection from "@/components/audioOverIp/audio-over-ui-design";
import ApplicationsSection from "@/components/audioOverIp/application-audio-over";
import AfterSalesSection from "@/components/section/after-sales";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Audio Over IP" />
      <ProductAudioIpPage />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
      <BestSellingSection />
      <TableSpecification />
      <AudioIpFunctionsSection/>
      <AudioOverIPUiDesignSection />
      <AfterSalesSection />
      <ApplicationsSection/>
      <PackagingAndShippingSection />
      <HonorQualification />
      <SendInquirySection />
      <Footer/>
    </>
  );
}