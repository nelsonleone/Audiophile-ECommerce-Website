import { ReactNode, Suspense, startTransition, useEffect, useState } from "react"
import { fetchCompanyOverviewData } from "../helperFunctions/fetchCompanyOverviewData"
import { PortableText } from "@portabletext/react"
import { ICompanyOverviewData } from "../../../types"
import { breakPoints } from "../styled/utils"
import Image from "next/image"
import { urlFor } from "../../../lib/sanityClient"
import { ContentPlaceholderLoader } from "../Banners/ContentPlaceholderLoader"
import { StyledCompanyOverview } from "../styled/StyledCompanyOverview"
import { useAppSelector } from "@/redux/features/CustomHooks"

export default function CompanyOverview(){

   const [companyOverviewData,setCompanyOverviewData] = useState<ICompanyOverviewData | null>(null)

   const getCompanyOverviewData = async() => {
      const data = await fetchCompanyOverviewData("*[_type == 'companyOverview'][0]")
      setCompanyOverviewData(data)
   }

   const serializers = {
      marks: {
        strong: ({ children }: {children:ReactNode}) => <span>{children}</span>,
      },
   }

   const { viewport } = useAppSelector(store => store.viewport)

   useEffect(() => {
      startTransition(() => {
         getCompanyOverviewData()
      })
   },[])

   return(
      <StyledCompanyOverview>
         <Suspense fallback={<ContentPlaceholderLoader backgroundColor="#f3f3f3" foregroundColor="#ecebeb"/>}>
            {
               companyOverviewData?.companyOverviewText &&
               <div className="overview-text">
                  <PortableText value={companyOverviewData && companyOverviewData?.companyOverviewText} components={serializers} />
               </div>
            }
         </Suspense>
         
         {
            companyOverviewData?.companyOverviewImage &&
            <div>
               { 
                 viewport! < breakPoints.bpMedium ?
                  <Image 
                     src={urlFor(companyOverviewData?.companyOverviewImage.mobile.asset._ref).url()}
                     width={500}
                     height={400}
                     alt=""
                     aria-hidden="true"
                  /> 
                  :
                  viewport! < breakPoints.bpLarge ?
                  <Image 
                     src={urlFor(companyOverviewData?.companyOverviewImage.tablet.asset._ref).url()}
                     width={900}
                     height={200}
                     alt=""
                     aria-hidden="true"
                  />
                  :
                  <Image 
                     src={urlFor(companyOverviewData?.companyOverviewImage.desktop.asset._ref).url()}
                     alt=""
                     aria-hidden="true"
                     width={550}
                     height={550}
                  />
               }
            </div>
         }
      </StyledCompanyOverview>
   )
}