import React, { SVGProps } from "react"
import ContentLoader from "react-content-loader"

// speed type of ContentLoader is conflicting with speed type of SVGProps<SVGElement>
export const ContentPlaceholderLoader = ({ backgroundColor, foregroundColor }: {backgroundColor:string,foregroundColor:string}) => (
  <ContentLoader 
    speed={2}
    width={600}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
   >
    <rect x="6" y="0" rx="0" ry="0" width="322" height="43" /> 
    <rect x="6" y="66" rx="0" ry="0" width="470" height="192" /> 
    <rect x="11" y="292" rx="0" ry="0" width="219" height="52" />
  </ContentLoader>
)

export const ImagePlaceholderLoader = (props:any) => (
  <ContentLoader 
    speed={2}
    width={511}
    height={550}
    viewBox="0 0 511 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-38" y="3" rx="0" ry="0" width="511" height="550" />
  </ContentLoader>
)