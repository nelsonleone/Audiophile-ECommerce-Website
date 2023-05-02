import { sanityClient } from "../../../lib/sanityClient";
import { IBanner, Product } from "../../../types";

export default async function fetchBannerData(query:string){
   const bannerResponseData: IBanner = await sanityClient.fetch(query)
   const featuredProductResponseData: Product | undefined = await sanityClient.getDocument(bannerResponseData.featuredProduct._ref)
   if (!featuredProductResponseData) {
      return null;
   }
   else{
      return{
         slug: featuredProductResponseData.slug,
         isNew: featuredProductResponseData.isNew,
         productName: featuredProductResponseData.productName,
         bannersImages:bannerResponseData.bannerImage,
         overviewText: bannerResponseData.overviewText,
      }
   }
}