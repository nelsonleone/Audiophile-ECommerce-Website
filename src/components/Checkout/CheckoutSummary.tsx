import { useAppSelector } from "@/redux/features/CustomHooks"
import Image from "next/image"
import { urlFor } from "../../../lib/sanityClient"
import formatPrice from "../helperFunctions/formatPrice"
import calculateVat from "../helperFunctions/calculateVat"
import { FieldErrors } from "react-hook-form"
import { ICheckoutFormData } from "@/pages/checkout"
import { StyledCheckboxSummary } from "../styled/StyledCheckoutPage"
import splitSuggestedProductName from "../helperFunctions/splitSuggestedProductName"
import { useEffect, useState } from "react"

interface ICheckboxSummaryProps {
  formErrors: FieldErrors<ICheckoutFormData> | [],
}

export default function CheckoutSummary(props:ICheckboxSummaryProps){

   const { formErrors } = props;
   const orderSummaryData = useAppSelector(store => store.cart)
   const [disabledState,setDisabledState] = useState<boolean>(Object.keys(formErrors).length > 0)

   // avoiding stale state
   useEffect(() => {
      Object.keys(formErrors).length > 0 ? setDisabledState(true) : setDisabledState(false)
   },[Object.keys(formErrors).length])

   return(
      <StyledCheckboxSummary>
         <h2>Summary</h2>

         <div className="ordered-products-highlight">
            {
               orderSummaryData.productsInCart.map(value => {
                  return(
                     <div key={value.productDetails._id}>
                        <Image
                        src={urlFor(value.productDetails.productInCartImage.asset._ref).url()}
                        alt={`${value.productDetails.productName} image`}
                        width={200}
                        height={100}
                        />

                        <div>
                           <p>{splitSuggestedProductName(value.productDetails.productName)}</p>
                           <span>{formatPrice(value.productDetails.price)}</span>
                        </div>

                        <span aria-label="order count">X{value.orderCount}</span>
                     </div>
                  )
               })
            }
         </div>

         <div className="order-cash-summary">
            <div>
               <p>Total</p>
               <span>{formatPrice(orderSummaryData.total || 0)}</span>
            </div>

            <div>
               <p>Shipping</p>
               <span>$50</span>
            </div>

            {/* vat included (defaults to 20%) */}
            <div>
               <p>VAT (included)</p>
               <span>${calculateVat(orderSummaryData.productsInCart)}</span>
            </div>

            {/* grand total (total + shipping fee), vat is included in products prices */}
            <div className="grand-total-area">
               <p>Grand total</p>
               <span>{formatPrice(orderSummaryData.grandTotal || 0)}</span>
            </div>
         </div>

         <button  form="checkout-form">Continue & pay</button>
      </StyledCheckboxSummary>
   )
}