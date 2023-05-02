import { useState, useEffect, Suspense, startTransition } from "react";
import fetchBannerData from "../helperFunctions/fetchBannerData";
import { Colors, StyledProductLink, breakPoints } from "../styled/utils";
import { urlFor } from "../../../lib/sanityClient";
import Image from "next/image";
import {ContentPlaceholderLoader, ImagePlaceholderLoader } from "./ContentPlaceholderLoader";
import { StyledSecondaryProductBanner } from "../styled/StyledBanners";
import clampProductName from "../helperFunctions/clampProductName";
import { IBannerData } from "../../../types";

export default function SecondaryProductBanner(){
   
   const [secondaryProductBannerData,setSecondaryProductBannerData] = useState<IBannerData>({
      overviewText: "",
      productName: "",
      isNew: null,
      slug: {current:""},
      bannersImages: null
   })

   const [productNameClamp,setProductNameClamp] = useState<string[]>(
      secondaryProductBannerData.productName
      .trim()
      .split(" ")
   )
   
   useEffect(() => {
      const getBannerData = async () => {
         const resData = await fetchBannerData('*[_type == "banner" && name == "Secondary Product Banner"][0]')
         resData !== null && setSecondaryProductBannerData(resData)
      }

      startTransition(()  => {
         getBannerData()
      })

   },[])

   return(
      <StyledSecondaryProductBanner>
         <Suspense fallback={<ContentPlaceholderLoader backgroundColor="#f3f3f3" foregroundColor="#ecebeb" />}>
            {
               secondaryProductBannerData.bannersImages ?
               <div className="image-container">
                  <picture>
                     <source 
                     srcSet={urlFor(secondaryProductBannerData.bannersImages?.mobile?.asset._ref).url()}
                     media={`(max-width:${breakPoints.bpMedium}px)`}
                     />
                     <source 
                     srcSet={urlFor(secondaryProductBannerData.bannersImages?.tablet?.asset._ref).url()}
                     media={`(max-width:${breakPoints.bpLarge}px)`}
                     />
                     <source 
                     srcSet={urlFor(secondaryProductBannerData.bannersImages?.desktop?.asset._ref).url()}
                     media={`(min-width:${breakPoints.bpLarge}px)`}
                     />
                     <Image 
                     src={urlFor(secondaryProductBannerData.bannersImages?.desktop?.asset._ref).url()}
                     alt="Banner Image"
                     width={300}
                     height={500}
                     placeholder="blur"
                     blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42u3PMQ0AAAgDCKL9nQYoAAAAASUVORK5CYII="
                     />
                  </picture>
               </div>
               :
               ""
            }
         </Suspense>

         <Suspense fallback={<ContentPlaceholderLoader backgroundColor="#f3f3f3" foregroundColor="#ecebeb" />}>
         {
            secondaryProductBannerData.productName ?
            <div>
               <h2>{clampProductName(secondaryProductBannerData.productName)}</h2>
               <p>{secondaryProductBannerData.overviewText}</p>
               <StyledProductLink href={`/product/${secondaryProductBannerData.slug.current}`} hoverbg={Colors.BTN_HOVER_COLOR} bgcolor={Colors.BLACK} color={Colors.ALMOST_WHITE}>See Product</StyledProductLink>
            </div>
            :
            null
         }
         </Suspense>
      </StyledSecondaryProductBanner>
   )
}