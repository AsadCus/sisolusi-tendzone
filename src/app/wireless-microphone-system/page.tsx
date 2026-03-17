import NavbarProductLanding from "@/components/navbar-landing-product";
import PageHero from "@/components/layout/pageHero";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import OemOdmSectionCategory from "@/components/section/oem-odm-category";
import Footer from "@/components/footer";
import WirelesMicrophoneProduct from "@/components/wireless-microphone-system/wireless-microphone";
import MIDISBenefits from "@/components/midis-distributed-multimedia-transmission-control/bnefit-midis";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingShipping from "@/components/section/Packaging-and-Shipping";
import HalfHonorQualification from "@/components/section/half-honor-qualification";
import BestSellingWirelessSection from "@/components/wireless-microphone-system/best-selling";
import WirelessMicSpecTable from "@/components/wireless-microphone-system/table-spec";
import MIDISAVOverIPFAQ from "@/components/midis-distributed-multimedia-transmission-control/faq";
import WirelessMicApplication from "@/components/wireless-microphone-system/wireless-application";
import WirelessMicFeaturesSection from "@/components/wireless-microphone-system/wireless-microphone-features";
import WirelessFrequencyRangeSection from "@/components/wireless-microphone-system/system-frequency-wireless";
import WirelessStartupTimeline from "@/components/wireless-microphone-system/wireless-guide";
import WirelessMicFAQ from "@/components/wireless-microphone-system/faq";

export default function ProductPage(){
    return(
        <>
            <NavbarProductLanding />
            <PageHero title="Wireless Microphone System"/>
            <WirelesMicrophoneProduct />
            <WhyChooseUsCategory />
            <OemOdmSectionCategory />
            <BestSellingWirelessSection />
            <WirelessMicSpecTable />     
            <WirelessMicFeaturesSection />
            <WirelessFrequencyRangeSection />
            <WirelessStartupTimeline />
            <WirelessMicApplication />
            <AfterSalesServices />
            <PackagingShipping />
            <HalfHonorQualification />
            <WirelessMicFAQ />
            <Footer />
        </>
    )
}