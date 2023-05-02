import { useAppDispatch, useAppSelector } from "@/redux/features/CustomHooks";
import { Modal } from "@mui/material";
import Image from "next/image";
import splitSuggestedProductName from "../helperFunctions/splitSuggestedProductName";
import formatPrice from "../helperFunctions/formatPrice";
import { urlFor } from "../../../lib/sanityClient";
import { useEffect, useState } from "react";
import Link from "next/link";
import { StyledCheckoutModal } from "../styled/StyledCheckoutModal";
import { clearCartData } from "@/redux/features/cartSlice";

export default function OrderGatewayPrompt(){

   const { productsInCart, grandTotal, hasCheckedOut } = useAppSelector(store => store.cart)
   const previewedOrderProduct = productsInCart.length > 0 ? productsInCart[0] : "";
   const orderRestCount = productsInCart.length - 1;
   const [openModal,setOpenModal]  = useState<boolean>(hasCheckedOut)
   const dispatch = useAppDispatch()

   useEffect(() => {
      hasCheckedOut ? setOpenModal(true) : setOpenModal(false)
   },[hasCheckedOut])

   return(
      <Modal   
         open={openModal}
         aria-labelledby="modal-title"
         aria-describedby="modal-description"
       >
         <StyledCheckoutModal id="modal-description">
            <Image
              src="/assets/checkout/icon-order-confirmation.svg"
              width={100}
              height={100}
              alt=""
              aria-hidden="true"
            />
            <h3 id="modal-title">Thank you for <br/> your order</h3>
            <p>You will receive an email confirmation shortly.</p>

            <div className="order-preview">
               {
                  previewedOrderProduct &&
                  <div>
                     <div className="flex-row">
                        <Image
                           src={urlFor(previewedOrderProduct.productDetails.productInCartImage.asset._ref).url()}
                           alt={`${previewedOrderProduct.productDetails.productName} image`}
                           width={200}
                           height={200}
                        />
   
                        <div>
                           <p>{splitSuggestedProductName(previewedOrderProduct.productDetails.productName)}</p>
                           <span>{formatPrice(previewedOrderProduct.productDetails.price)}</span>
                        </div>
   
                        <span aria-label="order count">x{previewedOrderProduct.orderCount}</span>
                     </div>
                     {
                        productsInCart.length > 1 ?
                        <span>and {orderRestCount} other item(s)</span>
                        :
                        ""
                     }
                  </div>
               }

               {
                  grandTotal &&
                  <div>
                     <p>Grand Total</p>
                     <span aria-label="Grand Total">{formatPrice(grandTotal)}</span>
                  </div>
               }
            </div>

            <Link href="/" onClick={() => dispatch(clearCartData())}>Back to home</Link>
         </StyledCheckoutModal>
      </Modal>
   )
}