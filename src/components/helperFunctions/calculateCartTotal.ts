import { ICartProductData } from "../../../types";

export default function calculateCartTotal(productsInCart:ICartProductData[]){
   const total = productsInCart.reduce((acc,product) => {
      const sum = product.orderCount * product.productDetails.price;
      return acc + sum;
   },0)

   return total;
}