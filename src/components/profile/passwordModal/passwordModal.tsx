import { WUPFormElement, WUPPasswordControl } from "web-ui-pack";

import Modal from "@/elements/controls/wupModal";
import Form from "@/elements/form/form";
import PasswordControl from "@/elements/controls/password";

import { changeUserPassword } from "@/api/apiUser";
import styles from "./passwordModal.module.scss";

export default function PasswordModal({ setIsPassChangeOpen }: { setIsPassChangeOpen: (isClose: boolean) => void }) {
  async function handleFormSubmit(event: CustomEvent) {
    try {
      const { oldPassword, newPassword } = (event.target as WUPFormElement).$model;
      await changeUserPassword({ oldPassword, newPassword });
    } catch (error) {
      alert(error);
    }
  }
  return (
    <Modal onClose={() => setIsPassChangeOpen(false)} className={styles.modalContainer}>
      <h2 className={styles.modalHeader}>Change password</h2>
      <Form onSubmit={(event) => handleFormSubmit(event)}>
        <PasswordControl name="oldPassword" validations={{ required: true }} />
        <PasswordControl
          name="newPassword"
          isStrict
          validationShowAll
          validations={{
            required: true,
            _old: (v, c) =>
              v === (c.previousElementSibling as WUPPasswordControl).$value && "New password should be different than the old one!",
          }}
        />
        <PasswordControl name="repeatPassword" validations={{ required: true, confirm: true }} />
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </Form>
    </Modal>
  );
}
