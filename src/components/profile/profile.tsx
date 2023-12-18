import { useAppSelector } from "@/redux/hooks";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import Form from "@/elements/form";
import TextControl from "@/elements/controls/text";
import TextareaControl from "@/elements/controls/textarea";
import NumberControl from "@/elements/controls/number";

export default function Profile() {
  const authData = useAppSelector((state) => state.authReduxState);
  return (
    <Page title="Profile">
      <SectionWrapper heading={`${authData.username} profile page`}>
        <Form>
          <TextControl name="Name" validations={{ required: true }} />
          <TextControl name="Username" validations={{ required: true }} />
          <TextControl name="Address" validations={{ required: true }} />
          <NumberControl name="Phone number " validations={{ required: true }} />
          <TextareaControl name="Profile description" validations={{ required: true }} />
        </Form>
      </SectionWrapper>
    </Page>
  );
}
