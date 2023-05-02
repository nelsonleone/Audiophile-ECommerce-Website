import { useAppSelector } from "@/redux/features/CustomHooks"
import { StyledCategoryThumbnailUl } from "../styled/StyledCategoryThumbnails"
import ProductThumbnail from "./ProductThumbnail";

type Props = {
   location: string,
}

// Mobile Nav

export default function CatergoryThumbnailNav(props:Props){

   const { location } = props;

   const { categoryThumbnailsData } = useAppSelector(store => store)

   return(
      <StyledCategoryThumbnailUl location={location}>
         {
            categoryThumbnailsData.map((values,index) => {
               return(
                  <ProductThumbnail
                     image={values.image}
                     link={values.link}
                     key={`${values.link}${index}`}
                     categoryName={values.categoryName}
                  />
               )
            })
         }
      </StyledCategoryThumbnailUl>
   )
}