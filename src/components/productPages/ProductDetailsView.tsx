import { useAppDispatch, useAppSelector } from "@/redux/features/CustomHooks";
import { Product } from "../../../types";
import { breakPoints } from "../styled/utils";
import Image from "next/image";
import { urlFor } from "../../../lib/sanityClient";
import { ContentPlaceholderLoader, ImagePlaceholderLoader } from "../Banners/ContentPlaceholderLoader";
import { StyledProductDetails } from "../styled/StyledProductDetailsPage";
import { Suspense, memo, startTransition, useEffect, useState } from "react";
import { addProductToCart, setLocalStorageCartData } from "@/redux/features/cartSlice";
import CustomSnackbar from "../utils/CustomSnackbar";
import formatPrice from "../helperFunctions/formatPrice";

interface IProps {
   data: Product,
   index: number,
}

function ProductDetailsView(props:IProps){

   const { viewport } = useAppSelector(store => store.viewport)
   const { data, index } = props;
   const [productDetailsData,setProductDetailsData] = useState(data)
   const dispatch = useAppDispatch()
   const [open,setOpen] = useState(false)
   const [productOrderQuantity,setProductOrderQuantity] = useState<number>(1)
   const cartData = useAppSelector(store => store.cart.productsInCart)


   // for the suspense hydration error 
   useEffect(() =>{
      startTransition(() => {
         setProductDetailsData(productDetailsData)
      })
   },[productDetailsData.productName])

   const handleOrderQuantityDecrease = () => {
      setProductOrderQuantity(prevValue => {
         if(prevValue === 1)return prevValue;
         else{
            return prevValue - 1;
         }
      })
   }
   const handleAddProductToCart = () => {
      dispatch(addProductToCart({

         orderDetails:{
            orderCount: productOrderQuantity,
            productDetails: {
               productName: productDetailsData.productName,
               _id: productDetailsData._id,
               productInCartImage: productDetailsData.productInCartImage,
               price: productDetailsData.price
            }
         }
         
      }))

      dispatch(setLocalStorageCartData())
      setOpen(true)
   }

   useEffect(() => {
      if(!open)return;
      const timer = setTimeout(() => {
         setOpen(false)
      }, 4000)

      return() => clearTimeout(timer)
      
   },[open])



   return(
      <>
      <StyledProductDetails index={index}>
         <Suspense fallback={<ImagePlaceholderLoader backgroundColor="#d6d3d4" foregroundColor="#ecebeb" />}>
         {
            productDetailsData.previewPageImage &&
            <div className="image-container">
               {
               viewport! < breakPoints.bpMedium ?
                  <Image
                     src={urlFor(productDetailsData.productImage.mobile.asset._ref).url()}
                     width={800}
                     height={650}
                     alt={productDetailsData.productImage.mobile.alt || `${productDetailsData.productName} Image`}
                  />
                  :
                  viewport! < breakPoints.bpLarge ?
                     <Image
                        src={urlFor(productDetailsData.productImage.tablet.asset._ref).url()}
                        width={1000}
                        height={500}

                        alt={productDetailsData.productImage.tablet.alt || `${productDetailsData.productName} Image`}
                     />
                     :
                     <Image
                        src={urlFor(productDetailsData.productImage.desktop.asset._ref).url()}
                        alt={productDetailsData.productImage.desktop.alt || `${productDetailsData.productName} Image`}
                        width={1500}

                        height={1000}
                     />
               }
            </div>
         }
         </Suspense>

         {
            productDetailsData.productName ?
            <div className="text-content">
               {
                  productDetailsData.isNew &&
                  <span aria-label="This is a new product">New Product</span>
               }
               <h1>{productDetailsData.productName}</h1>
               <p>{productDetailsData.overviewText}</p>

               <strong>{formatPrice(productDetailsData?.price)}</strong>
               <div className="cart-action-btn">
                  <div>
                     <button aria-controls="quantity-count" onClick={handleOrderQuantityDecrease}>-</button>
                     <span aria-label="quantity added to cart" id="quantity-count">{productOrderQuantity}</span>
                     <button aria-controls="quantity-count" onClick={() =>setProductOrderQuantity(prevValue => prevValue + 1) }>+</button>
                  </div>

                  <button 
                     aria-label="add product to cart" 
                     className="addToCart-btn"
                     onClick={handleAddProductToCart}
                   >
                     Add To Cart
                  </button>
               </div>
            </div>
            :
            <ContentPlaceholderLoader backgroundColor="#f3f3f3" foregroundColor="#ecebeb"   />
         }
      </StyledProductDetails>
      <CustomSnackbar open={open} snackbarMessage="Product Added To Cart"/>
      </>
   )
}

export default memo(ProductDetailsView)