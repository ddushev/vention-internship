import { useState } from "react";

import Page from "@/elements/page/page";

import PasswordModal from "./passwordModal/passwordModal";
import UserDetailsForm from "./userDetailsForm/userDetailsForm";

export default function Profile() {
  // User details form

  // Password modal
  const [isPassChangeOpen, setIsPassChangeOpen] = useState(false);
  return (
    <Page title="Profile">
      <UserDetailsForm setIsPassChangeOpen={setIsPassChangeOpen} />
      {isPassChangeOpen && <PasswordModal setIsPassChangeOpen={setIsPassChangeOpen} />}
    </Page>
  );
}
