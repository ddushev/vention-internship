import { useState } from "react";

import { updateProduct } from "@/api/apiProducts";
import { setProductState } from "@/redux/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import updateGameInCart from "@/utils/updateGameInCart";

import Modal from "@/elements/controls/wupModal";
import Button from "@/elements/button/button";
import GameForm from "@/elements/gameForm/gameForm";
import { Game, Product } from "@/types";
import DeleteCardModal from "../deleteCardModal/deleteCardModal";

import styles from "./editCardModal.module.scss";

export default function EditCardModal({ setIsCardModalOpen, game }: { setIsCardModalOpen: (isClose: boolean) => void; game: Game }) {
  const dispatch = useAppDispatch();
  const [isDeleteCardModalOpen, setIsDeleteCardModalOpen] = useState(false);
  const handleDeleteCardClick = () => {
    setIsDeleteCardModalOpen(true);
  };
  const onSubmitHandler = async (data: Product) => {
    const games: Game[] = await updateProduct(data, game.id);
    dispatch(setProductState(games));
    const updatedGame: Game = games.find((g) => g.id === game.id)!;
    updateGameInCart(updatedGame);
  };
  return (
    <>
      <Modal onClose={() => setIsCardModalOpen(false)} className={styles.modalContainer}>
        <h2 className={styles.modalHeader}>Create Card</h2>
        <div className={styles.imgFormContainer}>
          <div className={styles.imgContainer}>
            <h3 className={styles.subheadings}>Card image</h3>
            <img className={styles.img} src={game.image} alt={`${game.name}-img`} />
          </div>
          <GameForm game={game} onSubmitHandler={onSubmitHandler}>
            <div className={styles.heightContainer}>
              <div className={styles.buttonContainer}>
                <Button className={styles.addGameButton} submit>
                  Submit
                </Button>
                <Button onClick={handleDeleteCardClick}>Delete card</Button>
              </div>
            </div>
          </GameForm>
        </div>
      </Modal>
      {isDeleteCardModalOpen && <DeleteCardModal gameName={game.name} id={game.id} setIsDeleteCardModalOpen={setIsDeleteCardModalOpen} />}
    </>
  );
}
