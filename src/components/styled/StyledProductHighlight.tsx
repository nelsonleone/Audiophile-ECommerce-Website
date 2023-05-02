import styled from "styled-components";
import { Colors, breakPoints, flexObj } from "./utils";

interface IPropsIndex {
   index:number
}

export const StyledProductHighlight = styled.div`

  ${flexObj({direction:"column"})};
  margin-block:5.5em;

  img{
     border-radius:10px;
     height:22em;
     width:auto;
     transition:.3s linear;

     &:hover{
      scale: 1.05;
     }
  }

  svg{
    width:80%;
    height:22em;
  }

  .text-content{
      text-align:center;
      h2{
         text-transform: uppercase;
         letter-spacing: 2px;
         color: ${Colors.BLACK};
         margin-block:.7em;
         font-size: 1.7rem;
      }

      span{
         color: ${Colors.DARK_ORANGE};
         letter-spacing:6px;
         font-size:.93rem;
         text-transform: uppercase;
         margin-block:1em;
         display:block;
      }

      p{
         color: ${Colors.BLACK};
         opacity: .6;
         font-weight: 500;
         line-height: 26px;
         font-size: clamp(0.96rem, 0.049vw + 0.958rem, 1rem); 
      }

      a{
         margin-block:1.2em;

         &:focus{
            background-color: ${Colors.LIGHT_ORANGE};
            border: 1px dotted ${Colors.BLACK};
         }
      }
  }

  @media (min-width:${breakPoints.bpMedium}px){

      margin-block:7em;

     .text-content{
        max-width:80%;
        margin-inline:auto;

         p{
          line-height:31px; 
         }
     }
  }

  @media (min-width:${breakPoints.bpLarge}px){
      flex-direction: ${(props:IPropsIndex) => (props.index % 2) === 0 ? "row" : "row-reverse"};
      margin-block:11em;

     .text-content{
        max-width:40%;
        margin-inline:0;
        text-align:left;
        
         h2{
          font-size: 2.6rem;
          line-clamp: 2;
          margin-block:.2em;
        }
     }

     svg{
         width:unset;
         height:unset;
     }

      .image-container{
        img{
          height: 30em;
        }
     }
  }
`