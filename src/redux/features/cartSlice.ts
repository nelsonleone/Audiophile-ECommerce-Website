import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartProductData } from "../../../types";
import handleCartOrderDecrease from "@/components/helperFunctions/handleCartOrderDecrease";
import calculateCartTotal from "@/components/helperFunctions/calculateCartTotal";

type CartInitState = {
   productsInCart: ICartProductData[],
   total: null | number,
   hasCheckedOut: boolean,
   grandTotal: number
}

interface IPayload {
   orderDetails?: ICartProductData,
   productID? : string,
   storedCartData?: ICartProductData[]
}

const initialState : CartInitState = {
   productsInCart: [],
   total: null,
   hasCheckedOut: false,
   grandTotal: 0
}

const SHIPPING_FEE = 50;

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers:{
      setLocalStorageCartData:(state) => {
         localStorage.setItem("cartData",JSON.stringify(state.productsInCart))
      },

      getLocalStorageCartData:(state,action:PayloadAction<IPayload>) => {
         if(action.payload.storedCartData){
            state.productsInCart = action.payload.storedCartData;
            state.total = calculateCartTotal(state.productsInCart)
            state.grandTotal = state.total + SHIPPING_FEE
         }
      },

      addProductToCart: (state,action:PayloadAction<IPayload>) => {
         const { orderDetails } = action.payload;
         if(!orderDetails)return state;
         const existInCart = state.productsInCart.some(value => value.productDetails._id === orderDetails?.productDetails._id)

         if(existInCart){
            state.productsInCart = state.productsInCart.map(value => {
               return value.productDetails._id === orderDetails.productDetails._id ? 
               {...value,orderCount:value.orderCount + orderDetails.orderCount} :
               value
            })
         }

         else if(!existInCart){
            state.productsInCart.push(orderDetails)
         }
         state.total = calculateCartTotal(state.productsInCart)
         state.grandTotal = state.total + SHIPPING_FEE
      },

      increaseCartOrderCount: (state,action:PayloadAction<IPayload>) => {
         const payload = action.payload;
         
         if(payload){
            const updatedProductsInCartArray = state.productsInCart.map(orderDetails => {
               return orderDetails.productDetails._id === payload.productID ?
               {...orderDetails,orderCount:orderDetails.orderCount + 1} 
               :
               orderDetails
            })
            state.productsInCart = updatedProductsInCartArray;
            state.total = calculateCartTotal(state.productsInCart)
            state.grandTotal = state.total + SHIPPING_FEE
         }
         else{
            return state;
         }
      },

      decreaseCartOrderCount: (state,action:PayloadAction<IPayload>)  => {
         const payload = action.payload;
         
         if(payload){
            const updatedProductsInCartArray = state.productsInCart.map(orderDetails => {
               return orderDetails.productDetails._id === payload.productID ?
               {...orderDetails,orderCount:handleCartOrderDecrease(orderDetails.orderCount)} 
               :
               orderDetails
            })

            const cartProductsWithAnOrderCount = updatedProductsInCartArray.filter(orderDetails => {
               return orderDetails.orderCount > 0;
            })

            state.productsInCart = cartProductsWithAnOrderCount;
            state.total = calculateCartTotal(state.productsInCart)
            state.grandTotal = state.total + SHIPPING_FEE
         }
         else{
            return state;
         }
      },

      removeAllCartProductData: state => {
         state.productsInCart = []
         state.total = calculateCartTotal(state.productsInCart)
      },

      setHandleCheckout: state => {
         state.hasCheckedOut = !state.hasCheckedOut;
      },

      clearCartData: state => {
         state.productsInCart = []
         state.total = null;
         state.grandTotal = 0;
         localStorage.setItem("cartData",JSON.stringify([]))
      }
   }
})

export const {
   clearCartData,
   setHandleCheckout,
   increaseCartOrderCount,
   addProductToCart,
   decreaseCartOrderCount,
   setLocalStorageCartData,
   getLocalStorageCartData,
   removeAllCartProductData
} = cartSlice.actions;

export default cartSlice.reducer;