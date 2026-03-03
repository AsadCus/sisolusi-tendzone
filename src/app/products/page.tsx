import PageHero from "@/components/layout/pageHero"
import NavbarLanding from "@/components/navbar-landing"
import HonorQualification from "@/components/section/honor-qualification"
import SendInquirySection from "@/components/section/SendInquirySection"
import FAQSection from "@/components/section/faq"

export default function AllInOneAudioVisualSolutionsPage() {
    return(
        <>
        <NavbarLanding />
        <PageHero title="Products"/>
        <HonorQualification />
        <SendInquirySection/>
        <FAQSection/>
        </>
    )
}