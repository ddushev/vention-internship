import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

import apiEndpoints from "@/api.endpoints";
import { AuthData } from "@/types";
import PATHS from "@/utils/paths";
import * as api from "./requests";

interface RequestParams {
  [key: string]: string;
}

export async function onLoginSubmit({ username, password }: RequestParams, setAuthData: Dispatch<SetStateAction<AuthData>>) {
  try {
    const data = await api.post(apiEndpoints.loginMock, { username, password });
    setAuthData(data);
  } catch (error) {
    console.log(error);
  }
}

export async function onRegisterSubmit({ username, password, rePassword }: RequestParams, setAuthData: Dispatch<SetStateAction<AuthData>>) {
  try {
    const data = await api.update(apiEndpoints.registerMock, { username, password, rePassword });
    setAuthData(data);
  } catch (error) {
    console.log(error);
  }
}

export function onLogout(
  event: React.MouseEvent<HTMLAnchorElement>,
  setAuthData: Dispatch<SetStateAction<AuthData>>,
  navigate: NavigateFunction,
) {
  event.preventDefault();
  setAuthData({ username: "" });
  navigate(PATHS.HOME);
}
