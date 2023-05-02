import styled from "styled-components";
import { Colors, breakPoints, flexObj } from "./utils";

export const StyledFooter = styled.footer`
  background-color: ${Colors.FOOTER_BG};
  ${flexObj({justify:"center",direction:"column"})};
  text-align:center;
  position:relative;
  padding:3em 1em 2em;

   &::after{
    content:"";
    position:absolute;
    top:0;
    background-color: ${Colors.DARK_ORANGE};
    height:4px;
    width: 8em;
    display:block;
  }
  
  .navIcons-ul{
     position:absolute;
     margin-inline:auto;
     left:0;
     right:0;
     bottom:2em;
     ${flexObj({justify:"center",direction:"row"})};
     gap:15px;
  
     img{
        width:auto;
        height:auto;
      }

      
   }

   .footer-navLinks{
      position:absolute;
      top:7em;
      left:0;
      right:0;
      margin-inline:auto;

      li{
         margin-block:1.3em;

         a{
            text-transform: uppercase;
            color: ${Colors.ALMOST_WHITE};
            font-weight: 700;
            letter-spacing:1px;
            transition: .2s linear;


            &:hover{
               color: ${Colors.DARK_ORANGE};
               text-decoration: underline;
               text-decoration-color: ${Colors.DARK_ORANGE};
            }

            &:focus{
               border:1px solid ${Colors.DARK_ORANGE};
            }
         }
      }
   }

   .footer-about{
      p,
      span{
         color: ${Colors.LIGHT_GREY};
         opacity:.6;
         line-height:26px;
         font-weight:500;
      }

      p{
         margin-top:16em;
      }

      .copyright{
         margin-block:4em 5.5em;
         display:block;
      }

      img{
         height:auto;
      }
   }


   /* Media Queries */
   @media (min-width:${breakPoints.bpMedium}px){
      ${flexObj({justify:"flex-start"})};
      padding-inline:2em;
      text-align: left;

      .footer-navLinks{
         top:6.5em;
         left: .8em;
         li{
            display:inline-block;
            margin-left: 1.3em;
            margin-block:0;
         }
      }

      .footer-about{
         p{
          margin-block: 6em;
         }

         .copyright{
            margin-block:0;
         }

      }

      .navIcons-ul{
         right:2em;
         left: unset;
         margin:0;
      }
   }


   @media (min-width:${breakPoints.bpLarge}px){
      ${flexObj({justify:"flex-start"})};
      padding-inline:7em;
      padding-top:4.5em;

      &::after{
         width:7em;
      }

      .footer-navLinks{
         top:4.5em;
         left: unset;
         right:6em;
         margin:0;

         li{
            margin-left: 1.7em;
         }
      }

      .footer-about{
         p{
          margin-block: 3em;
          max-width: 33em;
         }
      }

      .navIcons-ul{
         bottom: 8em;
         right:6em;
         left: unset;
         gap:25px;
      }
   }
`