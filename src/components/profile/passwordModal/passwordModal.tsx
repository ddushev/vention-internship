import { WUPFormElement } from "web-ui-pack";

import Modal from "@/elements/controls/wupModal";
import Form from "@/elements/form/form";
import PasswordControl from "@/elements/controls/password";

import { changeUserPassword } from "@/api/apiUser";
import styles from "./passwordModal.module.scss";

export default function PasswordModal({ setIsPassChangeOpen }: { setIsPassChangeOpen: (isClose: boolean) => void }) {
  async function handleFormSubmit(event: CustomEvent) {
    try {
      const { oldPassword, newPassword, repeatPassword } = (event.target as WUPFormElement).$model;
      if (oldPassword === newPassword) {
        throw new Error("New password should be different than the old one!");
      }
      if (newPassword !== repeatPassword) {
        throw new Error("New password should match repeat password!");
      }
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
        <PasswordControl name="newPassword" isStrict validationShowAll validations={{ required: true }} />
        <PasswordControl name="repeatPassword" validations={{ required: true }} />
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </Form>
    </Modal>
  );
}
