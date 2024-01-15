import { Dispatch, SetStateAction } from "react";

export interface AuthData {
  username?: string;
}

export interface AuthState {
  authData: AuthData;
  setIsSignInOpen: Dispatch<SetStateAction<boolean>>;
}

export interface UserMockData {
  id?: number;
  username?: string;
  address?: string;
  phone?: string;
  description?: string;
  password?: string | null;
  profileImg?: string;
  balance?: number;
}

export interface Game {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  platforms: string[];
  minAge: number;
  addDate: Date;
  description: string;
  amount?: number;
}
