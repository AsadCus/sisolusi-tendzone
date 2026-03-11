import ProductVideoWall from "@/components/video-wall-controller/video-wall-controller-product";
import PageHero from "@/components/layout/pageHero";
import Footer from "@/components/footer";
import NavbarProductLanding from "@/components/navbar-landing-product";
import OemOdmSectionCategory from "@/components/section/oem-odm-category";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import BestSellingVideoWall from "@/components/video-wall-controller/best-selling";
import VideoWallControllerSpecTable from "@/components/speaker/table-speficication";
import BnefitVideoWallController from "@/components/video-wall-controller/bnefit-video-wall-controller";
import FunctionVideoWall from "@/components/video-wall-controller/function-video-wall-controller";
import VideoWallInstruction from "@/components/video-wall-controller/video-wall-instructor";
import ApplicationVideoWallController from "@/components/video-wall-controller/video-walll-application";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingShipping from "@/components/section/Packaging and Shipping";
import VideoWallControllerFAQ from "@/components/video-wall-controller/faq";
import PopularProductsCarousel from "@/components/section/popularProducts";
import HalfHonorQualification from "@/components/section/half-honor-qualification";

export default function ProductPage(){
    return (
        <>
            <NavbarProductLanding />
            <PageHero title="video wall controller"/>
            <ProductVideoWall />
            <WhyChooseUsCategory />
            <OemOdmSectionCategory/>
            <BestSellingVideoWall />
            <VideoWallControllerSpecTable />
            <BnefitVideoWallController />
            <FunctionVideoWall />
            <VideoWallInstruction />
            <ApplicationVideoWallController />
            <AfterSalesServices />
            <PackagingShipping/>
            <VideoWallControllerFAQ />
            <HalfHonorQualification />
            <PopularProductsCarousel />
            <Footer />
        </>
    )
}