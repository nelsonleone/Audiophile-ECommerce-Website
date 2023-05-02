import { ReactNode } from "react";

export default function clampProductName(productName:string):ReactNode {
   const words = productName.trim().split(" ")
   return(
      words.map((word,index) => {
         return(
            <span key={index}>
               {word}
            </span>
         )
      })
   )
}