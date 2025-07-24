import Image from "next/image";
import styles from "./page.module.css";
import MainHero from "./Components/MainHero/MainHero";
import LatestProducts from "./Components/LatestProducts/Latestproduct";
import Header from "./Components/Header/Header";
import Explore from "./Components/Explore/Explore";
import QualitySection from "./Components/QualitySection/QualitySection";
import Discount from "./Components/Discount/Discount";
import ProductPage from "./Components/Products/Products";
import Unique from "./Components/Unique/page";
import AppSection from "./Components/AppSection/AppSection";
import Testimonial from "./Components/Testimonial/Testimonial";

export default function Home() {
  return (
   <>
 
   <MainHero />
      <LatestProducts />
      <Header/>
      <Explore />
      {/* <QualitySection/> */}
     <Discount />
      <ProductPage />
    <Unique />
        <AppSection />
     <LatestProducts />
         <Testimonial /> 





   </>
  );
}
