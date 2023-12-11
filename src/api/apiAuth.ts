import { Dispatch, SetStateAction } from "react";

import apiEndpoints from "@/api.endpoints";

import * as api from "./requests";

interface RequestParams {
  [key: string]: string;
}

export async function onLoginSubmit({ username, password }: RequestParams, setAuthData: Dispatch<SetStateAction<object>>) {
  try {
    const data = await api.post(apiEndpoints.loginMock, { username, password });
    setAuthData(data);
  } catch (error) {
    console.log(error);
  }
}

export async function onRegisterSubmit({ username, password, rePassword }: RequestParams, setAuthData: Dispatch<SetStateAction<object>>) {
  try {
    const data = await api.update(apiEndpoints.registerMock, { username, password, rePassword });
    setAuthData(data);
  } catch (error) {
    console.log(error);
  }
}
