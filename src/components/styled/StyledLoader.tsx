import styled from "styled-components";
import { Colors, flexObj } from "./utils";

export const StyledLoader = styled.div`
   background-color:${Colors.BLACK};
   position: fixed;
   top:0;
   bottom:0;
   height:100vh;
   overflow: hidden;
   width:100%;
   z-index:999;
   ${flexObj({justify:"center",direction:"column"})};
`