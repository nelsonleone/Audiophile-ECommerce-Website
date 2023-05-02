import { useEffect, useState } from "react";
import { StyledLoader } from "../styled/StyledLoader";
import { Dispatch, SetStateAction } from "react";
import { breakPoints } from "../styled/utils";
import { useAppSelector } from "@/redux/features/CustomHooks";

export default function Loading(
   {setShowNav}:
   {setShowNav:Dispatch<SetStateAction<boolean | null>>}
   ){

   const [showLoader,setShowLoader] = useState<boolean>(true)
   const { viewport } = useAppSelector(store => store.viewport)
   
   useEffect(()  => {
      const loaderTimer = setTimeout(() => {
         setShowLoader(false)
      }, 3000)
 
      return() => clearTimeout(loaderTimer)
   },[])

   useEffect(() => {
      viewport! < breakPoints.bpLarge && setShowNav(false)
   },[viewport])

   return(
      <>
         {
            showLoader ?
            <StyledLoader>
               <img src="/assets/shared/icon-loading.svg" alt="loading icon" />
            </StyledLoader>
            :
            ""
         }
      </>
   )
}