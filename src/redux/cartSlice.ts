import { Game } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Game[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartState: (_state, action: PayloadAction<Game[]>) => [...action.payload],
  },
});

export const { setCartState } = cartSlice.actions;

export default cartSlice.reducer;
