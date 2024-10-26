
import Slider from "./slider/page";
import Bar from "./pages/bar/page";
import Banner from "./pages/banner/page";
import Featured from "./pages/featured/page";
import Product from "./pages/product/page";
import HappyProduct from "./pages/product2/page";
import Information from "./pages/information/page";
import Banner2 from "./pages/bannner2/page";
import Footer from "./pages/footer/page";
import Navbar from "./pages/navbar/page";


export default function Home() {
  return (
   <>
  <Bar/>
  <Navbar/>
  <Banner/>
  <Featured/>
  <Product/>
  <HappyProduct/>
  <Information/>
  <Banner2/>
  <Slider/>
  <Footer/>
   </>
  );
}
