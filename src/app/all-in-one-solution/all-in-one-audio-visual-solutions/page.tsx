import PageHero from "@/components/layout/pageHero"
import NavbarLanding from "@/components/navbar-landing"
import AboutSection from "@/components/all in-one-solution/All-in-oneAudio/AudioVisual-solutions"
import ProductFeatures from "@/components/all in-one-solution/productFeatures"
import ProductGrid from "@/components/all in-one-solution/productGrid"
import WhyChooseUsSectionSubcategory from "@/components/section/whyChooseUsSubcategory"
import OemOdmSubcategorySection from "@/components/section/oem-odm-subcategory"
import TwelveInOnePage from "@/components/all in-one-solution/All-in-oneAudio/twelveInOne"

export default function AllInOneAudioVisualSolutionsPage() {
    return(
        <>
        <NavbarLanding />
        <PageHero title="All in One Audio Visual Solutions"/>
        <AboutSection />
        <ProductGrid/>
        <WhyChooseUsSectionSubcategory />
        <OemOdmSubcategorySection   />
        <TwelveInOnePage/> 
        </>
    )
}