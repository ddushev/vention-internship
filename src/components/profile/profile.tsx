import { useEffect, useState } from "react";
import { WUPFormElement } from "web-ui-pack";

import { useAppSelector } from "@/redux/hooks";
import { getUserProfile } from "@/api/apiUser";
import { CurrentUser } from "@/types";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import Form from "@/elements/form";
import TextControl from "@/elements/controls/text";
import TextareaControl from "@/elements/controls/textarea";

export default function Profile() {
  const authData = useAppSelector((state) => state.authReduxState);
  const [userData, setUserData] = useState<CurrentUser>();
  useEffect(() => {
    getUserProfile().then((data) => setUserData(data));
  }, []);
  const handleFormSubmit = (event: CustomEvent) => {
    const formData = (event.target as WUPFormElement).$model;
    console.log(formData);
  };
  return (
    <Page title="Profile">
      <SectionWrapper heading={`${authData.username} profile page`}>
        <Form initModel={userData} onSubmit={handleFormSubmit}>
          <TextControl name="username" validations={{ required: true }} />
          <TextControl name="address" validations={{ required: true }} />
          <TextControl label="Phone Number" name="phone" validations={{ required: true }} />
          <TextareaControl label="Profile Description" name="description" validations={{ required: true }} />
        </Form>
      </SectionWrapper>
    </Page>
  );
}
