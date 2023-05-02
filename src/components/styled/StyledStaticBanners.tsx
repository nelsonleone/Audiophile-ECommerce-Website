import styled, { css } from "styled-components";
import { Colors, breakPoints, flexObj } from "./utils";

interface IStaticBannerProps {
   index: number,
   bannerImages: {
      desktop: string,
      tablet: string,
      mobile: string
   }
}

export const StyledStaticBannerContainer = styled.section`
  margin-top: 2em;
  display:grid;
  grid-template-rows: 1fr 1fr;
`

export const StyledStaticBanner = styled.div`
  .text-content{
      h3{
         text-transform: uppercase;
         letter-spacing:2.5px;
         font-size:1.7rem;
      }
      
      a{
         margin-inline:0;
         align-self:flex-start;
      }
  }

 ${(props:IStaticBannerProps) => (
   props.index === 0 && props.bannerImages ? 
   
   /* First Static Banner Styling */
   css`
      position:relative;
      width:100%;
      padding:1em;
      margin-block:.5em 1.8em;
      background-image: url(${props.bannerImages.mobile});
      background-repeat: no-repeat;
      background-size:cover;
      background-position: right center;
      border-radius: 10px;

      .text-content{
         position: absolute;
         z-index:10;
         top:0;
         bottom:0;
         margin:auto;
         gap:1.4em;
         ${flexObj({justify:"center",direction:"column"})};
      }
      
      @media (min-width:${breakPoints.bpMedium}px){
        background-image: url(${props.bannerImages.tablet});

        .text-content{
           left:3em;
         }
      }
      @media (min-width:${breakPoints.bpLarge}px){
        background-image: url(${props.bannerImages.desktop});

        .text-content{
         left:3em;
        }
      }
      `
      :

      // Second Static Banner Styling
      css`
        ${flexObj({direction:"column",align:"flex-start"})};
        width:100%;  
        gap:1.3em;

        .text-content{
           gap:2em;
           ${flexObj({justify:"center",direction:"column",align:"flex-start"})};
           background-color: ${Colors.ALMOST_WHITE};
           border-radius:10px;
           width:100%;
           padding:1.3em;
           height:13em;
         }
         
         
         
         picture{
            width:100%;
            position:relative;
            height:14em;
            img{
               width:100%;
               height:100%;
               position:absolute;
               top:0;
               left:0;
               border-radius:10px;
            }
         }
         
         @media (min-width:${breakPoints.bpMedium}px){
            ${flexObj({justify:"space-between",direction:"row"})};
            .text-content,
            picture{
               height: 20em;
               flex-basis:50%;
            }

            .text-content{
               justify-content: center;
               gap:2em;
               padding-inline:3em;
            }
         }

         @media (min-width:${breakPoints.bpLarge}px){
            margin-top:1em;
            .text-content,
            picture{
               height: 18em;
            }
         }
      `
   )}
`