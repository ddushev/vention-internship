import cx from "classnames";

import { Game, Product } from "@/types";

import CheckControl from "../controls/check/check";
import NumberControl from "../controls/number";
import SelectControl from "../controls/select/select";
import TextControl from "../controls/text";
import TextareaControl from "../controls/textarea";
import Form from "../form/form";

import styles from "./gameForm.module.scss";

interface GameFormProps {
  children: React.ReactNode;
  game?: Game;
  onSubmitHandler: (data: Product) => Promise<void>;
}

export default function GameForm({ children, game, onSubmitHandler }: GameFormProps) {
  const initModel = {
    ...game,
    category: game?.genre,
    minAge: game?.minAge.toString(),
    pc: game?.platforms.includes("pc"),
    ps5: game?.platforms.includes("ps5"),
    xbox: game?.platforms.includes("xbox"),
  };
  return (
    <Form initModel={initModel} className={styles.form} onSubmit={onSubmitHandler}>
      <h3 className={styles.subheadings}>Information</h3>

      <TextControl className={styles.controls} inlineLabelText="Name" name="name" validations={{ required: true }} />
      <TextControl className={styles.controls} inlineLabelText="Category" name="category" validations={{ required: true }} />

      <NumberControl className={styles.controls} inlineLabelText="Price" name="price" validations={{ required: true }} />

      <TextControl className={styles.controls} inlineLabelText="Image" name="image" validations={{ required: true }} />

      <TextareaControl
        className={cx(styles.controls, styles.descriptionControl)}
        inlineLabelText="Description"
        name="description"
        validations={{ required: true }}
      />

      <SelectControl
        className={cx(styles.controls, styles.ageControl)}
        inlineLabelText="Age"
        name="minAge"
        items={[
          { text: "3+", value: "3" },
          { text: "6+", value: "6" },
          { text: "12+", value: "12" },
          { text: "18+", value: "18" },
        ]}
      />

      <h3 className={styles.subheadings}>Platform</h3>
      <CheckControl className={cx(styles.controls, styles.checkControl)} inlineLabelText="PC" name="pc" />
      <CheckControl className={cx(styles.controls, styles.checkControl)} inlineLabelText="PlayStation 5" name="ps5" />
      <CheckControl className={cx(styles.controls, styles.checkControl)} inlineLabelText="XBox One" name="xbox" />
      {children}
    </Form>
  );
}
