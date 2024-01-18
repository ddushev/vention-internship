import Modal from "@/elements/controls/wupModal";

import Button from "@/elements/button/button";
import styles from "./deleteCardModal.module.scss";

export default function DeleteCardModal({
  setIsDeleteCardModalOpen,
  gameName,
  id,
}: {
  setIsDeleteCardModalOpen: (isClose: boolean) => void;
  gameName: string;
  id: number;
}) {
  const handleDeleteConfirmClick = () => {
    console.log(`delete product with id ${id}`);
  };
  return (
    <Modal onClose={() => setIsDeleteCardModalOpen(false)} className={styles.modalContainer}>
      <h2 className={styles.modalHeading}>Are you sure you want too delete product {gameName}?</h2>
      <div className={styles.buttonsContainer}>
        <Button onClick={() => handleDeleteConfirmClick()}>Yes</Button>
        <Button onClick={() => setIsDeleteCardModalOpen(false)}>No</Button>
      </div>
    </Modal>
  );
}
