import Image from "next/image";
import { ICartProductData } from "../../../types";
import { urlFor } from "../../../lib/sanityClient";
import formatPrice from "../helperFunctions/formatPrice";
import { useAppDispatch } from "@/redux/features/CustomHooks";
import { decreaseCartOrderCount, increaseCartOrderCount } from "@/redux/features/cartSlice";
import splitSuggestedProductName from "../helperFunctions/splitSuggestedProductName";

interface IProps {
   content: ICartProductData
}

export default function CartProductContent(props:IProps){

   const { content } = props;
   const dispatch = useAppDispatch()

   return(
      <div className="product">
         <Image
            src={urlFor(content.productDetails.productInCartImage.asset._ref).url()}
            width={200}
            height={200}
            priority
            alt={`${content.productDetails.productName} image`}
         />

         <div>
            <p>{splitSuggestedProductName(content.productDetails.productName)}</p>
            <span>{formatPrice(content.productDetails.price)}</span>
         </div>

         <div className="btn-container">
            <button onClick={() => dispatch(decreaseCartOrderCount({
               productID: content.productDetails._id
            }))}>
               -
            </button>
            <span>{content.orderCount}</span>
            <button onClick={() => dispatch(increaseCartOrderCount({productID:content.productDetails._id}))}>+</button>
         </div>
      </div>
   )
}