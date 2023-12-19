import apiEndpoints from "@/api.endpoints";

import { CurrentUser } from "@/types";
import * as api from "./requests";

export async function getUserProfile() {
  const userData = await api.get(apiEndpoints.getProfile);
  return userData;
}

export async function saveUserProfile({ username, address, phone, description }: CurrentUser) {
  const updatedUserData = await api.update(apiEndpoints.saveProfile, { username, address, phone, description });
  return updatedUserData;
}