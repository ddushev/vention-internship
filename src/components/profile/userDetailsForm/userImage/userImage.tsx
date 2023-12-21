import userIcon from "images/icons/userIcon.png";

import { useRef, useState } from "react";

import { updateImage } from "@/api/apiUser";
import Form from "@/elements/form/form";
import Button from "@/elements/button/button";
import styles from "./userImage.module.scss";

export default function UserImage({ profileImg }: { profileImg?: string }) {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      setProfileImage(fileInput.files[0]);
      const profileImgUrl = URL.createObjectURL(fileInput.files[0]);
      // First approach
      await updateImage(profileImgUrl);
      // Second approach
      // await updateImage(fileInputRef);
    } else {
      alert("Please select a file!");
    }
  };

  return (
    <div className="temp">
      <div className={styles.imageContainer}>
        {profileImage && <img className={styles.profileImage} src={URL.createObjectURL(profileImage)} alt="profile-img" />}
        {!profileImage && profileImg && <img className={styles.profileImage} src={profileImg} alt="profile-img" />}
        {!profileImage && !profileImg && <img className={styles.profileImage} src={userIcon} alt="user-default-icon" />}
      </div>
      <Form>
        <input type="file" name="profileImg" ref={fileInputRef} />
        <Button onClick={() => handleUpload()} submit={false}>
          Change profile image
        </Button>
      </Form>
    </div>
  );
}
