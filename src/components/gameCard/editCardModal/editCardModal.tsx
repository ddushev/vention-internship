import cx from "classnames";

import { updateProduct } from "@/api/apiProducts";
import { setProductState } from "@/redux/productSlice";
import { useAppDispatch } from "@/redux/hooks";

import Modal from "@/elements/controls/wupModal";
import Form from "@/elements/form/form";
import Button from "@/elements/button/button";
import TextControl from "@/elements/controls/text";
import NumberControl from "@/elements/controls/number";
import TextareaControl from "@/elements/controls/textarea";
import SelectControl from "@/elements/controls/select/select";
import CheckControl from "@/elements/controls/check/check";

import { Game, Product } from "@/types";
import ControlWrapper from "@/elements/controlWrapper/controlWrapper";
import styles from "./editCardModal.module.scss";

export default function EditCardModal({ setIsCardModalOpen, game }: { setIsCardModalOpen: (isClose: boolean) => void; game: Game }) {
  const dispatch = useAppDispatch();

  const onSubmitHandler = async (data: Product) => {
    const games: Game[] = await updateProduct(data);
    dispatch(setProductState(games));
  };
  return (
    <Modal onClose={() => setIsCardModalOpen(false)} className={styles.modalContainer}>
      <h2 className={styles.modalHeader}>Create Card</h2>
      <div className={styles.imgFormContainer}>
        <div className={styles.imgContainer}>
          <h3 className={styles.subheadings}>Card image</h3>
          <img className={styles.img} src={game.image} alt={`${game.name}-img`} />
        </div>
        <Form className={styles.form} onSubmit={onSubmitHandler}>
          <h3 className={styles.subheadings}>Information</h3>
          <ControlWrapper text="Name">
            <TextControl initValue={game.name} className={styles.controls} name="name" validations={{ required: true }} />
          </ControlWrapper>
          <ControlWrapper text="Category">
            <TextControl initValue={game.genre} className={styles.controls} name="category" validations={{ required: true }} />
          </ControlWrapper>
          <ControlWrapper text="Price">
            <NumberControl initValue={game.price} className={styles.controls} name="price" validations={{ required: true }} />
          </ControlWrapper>
          <ControlWrapper text="Image">
            <TextControl initValue={game.image} className={styles.controls} name="image" validations={{ required: true }} />
          </ControlWrapper>
          <ControlWrapper text="Description">
            <TextareaControl
              initValue={game.description}
              className={cx(styles.controls, styles.descriptionControl)}
              name="description"
              validations={{ required: true }}
            />
          </ControlWrapper>
          <ControlWrapper text="Age">
            <SelectControl
              className={cx(styles.controls, styles.ageControl)}
              name="minAge"
              initValue={game.minAge.toString()}
              items={[
                { text: "3+", value: "3" },
                { text: "6+", value: "6" },
                { text: "12+", value: "12" },
                { text: "18+", value: "18" },
              ]}
            />
          </ControlWrapper>

          <h3 className={styles.subheadings}>Platform</h3>
          <ControlWrapper text="PC">
            <CheckControl initValue={game.platforms.includes("pc")} className={cx(styles.controls, styles.checkControl)} name="pc" />
          </ControlWrapper>
          <ControlWrapper text="PlayStation 5">
            <CheckControl initValue={game.platforms.includes("ps5")} className={cx(styles.controls, styles.checkControl)} name="ps5" />
          </ControlWrapper>
          <ControlWrapper text="XBox One">
            <CheckControl initValue={game.platforms.includes("xbox")} className={cx(styles.controls, styles.checkControl)} name="xbox" />
          </ControlWrapper>
          <div className={styles.heightContainer}>
            <div className={styles.buttonContainer}>
              <Button className={styles.addGameButton} submit>
                Submit
              </Button>
              <Button>Delete card</Button>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
