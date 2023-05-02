import Header from "./Header"
import Footer from "./Footer"
import CompanyOverview from "./CompanyOverview"
import { useState, useEffect, ReactNode } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/features/CustomHooks"
import { setViewport } from "@/redux/features/viewportSlice"
import { breakPoints } from "../styled/utils"
import { StyledRootLayout } from "../styled/GlobalStyles"
import Loading from "./Loading"
import { useRouter } from "next/router"
import { getLocalStorageCartData } from "@/redux/features/cartSlice";


export default function RootLayout({ children } : { children: ReactNode}){

   const { viewport } = useAppSelector(store => store.viewport)
   const dispatch = useAppDispatch()
 
   useEffect(() =>{
     const storedCartData = localStorage.getItem("cartData");
     const parsedCartData = storedCartData ? JSON.parse(storedCartData) : null;
     dispatch(getLocalStorageCartData(
       {
         storedCartData: parsedCartData
       }
     ))
   },[])
   const [showNav,setShowNav] = useState<boolean | null>(null)
   const router = useRouter()

   const resize = () => {
      dispatch(setViewport(window.innerWidth))
   }
   
   useEffect(() => {
      setShowNav(viewport! >= breakPoints.bpLarge ? true : false)
      dispatch(setViewport(window.innerWidth))
      window.addEventListener('resize',resize)
      return () => window.removeEventListener('resize',resize)
   },[])


   return(
      <StyledRootLayout hideOverflow={showNav ? true : false}>
         <Header showNav={showNav!} viewport={viewport!} setShowNav={setShowNav} />
         {children}
         {
            router.pathname !== "/checkout" &&
            <CompanyOverview />
         }
         <Footer />
         <Loading setShowNav={setShowNav} />
      </StyledRootLayout>
   )
}