import Modal from "@/elements/controls/wupModal";

import styles from "./createCardModal.module.scss";

export default function CreateCardModal({ setIsCardModalOpen }: { setIsCardModalOpen: (isClose: boolean) => void }) {
  return (
    <Modal onClose={() => setIsCardModalOpen(false)} className={styles.modalContainer}>
      <h2 className={styles.modalHeader}>Create Card</h2>
    </Modal>
  );
}
