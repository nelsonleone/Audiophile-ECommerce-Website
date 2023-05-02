import CheckoutSummary from "@/components/Checkout/CheckoutSummary";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import OrderGatewayPrompt from "@/components/Checkout/OrderGatewayPrompt";
import { StyledCheckoutPage } from "@/components/styled/StyledCheckoutPage";
import { useAppSelector } from "@/redux/features/CustomHooks";
import { Alert } from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react"
import { FieldErrors } from "react-hook-form";

export interface ICheckoutFormData {
   name: string,
   phoneNumber: string,
   emailAddress: string,
   address: string,
   zipCode: number | null,
   city: string,
   country: string,
   eMoneyNumber: number | null,
   eMoneyPin: number | null
}

export interface CheckoutFormData extends ICheckoutFormData {
   paymentMethodUsed: string
}




export default function Checkout({countriesNameListData}:{countriesNameListData:string[]}){

   const { productsInCart, hasCheckedOut } = useAppSelector(store => store.cart)
   const [checkoutFormData,setCheckoutFormData] = useState<CheckoutFormData>({
      name: "",
      phoneNumber: "",
      emailAddress: "",
      address: "",
      zipCode: null,
      city: "",
      country: "",
      eMoneyNumber: null,
      eMoneyPin:null,
      paymentMethodUsed:""
   })
   const [errors,setErrors]= useState<FieldErrors<ICheckoutFormData> | []>([])
   const formRef = useRef<HTMLFormElement>(null)
   const [showAlert,setShowAlert] = useState<boolean>(hasCheckedOut)

   useEffect(()  =>{
      hasCheckedOut ? setShowAlert(true) : setShowAlert(false)
   },[hasCheckedOut])

   useEffect(() => {
      if(!showAlert)return;

      const timer = setTimeout(() => {
         setShowAlert(false)
      }, 4000)
   },[showAlert])



   return(
      <>
         <Head>
            <title>Audiophile - Checkout</title>
         </Head>
         <StyledCheckoutPage>
            <div className="">
               <button className="go-back-btn">Go Back</button>
               {
                  productsInCart.length > 0 ?
                  <CheckoutForm
                     ref={formRef!}
                     countriesNameListData={countriesNameListData} 
                     setErrors={setErrors}
                     setCheckoutFormData={setCheckoutFormData}
                     />
                     :
                     <h3>You Don't have any order in your cart</h3>
               }
               <CheckoutSummary formErrors={errors} />
            </div>
         </StyledCheckoutPage>
         <OrderGatewayPrompt />
         {
            showAlert &&
            <Alert severity="success">
               You have successfully placed your order
            </Alert>
         }
      </>
   )
}




export const getStaticProps:GetStaticProps = async() => {
   try{
      const res = await fetch("http://localhost:3000/api/fetchCountriesData")
      const countriesNameListData = await res.json()
      return{
         props:{
            countriesNameListData
         }
      }
   }

   catch{
      return{
         props:{
            countriesNameListData: []
         }
      }
   }
}