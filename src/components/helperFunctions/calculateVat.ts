import { ICartProductData } from "../../../types";

export default function calculateVat(productsInCart:ICartProductData[]){
   const VAT_PERCENTAGE_NUM = 20;

   const vatTotal = productsInCart.reduce((acc,product) => {
      const sum = (product.productDetails.price * VAT_PERCENTAGE_NUM * product.orderCount) / 100 ;
      return acc + sum;
   },0)

   return vatTotal.toFixed(1);
}