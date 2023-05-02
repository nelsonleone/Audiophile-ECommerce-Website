import styled from "styled-components"
import { Colors, breakPoints, centerContent, flexObj } from "./utils"

export const StyledCheckoutPage = styled.section`
   padding-block:7em 5em; 
   background:#f6f6f8;

   &>div{
      position:relative;
      ${centerContent};
  }

  h1{
     font-size: clamp(1.75rem, 1.242vw + 1.506rem, 2rem);
     text-transform: uppercase;
     letter-spacing:1px;
     color: ${Colors.BLACK};
     margin-bottom:1em;
  }

  h2{
     font-size:1.3rem;
     text-transform: uppercase;
     letter-spacing:1.3px;
     color: ${Colors.BLACK};
     margin-bottom:2em;
  }

  .go-back-btn{
    top:-3.5em;
  }


  @media (min-width:${breakPoints.bpLarge}px){
     &>div{
      ${flexObj({align:"flex-start"})};
     }
  }

`


// Checkout form Styling
export const StyledCheckoutForm = styled.form`
   background-color:${Colors.WHITE};
   padding: 1.8em 1.8em 1em;
   border-radius:8px;

   input,
   label{
      display:block
   }

   label {
      color: ${Colors.BLACK};
      font-size:.8rem;
      margin-block:.4em;
      font-weight:700;
      opacity:.9;
      letter-spacing: 1px;
   }

   input[type="text"],
   input[type="email"]{
      border:1px solid #c7c4c4;
      border-radius:8px;
      padding:1.4em 1.2em;
      width: 100%;
      color: ${Colors.BLACK};
      font-size:.95rem;
      font-weight:500;

      &::placeholder{
         color: ${Colors.ALMOST_BLACK};
         text-transform: capitalize;
         font-family: inherit;
         font-weight:700;
         opacity:.4;
         font-size:.9rem;
      }

      &:focus{
         border: 1.5px solid ${Colors.DARK_ORANGE};
      }
   }

   select{
      background: transparent;
      width:90%;
      outline:none;
      border:1px solid #c7c4c4;
      border-radius:8px;
      padding:1.2em 1.2em;
      color: ${Colors.BLACK};
      font-size:.9rem;
      font-weight:500;
      appearance: none;
      -webkit-appearance: none;
      cursor:pointer;
   }

   option{
      font-family:inherit;
      font-size:.9rem;
      font-weight:500;
      color: ${Colors.DARK_ORANGE};
   }

   .form-area-container{
      margin-block:3em;

      &>p:first-of-type{
         color: ${Colors.DARK_ORANGE};
         text-transform: uppercase;
         font-size:.95rem;
         font-weight: 700;
         margin-bottom:1em;
         letter-spacing:1.5px;
      }

      .alt-label-para{
         font-size:.9rem;
         font-weight: 700;
         line-height: 25px;
      }
   }
   .input-container{
      margin-block:1.5em;
      position:relative;
   }

   .radio-input-container{
      border:1px solid #c7c4c4;
      border-radius:8px;
      padding:1em 1.2em;
      margin-block:1em;
      position:relative;
      width: 100%;
      ${flexObj({justify:"flex-start"})};
      color: ${Colors.BLACK};
      font-size:.9rem;
      font-weight:500;

      &:focus-within{
         border: 1px solid ${Colors.DARK_ORANGE};
      }

      span{
         color: ${Colors.BLACK};
         font-size:.93rem;
         margin-block:.4em;
         font-weight:700;
         opacity:.9;
         margin-left:3em;
      }


      label{
         position:absolute;
         left:1.5em;
         border:1px solid #dad7d7;
         width:1.7em;
         aspect-ratio: 1/1;
         border-radius: 50%;
         cursor:pointer;

         &::after{
            content:"";
            width:0;
            aspect-ratio: 1/1;
            border-radius: 50%;
            position:absolute;
            left:0;
            right:0;
            margin:auto;
            bottom:0;
            top:0;
            transition: all .2s ease-in-out;
         }
      }

      input:checked + label::after {
         width:.9em;
         background-color: ${Colors.DARK_ORANGE};
      }


      input{
         position: absolute;
         z-index:-1;
      }

      
   }

   .onCashDelivery-notice{
      margin-block:2em;
      ${flexObj({direction:"column"})};
      gap:10px;

      p{
         font-size:.95rem;
         color:${Colors.BLACK};
         opacity:.6;
         line-height:25px;
      }
   }



   /* error and  */
   /* input alert */

   .error{
      label{
         color: #d60c0c;
      }
      input[type="text"],
      input[type="email"]{
         border: 1px solid red;
      }
   }

   span[role="alert"]{
      color: #d60c0c;
      font-size:.78rem;
      letter-spacing:.1rem;
      position:absolute;
      top:0;
      right:1em;
      text-transform: capitalize;
   }



   /* Media queries */
   @media (min-width:${breakPoints.bpLarge}px){
     width: 65%;


     .form-area-container{
         p{
           grid-column: 1/-1;
           margin-block:1em;
         }
     }

     /* billing details area */
     .form-area-container:nth-child(2){
        display:grid;
        grid-template-columns:  repeat(2, minmax(13em, 20em));
        gap:10px;
        grid-template-rows: 1.5em 6.3em 6.3em;
     }

     /* shipping area */
     .form-area-container:nth-child(3){
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1.5em repeat(3,6em);
        gap:10px;
        margin-top:4em;

        .input-container:first-of-type{
           grid-column: 1/-1;

           input{
              width:100%;
           }
        }
      }

      /* payment method area */
      .form-area-container:nth-child(4){
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2em 4em 4em 6.3em;
        margin-top:4em;
        padding-bottom:2em;
        gap:10px;
        position:relative;

        .alt-label-para{
           grid-column:1;
           grid-row: 2/4;
        }

        .radio-input-container{
           padding-block:0;
           margin-block:0;
           height:3.8em;
        }

        .onCashDelivery-notice{
          position:absolute;
          bottom:-2em;
          width:100%;
          flex-direction: row;
        }
     }
      

     /* default style */
      .input-container{
         margin-block: 1em;
        input{
          width: 100%;
          padding-block:.88em;
        }
        label{
          margin-block:.5em;
        }
     }


     .error{
        span[role="alert"]{
          top:.4em;
          right:0;
          font-size:.75rem;
          letter-spacing: .05rem;
        }
     }
  }

`











// Checkout Summary Area Styling
export const StyledCheckboxSummary = styled.div`
  background-color: ${Colors.WHITE};
  border-radius: 8px;
  margin-top:2em;
  padding:1.8em;
  
  .ordered-products-highlight{
     margin-block:1em;

     &>div{
        ${flexObj({align:"flex-start"})};
        margin-block:1em;
        gap:1em;

        img{
           width:4.8em;
           border-radius: 10px;
           display:block;
           height:auto;
        }

        p,span{
           font-weight:700;
           letter-spacing: 1px;
           text-transform: uppercase;
         }
         
         p{
            color: ${Colors.BLACK};
            font-size:.95rem;
            margin-bottom:.3em;
         }

         &>div{
            width:60%;
         }

         span{
           font-size: .9rem;
           opacity:.5;
           color: ${Colors.BLACK};
        }

        span[aria-label="order count"]{
            font-size:1rem;
        }
     }
  }

  .order-cash-summary{
    margin-top:3em;

    &>div{
      ${flexObj};
      margin-block:.5em;
    }

    p{
       text-transform:uppercase;
       color: ${Colors.ALMOST_BLACK};
       opacity:.55;
     }

     span{
        font-weight:700;
        font-size:1.15rem;
        letter-spacing: .05rem;
        color:${Colors.ALMOST_BLACK};
        opacity:.95;
     }

     .grand-total-area{
       margin-top:2em;
       span{
          color: ${Colors.DARK_ORANGE};
          opacity:1;
       }
     }
  }


  button{
     background-color: ${Colors.DARK_ORANGE};
     color: ${Colors.WHITE};
     width:100%;
     padding:.85em;
     text-align:center;
     display:block;
     text-transform: uppercase;
     font-weight:700;
     margin-top:2em;
     font-size:1rem;
     transition:.3s ease-in;

     &:disabled{
       cursor:not-allowed;
       opacity:.5;
     }

     &:disabled:hover{
      background-color: ${Colors.DARK_ORANGE};
     }

     &:hover{
       background-color:${Colors.LIGHT_ORANGE};
     }
  }



  /* Media queries */

    
  @media (min-width:${breakPoints.bpMedium}px){
     button{
       width: 20em;
       max-width:60%;
       margin-inline:auto;
     }
  }

  
  @media (min-width:${breakPoints.bpLarge}px){
     margin-top:0;
     width:33%;

     button{
       font-size:.9rem;
       max-width: unset;
       width:100%;
       letter-spacing: 1px;
     }


     .order-cash-summary{
        span{
          font-size:1.2rem;
        }
     }
  }
`