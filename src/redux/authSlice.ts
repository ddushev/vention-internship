import { AuthData } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AuthData = {
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthData>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
