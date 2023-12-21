import apiEndpoints from "@/api.endpoints";
import { UserMockData } from "@/types";
import { dispatch } from "@/redux/store";
import { setAuthState } from "@/redux/authSlice";
import handleErrors from "@/utils/handleErrors";

import * as api from "./requests";

export async function getUserProfile() {
  const userData = await api.get(apiEndpoints.getProfile);
  return userData;
}

export async function updateUserProfile({ username, address, phone, description }: UserMockData) {
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

// First approach
export async function updateImage(img: string) {
  await api.update(apiEndpoints.changeProfileImage, { img });
}

// Second approach
// export async function updateImage(fileInputRef: RefObject<HTMLInputElement>) {
//   const fileInput = fileInputRef.current;

//   if (fileInput && fileInput.files && fileInput.files.length > 0) {
//     const imageFile = fileInput.files[0];

//     const formData = new FormData();
//     formData.append("profileImg", imageFile);
//     const response = await fetch(apiEndpoints.changeProfileImage, {
//       method: "put",
//       body: formData,
//     });
//     await response.json();
//   } else {
//     console.log("No file selected");
//   }
// }
