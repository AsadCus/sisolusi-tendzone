import PageHero from "@/components/layout/pageHero";
import NavbarLanding from "@/components/navbar-landing";
import Footer from "@/components/footer";
import ProductCategoriesSection from "@/components/products/product-categories"
import SendInquirySection from "@/components/section/SendInquirySection";
import PopularProducts from "@/components/section/popularProducts";


export default function ProductsPage() {
  return (
    <>
    <NavbarLanding />
      <PageHero title="Network Audio Distribution" />

            <ProductCategoriesSection />
            <PopularProducts/>
            <SendInquirySection />
            
           

      <Footer/>
    </>
  );
}