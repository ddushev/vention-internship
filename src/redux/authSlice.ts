import { AuthData, AuthReduxState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AuthReduxState = {
  authData: {
    username: "",
  },
  isSignInOpen: false,
  isSignUpOpen: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthData>) => {
      state.authData = action.payload;
    },
    setIsSignInOpen: (state, action: PayloadAction<boolean>) => {
      state.isSignInOpen = action.payload;
    },
    setIsSignUpOpen: (state, action: PayloadAction<boolean>) => {
      state.isSignUpOpen = action.payload;
    },
  },
});

export const { setAuthState, setIsSignInOpen, setIsSignUpOpen } = authSlice.actions;

export default authSlice.reducer;
