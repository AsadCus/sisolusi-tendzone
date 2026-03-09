import PageHero from "@/components/layout/pageHero"
import NavbarLanding from "@/components/navbar-landing"
import AboutSection from "@/components/all in-one-solution/All-in-oneAudio/AudioVisual-solutions"
import ProductFeatures from "@/components/all in-one-solution/productFeatures"
import ProductGrid from "@/components/all in-one-solution/productGrid"
import WhyChooseUs from "@/components/all in-one-solution/All-in-oneAudio/whyChooseUs"
import OemAndProducts from "@/components/all in-one-solution/All-in-oneAudio/OemAndProducts"
import TwelveInOnePage from "@/components/all in-one-solution/All-in-oneAudio/twelveInOne"
import TwelveInOneFunctions from "@/components/all in-one-solution/All-in-oneAudio/twelve-In-One-Functions"
import TwelveInOneFeatures from "@/components/all in-one-solution/All-in-oneAudio/TwelveInOneFeatures"

export default function AllInOneAudioVisualSolutionsPage() {
    return(
        <>
        <NavbarLanding />
        <PageHero title="All in One Audio Visual Solutions"/>
        <AboutSection />
        <ProductGrid/>
        <WhyChooseUs />
        <OemAndProducts/>
        <TwelveInOnePage/> 
        <TwelveInOneFunctions/>
        <TwelveInOneFeatures/>
        </>
    )
}