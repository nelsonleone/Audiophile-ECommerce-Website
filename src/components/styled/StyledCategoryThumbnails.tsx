import styled, { css } from "styled-components";
import { Colors, breakPoints, centerContent, flexObj } from "./utils";

interface IStyleProps {
   location: string,
}

// location props is used to handle styling based on places the Component is used, 
// so styles will only apply when we use the component in the main nav
const inHeader = css`
   ${(props:IStyleProps) =>
    props.location === "main-nav" &&
    css`

      padding-top:6em;
      ${flexObj({justify:"center",direction:"column"})};

      li{
         margin-inline:auto;
         margin-bottom:6em;
         padding:1em 1em .5em;
      }
      
      li:last-of-type{
         margin-bottom:2em;
      }

      @media (min-width:${breakPoints.bpMedium}px) {
         flex-direction: row;
         gap:10px;
         padding-inline:1em;

         li{
            margin-bottom:1em;
            width:auto;
            flex-basis: 30%;
         }
      }

    `
   }
`



// Category Thumbnail Nav, Homepage Located
const outsideHeader = css`
   ${(props:IStyleProps) =>
    props.location === "mainPage" || props.location === "dynamicPage" ?
    css`

      margin-block:14em 7em;
      ${flexObj({justify:"center",direction:"column"})};

      li{
         margin-bottom:6em;
         padding:2.3em 1em 1em;

         p{
            margin-bottom:1.3em;
         }
      }
      

      @media (min-width:${breakPoints.bpLarge}px) {
         ${flexObj({justify:"space-between",direction:"row"})};
         gap:1em;
      }

    `
    :
    ""
   }

  ${(props:IStyleProps) =>
    props.location === "mainPage" &&
    css`
     ${centerContent};
    `
   }

`



export const StyledCategoryThumbnailUl = styled.ul`
   ${inHeader};
   ${outsideHeader};

   li{
      background-color: ${Colors.ALMOST_WHITE};
      border-radius: 7px;
      position: relative;
      width:20em;
      ${flexObj({justify:"center",direction:"column"})};

      & > img{
         position: absolute;
         top:-5em;
         width:auto;
      }

      p{
         margin-top:4.2em;
         line-height: 10px;
         text-transform: uppercase;
         font-weight: 700;
         font-size:1.2rem;
         letter-spacing: 3px;
         color:${Colors.ALMOST_BLACK};
      }

      a{
         display:block;
         text-align: center;
         color:grey;
         font-size:.87rem;
         margin-block:1em;
         font-weight: 700;
         text-transform: uppercase;
         letter-spacing:1.5px;
         transition:.3s ease-in-out;

         img{
            margin-left:.4em;
         }

         &:hover{
            color: ${Colors.DARK_ORANGE};
            scale:1.1;
         }
      }
   }
`


export const StyledProductThumbnail = styled.li`


  
`
