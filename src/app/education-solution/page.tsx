import PageHero from "@/components/layout/pageHero"
import NavbarProductLanding from "@/components/navbar-landing-product"
import WhyChooseUsCategory from "@/components/section/whyChooseCategory"
import OemOdmSectionCategory from "@/components/section/oem-odm-category"
import ProductEducationSolution from "@/components/education-solution/educatin-solution"
import BestSellingEducationSolution from "@/components/education-solution/best-selling"
import EducationSolutionSpec from "@/components/education-solution/table-spec"
import EducationSolutionBenefits from "@/components/education-solution/bnefit-educatin-solution"
import FeaturesEducationSolution from "@/components/education-solution/functional-educatin-solution"
import EducationSolutionFAQ from "@/components/education-solution/faq"
import AfterSalesServices from "@/components/section/after-sales"
import HalfHonorQualification from "@/components/section/half-honor-qualification"
import PackagingShipping from "@/components/section/Packaging and Shipping"
import SendInquirySection from "@/components/section/SendInquirySection"

export default function PoroductPage() {
    return (
        <>
            <NavbarProductLanding />
            <PageHero title="Education Solution" />
            <ProductEducationSolution />
            <WhyChooseUsCategory />
            <OemOdmSectionCategory />
            <BestSellingEducationSolution />
            <EducationSolutionSpec />
            <EducationSolutionBenefits />
            <FeaturesEducationSolution />
            <AfterSalesServices />
            <PackagingShipping />
            <HalfHonorQualification />
            <EducationSolutionFAQ />
            <SendInquirySection />
        </>
    )
}