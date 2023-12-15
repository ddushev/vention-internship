import { Dispatch, SetStateAction } from "react";

export interface AuthData {
  username?: string;
}

export interface AuthState {
  authData: AuthData;
  setIsSignInOpen: Dispatch<SetStateAction<boolean>>;
}

export interface AuthReduxState {
  authData: AuthData;
  isSignInOpen: boolean;
}
