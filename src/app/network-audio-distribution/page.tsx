import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import WhyChooseUsAudioDistribution from "@/components/network-audio-distribution/why-choose-us-distribution";
import ProductGridAudioDistribution from "@/components/network-audio-distribution/list-product-audio-distribution";
import OemOdmAudioDistribution from "@/components/network-audio-distribution/oem-odm-audio-distribution";
import SpecTableAudioDistribution from "@/components/network-audio-distribution/table-specification";
import ProductFeatureSection from "@/components/network-audio-distribution/product-feature-audio-distribution";
import ProductInterfaceSection from "@/components/network-audio-distribution/product-interface";
import NetworkAudioFeatureSections from "@/components/network-audio-distribution/network-audio-feature";
import ProductApplicationNetworkAudio from "@/components/network-audio-distribution/application-network-distribution";
import OurServiceSection from "@/components/section/our-service";
import HonorQualification from "@/components/section/honor-qualification";
import FaqSection from "@/components/section/faq";
import PopularProductsCarousel from "@/components/section/popularProducts";
import SendInquirySection from "@/components/section/SendInquirySection";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Audio Distribution" />
      <WhyChooseUsAudioDistribution />
      <ProductGridAudioDistribution />
      <OemOdmAudioDistribution/>
      <SpecTableAudioDistribution />
      {/* <ProductFeatureSection />  */}
      <ProductInterfaceSection />
      <NetworkAudioFeatureSections />
      <ProductApplicationNetworkAudio />
      <OurServiceSection />
      <HonorQualification />
      <FaqSection />
      <PopularProductsCarousel />
      <SendInquirySection />
      <Footer/>
    </>
  );
}