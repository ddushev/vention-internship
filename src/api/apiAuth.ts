import { NavigateFunction } from "react-router-dom";

import apiEndpoints from "@/api.endpoints";
import { AuthData } from "@/types";
import PATHS from "@/utils/paths";
import authFormValidations from "@/utils/authFormValidations";
import handleErrors from "@/utils/handleErrors";

import { post, update } from "./requests";

interface RequestParams {
  [key: string]: string;
}

export async function onLoginSubmit({ username, password }: RequestParams, dispatchSetAuthState: (data: AuthData) => void) {
  try {
    authFormValidations({ username, password });
    const data = await post(apiEndpoints.login, { username, password });
    dispatchSetAuthState(data);
  } catch (error: unknown) {
    handleErrors(error);
  }
}

export async function onRegisterSubmit(
  { username, password, rePassword }: RequestParams,
  dispatchSetAuthState: (data: AuthData) => void,
  navigate: NavigateFunction,
) {
  try {
    authFormValidations({ username, password, rePassword });
    const data = await update(apiEndpoints.register, { username, password, rePassword });
    dispatchSetAuthState(data);
    navigate(PATHS.PROFILE);
  } catch (error) {
    handleErrors(error);
  }
}

export async function onLogout(
  event: React.MouseEvent<HTMLAnchorElement>,
  dispatchSetAuthState: (data: AuthData) => void,
  navigate: NavigateFunction,
) {
  event.preventDefault();
  await post(apiEndpoints.logout);
  dispatchSetAuthState({ username: "", isAdmin: false });
  navigate(PATHS.HOME);
}
