import styled, { css } from "styled-components";
import { Colors, breakPoints, centerContent, flexObj } from "./utils";

interface IStyleProp {
   showNav: boolean
}

export const StyledHeader = styled.header`
   background-color: ${Colors.ALMOST_BLACK};
   height:6em;
   ${flexObj};
   position:relative;
   z-index:10 ;

   &::after{
      content:"";
      width:90%;
      margin-inline:auto;
      left:0;
      right:0;
      height:1px;
      display:block;
      position: absolute;
      bottom:-1px;
      background-color: ${Colors.ALMOST_WHITE};
      opacity: .7;
   }
   
   &>div{
      ${centerContent};
      ${flexObj};
      margin-inline:auto;
   }

   .toggle-menu-btn{
      display:block;
      transition:.2s ease-in-out;
      padding:.3em;
      
      img{
         width:1.9em;
         height:1.6em;
      }

      &:hover,
      &:focus{
         border:2px dotted ${Colors.DARK_ORANGE};
      }

   }

   .logo-container{
      img{
         width:10em;
         height:auto;
      }
   }

   .cart-icon{
      position: relative;
      img{
         width:1.6em;
         height:auto;
      }

      span{
         position: absolute;
         font-size:.8rem;
         display:block;
         right:-50%;
         text-align:center;
         top:-55%;
         color:${Colors.WHITE};
         background-color:${Colors.DARK_ORANGE};
         border-radius: 50%;
         aspect-ratio: 1/1;
         width:1.5em;
      }
   }


   /* Media Query */
   @media (min-width:${breakPoints.bpMedium}px) {
      .logo-container{
         flex-basis: 75%;
      }
   }

   @media (min-width:${breakPoints.bpLarge}px) {
      &::after{
         width:82%;
      }

      .logo-container{
         flex-basis:auto;
      }
      
      .toggle-menu-btn{
         display:none;
      }
   }

`

export const StyledMainNav = styled.nav`
   position: absolute;
   background-color: ${Colors.WHITE};
   width:100%;
   left:-50%;
   right:-50%;
   margin-inline:auto;
   height: 50em;
   z-index:1000;
   box-shadow: 0 0 4px 4px #44424278;
   z-index:9;
   transition:top .6s linear;
   top: ${(props:IStyleProp) => props.showNav ? "6em" : "-50em"};


   @media (min-width:${breakPoints.bpLarge}px){
      position:relative;
      left:unset;
      right:unset;
      top:unset;
      background-color:transparent;
      margin:0;
      width:auto;
      height: auto;
      width:70%;
      box-shadow:none;
      

      .main-nav-ul{

         li{
            display:inline-block;
            margin-inline:1em;

            a{
               color: ${Colors.WHITE};
               text-transform: uppercase;
               letter-spacing: 2px;
               font-weight:700;
               font-size:.9rem;
               transition:.2s linear;

               &:hover,
               &:focus{
                  color: ${Colors.DARK_ORANGE};
                  text-decoration: underline;
                  text-decoration-color: ${Colors.DARK_ORANGE};
               }

               &:active{
                  color: ${Colors.DARK_ORANGE};
               }
            }
         }
      }
   }
`