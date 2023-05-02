export default function formatPrice(price:number){
   const options = { minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true };
   const formattedPrice = price.toLocaleString('en-US', options)
   return `$${formattedPrice}`
}