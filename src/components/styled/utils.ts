import styled , { css, keyframes }  from "styled-components";
import Link from "next/link";

export enum Colors {
   LIGHT_GREY = "#FAFAFA",
   WHITE = "#ffffff",
   BLACK ="#000000",
   LIGHT_ORANGE = "#FBAF85",
   DARK_ORANGE = "#D87D4A",
   ALMOST_WHITE = "#f1f1f1",
   ALMOST_BLACK = "#191919",
   FOOTER_BG = "#101010",
   BTN_HOVER_COLOR = "#4C4C4C",
}

export const FW_regular = 400;
export const FW_bold = 500;
export const FW_bolder = 700;

export const flexObj = ({align = "center",justify = "space-between",direction = "row"}) => `
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
`

export const AT_only = styled.span`
   position: absolute;
   left: -10000px;
   top: auto;
   width: 1px;
   height: 1px;
   overflow: hidden;
   clip: rect(0, 0, 0, 0);
   white-space: nowrap;
`



// MEDIA QUERY Breakpoint
export const breakPoints = {
   bpMedium: 600,
   bpLarge: 900,
}

interface ILinkProps {
   bgcolor: string,
   color: string,
   bordercolor?: string,
   hovercolor?:string,
   hoverborder?: string,
   hoverbg?: string,
   focusborder?:string;
}

export const StyledProductLink = styled(Link)`
  display:inline-block;
  width: 11em;
  text-align: center;
  text-transform: uppercase;
  margin-inline: auto;
  color: ${(props:ILinkProps) => props.color && props.color};
  font-size: .94rem;
  border-radius: 1px;
  font-weight: 700;
  background-color: ${(props:ILinkProps) => props.bgcolor && props.bgcolor};
  transition: .3s linear;
  padding:.95em;
  letter-spacing: 1px;
  border:${(props:ILinkProps) => props.bordercolor && `1px solid ${props.bordercolor}`};
  
  &:hover{
     border: ${(props:ILinkProps) => props.hoverborder && `1px solid ${props.hoverborder}`};
     background-color:${(props:ILinkProps) => props.hoverbg ? props.hoverbg : "transparent"};
     color:${(props:ILinkProps) => props.hovercolor ? props.hovercolor : "white"};
  }

  &:focus{
    border:${(props:ILinkProps) => props.focusborder && `2px dotted ${props.focusborder}`};
  }
`

// center content
export const centerContent = css`
   width:90%;
   margin-inline:auto;
   @media (min-width:${breakPoints.bpLarge}px) {
      width:81.5%;
   }

`


/* animation  */
export const slideIn = keyframes`
  from {
    opacity: 0;
    height:0;
  }

  to {
    opacity: 1;
    height:24em;
  }
`