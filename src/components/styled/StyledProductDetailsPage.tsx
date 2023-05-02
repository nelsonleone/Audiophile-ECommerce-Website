import styled from "styled-components";
import { Colors, breakPoints, flexObj } from "./utils";
import { StyledProductHighlight } from "./StyledProductHighlight";

export const StyledProductDetailsPage = styled.section`
   position:relative;
   margin-top:5em;

  .features-section{
     h2{
        text-transform: uppercase;
        letter-spacing:1px;
        font-size:1.5rem;
      }

      .product-box-contents{
         margin-top:7em;

         li{
            color: ${Colors.BLACK};
            font-size: 1rem;
            opacity:.7;
            text-transform:capitalize;
            margin-block:.8em;
            font-weight:500;

            strong{
               color: ${Colors.DARK_ORANGE};
               margin-right:1em;
               opacity:1;
            }
         }
      }

      p{
         color: ${Colors.BLACK};
         opacity: .7;
         word-spacing: 2px;
         font-weight: 500;
         line-height: 26px;
         font-size: clamp(0.96rem, 0.049vw + 0.958rem, 0.98rem); 
         margin-block:1.5em;
      }
   }




   /* Media queries */
   @media (min-width:${breakPoints.bpLarge}px){
      margin-top:4em;

      .go-back-btn{
         top:-7em;
      }

      .features-section{
        ${flexObj({align:"flex-start"})};

        div{
          width:60%;
        }

        h2{
          font-size:2rem;
          margin-block:1.2em;
        }

        .product-box-contents{
          margin-top:0;
          text-align:left;
          align-self:flex-start;
          width:30%;
        }
      }
   }
`








export const StyledProductDetails = styled(StyledProductHighlight)`
  .text-content{
     text-align:left !important;
     margin-top:1.5em;
      strong{
         margin-block:1em;
         letter-spacing: 3px;
         color: ${Colors.BLACK};
         display:block;
         font-size: clamp(1.1rem, 0.291vw + 0.936rem, 1.188rem);
      }

      h1{
         text-transform: uppercase;
         letter-spacing: 2px;
         color: ${Colors.BLACK};
         margin-block:.6em;
         font-size: 1.8rem;
      }


      .cart-action-btn{
         ${flexObj({justify:"flex-start"})};
         gap:1.5em;
         height:3em;

         .addToCart-btn{
            width:11em;
            background-color: ${Colors.DARK_ORANGE};
            color: ${Colors.LIGHT_GREY};
            font-size: clamp(0.938rem, 0.097vw + 0.916rem, 0.95rem);
            text-transform:uppercase;
            letter-spacing: 1px;
            text-align:center;
            height:100%;
            font-weight: 700;
            transition:.3s linear;

            &:hover{
               background-color: ${Colors.LIGHT_ORANGE};
            }
            &:focus{
               background-color: ${Colors.LIGHT_ORANGE};
               border: 2px dotted ${Colors.ALMOST_BLACK};
            }
         }

         
         div{
            background-color: ${Colors.ALMOST_WHITE};
            height:100%;
            width:8em;
            border-radius: 1px;
            color: ${Colors.BLACK};
            ${flexObj({justify:"space-between"})};

            button{
               width:38%;
               font-size: 1.2rem;
               height:100%;
               text-align:center;
               transition:all .3s ease-in-out;

               &:hover{
                 background-color: #e0dadace;
                 color: ${Colors.DARK_ORANGE};
               }
            }

            span{
               color: inherit;
            }
         }
      }




      @media (min-width:${breakPoints.bpLarge}px){

         margin-top:0;

         h1{
            font-size: 2.8rem;
            line-height:50px;
         }

         p{
            line-height:26px;
         }

         .cart-action-btn{
            margin-block:2em;
         }
      }
  }
`

export const StyledImageGallery = styled.div`
  margin-top:5em;

  img{
    width:auto;
    height:auto;
    margin-block:.8em;
    border-radius: 10px;
  }

  @media (min-width:${breakPoints.bpMedium}px){
    display:grid;
    grid-template-columns: 15em 1fr;
    gap:2em;
    grid-template-rows: 15em 15em;

    img{
       margin-block:0;
       width:100%;
       height:100%;
     }

     img:nth-child(3){
       grid-column:2;
       grid-row: 1/-1;
     }
  }

  @media (min-width:${breakPoints.bpLarge}px){
    grid-template-columns: 28em 1fr;
    grid-template-rows: 18em 18em;
    margin-top:7em;

     img:nth-child(3){
       grid-column:2;
       grid-row: 1/-1;
     }
  }
`





export const StyledSuggestedProductSection = styled.section`
  ${flexObj({direction:"column"})};
  margin-top:4em;

  h3{
     text-transform: uppercase;
     font-size: 1.5rem;
     margin-block:2em;
     letter-spacing: 1.5px;
  }

   h4{
      text-transform: uppercase;
      letter-spacing:2px;
      font-size:1.5rem;
      margin-block:.7em;
      color: ${Colors.BLACK};
  }

   div{
    text-align:center;
    margin-block:2em;
  }

   img{
    display:block;
    height:9em;
    width:100%;
    border-radius:7px;
    transition: .3s linear;

    &:hover{
      scale:1.05;
    }
  }


  /* Media queries */

  @media (min-width:${breakPoints.bpMedium}px){
      img{
         height:27em;
         width: 23em;
      }

      h4{
         margin-block:1em;
         max-width:10em;
         margin-inline:auto;
      }
   }

  @media (min-width:${breakPoints.bpLarge}px){

      flex-direction: row;
      position:relative;
      gap:1.5em;
      margin-top:10em;

      h3{
         position:absolute;
         top:-4em;
         margin-inline:auto;
         width:70%;
         left:0;
         right:0;
         text-align:center;
      }

      img{
         height:19.5em;
         width: 100%;
      }

      h4{
         margin-block:1em;
         max-width:10em;
         margin-inline:auto;
      }
   }
`