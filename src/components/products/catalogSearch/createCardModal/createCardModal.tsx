import { addProduct } from "@/api/apiProducts";
import { setProductState } from "@/redux/productSlice";
import { useAppDispatch } from "@/redux/hooks";

import Modal from "@/elements/controls/wupModal";
import Button from "@/elements/button/button";

import { Game, Product } from "@/types";
import GameForm from "@/elements/gameForm/gameForm";
import styles from "./createCardModal.module.scss";

export default function CreateCardModal({ setIsCardModalOpen }: { setIsCardModalOpen: (isClose: boolean) => void }) {
  const dispatch = useAppDispatch();

  const onSubmitHandler = async (data: Product) => {
    const games: Game[] = await addProduct(data);
    dispatch(setProductState(games));
  };
  return (
    <Modal onClose={() => setIsCardModalOpen(false)} className={styles.modalContainer}>
      <h2 className={styles.modalHeader}>Create Card</h2>
      <div className={styles.formContainer}>
        <GameForm onSubmitHandler={onSubmitHandler}>
          <Button className={styles.addGameButton} submit>
            Add game
          </Button>
        </GameForm>
      </div>
    </Modal>
  );
}
