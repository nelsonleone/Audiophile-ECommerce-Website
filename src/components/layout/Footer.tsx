import Image from "next/image";
import Link from "next/link";
import { StyledFooter } from "../styled/StyledFooter";
import { useRouter } from "next/router";

export default function Footer(){

   const router = useRouter()

   return(
      <StyledFooter>
         <div className="footer-about">
            <Image 
               src="/assets/shared/logo.svg" 
               width={170} 
               height={29} 
               alt="Logo"
               className="logo"
               aria-label="Website Logo, Click to go to homepage"
               onClick={() => router.push("/")}
             />
            <p>
               Audiophile is an all in one stop to fulfill your audio needs. 
               We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
               Come and visit our demo facility - we’re open 7 days a week.
            </p>

            <span className="copyright" aria-label="Copyright notice">
              Copyright 2023. All Rights Reserved
            </span>
         </div>

         <nav>
            <ul className="footer-navLinks">
               <li>
                  <Link href="/">Home</Link>
               </li>
               <li>
                  <Link href="/headphones">Headphones</Link>
               </li>
               <li>
                  <Link href="speakers">Speakers</Link>
               </li>
               <li>
                  <Link href="/earphones">Earphones</Link>
               </li>
            </ul>

            <ul className="navIcons-ul">
               <li>
                  <Link href="#">
                     <Image 
                       src="/assets/shared/icon-facebook.svg" 
                       alt="facebook page link icon"
                       width={50}
                       height={50}
                     />
                  </Link>
               </li>
               <li>
                  <Link href="#">
                     <Image 
                       src="/assets/shared/icon-twitter.svg" 
                       alt="twitter page link icon"
                       width={50}
                       height={50}
                     />
                  </Link>
               </li>
               <li>
                  <Link href="#">
                     <Image 
                       src="/assets/shared/icon-instagram.svg" 
                       alt="instagram page link icon"
                       width={50}
                       height={50}
                     />
                  </Link>
               </li>
            </ul>
         </nav>
      </StyledFooter>
   )
}