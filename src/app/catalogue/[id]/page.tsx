import ProductDetail from "@/components/products/ProductDetail"
import NavbarProductLanding from "@/components/navbar-landing-product";
import SendInquirySection from "@/components/section/SendInquirySection";
import Footer from "@/components/footer";
import { Link } from "lucide-react";


export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <NavbarProductLanding />
      <ProductDetail id={params.id} />
      <SendInquirySection   />
      <Footer />
    </>
  )
}