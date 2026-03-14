import NavbarProductLanding from "@/components/navbar-landing-product";
import PageHero from "@/components/layout/pageHero";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import OemOdmSectionCategory from "@/components/section/oem-odm-category";
import Footer from "@/components/footer";
import AudioAccessoriesProduct from "@/components/audio-accessories/audio-accesories";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingShipping from "@/components/section/Packaging and Shipping";
import HalfHonorQualification from "@/components/section/half-honor-qualification";
import SpecTableAudioAccessories from "@/components/audio-accessories/table-spec";
import MIDISAVOverIPFAQ from "@/components/midis-distributed-multimedia-transmission-control/faq";
import BestSellingAudioAccessories from "@/components/audio-accessories/best-selling";
import AudioAccessoriesFeatures from "@/components/audio-accessories/audio-accesories-features";
import AudioAccesoriesApplication from "@/components/audio-accessories/audio-accesories-application";
import AudioAccesoriesFAQ from "@/components/audio-accessories/faq";

export default function ProductPage(){
    return(
        <>
            <NavbarProductLanding />
            <PageHero title="audio accessories"/>
            <AudioAccessoriesProduct />
            <WhyChooseUsCategory />
            <OemOdmSectionCategory />
            <BestSellingAudioAccessories />
            <SpecTableAudioAccessories />
            <AudioAccesoriesApplication />
            <AudioAccessoriesFeatures />
            <AfterSalesServices />
            <PackagingShipping />
            <HalfHonorQualification />
            <AudioAccesoriesFAQ />
            <Footer />
        </>
    )
}