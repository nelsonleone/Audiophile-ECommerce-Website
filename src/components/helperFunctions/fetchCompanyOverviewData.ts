import { sanityClient } from "../../../lib/sanityClient";
import { ICompanyOverviewData } from "../../../types";

export async function fetchCompanyOverviewData(query:string){
   try{
      const resData: ICompanyOverviewData = await sanityClient.fetch(query)
      return{
         companyOverviewImage: resData.companyOverviewImage,
         companyOverviewText: resData.companyOverviewText,
      }
   }

   catch{
      return null
   }
}