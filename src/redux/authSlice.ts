import { AuthData, AuthReduxState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AuthReduxState = {
  authData: {
    username: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthData>) => {
      state.authData = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
