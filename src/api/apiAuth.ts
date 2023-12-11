import apiEndpoints from "@/api.endpoints";

import * as api from "./requests";

interface RequestParams {
  [key: string]: string;
}

export async function onLoginSubmit({ username, password }: RequestParams) {
  const data = await api.post(apiEndpoints.loginMock, { username, password });
  console.log(data);
}

export async function onRegisterSubmit({ username, password, rePassword }: RequestParams) {
  const data = await api.update(apiEndpoints.loginMock, { username, password, rePassword });
  console.log(data);
}
