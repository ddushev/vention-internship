import { useRef, useState } from "react";

import { updateImage } from "@/api/apiUser";
import styles from "./userImage.module.scss";

export default function UserImage({ image }: { image?: string }) {
  console.log(image);
  const [userImage, setUserImg] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleUpload = () => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      console.log(fileInput.files[0]);
      setUserImg(fileInput.files[0]);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="temp">
      <div className={styles.imageContainer}>
        {userImage ? (
          <img className={styles.profileImage} src={URL.createObjectURL(userImage)} alt="user-img" />
        ) : (
          <img className={styles.profileImage} src={image} alt="user-default-icon" />
        )}
      </div>
      <form>
        <input type="file" name="image" ref={fileInputRef} />
        {/* <Button submit={false}>Change profile image</Button> */}
        <button onClick={() => updateImage(fileInputRef)} type="button">
          Change profile image
        </button>
        <button onClick={() => handleUpload()} type="button">
          Update image
        </button>
      </form>
    </div>
  );
}
