import { useEffect, useState } from "react";

import { useAppSelector } from "@/redux/hooks";
import { getUserProfile, updateUserProfile } from "@/api/apiUser";
import { UserMockData } from "@/types";

import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import Form from "@/elements/form/form";
import TextControl from "@/elements/controls/text";
import TextareaControl from "@/elements/controls/textarea";
import NumberControl from "@/elements/controls/number";
import Button from "@/elements/button/button";
import UserImage from "./userImage/userImage";

import styles from "./userDetails.module.scss";

export default function UserDetails({ setIsPassChangeOpen }: { setIsPassChangeOpen: (isClose: boolean) => void }) {
  const authData = useAppSelector((state) => state.authReduxState);
  const [userData, setUserData] = useState<UserMockData>();

  useEffect(() => {
    getUserProfile().then((data) => setUserData(data));
  }, []);

  return (
    <SectionWrapper heading={`${authData.username} profile page`}>
      <div className={styles.sectionContainer}>
        <UserImage profileImg={userData?.profileImg} />
        <Form initModel={userData} onSubmit={updateUserProfile}>
          <TextControl name="username" validations={{ required: true }} />
          <TextControl name="address" validations={{ required: true }} />
          <NumberControl mask="+(000)-000-000-000" label="Phone Number" name="phone" validations={{ required: true }} />
          <TextareaControl label="Profile Description" name="description" validations={{ required: true }} />
          <div className={styles.btnContainer}>
            <Button className={styles.submitButton} submit>
              Save Profile
            </Button>
            <Button onClick={setIsPassChangeOpen}>Change password</Button>
          </div>
        </Form>
      </div>
    </SectionWrapper>
  );
}
