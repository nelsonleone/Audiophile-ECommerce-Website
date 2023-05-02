import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

type Props = {
   image: string
   link: string,
   categoryName: string
}

function ProductThumbnail(props:Props){

   const { image, link, categoryName} = props;

   return(
      <li>
         <Image 
            src={image} 
            alt={`${categoryName} image`} 
            width={200}
            height={200}
         />

         <div>
            <p>{categoryName}</p>
            <Link href={link}>
               Shop
               <img src="/assets/shared/icon-arrow-right.svg" alt="" aria-hidden="true" />
            </Link>
         </div>
      </li>
   )
}

export default memo(ProductThumbnail)