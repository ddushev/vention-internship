import { NavigateFunction } from "react-router-dom";

import apiEndpoints from "@/api.endpoints";
import PATHS from "@/utils/paths";
import authFormValidations from "@/utils/authFormValidations";
import { AuthData } from "@/types";
import * as api from "./requests";

interface RequestParams {
  [key: string]: string;
}

const handleAuthError = (error: unknown) => {
  if (Array.isArray(error)) {
    alert(error.join("\n"));
  } else {
    alert(error);
  }
};

export async function onLoginSubmit({ username, password }: RequestParams, dispatchSetAuthState: (data: AuthData) => void) {
  try {
    authFormValidations({ username, password });
    const data = await api.post(apiEndpoints.loginMock, { username, password });
    dispatchSetAuthState(data);
  } catch (error: unknown) {
    handleAuthError(error);
  }
}

export async function onRegisterSubmit(
  { username, password, rePassword }: RequestParams,
  dispatchSetAuthState: (data: AuthData) => void,
  navigate: NavigateFunction,
) {
  try {
    authFormValidations({ username, password, rePassword });
    const data = await api.update(apiEndpoints.registerMock, { username, password, rePassword });
    dispatchSetAuthState(data);
    navigate(PATHS.PROFILE);
  } catch (error) {
    handleAuthError(error);
  }
}

export function onLogout(
  event: React.MouseEvent<HTMLAnchorElement>,
  dispatchSetAuthState: (data: AuthData) => void,
  navigate: NavigateFunction,
) {
  event.preventDefault();
  dispatchSetAuthState({ username: "" });
  navigate(PATHS.HOME);
}
