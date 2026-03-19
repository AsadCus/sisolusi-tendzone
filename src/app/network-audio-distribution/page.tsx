import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import ProductGridAudioDistribution from "@/components/network-audio-distribution/list-product-audio-distribution";
import OemOdmCategory from "@/components/section/oem-odm-category";
import SpecTableAudioDistribution from "@/components/network-audio-distribution/table-specification";
import ProductInterfaceSection from "@/components/network-audio-distribution/product-interface";
import NetworkAudioFeatureSections from "@/components/network-audio-distribution/network-audio-feature";
import ProductApplicationNetworkAudio from "@/components/network-audio-distribution/application-network-distribution";
import OurServiceSection from "@/components/section/ourServices";
import HonorQualification from "@/components/section/honor-qualification";
import NetworkAudioDistributionFAQ from "@/components/network-audio-distribution/faq";
import PopularProductsCarousel from "@/components/section/popularProducts";
import SendInquirySection from "@/components/section/SendInquirySection";
import NetworkAudioDistributionSection from "@/components/network-audio-distribution/network-audio-distribution";
import BestSellingNetworkAudioSection from "@/components/network-audio-distribution/best-selling-network-audio";
import NavbarProductLanding from "@/components/navbar-landing-product";

export default function ProductsPage() {
  return (
    <>
    <NavbarProductLanding/>
      <PageHero title="Network Audio Distribution" />
        <NetworkAudioDistributionSection />
      <WhyChooseUsCategory />
      <ProductGridAudioDistribution />
      <OemOdmCategory />
        <BestSellingNetworkAudioSection />
      <SpecTableAudioDistribution />
      <ProductInterfaceSection />
      <NetworkAudioFeatureSections />
      <ProductApplicationNetworkAudio />
      <OurServiceSection />
      <HonorQualification />
      <NetworkAudioDistributionFAQ />
      <PopularProductsCarousel />
      <SendInquirySection />
      <Footer/>
    </>
  );
}