import userIcon from "images/icons/userIcon.png";

import { useRef, useState } from "react";

import { updateImage } from "@/api/apiUser";
import Form from "@/elements/form/form";
import Button from "@/elements/button/button";
import styles from "./userImage.module.scss";

export default function UserImage({ profileImg }: { profileImg?: string }) {
  const [uploadedImg, setUploadedImg] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const imgFile = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImg(e.target?.result as string);
      };
      reader.readAsDataURL(imgFile);
      await updateImage(imgFile);
    } else {
      alert("Please select a file!");
    }
  };

  return (
    <div className="temp">
      <div className={styles.imageContainer}>
        {uploadedImg && <img className={styles.profileImage} src={uploadedImg} alt="profile-img" />}
        {!uploadedImg && profileImg && <img className={styles.profileImage} src={profileImg} alt="profile-img" />}
        {!uploadedImg && !profileImg && <img className={styles.profileImage} src={userIcon} alt="user-default-icon" />}
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
