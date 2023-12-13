import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

import apiEndpoints from "@/api.endpoints";
import { AuthData } from "@/types";
import PATHS from "@/utils/paths";
import authFormValidations from "@/utils/authFormValidations";
import * as api from "./requests";

interface RequestParams {
  [key: string]: string;
}

export async function onLoginSubmit({ username, password }: RequestParams, setAuthData: Dispatch<SetStateAction<AuthData>>) {
  try {
    authFormValidations({ username, password });
    const data = await api.post(apiEndpoints.loginMock, { username, password });
    setAuthData(data);
  } catch (error) {
    if (Array.isArray(error)) {
      alert(error.join("\n"));
    } else {
      alert(error);
    }
  }
}

export async function onRegisterSubmit(
  { username, password, rePassword }: RequestParams,
  setAuthData: Dispatch<SetStateAction<AuthData>>,
  navigate: NavigateFunction,
) {
  try {
    authFormValidations({ username, password, rePassword });
    const data = await api.update(apiEndpoints.registerMock, { username, password, rePassword });
    setAuthData(data);
    navigate(PATHS.PROFILE);
  } catch (error) {
    if (Array.isArray(error)) {
      alert(error.join("\n"));
    } else {
      alert(error);
    }
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
