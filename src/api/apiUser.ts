import apiEndpoints from "@/api.endpoints";

import * as api from "./requests";

export async function getUserProfile() {
  const userData = await api.get(apiEndpoints.getProfile);
  return userData;
}

export async function saveUserProfile() {
  await console.log("placeholder");
}
