import { GetStaticProps } from "next"
import fetchSanityProducts from "@/components/helperFunctions/fetchSanityProducts"
import { ProductBase } from "../../../types"
import Head from "next/head"
import ProductHighLight from "@/components/productPages/ProductHighlight"
import CatergoryThumbnailNav from "@/components/categoryThumbnailsNav"

interface IPageProps {
   productsDataArray: ProductBase[] | []
}

export default function Headphones(props:IPageProps){

   const { productsDataArray } = props;


   return(
      <>
         <Head>
            <title>Audiophile - Earphones</title>
         </Head>
         <main>
         <h1 className="page-heading">Earphones</h1>
            <section className="contents">
            {
               productsDataArray.length ?
               productsDataArray.map((value,index) => {
                  return(
                     <ProductHighLight  productsHighlightData={value} key={value._id} index={index} />
                  )
               })
               :
               <h4 style={{textAlign:"center",color:"red"}}>Failed To Fetch Products</h4>
            }
            </section>
         </main>
         <CatergoryThumbnailNav location="mainPage" />
      </>
   )
}

export const getStaticProps:GetStaticProps = async() => {
   const productsDataArray: ProductBase[] | null = await fetchSanityProducts(`*[_type == 'product' && category == 'earphones']
      {
         _id,
         slug,
         isNew,
         overviewText,
         productName,
         previewPageImage,
      }`
   )

   if(productsDataArray){
      return{
         props:{
            productsDataArray
         }
      }
   }
   else{
      return{
         props:{
            productsDataArray: []
         }
      }
   }
}