
import Image from "next/image"
import Link from "next/link"
import { StyledHeader, StyledMainNav } from "../styled/StyledHeader"
import { AT_only, breakPoints } from "../styled/utils"
import CatergoryThumbnailNav from "../categoryThumbnailsNav"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { useAppSelector } from "@/redux/features/CustomHooks"
import { useRouter } from "next/router"
import Cart from "../Cart/cart"

interface IHeaderProps {
   showNav: boolean,
   setShowNav:Dispatch<SetStateAction<boolean | null>>,
   viewport: number
}

export default function Header(props:IHeaderProps){

   const { showNav, setShowNav, viewport } = props;
   const router = useRouter()
   const cartIconRef = useRef<HTMLButtonElement | null>(null)
   const {
      productsInCart
   } = useAppSelector(store => store.cart)

   const [openCart,setOpenCart] = useState<boolean>(false)


   useEffect(() => {
      setOpenCart(false)

      if(viewport && viewport < breakPoints.bpLarge){
         setShowNav(false)
      }
   },[router.pathname])

   return(
      <StyledHeader>
         <div>
            <button 
               className="toggle-menu-btn" 
               onClick={() => setShowNav(!showNav)}
               aria-controls="main-nav"
               aria-expanded={showNav!}
            >
               <AT_only>Toggle Menu</AT_only>
               <img 
                  src={`/assets/shared/${!showNav ? "icon-menu.svg" : "icon-menu-close.svg"}`} 
                  alt="Toggle Menu Icon"
               />
            </button>

            <div className="logo-container">
               <Image
                  width={120}
                  height={28}
                  src="/assets/shared/logo.svg"
                  alt="Audiophile Logo"
                  className="logo"
                  aria-label="Website Logo, Click to go to homepage"
                  onClick={() => router.push("/")}
               />
            </div>

            <StyledMainNav showNav={showNav!} id="main-nav" aria-hidden={!showNav}>
               {
                  viewport! >= breakPoints.bpLarge ?
                  <ul className="main-nav-ul">
                     <li>
                        <Link href="/">Home</Link>
                     </li>
                     <li>
                        <Link href="/headphones">Headphones</Link>
                     </li>
                     <li>
                        <Link href="/speakers">Speakers</Link>
                     </li>
                     <li>
                        <Link href="/earphones">Earphones</Link>
                     </li>
                  </ul>
                  :
                  <CatergoryThumbnailNav location="main-nav" />
               }
            </StyledMainNav>

            <button 
               className="cart-icon" 
               ref={cartIconRef} 
               aria-controls="cart"
               aria-expanded={openCart}
               onClick={() => setOpenCart(prevState => prevState = !prevState)}>

               <AT_only>See Cart</AT_only>
               <img src="/assets/shared/icon-cart.svg"alt="Cart Icon"/>
               {
                  productsInCart.length ?
                  <span className="cart-order-quantity">{productsInCart.length}</span>
                  :
                  ""
               }
            </button>
            
            {
               openCart &&
               <Cart openCart={openCart} setOpenCart={setOpenCart} cartIconRef={cartIconRef}/>
            }
         </div>
      </StyledHeader>
   )
}