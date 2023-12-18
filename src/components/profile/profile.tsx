import { useAppSelector } from "@/redux/hooks";

import Form from "@/elements/form";
import PasswordControl from "@/elements/controls/password";
import TextControl from "@/elements/controls/text";
import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";

export default function Profile() {
  const authData = useAppSelector((state) => state.authReduxState);
  return (
    <Page title="Profile">
      <SectionWrapper heading={`${authData.username} profile page`}>
        <Form>
          <TextControl name="email" validations={{ required: true, email: true }} />
          <PasswordControl name="password" isStrict validations={{ required: true }} validationShowAll />
        </Form>
      </SectionWrapper>
    </Page>
  );
}
