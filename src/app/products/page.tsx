import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import ProductCategoriesSection from "@/components/products/product-categories"
import SendInquirySection from "@/components/section/SendInquirySection";

export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Products" />
            <ProductCategoriesSection />
            <SendInquirySection />
      <Footer/>
    </>
  );
}