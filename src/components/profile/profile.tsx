import { useState } from "react";

import Page from "@/elements/page/page";

import UserDetails from "./userDetailsForm/userDetails";
import PasswordModal from "./passwordModal/passwordModal";

export default function Profile() {
  // User details form

  // Password modal
  const [isPassChangeOpen, setIsPassChangeOpen] = useState(false);
  return (
    <Page title="Profile">
      <UserDetails setIsPassChangeOpen={setIsPassChangeOpen} />
      {isPassChangeOpen && <PasswordModal setIsPassChangeOpen={setIsPassChangeOpen} />}
    </Page>
  );
}
