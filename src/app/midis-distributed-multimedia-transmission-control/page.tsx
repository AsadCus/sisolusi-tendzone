import NavbarProductLanding from "@/components/navbar-landing-product";
import PageHero from "@/components/layout/pageHero";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import OemOdmSectionCategory from "@/components/section/oem-odm-category";
import Footer from "@/components/footer";
import MidisProduct from "@/components/midis-distributed-multimedia-transmission-control/midis";
import MIDISBenefits from "@/components/midis-distributed-multimedia-transmission-control/bnefit-midis";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingShipping from "@/components/section/Packaging and Shipping";
import HalfHonorQualification from "@/components/section/half-honor-qualification";
import BestSellingMIDIS from "@/components/midis-distributed-multimedia-transmission-control/best-selling";
import MIDISAVSpecTable from "@/components/midis-distributed-multimedia-transmission-control/table-spec";
import BasicPrincipleMidis from "@/components/midis-distributed-multimedia-transmission-control/basic-principle";
import ApplicationMIDISAVOverIP from "@/components/midis-distributed-multimedia-transmission-control/midis-application";
import MIDISAVOverIPFAQ from "@/components/midis-distributed-multimedia-transmission-control/faq";

export default function ProductPage(){
    return(
        <>
            <NavbarProductLanding />
            <PageHero title="video-accessories"/>
            <MidisProduct />
            <WhyChooseUsCategory />
            <OemOdmSectionCategory />
            <BestSellingMIDIS />
            <MIDISAVSpecTable />
            <MIDISBenefits />
            <BasicPrincipleMidis />
            <ApplicationMIDISAVOverIP/>
            <AfterSalesServices />
            <PackagingShipping />
            <HalfHonorQualification />
            <MIDISAVOverIPFAQ />
            <Footer />
        </>
    )
}