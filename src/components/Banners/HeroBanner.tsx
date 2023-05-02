import { urlFor } from "../../../lib/sanityClient"
import { useAppSelector } from "@/redux/features/CustomHooks";
import { Colors, StyledProductLink, breakPoints } from "../styled/utils";
import { StyledHeroBanner, StyledHeroBannerTextContent } from "../styled/StyledBanners";
import { ContentPlaceholderLoader } from "./ContentPlaceholderLoader";
import { IBannerData } from "../../../types";

// Hero Banner Features A Product

export default function HeroBanner({heroBannerData}:{heroBannerData:IBannerData}){

   const { viewport } = useAppSelector(store => store.viewport)
   const fallbackBackground = Colors.ALMOST_BLACK;

   return(
      <StyledHeroBanner
         bannerImage={
            heroBannerData.bannersImages &&
            viewport! < breakPoints.bpMedium ?
            urlFor(heroBannerData.bannersImages.mobile.asset._ref).url()
            :
            heroBannerData.bannersImages &&
            viewport! < breakPoints.bpLarge ?
            urlFor(heroBannerData.bannersImages.tablet.asset._ref).url()
            :
            heroBannerData.bannersImages &&
            viewport! >= breakPoints.bpLarge ?
            urlFor(heroBannerData.bannersImages.desktop.asset._ref).url()
            :
            ""
         }
         // fallback background
         style={{backgroundColor:fallbackBackground}}
         >
        {
            heroBannerData.productName ?
            <StyledHeroBannerTextContent>
               {
                  heroBannerData.isNew &&
                  <span>New product</span>
               }
               <h2>{heroBannerData.productName}</h2>
               <p>{heroBannerData.overviewText}</p>
               <StyledProductLink 
                  href={`/product/${heroBannerData.slug.current}`}
                  bgcolor={Colors.DARK_ORANGE} 
                  color={Colors.WHITE}
                  hoverborder={Colors.DARK_ORANGE}
                  focusborder={Colors.WHITE}
                >
                     See Product
               </StyledProductLink>
            </StyledHeroBannerTextContent>
            :
            viewport! > breakPoints.bpMedium ?
            <div className="placeholder-container">
               <ContentPlaceholderLoader backgroundColor="#817e7e" foregroundColor="#f3f2f2" />
            </div>
            :
            "Error loading Banner"
         }
      </StyledHeroBanner>
   )
}