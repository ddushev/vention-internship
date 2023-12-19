import { useAppSelector } from "@/redux/hooks";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import Form from "@/elements/form";
import TextControl from "@/elements/controls/text";
import TextareaControl from "@/elements/controls/textarea";
import NumberControl from "@/elements/controls/number";
import { WUPFormElement } from "web-ui-pack";

export default function Profile() {
  const authData = useAppSelector((state) => state.authReduxState);
  const handleFormSubmit = (event: CustomEvent) => {
    const formData = (event.target as WUPFormElement).$model;
    console.log(formData);
  };
  return (
    <Page title="Profile">
      <SectionWrapper heading={`${authData.username} profile page`}>
        <Form onSubmit={handleFormSubmit}>
          <TextControl name="username" validations={{ required: true }} />
          <TextControl name="address" validations={{ required: true }} />
          <NumberControl label="Phone Number" name="phoneNumber" validations={{ required: true }} />
          <TextareaControl label="Profile Description" name="profileDescription" validations={{ required: true }} />
        </Form>
      </SectionWrapper>
    </Page>
  );
}
