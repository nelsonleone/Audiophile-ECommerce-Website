export default function handleCartOrderDecrease(orderCount:number):number{
   if(orderCount < 0){
      return 0
   }
   else{
      return orderCount - 1;
   }
}