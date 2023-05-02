import styled from "styled-components";
import { Colors, breakPoints, flexObj, slideIn} from "./utils";

export const StyledCartSection = styled.section`
   position:fixed;
   backdrop-filter: brightness(60%);
   background-color:#48484e60;
   top:11.9em;
   bottom:0;
   left:0;
   right:0;
   margin:auto;
   min-height:100vh;
   z-index:10;


   .cart-inner{
      position:absolute;
      top: 1em;
      background-color:${Colors.WHITE};
      color:  ${Colors.BLACK};
      width: 90%;
      margin-inline:auto;
      left:0;
      right:0;
      border-radius:10px;
      padding:2em 1em;
      overflow-y:scroll;
      opacity: 0;
      height:0;
      animation: ${slideIn} 0.5s forwards;
      animation-timing-function: linear;
      scrollbar-width: thin;
      scrollbar-color: ${Colors.DARK_ORANGE} transparent;
      overflow-x:hidden;

      &::-webkit-scrollbar {
        width: 0.7em;              
        border-radius: 10px;
      }
      &::-webkit-scrollbar-track {
         background: transparent;        
      }
      &::-webkit-scrollbar-thumb {
         background: ${Colors.DARK_ORANGE}; 
         border-radius: 10px;
      }
      &::-moz-scrollbar-thumb {
         border-radius: 10px;
      }
      &::-moz-scrollbar-track {
         border-radius: 10px;
      }
   }

  
  .top{
     ${flexObj};

     h5{
        font-size:1.2rem;
        letter-spacing: 2px;
        text-transform: uppercase;
     }

      button{
        font-size:1rem;
        font-weight: 500;
        opacity:.7;

        &:disabled:hover{
         cursor:not-allowed;
      }
     }
  }


  /* cart products container */
  .inCart-contents{
    margin-top:2em;

    .no-products-para{
      opacity:.7;
      font-size:1.1rem;
    }
   }


   /* product in cart details styling */
   .product{
      position:relative;
      margin-bottom:1em;

      p{
        font-weight:700;
        font-size:1.1rem;
        margin-block:1em .5em;
        letter-spacing:1px;
      }
   
       span{
         opacity:.7;
         font-size:.84rem;
         font-weight:700;
         letter-spacing: 1px;
      }
   
      img{
         width:4.8em;
         border-radius:10px;
         height:auto;
      }

      .btn-container{
         background-color: ${Colors.ALMOST_WHITE};
         height:2.2em;
         width:6.7em;
         border-radius: 1px;
         color: ${Colors.BLACK};
         ${flexObj({justify:"space-between"})};
         position: absolute;
         right: 1em;
         top:2.5em;
   
   
         button{
            width:38%;
            font-size: 1.2rem;
            height:100%;
            text-align:center;
            transition:all .3s ease-in-out;
            color: ${Colors.BLACK};
   
            &:hover{
               background-color: #e0dadace;
               color: ${Colors.DARK_ORANGE};
            }
         }
   
         span{
            color: ${Colors.BLACK};
            opacity:1;
         }
      }
  }

  .total-cost{
    margin-top:3em;
    ${flexObj};

    p,
    span{
       color:${Colors.BLACK};
       opacity: .6;
       font-weight:500;
       text-transform: uppercase;
     }

     p{
      letter-spacing: 2px;
     }
  }

  .checkout-btn{
      width:100%;
      display:block;
      margin-inline:auto;
      text-align:center;
      background-color: ${Colors.DARK_ORANGE};
      color: ${Colors.WHITE};
      text-transform:uppercase;
      padding: .9em;
      border-radius: 7px;
      letter-spacing: 1.5px;
      font-weight:700;
      font-size:.85rem;
      margin-top:2em;
      transition:.3s ease-in-out;

      &:disabled{
         opacity:.6;
      }
      
      &:hover{
         background-color: ${Colors.LIGHT_ORANGE};
      }
      &:disabled:hover{
         background-color: ${Colors.DARK_ORANGE};
         cursor:not-allowed;
      }
  }





  /* media queries */
  @media (min-width:${breakPoints.bpMedium}px){
     .cart-inner{
        right:3em;
        top:0;
        margin:unset;
        left:unset;
        max-width:23.6em;
     }

     .checkout-btn{
      font-size:.8rem;
      padding-block:1em;
     }
  }

  @media (min-width:${breakPoints.bpLarge}px){
     .cart-inner{
        right:8%;
        padding-inline:1.5em;
     }

     .product{
         ${flexObj};
         gap:1em;

         .btn-container{
            position:unset;
            min-width:6.5em;
         }
         
         p{
            font-size:.95rem;
         }

         img{
            width:4.5em;
         }
      }
  }

`