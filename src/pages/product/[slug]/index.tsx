import { fetchAllProducts, fetchSingleProduct } from "@/components/helperFunctions/fetchSanityProducts"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { Product } from "../../../../types"
import { StyledProductDetailsPage } from "@/components/styled/StyledProductDetailsPage"
import ProductDetailsView from "@/components/productPages/ProductDetailsView"
import ProductImageGallery from "@/components/productPages/ProductImageGallery"
import ProductsSuggest from "@/components/productPages/ProductsSuggest"
import CatergoryThumbnailNav from "@/components/categoryThumbnailsNav"
import Head from "next/head"

export default function ProductDetails({ productDetails, error }: {error:string, productDetails:Product}){
   
   const router = useRouter()  
   const titleTagText = `Audiophile | ${productDetails?.productName || "Product"}`;

   return(
      <>
        <Head>
            <title>{titleTagText}</title>
        </Head>
        <main>
         {
            !error ?
            <StyledProductDetailsPage className="contents">
               <button className="go-back-btn" onClick={() => router.back()}>Go Back</button>
               <ProductDetailsView data={productDetails} index={2} />
               <div className="features-section">
                  <div>
                     <h2>Features</h2>
                     <PortableText value={productDetails.features}  />
                  </div>
                  <ul className="product-box-contents">
                     <h2>In the box</h2>
                     {
                     productDetails.boxContents?.length &&
                     productDetails.boxContents.map((content,index) => {
                        return(
                           <li key={index}>
                              <strong>{content.quantity}x</strong>
                              <span>{content.item}</span>
                           </li>
                        )
                     })
                     }
                  </ul>
               </div>

               <ProductImageGallery galleryImages={productDetails.galleryImages}  />
               <ProductsSuggest category={productDetails.category} beingViewedProductName={productDetails.productName} />
               <CatergoryThumbnailNav location="dynamicPage" />
            </StyledProductDetailsPage>
            :
            <h4 style={{textAlign:"center",color:"red"}}>{error}</h4>
         }
        </main>
      </>
   )
}

export const getStaticPaths:GetStaticPaths = async() => {
   const resData = await fetchAllProducts("*[_type == 'product']")
   const paths = resData && resData.length ? resData.map(value => {
      return {
         params:{
            slug: value.slug.current
         }
      }
   })
   :
   []


   return{
      paths,
      fallback: false
   }
}

export const getStaticProps:GetStaticProps = async(context) => {
   const productDetails = await fetchSingleProduct(
      `*[_type == "product" && slug.current == "${context?.params?.slug}"][0]`
   )

   if(productDetails?.productName){
      return{
         props: {
            productDetails
         },
         revalidate: 30
      }
   }
   else {
      return{
         props: {
            error: "Failed To Load Products Details...Try Again"
         }
      }
   }
}