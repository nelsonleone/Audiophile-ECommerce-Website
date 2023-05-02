import { useId } from "react"
import StaticBanner from "./StaticBanner"
import { StyledStaticBannerContainer } from "@/components/styled/StyledStaticBanners"

export interface IStaticProductData {
   productName: string,
   link: string,
   category: string,
   bannerImages: {
      desktop: string,
      mobile: string,
      tablet: string
   }
}

export default function StaticFeaturedProductBanner(){
   const staticFeaturedProductData: IStaticProductData[] = [
      {
         productName: "ZX7 Speaker",
         category: "speakers",
         link: "zx7-speaker",
         bannerImages: {
            desktop: "/assets/home/desktop/image-speaker-zx7.jpg",
            tablet: "/assets/home/tablet/image-speaker-zx7.jpg",
            mobile: "/assets/home/mobile/image-speaker-zx7.jpg",
         }
      },
      {
         productName: "YX1 Earphones",
         category: "earphones",
         link: "yx1-wireless-earphones",
         bannerImages: {
            desktop: "/assets/home/desktop/image-earphones-yx1.jpg",
            tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
            mobile: "/assets/home/mobile/image-earphones-yx1.jpg",
         }
      }
   ]

   return(
      <StyledStaticBannerContainer>
         {
            staticFeaturedProductData.map((bannerData,index) => {
               return(
                  <StaticBanner key={index} index={index} bannerData={bannerData} />
               )
            })
         }
      </StyledStaticBannerContainer>
   )
}