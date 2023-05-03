import { useAppSelector } from "@/redux/features/CustomHooks";
import { ProductBase } from "../../../types";
import { Colors, StyledProductLink, breakPoints } from "../styled/utils";
import Image from "next/image";
import { urlFor } from "../../../lib/sanityClient";
import { ContentPlaceholderLoader, ImagePlaceholderLoader } from "../Banners/ContentPlaceholderLoader";
import { StyledProductHighlight } from "../styled/StyledProductHighlight"
import { useState, useEffect } from "react"

interface IProps {
   data: ProductBase,
   index: number,
}

export default function ProductHighLight(props:IProps){

   const { viewport } = useAppSelector(store => store.viewport)
   const { data, index } = props;
   const [productsHighlightData,setProductsHighlightData] = useState(data)

   useEffect(() =>{
      setProductsHighlightData(data)
   },[data,index])

   return(
      <StyledProductHighlight index={index}>
         {
            productsHighlightData.previewPageImage ?
            <div className="image-container">
               { 
                  viewport! < breakPoints.bpMedium ?
                  <Image
                     src={urlFor(productsHighlightData.previewPageImage.mobile.asset._ref).url()}
                     width={800}
                     height={750}
                     quality={90}
                     alt={productsHighlightData.previewPageImage.mobile.alt || `${productsHighlightData.productName} Image`}
                     placeholder="blur"
                     blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42u3PMQ0AAAgDCKL9nQYoAAAAASUVORK5CYII="
                  />
                  :
                  viewport! < breakPoints.bpLarge ?
                  <Image 
                     src={urlFor(productsHighlightData.previewPageImage.tablet.asset._ref).url()}
                     width={1000}
                     height={1000}
                     quality={90}
                     alt={productsHighlightData.previewPageImage.tablet.alt || `${productsHighlightData.productName} Image`}
                     placeholder="blur"
                     blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42u3PMQ0AAAgDCKL9nQYoAAAAASUVORK5CYII="
                  />
                  :
                  <Image 
                     src={urlFor(productsHighlightData.previewPageImage.desktop.asset._ref).url()}
                     alt={productsHighlightData.previewPageImage.desktop.alt || `${productsHighlightData.productName} Image`}
                     width={2000}
                     height={1500}
                     quality={90}
                     placeholder="blur"
                     blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42u3PMQ0AAAgDCKL9nQYoAAAAASUVORK5CYII="
                  />
               }
            </div>

            :

            <ImagePlaceholderLoader backgroundColor="#d6d3d4" foregroundColor="#ecebeb" />
         }

         {
            productsHighlightData.productName ?
            <div className="text-content">
               {
                  productsHighlightData.isNew &&
                  <span aria-label="This is a new product">New Product</span>
               }
               <h2>{productsHighlightData.productName}</h2>
               <p>{productsHighlightData.overviewText}</p>

               <StyledProductLink 
                  href={`/product/${productsHighlightData.slug.current}`}
                  color={Colors.LIGHT_GREY}
                  bgcolor={Colors.DARK_ORANGE}
                  hoverbg={Colors.LIGHT_ORANGE}
               >
                  See Product
               </StyledProductLink>
            </div>
            :
            <ContentPlaceholderLoader backgroundColor="#f3f3f3" foregroundColor="#ecebeb"   />
         }
      </StyledProductHighlight>
   )
}