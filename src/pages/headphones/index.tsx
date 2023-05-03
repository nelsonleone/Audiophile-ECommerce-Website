import { GetStaticProps } from "next"
import { ProductBase } from "../../../types"
import Head from "next/head"
import fetchProductsPreviewData from "@/components/helperFunctions/fetchSanityProducts"
import CatergoryThumbnailNav from "@/components/categoryThumbnailsNav"
import ProductHighLight from "@/components/productPages/ProductHighlight"


interface IPageProps {
   productsDataArray: ProductBase[] | []
}

export default function Headphones(props:IPageProps){

   const { productsDataArray } = props;

   return(
      <>
         <Head>
            <title>Audiophile - Headphones</title>
         </Head>
         <main>
         <h1 className="page-heading">Headphones</h1>
            <section className="contents">

               {
                  productsDataArray.length ?
                  productsDataArray.map((value,index) => {
                     return(
                        <ProductHighLight  data={value} key={value._id} index={index} />
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
   const productsDataArray: ProductBase[] | null = await fetchProductsPreviewData(`*[_type == 'product' && category == 'headphones']
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