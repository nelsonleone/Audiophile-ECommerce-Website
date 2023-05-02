import { useAppDispatch, useAppSelector } from "@/redux/features/CustomHooks";
import CartProductContent from "./CartProductContent";
import { StyledCartSection } from "../styled/StyledCart";
import formatPrice from "../helperFunctions/formatPrice";
import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useRef } from "react";
import { removeAllCartProductData } from "@/redux/features/cartSlice";
import { useRouter } from "next/router"

interface ICartProps {
   setOpenCart: Dispatch<SetStateAction<boolean>>,
   openCart: boolean,
   cartIconRef: RefObject<HTMLButtonElement | null>
}

export default function Cart(props:ICartProps){
   
   const { openCart, setOpenCart, cartIconRef } = props;
   const dispatch = useAppDispatch()
   const { productsInCart, total } = useAppSelector(store => store.cart)
   const cartRef = useRef<HTMLDivElement>(null)
   const router = useRouter()

   // handleOutsideCartClick
   const handleOutsideCartClick = useCallback((e: MouseEvent | TouchEvent) => {
      if(!cartRef.current && !cartIconRef.current)return;

      else if(cartRef.current && !cartRef.current.contains(e.target as Node | null) && !cartIconRef.current?.contains(e.target as Node | null)){
         setOpenCart(false)
      }
   },[cartRef,setOpenCart])


   // getting refactored soon
   useEffect(() =>{
      openCart ?
      document.body.style.overflowY = "hidden" :
      document.body.style.overflowY = "auto";

      return() => {
         document.body.style.overflowY = "auto";
      }
   },[openCart])

   useEffect(() => {
      document.addEventListener('click', handleOutsideCartClick)
      document.addEventListener('touchstart', handleOutsideCartClick)
      document.addEventListener('mousedown', handleOutsideCartClick)
      document.addEventListener('touchend', handleOutsideCartClick)
      
      return () => {
         document.removeEventListener('click', handleOutsideCartClick)
         document.removeEventListener('touchstart', handleOutsideCartClick)
         document.removeEventListener('touchend', handleOutsideCartClick)
         document.removeEventListener('mousedown', handleOutsideCartClick)
      }
   },[handleOutsideCartClick])

   return(
      <StyledCartSection id="cart">
         <div className="cart-inner" ref={cartRef}>
            <div className="top">
               <h5>Cart <span>({productsInCart.length})</span></h5>
               <button disabled={productsInCart.length < 1} onClick={() => dispatch(removeAllCartProductData())}>Remove All</button>
            </div>
            <div className="inCart-contents">
               {
                  productsInCart.length > 0 ?
                  productsInCart.map(content => {
                     return(
                        <CartProductContent content={content} />
                     )
                  })
                  :
                  <p className="no-products-para">No product in cart...</p>
               }
            </div>

            <div className="total-cost">
               <p>Total</p>
               <span aria-lable="Total order cost">{formatPrice(total ? total : 0)}</span>
            </div>
            <button 
              className="checkout-btn" 
              aria-label="Checkout" 
              onClick={() => router.push("/checkout")}
              disabled={productsInCart.length < 1}>
               Checkout
            </button>
         </div>
      </StyledCartSection>
   )
}