import { AuthData } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthReduxState {
  authData: AuthData;
  isSignInOpen: boolean;
}

const initialState: AuthReduxState = {
  authData: {
    username: "",
  },
  isSignInOpen: false,
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
  },
});

export const { setAuthState, setIsSignInOpen } = authSlice.actions;

export default authSlice.reducer;
