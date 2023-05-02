import styled from "styled-components";
import { breakPoints, centerContent, flexObj } from "./utils";
import { Colors } from "./utils";

interface IHeroBannerProps {
   bannerImage: string
}

export const StyledHeroBanner = styled.section`
   ${flexObj({justify:"center",direction:"column",align:"center"})};
   background-image:${( props: IHeroBannerProps ) => props.bannerImage && `url(${props.bannerImage})`};
   background-position: center;
   background-repeat: no-repeat;
   background-size:cover;
   padding-block:5em;
   background-position-y: -6em;
   height:31em;


   /* Media queries */

   @media (min-width:${breakPoints.bpMedium}px){
      height:43em;
   }
   @media (min-width:${breakPoints.bpLarge}px){
      .placeholder-container{
         position:absolute;
         left:0%;
      }
   }
`



export const StyledHeroBannerTextContent = styled.div`
   text-align:center;
   position: absolute;
   top:30%;
   ${centerContent};

   span{
      color: ${Colors.WHITE}; 
      opacity: .6;
      mix-blend-mode: lighten;
      text-transform: uppercase;
      letter-spacing:8px;
      display:block;
      margin-top:2em;
      font-size: .93rem;
   }

   a{
      margin-top: 3em;
   }

   &>*{
      margin-inline:auto;
   }

   h2{
      text-transform: uppercase;
      color: ${Colors.WHITE};
      letter-spacing:2px;
      font-size: clamp(2.25rem, 1.947vw + 1.824rem, 3.625rem);
      line-height: clamp(2.25rem, 3.487vw + 1.487rem, 4.713rem);  
      margin-block:.4em;
      max-width: 10em;
   }

   p{
      color: ${Colors.WHITE};
      line-height:25px;
      opacity: .8;
      max-width:26em;
      font-size: clamp(0.938rem, 0.177vw + 0.899rem, 1.063rem);
      font-weight:500;
   }





   /* Media queries*/


   @media (min-width:${breakPoints.bpMedium}px){
      p{
         max-width: 24em;
         line-height: 32px;
      }

      h2{
         margin-block:.5em;
      }

      a{
         margin-top:4em;
      }
   }

   /* setting the text content right inside the background image hotspot */
   @media (min-width:${breakPoints.bpMedium + 270}px){
      top: 40%;
   }




   @media (min-width:${breakPoints.bpLarge}px){
      text-align: left;
      top:30%;

      p{
         margin-inline:0;
         max-width:35%;
      }
      
      h2{
         margin-inline:0;
         margin-block:.3em .7em;
         line-height:3.6rem;
         max-width:40%;
         letter-spacing: 3px;
      }

      a{
         margin-top:2.5em;
      }
   }
`


export const StyledSecondaryProductBanner = styled.div`
   ${flexObj({justify:"center",direction:"column",align:"center"})};
   border-radius: 10px;
   padding:3em 1em;
   position:relative;
   z-index:1;
   overflow:hidden;
   background: url("/assets/shared/pattern-circles.svg")${Colors.DARK_ORANGE};
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center -8em;

   svg{
      width:20em;
      height:20em;
   }

   .image-container{
      img{
         width:10em;
         height:auto;
      }
   }

   .image-container + div {
      color: ${Colors.WHITE};
      padding-inline:1em;
      text-align: center;

      h2{
         font-size:2rem;
         letter-spacing:2.5px;
         text-transform:uppercase;
         line-height:1em;
         margin-block:1.2em 0;
         text-align:center;

         span{
            display:block;
         }
      }

      p{
         font-size: clamp(0.938rem, 0.194vw + 0.895rem, 1.063rem);
         color: ${Colors.ALMOST_WHITE};
         line-height:25px;
         line-clamp: 3;
         max-width:20em;
         margin-inline:auto;
         margin-block:1.2em 1.4em;
      }
   }


   /* Media queries */
   @media (min-width:${breakPoints.bpMedium}px){
      background-position-y: -11em;

      .image-container{
         img{
            width:14em;
            height:auto;
         }
      }

      .image-container + div {
         h2{
            font-size:3.6rem;
            margin-top:1em;
         }

         p{
            margin-block:1.5em 1.7em;
         }
      }
   }
   

   @media (min-width:${breakPoints.bpLarge}px){

      padding-block:3em;
      padding-inline:2em;
      background-size: 55em;
      background-position: -10em -2em;
      gap:10px;
      ${flexObj({align:"flex-start",justify:"space-around"})};

      .image-container{
         transform: translateY(3.8em);
         img{
            width:23em;
         }
      }

      .image-container + div {
         text-align:left;
         h2{
            text-align:left;
         }

         p{
            max-width: 23em;
         }
      }
   }


   @media (min-width:${breakPoints.bpLarge + 200}px){
      .image-container{
         img{
            width:23em;
            height:28em;
         }
      }
   }
`