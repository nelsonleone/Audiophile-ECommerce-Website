import HeroBanner from "@/components/Banners/HeroBanner";
import SecondaryProductBanner from "@/components/Banners/SecondaryProductBanner";
import StaticFeaturedProductBanner from "@/components/Banners/StaticBanners";
import CatergoryThumbnailNav from "@/components/categoryThumbnailsNav";
import Head from "next/head";
import { IBannerData } from "../../types";
import fetchBannerData from "@/components/helperFunctions/fetchBannerData";
import { GetStaticProps } from "next";


export default function Home({heroBannerData}:{heroBannerData:IBannerData}) {

  return (
    <>
      <Head>
        <title>Audiophile E-Commerce Website</title>
      </Head>
      <main>
        {/*for assistive Technologies navigativing the page */}
        <h1 className="AT_only">Audiophile E-Commerce Store</h1>

  
        <HeroBanner heroBannerData={heroBannerData} />
        <CatergoryThumbnailNav location="mainPage" />
        <div className="contents">
          <SecondaryProductBanner />
          <StaticFeaturedProductBanner />
        </div>
      </main>
    </>
  )
}




export const getStaticProps:GetStaticProps = async()  => {
  const resData : IBannerData | null = await fetchBannerData('*[_type == "banner" && name == "Hero Intro Banner"][0]')

  if(resData){
     return{
        props: {
           heroBannerData: resData
        }
     }
  }

  else{
     return{
        props:{
           heroBannerData: []
        }
     }
  }
}
