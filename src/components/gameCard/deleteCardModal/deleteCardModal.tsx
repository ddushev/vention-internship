import { useAppDispatch } from "@/redux/hooks";
import { setProductState } from "@/redux/productSlice";

import Modal from "@/elements/controls/wupModal";
import Button from "@/elements/button/button";
import { deleteProduct } from "@/api/apiProducts";

import removeFromCart from "@/utils/removeFromCart";
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
  const dispatch = useAppDispatch();
  const handleDeleteConfirmClick = async () => {
    const { games, removedGame } = await deleteProduct(id);
    dispatch(setProductState(games));
    removeFromCart(removedGame);
  };
  return (
    <Modal onClose={() => setIsDeleteCardModalOpen(false)}>
      <h2 className={styles.modalHeading}>Are you sure you want too delete product {gameName}?</h2>
      <div className={styles.buttonsContainer}>
        <Button onClick={handleDeleteConfirmClick}>Yes</Button>
        <Button onClick={() => setIsDeleteCardModalOpen(false)}>No</Button>
      </div>
    </Modal>
  );
}
