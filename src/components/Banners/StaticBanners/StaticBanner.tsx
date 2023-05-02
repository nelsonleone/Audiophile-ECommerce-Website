import { Colors, StyledProductLink, breakPoints } from "@/components/styled/utils";
import { IStaticProductData } from ".";
import Image from "next/image";
import { StyledStaticBanner } from "@/components/styled/StyledStaticBanners";
import { memo } from "react";

function StaticBanner({ bannerData,index}: {bannerData:IStaticProductData,index:number}){

   return(
      <StyledStaticBanner index={index} bannerImages={bannerData.bannerImages}>
         {
            index === 1 &&
            <picture>
               <source 
                  srcSet={bannerData.bannerImages.mobile}
                  media={`(max-width:${breakPoints.bpMedium}px)`}
               />
               <source 
                  srcSet={bannerData.bannerImages.tablet}
                  media={`(max-width:${breakPoints.bpLarge}px)`}
               />
               <source 
                  srcSet={bannerData.bannerImages.desktop}
                  media={`(min-width:${breakPoints.bpLarge}px)`}
               />
               <Image 
                  src={bannerData.bannerImages.desktop}
                  alt={`${bannerData.productName} banner image`}
                  width={300}
                  height={300}
               />
            </picture>
         }

         <div className="text-content">
            <h3>{bannerData.productName}</h3>
            <StyledProductLink 
              href={`/product/${bannerData.link}`} 
              color={Colors.BLACK} 
              bgcolor="transparent"
              bordercolor={Colors.BLACK}
              hovercolor={Colors.WHITE}
              hoverbg={Colors.BLACK}
            >See Product</StyledProductLink>
         </div>
      </StyledStaticBanner>
   )
}

export default memo(StaticBanner);