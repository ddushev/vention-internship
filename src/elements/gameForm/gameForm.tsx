import cx from "classnames";

import { Game, Product } from "@/types";

import ControlWrapper from "../controlWrapper/controlWrapper";
import CheckControl from "../controls/check/check";
import NumberControl from "../controls/number";
import SelectControl from "../controls/select/select";
import TextControlWithLabel from "../controls/textWithLabel";
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

      <TextControlWithLabel className={styles.controls} label="Name" name="name" validations={{ required: true }} />
      <TextControlWithLabel className={styles.controls} label="Category" name="category" validations={{ required: true }} />

      <ControlWrapper text="Price">
        <NumberControl className={styles.controls} name="price" validations={{ required: true }} />
      </ControlWrapper>

      <TextControlWithLabel className={styles.controls} label="Image" name="image" validations={{ required: true }} />

      <ControlWrapper text="Description">
        <TextareaControl className={cx(styles.controls, styles.descriptionControl)} name="description" validations={{ required: true }} />
      </ControlWrapper>

      <ControlWrapper text="Age">
        <SelectControl
          className={cx(styles.controls, styles.ageControl)}
          name="minAge"
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
        <CheckControl className={cx(styles.controls, styles.checkControl)} name="pc" />
      </ControlWrapper>
      <ControlWrapper text="PlayStation 5">
        <CheckControl className={cx(styles.controls, styles.checkControl)} name="ps5" />
      </ControlWrapper>
      <ControlWrapper text="XBox One">
        <CheckControl className={cx(styles.controls, styles.checkControl)} name="xbox" />
      </ControlWrapper>
      {children}
    </Form>
  );
}
