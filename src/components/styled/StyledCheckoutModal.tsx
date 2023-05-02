import styled from "styled-components"
import { Colors, breakPoints, flexObj } from "./utils"

export const StyledCheckoutModal = styled.section`
  background-color:${Colors.WHITE};
  border-radius: 8px;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  width:90%;
  height:90%;
  overflow-y:scroll;
  padding:1.8em;



  &>img{
    width:4.7em;
    display:block;
    height:auto;
  }


  h3{
    text-transform: uppercase;
    color: ${Colors.BLACK};
    font-size: clamp(1.5rem, 1.538vw + 1.154rem, 2rem);
    margin-block:.7em;
   }

   &>p{
      font-size:.95rem;
      opacity:.8;
      line-height:25px;
      color: grey;
   }

   .flex-row{
     ${flexObj({justify:"center"})};
     gap:10px;
              
     img{
         width:4.8em;
         height:auto;
      }

     p,
     span{
       font-weight:700;
     }

     p{
       text-transform:uppercase;
       font-size:1rem;
       letter-spacing: .1rem;
     }
     
     span{
       color: ${Colors.ALMOST_BLACK};
       opacity: .6;
       font-size:.9rem;
     }
   }

   /* other remaining product count */
   .flex-row + span {
      color: ${Colors.ALMOST_BLACK};
      opacity: .6;
      font-size:.88rem;
      font-weight:700;
      display:block;
      margin-block:.5em;
      letter-spacing: 1px;
      text-align:center;
   }



   /* ordered product preview[grand total and product details] */
   .order-preview{
      ${flexObj({direction:"column",justify:"center",align:"flex-start"})};
      margin-top:1em;
      
      &>div{
         padding:1em 1.5em;
      }

      &>div:nth-child(1){
         background-color: ${Colors.ALMOST_WHITE};
         width:100%;
         border-top-right-radius: 10px;
         border-top-left-radius: 10px;
      }

      &>div:nth-child(2){
         background-color: ${Colors.BLACK};
         width:100%;
         border-bottom-left-radius: 10px;
         border-bottom-right-radius: 10px;

         p{
            text-transform: uppercase;
            opacity:.7;
            color: ${Colors.ALMOST_WHITE};
            letter-spacing:1px;
            margin-block:.5em;
            font-weight: 400;
         }

         span{
            display:block;
            font-weight:700;
            color: ${Colors.LIGHT_GREY};
            font-size:1rem;
            margin-block:.4em;
         }
      }
   }

   a{
      width:100%;
      display: block;
      padding:.8em;
      background-color: ${Colors.DARK_ORANGE};
      color: ${Colors.WHITE};
      text-align:center;
      text-transform: uppercase;
      letter-spacing:1px;
      margin-block: 1.5em .5em;
      border-radius:1.5px;
      font-weight: 700;
      transition: .2s linear;

      &:hover{
         background-color: ${Colors.LIGHT_ORANGE};
      }
   }




   
  /* media queries*/
  @media (min-width:${breakPoints.bpLarge}px){
     width:40%;
     height:95%;
     padding:2.5em;
     overflow-y: hidden;

     &>img{
       margin-bottom:1em;
     }

     h3{
       line-height: 36px;
     }

     &>p{
       font-size:1rem;
       margin-block:2em;
     }

     .flex-row{
       padding-right:1em;
     }

     .flex-row + span{
       margin-top:1.4em;
     }

     .order-preview{
       flex-direction:row;
       height:10em;

       &>div{
         height:100%;
       }

       &>div:nth-child(1){
          border-bottom-left-radius: 10px;
          border-top-right-radius: unset;
          ${flexObj({justify:"center",direction:"column"})};
          padding-top:2em;
       }

       &>div:nth-child(2){
          border-top-right-radius: 10px;
          border-bottom-left-radius: unset;
          ${flexObj({justify:"center",direction:"column",align:"flex-start"})};
       }
     }

     a{
       position:relative;
       bottom:-1em;
       font-size:.9rem;
     }

  }
`