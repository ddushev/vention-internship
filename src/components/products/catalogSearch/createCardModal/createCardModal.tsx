import { addProduct } from "@/api/apiProducts";
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
      <Form onSubmit={onSubmitHandler}>
        <h3>Information</h3>
        <TextControl name="name" validations={{ required: true }} />
        <TextControl name="category" />
        <NumberControl name="price" />
        <TextControl name="image" />
        <TextareaControl name="description" />
        <SelectControl
          name="minAge"
          initValue="3"
          items={[
            { text: "3+", value: "3" },
            { text: "6+", value: "6" },
            { text: "12+", value: "12" },
            { text: "18+", value: "18" },
          ]}
        />

        <h3>Platform</h3>
        <CheckControl name="pc" />
        <CheckControl name="ps5" />
        <CheckControl name="xbox" />
        <Button submit>Add game</Button>
      </Form>
    </Modal>
  );
}
