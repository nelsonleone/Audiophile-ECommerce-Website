import { CheckoutFormData, ICheckoutFormData } from "@/pages/checkout";
import { ChangeEvent, Dispatch, FormEvent, ForwardedRef, RefObject, SetStateAction, forwardRef, useEffect, useMemo, useState } from "react"
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form"
import { StyledCheckoutForm } from "../styled/StyledCheckoutPage";
import Image from "next/image";
import { useAppDispatch } from "@/redux/features/CustomHooks";
import { setHandleCheckout } from "@/redux/features/cartSlice";
import { fabClasses } from "@mui/material";

interface ICheckoutFormProps {
   countriesNameListData: string[],
   setErrors: Dispatch<SetStateAction<FieldErrors<ICheckoutFormData> | []>>,
   setCheckoutFormData: Dispatch<SetStateAction<CheckoutFormData>>
}

interface IPaymentMethods {
   eMoney: boolean | null,
   cashOnDelivery: boolean | null,
}

function CheckoutForm(props:ICheckoutFormProps,ref:ForwardedRef<HTMLFormElement>){

   const { countriesNameListData, setErrors, setCheckoutFormData } = props;
   const { register, handleSubmit, trigger, formState:{ errors } } = useForm<ICheckoutFormData>()
   const [paymentMethodUsed,setPaymentMethodUsed] = useState<IPaymentMethods>({
      eMoney: true,
      cashOnDelivery: false
   })
   const dispatch = useAppDispatch()

   const submitForm : SubmitHandler<ICheckoutFormData> = (data) => {
      dispatch(setHandleCheckout())
   }



   const memoErrorObj = useMemo(() => {
      return errors;
   },[errors])

   useEffect(() => {
      setErrors(errors)
   },[memoErrorObj])

   return(
      <StyledCheckoutForm onSubmit={handleSubmit(submitForm)} id="checkout-form" noValidate ref={ref}>
         <h1>Checkout</h1>
         {/* billing input form elements */}
         <div className="form-area-container">
            <p id="billingDetails-label">Billing details</p>

            <div className={`input-container ${errors.name?.message ? "error" : ""}`}>
               <label htmlFor="name" aria-labelledby="billingDetails-label">Name</label>
               <input type="text" id="name" placeholder="Alexie Ward" {...register("name",{ required: "Please input your name" })} />
               {
                     errors.name?.message &&
                     <span role="alert">{errors.name?.message}</span>
                  }
            </div>

            <div className={`input-container ${errors.emailAddress?.message ? "error" : ""}`}>
               <label htmlFor="email" aria-labelledby="billingDetails-label">Email Address</label>
               <input 
                  type="email" 
                  id="email"
                  placeholder="alexie@mail.com"
                  {...register("emailAddress",
                  {
                     required: "Field is required",
                     pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email address"
                     }
                  }
                  )} 
               />
                  {
                     errors.emailAddress?.message &&
                     <span role="alert">{errors.emailAddress?.message}</span>
                  }
            </div>

            <div className={`input-container ${errors.phoneNumber?.message ? "error" : ""}`}>
               <label htmlFor="phoneNumber" aria-labelledby="billingDetails-label">Phone Number</label>
               <input 
                  type="text" 
                  id="phoneNumber"
                  placeholder="+1 234-567-8900"
                  {...register("phoneNumber",
                     { required: "Field cannot be blank",
                        pattern: {
                           value: /^(?=\d+\s*$)\d{1,}$/,
                           message: "Enter a valid zip code"
                        }
                     }
                  )}
               />
                  {
                     errors.phoneNumber?.message &&
                     <span role="alert">{errors.phoneNumber?.message}</span>
                  }
            </div>
         </div>

         {/* shipping input form elements */}
         <div className="form-area-container">
            <p id="shippingDetails-label">Shipping info</p>

            <div className={`input-container ${errors.address?.message ? "error" : ""}`}>
               <label htmlFor="address" aria-labelledby="shippingDetails-label">Address</label>
               <input type="text" id="address" placeholder="1137 Williams Avenue" {...register("address",{ required: "Field is required" })} />
               {
                  errors.address?.message &&
                  <span role="alert">{errors.address?.message}</span>
               }
            </div>

            <div className="input-container">
               <label htmlFor="zipCode" aria-labelledby="shippingDetails-label">Zip Code</label>
               <input 
                  type="text" 
                  id="zipCode" 
                  placeholder="10001"
                  {...register("zipCode",
                     { required: "Field cannot be blank",
                        pattern: {
                           value: /^(?=\d+\s*$)\d{1,}$/,
                           message: "Enter a valid zip code"
                        }
                     }
                  )}
               />
               {
                  errors.zipCode?.message &&
                  <span role="alert">{errors.zipCode?.message}</span>
               }
            </div>

            <div className={`input-container ${errors.city?.message ? "error" : ""}`}>
               <label htmlFor="city" aria-labelledby="shippingDetails-label">City</label>
               <input type="text" id="city" placeholder="New York" {...register("city",{ required: "Field cannot be blank" })} />
               {
                  errors.city?.message &&
                  <span role="alert">{errors.city?.message}</span>
               }
            </div>

            <div className={`input-container ${errors.country?.message ? "error" : ""}`}>
               <label htmlFor="country" aria-labelledby="shippingDetails-label">Country</label>
               <select id="country" placeholder="United States" {...register("country",{ required: "Field cannot be blank" })}>
                  {
                     countriesNameListData.map(value => {
                        return(
                           <option value={value} selected={value === "United States"}>{value}</option>
                        )
                     })
                  }
               </select>
            </div>
         </div>



         {/* payment details input section */}
         <div className="form-area-container">
            <p>Payment Details</p>
            <p className="alt-label-para">Payment Method</p>
            <div className="radio-input-container">
               <input 
                  type="radio" 
                  name="payment-method" 
                  id="eMoney-radio"
                  aria-label="eMoney-radio-label"
                  onChange={() => setPaymentMethodUsed(prev => {
                     return {...prev,cashOnDelivery:!prev.cashOnDelivery,eMoney:true}
                  })} 
                  checked={paymentMethodUsed.eMoney ? paymentMethodUsed.eMoney : false}
               />
               <label htmlFor="eMoney-radio"></label>
               <span id="eMoney-radio-label">e-Money</span>
            </div>

            <div className="radio-input-container">
               <input 
                  type="radio" 
                  id="cashOnDevlivery-radio"
                  aria-label="cashOnDevlivery-radio-label"
                  name="payment-method"
                  onChange={() => setPaymentMethodUsed(prev => {
                     return {...prev,eMoney:!prev.eMoney,cashOnDelivery:true}
                  })}  
                  checked={paymentMethodUsed.cashOnDelivery ? paymentMethodUsed.cashOnDelivery : false}
               />
               <label htmlFor="cashOnDevlivery-radio"></label>
               <span id="cashOnDevlivery-radio-label">Cash On Delivery</span>
            </div>

            {
               paymentMethodUsed.eMoney  ?
               <>
                  <div className={`input-container ${errors.eMoneyNumber?.message ? "error" : ""}`}>
                     <label htmlFor="eMoney-number">e-Money Number</label>
                     <input 
                     type="text"
                     placeholder="227689236"
                     id="eMoney-number"
                     {...register("eMoneyNumber",
                        {
                           required: paymentMethodUsed.eMoney ? "Invalid e-Money Number" : false,
                           pattern: {
                              value: /^[0-9]+$/,
                              message: "Invalid e-Money Number"
                           }
                        }
                     )}
                     />
                     {
                        errors.eMoneyNumber?.message &&
                        <span role="alert">{errors.eMoneyNumber?.message}</span>
                     }
                  </div>

                  <div className={`input-container ${errors.eMoneyPin?.message ? "error" : ""}`}>
                     <label htmlFor="eMoney-pin">e-Money PIN</label>
                     <input 
                     type="text"
                     placeholder="6891"
                     id="eMoney-pin"
                     {...register("eMoneyPin",
                        {
                           required: paymentMethodUsed.eMoney ? "Enter a your e-Money Pin" : false,
                           maxLength: {
                              value: 4,
                              message: paymentMethodUsed.eMoney ? "Invalid e-Money Number" : ""
                           },
                           minLength: {
                              value: 4,
                              message: paymentMethodUsed.eMoney ? "Invalid e-Money Number" : ""
                           },
                           pattern: {
                              value: /^[0-9]+$/,
                              message: "Letters are not valid"
                           }
                        }
                     )}
                     />
                     {
                        errors.eMoneyPin?.message &&
                        <span role="alert">{errors.eMoneyPin?.message}</span>
                     }
                  </div>
               </>
               :
               <div className="onCashDelivery-notice">
                  <Image
                     src="/assets/checkout/icon-cash-on-delivery.svg"
                     alt=""
                     aria-hidden="true"
                     width={50}
                     height={50}
                  />
                  <p>
                     The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. 
                     Just make sure your address is correct so that your order will not be cancelled.
                  </p>
               </div>
            }
         </div>
     </StyledCheckoutForm>
   )
}

export default forwardRef(CheckoutForm)