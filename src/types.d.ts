import { Dispatch, SetStateAction } from "react";

export interface AuthData {
  username?: string;
}

export interface AuthState {
  authData: AuthData;
  setIsSignInOpen: Dispatch<SetStateAction<boolean>>;
}

export interface CurrentUser {
  id?: number;
  username?: string;
  address?: string;
  phone?: string;
  description?: string;
  password?: null;
}
