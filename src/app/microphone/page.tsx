import NavbarProductLanding from "@/components/navbar-landing-product";
import PageHero from "@/components/layout/pageHero";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import OemOdmSectionCategory from "@/components/section/oem-odm-category";
import Footer from "@/components/footer";
import MicrophoneProduct from "@/components/microphone/microphone";
import MIDISBenefits from "@/components/midis-distributed-multimedia-transmission-control/bnefit-midis";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingShipping from "@/components/section/Packaging and Shipping";
import HalfHonorQualification from "@/components/section/half-honor-qualification";
import BestSellingMicrophoneSection from "@/components/microphone/best-selling";
import MicrophoneSpecTable from "@/components/microphone/table-spec";
import BasicPrincipleMidis from "@/components/midis-distributed-multimedia-transmission-control/basic-principle";
import ApplicationMIDISAVOverIP from "@/components/midis-distributed-multimedia-transmission-control/midis-application";
import MIDISAVOverIPFAQ from "@/components/midis-distributed-multimedia-transmission-control/faq";
import MicrophoneFeatureSection from "@/components/microphone/microphone-features";
import MicrophoneTechniquePlacement from "@/components/microphone/microphone-technique";
import MicrophoneApplication from "@/components/microphone/application-microphone";

export default function ProductPage(){
    return(
        <>
            <NavbarProductLanding />
            <PageHero title="microphone"/>
            <MicrophoneProduct />
            <WhyChooseUsCategory />
            <OemOdmSectionCategory />
            <BestSellingMicrophoneSection />
            <MicrophoneSpecTable />
            <MicrophoneFeatureSection />
            <MicrophoneTechniquePlacement/>
            <MicrophoneApplication />
            <AfterSalesServices />
            <PackagingShipping />
            <HalfHonorQualification />
            <MIDISAVOverIPFAQ />
            <Footer />
        </>
    )
}