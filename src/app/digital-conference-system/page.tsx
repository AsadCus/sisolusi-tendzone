import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import ProductGridDigitalReference from "@/components/digital-conference-system/list-product-audio-distribution";
import OemOdmCategory from "@/components/section/oem-odm-category";
import BestSellingDigitalConferenceSection from "@/components/digital-conference-system/best-selling-digital-conference";
import DigitalConferenceFAQ from "@/components/digital-conference-system/faq";
import PopularProductsCarousel from "@/components/section/popularProducts";
import SendInquirySection from "@/components/section/SendInquirySection";
import DigitalReferenceSystem from "@/components/digital-conference-system/digital-reference-system";
import SpecTableDigitalConference from "@/components/digital-conference-system/table-specification";
import OurServiceSection from "@/components/section/ourServices";
import HonorQualification from "@/components/section/honor-qualification";
import ConferenceProductFeatures from "@/components/digital-conference-system/product-feature-digital-conference";
import ProductApplicationFeatureConference from "@/components/digital-conference-system/feature-conference-system";
import NavbarProductLanding from "@/components/navbar-landing-product";

export default function ProductsPage() {
  return (
    <>
    <NavbarProductLanding />
      <PageHero title="digital-conference-system" />
      <DigitalReferenceSystem />
      <WhyChooseUsCategory />
      <ProductGridDigitalReference />
      <OemOdmCategory />
        <BestSellingDigitalConferenceSection />
      <SpecTableDigitalConference />
      <ConferenceProductFeatures />
      <ProductApplicationFeatureConference />
      <HonorQualification />
      <OurServiceSection />
      <DigitalConferenceFAQ />
      <PopularProductsCarousel />
      <SendInquirySection />
      <Footer/>
    </>
  );
}