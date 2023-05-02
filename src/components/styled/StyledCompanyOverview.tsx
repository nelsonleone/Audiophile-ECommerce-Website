import styled from "styled-components";
import { Colors, breakPoints, centerContent, flexObj } from "./utils";

export const StyledCompanyOverview = styled.section`
   ${flexObj({direction:"column-reverse",justify:"center"})};
   gap:1em;
   margin-block:8em;
   margin-inline:auto;
   ${centerContent};

   img{
      width:auto;
      height:auto;
      border-radius:10px;
   }

   .overview-text{
     text-align:center;

      h2{
         color: ${Colors.BLACK};
         font-size:1.74rem;
         letter-spacing: 1px;
         line-height: 1.85rem;
         margin-block:1em;

         span{
            color: ${Colors.DARK_ORANGE};
         }
      }

      p{
         color: ${Colors.BLACK};
         opacity:.7;
         line-height:26px;
         font-weight: 500;
      }
   }

   @media (min-width:${breakPoints.bpMedium}px){

      .overview-text{
         width: 35em;
         margin-inline:auto;
   
         h2{
            font-size:2.7rem;
            line-height: 3rem;
         }
      }

      img{
         display:block;
      }
   }

   @media (min-width:${breakPoints.bpLarge}px){
      margin-block:10em;
      flex-direction: row;
      justify-content: space-between;
      gap:2em;

      .overview-text{
         text-align:left;
         width: 40%;
         margin:0;
      }
   }
`