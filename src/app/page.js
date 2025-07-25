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
import Purpose from "./Components/Purpose/Purpose";
import Achievement from "./Components/Achievement/Achievement";
import Feature from '@/app/Components/Feature/Feature'
import LatestVideos from '@/app/Components/LatestVideos/LatestVideos'

export default function Home() {
  return (
   <>
 
   <MainHero />
      <LatestProducts />
      <Header/>
      <Explore />
   <Achievement/>
      {/* <QualitySection/> */}
      <Feature/>
     <Discount />
      <ProductPage />
    <Unique />
        <AppSection />
     <LatestProducts />
         <Testimonial /> 
         <Purpose/>

  <LatestVideos/>



   </>
  );
}
