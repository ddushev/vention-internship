import apiEndpoints from "@/api.endpoints";

import * as api from "./requests";

interface RequestParams {
  [key: string]: string;
}

export async function onLoginSubmit({ username, password }: RequestParams) {
  try {
    const data = await api.post(apiEndpoints.loginMock, { username, password });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function onRegisterSubmit({ username, password, rePassword }: RequestParams) {
  try {
    const data = await api.update(apiEndpoints.registerMock, { username, password, rePassword });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
