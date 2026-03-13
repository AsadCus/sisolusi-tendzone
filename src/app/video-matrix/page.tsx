import PageHero from "@/components/layout/pageHero";
import Footer from "@/components/footer";
import SendInquirySection from "@/components/section/SendInquirySection";
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory";
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory";
import HonorQualification from "@/components/section/honor-qualification";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingAndShippingSection from "@/components/section/Packaging and Shipping";
import PopularProductsCarousel from "@/components/section/popularProducts";
import FAQSection from "@/components/section/faq";
import VideoMatrixSpecificationTable from "@/components/video-matrix/table-speficication";
import NavbarProductLanding from "@/components/navbar-landing-product";
import ProductVideoMatrix from "@/components/video-matrix/video-matrix";
import BestSellingVideoMatrix from "@/components/video-matrix/best-selling";
import VideoMatrixFeatures from "@/components/video-matrix/video-matrix-features";
import BasicPrincipleMatrixVideo from "@/components/video-matrix/basic-principle-video-matrix";
import VideoMatrixApplication from "@/components/video-matrix/application-video-matrix";

export default function ProductsPage() {
  return (
    <>
    <NavbarProductLanding />
      <PageHero title="Video Matrix" />
    <ProductVideoMatrix />
      <WhyChooseUsSectionSubcategory />
      <OemOdmSubcategorySection/>
     <BestSellingVideoMatrix />
      <VideoMatrixSpecificationTable />
      <VideoMatrixFeatures />
      <BasicPrincipleMatrixVideo />
      <VideoMatrixApplication />
      <AfterSalesServices />
      <PackagingAndShippingSection />
      <HonorQualification />
       <FAQSection />
            <PopularProductsCarousel />
      <SendInquirySection />
      <Footer/>
    </>
  );
}