import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import ProductAudioIpPage from "@/components/audioOverIp/audio-over-ip";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionAudioIp from "@/components/audioOverIp/why-choose-us";
import OemOdmAudioOverIpSection from "@/components/audioOverIp/oem-odm";
import BestSellingSection from "@/components/audioOverIp/best-selling";
import TableSpecification from "@/components/audioOverIp/table-speficication";
import HonorQualification from "@/components/section/honor-qualification";
import AudioIpFunctionsSection from "@/components/audioOverIp/functionAudioOverIp";
import AudioOverIPUiDesignSection from "@/components/audioOverIp/audio-over-ui-design";
import ApplicationsSection from "@/components/audioOverIp/application-audio-over";
import AfterSalesSection from "@/components/audioOverIp/after-sales";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Audio Over IP" />
      <ProductAudioIpPage />
      <WhyChooseUsSectionAudioIp />
      <OemOdmAudioOverIpSection/>
      <BestSellingSection />
      <TableSpecification />
      <AudioIpFunctionsSection/>
      <AudioOverIPUiDesignSection />
      <AfterSalesSection />
      <ApplicationsSection/>
      <HonorQualification />
      <SendInquirySection />
      <Footer/>
    </>
  );
}