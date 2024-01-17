import { Game } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Game[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductState: (_state, action: PayloadAction<Game[]>) => [...action.payload],
  },
});

export const { setProductState } = productSlice.actions;

export default productSlice.reducer;
