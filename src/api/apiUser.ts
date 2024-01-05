import apiEndpoints from "@/api.endpoints";
import { UserMockData } from "@/types";
import { dispatch } from "@/redux/store";
import { setAuthState } from "@/redux/authSlice";
import handleErrors from "@/utils/handleErrors";

import { get, update } from "./requests";

export async function getUserProfile() {
  const userData = await get(apiEndpoints.getProfile);
  return userData;
}

export async function updateUserProfile({ username, address, phone, description }: UserMockData) {
  try {
    const updatedUserName = await update(apiEndpoints.saveProfile, { username, address, phone, description });
    dispatch(setAuthState(updatedUserName));
  } catch (error) {
    handleErrors(error);
  }
}

export async function changeUserPassword({ oldPassword, newPassword }: { oldPassword: string; newPassword: string }) {
  try {
    await update(apiEndpoints.changePassword, { oldPassword, newPassword });
  } catch (error) {
    handleErrors(error);
  }
}

export async function updateImage(imgFile: File) {
  try {
    const formData = new FormData();
    formData.append("profileImg", imgFile);
    const response = await fetch(apiEndpoints.changeProfileImage, {
      method: "put",
      body: formData,
    });
    await response.json();
  } catch (error) {
    handleErrors(error);
  }
}
