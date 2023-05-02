import { createSlice } from "@reduxjs/toolkit";


const initialState = [
   {
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      link: "/headphones",
      categoryName: "Headphones"
   },
   {
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      link: "/speakers",
      categoryName: "Speakers"
   },
   {
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      link: "/earphones",
      categoryName: "Earphones"
   }
]

const categoryThumbnailSlice = createSlice({
   name: "categoryThumbnailData",
   initialState,
   reducers:{}
})

export default categoryThumbnailSlice.reducer;