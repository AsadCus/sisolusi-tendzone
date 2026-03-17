import NavbarProductLanding from "@/components/navbar-landing-product";
import PageHero from "@/components/layout/pageHero";
import WhyChooseUsCategory from "@/components/section/whyChooseCategory";
import OemOdmSectionCategory from "@/components/section/oem-odm-category";
import Footer from "@/components/footer";
import AfterSalesServices from "@/components/section/after-sales";
import PackagingShipping from "@/components/section/Packaging-and-Shipping";
import HalfHonorQualification from "@/components/section/half-honor-qualification";
import HDMIProductFAQ from "@/components/hdmi-products/faq";
import HdmiProduct from "@/components/hdmi-products/hdmi-products";
import BestSellingHdmiProduct from "@/components/hdmi-products/best-selling";
import HDMIProductsSpecTable from "@/components/hdmi-products/table-spec";
import HDMIProductsFunctions from "@/components/hdmi-products/hdmi-product-function";
import HDMIProductsMaterials from "@/components/hdmi-products/material-hdmi-products";
import HDMIProductsTips from "@/components/hdmi-products/hdmi-product-tips";

export default function ProductPage(){
    return(
        <>
            <NavbarProductLanding />
            <PageHero title="hdmi-products"/>
            <HdmiProduct />
            <WhyChooseUsCategory />
            <OemOdmSectionCategory />
            <BestSellingHdmiProduct />
            <HDMIProductsSpecTable />
            <HDMIProductsFunctions />
            <HDMIProductsMaterials />
            <HDMIProductsTips />
            <AfterSalesServices />
            <PackagingShipping />
            <HalfHonorQualification />
            <HDMIProductFAQ />
            <Footer />
        </>
    )
}