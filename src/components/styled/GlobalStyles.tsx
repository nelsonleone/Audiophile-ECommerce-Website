import styled, { createGlobalStyle } from "styled-components";
import { Colors, breakPoints, centerContent } from "./utils";

const GlobalStyles = createGlobalStyle`

   *,
   *::before,
   *::after{
      padding:0;
      margin:0;
      box-sizing: border-box;
   }

   html{
    scroll-behavior: smooth;
    height:100%;
   }

   body{
      font-family: 'Manrope', sans-serif;
      min-height:100vh;

      *{
         font-family: inherit;
      }
   }

   button,
   input{
      background:none;
      cursor: pointer;
      border:none;
      font-family: inherit;

      &:hover,
      &:focus{
         border:none;
         outline:none;
      }
   }

   main{
      .page-heading{
         background-color: ${Colors.ALMOST_BLACK};
         text-align: center;
         padding:1em;
         text-transform: uppercase;
         letter-spacing:1.5px;
         color: ${Colors.LIGHT_GREY};
         font-size: clamp(1.875rem, 1.165vw + 1.62rem, 2.625rem);
         line-height: clamp(1.875rem, 2.388vw + 1.353rem, 3.413rem);

         @media (min-width:${breakPoints.bpMedium}px){
            padding:2.7em;
         }
      }

      .AT_only{
         width:1px;
         height:1px;
         position:absolute;
         font-size:1px;
         line-height:1px;
         top:-100000px;
         left:-100000px;
      }
      &>.contents{
         ${centerContent};
      }
   }

   .logo{
      cursor:pointer;
      height:auto;
   }

   .go-back-btn{
     text-transform: capitalize;
     color: ${Colors.ALMOST_BLACK};
     opacity:.6;
     position:absolute;
     left:0;
     font-size:1rem;
     top:-4em;
     font-weight:500;
  }



   picture,
   img{
      max-width:100%;
      object-fit: cover;
   }

   li,
   a{
      list-style: none;
      text-decoration: none;
   }
`
export default GlobalStyles;


export const StyledRootLayout = styled.div`
  height: ${({hideOverflow}:{hideOverflow:boolean}) => hideOverflow ? "56em" : "100%" };
  overflow-y: ${({hideOverflow}:{hideOverflow:boolean}) => hideOverflow ? "hidden" : "auto" };



   @media (min-width:${breakPoints.bpMedium}px){
    height:100vh;
  }
   @media (min-width:${breakPoints.bpLarge}px){
    overflow-y: auto;
    height:100%;
  }
`