import { useState, useEffect } from "react"
import { ImageObjectInterface, IsuggestProductData } from "../../../types"
import { fetchSuggestedProducts } from "../helperFunctions/fetchSanityProducts"
import Image from "next/image"
import { urlFor } from "../../../lib/sanityClient"
import { Colors, StyledProductLink, breakPoints } from "../styled/utils"
import { StyledSuggestedProductSection } from "../styled/StyledProductDetailsPage"
import splitSuggestedProductName from "../helperFunctions/splitSuggestedProductName"

interface IProps {
   category: string,
   beingViewedProductName: string
}

export default function ProductsSuggest(props:IProps){

   const [suggestList,setSuggestionList] = useState<IsuggestProductData[]>()
   const getSuggestListImages = async() => {
      const suggestListResData = await fetchSuggestedProducts(`*[_type == "product" && productSuggestionImage != null]
        {
            productSuggestionImage,
            category,
            slug,
            productName,
            _id
        }
      `)

      if(suggestListResData?.length){
         // Getting a set of three matching products for [also like]suggestion
         const filteredData = suggestListResData.filter((data) => data.category === props.category && data.productName !== props.beingViewedProductName)

         const suggestionSet = filteredData.slice(0, 3)

         const nonMatchingSuggestionProducts = suggestListResData.filter((data) => data.category !== props.category)

         const finalSuggestionList = suggestionSet.concat(nonMatchingSuggestionProducts).slice(0, 3)
         setSuggestionList(finalSuggestionList)
      }
   }

   useEffect(() => {
      getSuggestListImages()
   },[])

   return(
      <StyledSuggestedProductSection>
         <h3>You may also like</h3>
         {
            suggestList &&
            suggestList?.map(value => {
               return(
                  <div key={value._id}>
                     <picture>
                        <source 
                          srcSet={urlFor(value.productSuggestionImage.mobile?.asset._ref).url()}
                          media={`(max-width:${breakPoints.bpMedium}px)`}
                        />
                        <source 
                          srcSet={urlFor(value.productSuggestionImage.tablet?.asset._ref).url()}
                          media={`(max-width:${breakPoints.bpLarge}px)`}
                        />
                        <source 
                          srcSet={urlFor(value.productSuggestionImage.desktop?.asset._ref).url()}
                          media={`(min-width:${breakPoints.bpLarge}px)`}
                        />
                        <Image 
                           src={urlFor(value.productSuggestionImage.desktop?.asset._ref).url()}
                           alt={`${value.productName} image`}
                           width={320}
                           height={300}
                        />
                     </picture>

                     <h4>{splitSuggestedProductName(value.productName)}</h4>
                     <StyledProductLink href={`/product/${value.slug.current}`} 
                        color={Colors.LIGHT_GREY} 
                        bgcolor={Colors.DARK_ORANGE}
                        hoverbg={Colors.LIGHT_ORANGE}
                        >
                        See Product
                     </StyledProductLink>
                  </div>
               )
            })
         }
      </StyledSuggestedProductSection>
   )
}