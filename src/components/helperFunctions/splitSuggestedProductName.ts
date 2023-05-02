export default function splitSuggestedProductName(productName:string){
   const wordsArr = productName.trim().split(" ")
   const lastIndex = wordsArr.length - 1;
   const lastWord = wordsArr[lastIndex];
  
   if (lastWord.toLowerCase() === "headphones" || lastWord.toLowerCase() === "earphones") {
     wordsArr.splice(lastIndex, 1);
   }
 
   const newProductName = wordsArr.join(" ")

   return newProductName;
}