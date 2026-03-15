import ProductDetail from "@/components/products/ProductDetail"
import NavbarProductLanding from "@/components/navbar-landing-product";
import SendInquirySection from "@/components/section/SendInquirySection";
import Footer from "@/components/footer";
import { Link } from "lucide-react";

  
export default async function Page({ params }: { params: { slug: string; id: string } }) {
   const { id } = await params;
  return (
    <>
      <NavbarProductLanding />
      <ProductDetail id={id} />
      <SendInquirySection   />
      <Footer />
    </>
  )
}