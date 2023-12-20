import apiEndpoints from "@/api.endpoints";
import { CurrentUser } from "@/types";
import { dispatch } from "@/redux/store";
import { setAuthState } from "@/redux/authSlice";
import handleErrors from "@/utils/handleErrors";
import * as api from "./requests";

export async function getUserProfile() {
  const userData = await api.get(apiEndpoints.getProfile);
  return userData;
}

export async function updateUserProfile({ username, address, phone, description }: CurrentUser) {
  try {
    const updatedUserName = await api.update(apiEndpoints.saveProfile, { username, address, phone, description });
    dispatch(setAuthState(updatedUserName));
  } catch (error) {
    handleErrors(error);
  }
}

export async function changeUserPassword({ oldPassword, newPassword }: { oldPassword: string; newPassword: string }) {
  try {
    await api.update(apiEndpoints.changePassword, { oldPassword, newPassword });
  } catch (error) {
    handleErrors(error);
  }
}
