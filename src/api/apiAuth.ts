import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

import apiEndpoints from "@/api.endpoints";
import { AuthData } from "@/types";
import PATHS from "@/utils/paths";
import { loginValidation, registerValidation } from "@/utils/authFormValidations";
import * as api from "./requests";

interface RequestParams {
  [key: string]: string;
}

export async function onLoginSubmit({ username, password }: RequestParams, setAuthData: Dispatch<SetStateAction<AuthData>>) {
  try {
    loginValidation({ username, password });
    const data = await api.post(apiEndpoints.loginMock, { username, password });
    setAuthData(data);
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

export async function onRegisterSubmit({ username, password, rePassword }: RequestParams, setAuthData: Dispatch<SetStateAction<AuthData>>) {
  try {
    registerValidation({ username, password, rePassword });
    const data = await api.update(apiEndpoints.registerMock, { username, password, rePassword });
    setAuthData(data);
  } catch (error) {
    console.error(error);
    alert(error);
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
