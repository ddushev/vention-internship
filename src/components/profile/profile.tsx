import { useEffect, useState } from "react";
import { WUPFormElement } from "web-ui-pack";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAuthState } from "@/redux/authSlice";
import { getUserProfile, updateUserProfile } from "@/api/apiUser";
import { CurrentUser } from "@/types";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import Form from "@/elements/form/form";
import TextControl from "@/elements/controls/text";
import TextareaControl from "@/elements/controls/textarea";
import NumberControl from "@/elements/controls/number";

import styles from "./profile.module.scss";
import PasswordModal from "./passwordModal/passwordModal";

export default function Profile() {
  // User details form
  const dispatch = useAppDispatch();
  const authData = useAppSelector((state) => state.authReduxState);
  const [userData, setUserData] = useState<CurrentUser>();

  useEffect(() => {
    getUserProfile().then((data) => setUserData(data));
  }, []);

  async function handleFormSubmit(event: CustomEvent) {
    try {
      const updatedFormData = (event.target as WUPFormElement).$model;
      const updatedUserName = await updateUserProfile(updatedFormData);
      dispatch(setAuthState(updatedUserName));
    } catch (error) {
      alert(error);
    }
  }

  // Password modal
  const [isPassChangeOpen, setIsPassChangeOpen] = useState(false);
  return (
    <Page title="Profile">
      <SectionWrapper heading={`${authData.username} profile page`}>
        <Form initModel={userData} onSubmit={(event) => handleFormSubmit(event)}>
          <TextControl name="username" validations={{ required: true }} />
          <TextControl name="address" validations={{ required: true }} />
          <NumberControl mask="+(000)-000-000-000" label="Phone Number" name="phone" validations={{ required: true }} />
          <TextareaControl label="Profile Description" name="description" validations={{ required: true }} />
          <div className={styles.btnContainer}>
            <button className={styles.submitBtn} type="submit">
              Save Profile
            </button>
            <button onClick={() => setIsPassChangeOpen(true)} className={styles.buttonBtn} type="button">
              Change password
            </button>
          </div>
        </Form>
      </SectionWrapper>
      {isPassChangeOpen && <PasswordModal onClose={setIsPassChangeOpen} />}
    </Page>
  );
}
