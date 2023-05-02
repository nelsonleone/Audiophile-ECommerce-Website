import { sanityClient } from "../../../lib/sanityClient";
import { ImageObjectInterface, IsuggestProductData, Product, ProductBase } from "../../../types";

export default async function fetchProductsPreviewData(query:string){
   try{
      const productsData: ProductBase[] = await sanityClient.fetch(query)
      return productsData;
   }

   // handling one error [no products found]
   catch{
      return null
   }
}

export async function fetchAllProducts(query:string){
   try{
      const allProductsData: Product[] = await sanityClient.fetch(query)
      return allProductsData;
   }

   // handling one error [no products found]
   catch{
      return null
   }
}

export async function fetchSuggestedProducts(query:string){
   try{
      const resImagesData: IsuggestProductData[] = await sanityClient.fetch(query)
      return resImagesData;
   }

   // handling one error [no products found]
   catch{
      return null
   }
}

export async function fetchSingleProduct(query:string){
   try{
      const resData: Product = await sanityClient.fetch(query)
      return resData;
   }

   // handling one error [no products found]
   catch{
      return null
   }
}