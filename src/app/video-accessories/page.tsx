import NavbarProductLanding from "@/components/navbar-landing-product";
import PageHero from "@/components/layout/pageHero";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import OemOdmSectionCategory from "@/components/section/oem-odm-category";
import Footer from "@/components/footer";
import ProductVideoAccessories from "@/components/video-accessories/video-accessories";
import BestSellingVideoAccessories from "@/components/video-accessories/best-selling";
import VideoAccessoriesSpecTable from "@/components/video-accessories/table-spec";
import VideoAccessoriesFeatures from "@/components/video-accessories/video-features-features";
import VideoAccessoriesApplication from "@/components/video-accessories/video-accessories-application";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingShipping from "@/components/section/Packaging-and-Shipping";
import HalfHonorQualification from "@/components/section/half-honor-qualification";
import VideoAccessoriesFAQ from "@/components/video-accessories/faq";

export default function ProductPage(){
    return(
        <>
            <NavbarProductLanding />
            <PageHero title="video-accessories"/>
            <ProductVideoAccessories />
            <WhyChooseUsCategory />
            <OemOdmSectionCategory />
            <BestSellingVideoAccessories />
            <VideoAccessoriesSpecTable />
            <VideoAccessoriesFeatures/>
            <VideoAccessoriesApplication/>
            <AfterSalesServices />
            <PackagingShipping />
            <HalfHonorQualification />
            <VideoAccessoriesFAQ />
            <Footer />
        </>
    )
}