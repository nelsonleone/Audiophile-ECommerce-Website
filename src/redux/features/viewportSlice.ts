import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
   viewport: null | number
}

const viewportSlice = createSlice({
   name: "viewportSlice",
   initialState : <IinitialState>{
      viewport: null
   },
   reducers:{
      setViewport: (state,{payload}:PayloadAction<number>) => {
         state.viewport = payload;
      }
   }
})
export const { setViewport } = viewportSlice.actions;
export default viewportSlice.reducer;