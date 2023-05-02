import { useAppSelector } from "@/redux/features/CustomHooks"
import { IGalleryImage } from "../../../types"
import { memo, useEffect, useState } from "react"
import { breakPoints } from "../styled/utils"
import Image from "next/image"
import { urlFor } from "../../../lib/sanityClient"
import { StyledImageGallery } from "../styled/StyledProductDetailsPage"

function ProductImageGallery({galleryImages}:{galleryImages:IGalleryImage}){
 
   const {  viewport } = useAppSelector(store => store.viewport)
   const [objProperty,setObjProperty] = useState<string>("")

   useEffect(() => {
      viewport &&
      viewport < breakPoints.bpMedium ?
      setObjProperty("mobile")
      :
      viewport &&
      viewport < breakPoints.bpLarge ?
      setObjProperty("tablet")
      :
      setObjProperty("desktop")
   },[viewport])

   return(
      <StyledImageGallery>
         {
            objProperty &&
            galleryImages[objProperty as keyof typeof galleryImages].map((value,index) => {
               return <Image
                 key={value._key}
                 src={urlFor(value.asset._ref).url()}
                 width={1400}
                 height={800}
                 quality={90}
                 alt={value.alt || "Product Gallery Image"}
               />
            })
         }
      </StyledImageGallery>
   )
}

export default memo(ProductImageGallery);