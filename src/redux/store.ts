import { configureStore } from "@reduxjs/toolkit";
import categoryThumbnailsReducer from "./features/categoryThumbnailSlice";
import viewportReducer from "./features/viewportSlice";
import cartSliceReducer from "./features/cartSlice"

const reduxStore = configureStore({
   reducer:{
      viewport: viewportReducer,
      categoryThumbnailsData: categoryThumbnailsReducer,
      cart: cartSliceReducer
   }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;