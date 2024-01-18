import cx from "classnames";

import { Game, Product } from "@/types";

import ControlWrapper from "../controlWrapper/controlWrapper";
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
  return (
    <Form className={styles.form} onSubmit={onSubmitHandler}>
      <h3 className={styles.subheadings}>Information</h3>
      <ControlWrapper text="Name">
        <TextControl initValue={game?.name} className={styles.controls} name="name" validations={{ required: true }} />
      </ControlWrapper>
      <ControlWrapper text="Category">
        <TextControl initValue={game?.genre} className={styles.controls} name="category" validations={{ required: true }} />
      </ControlWrapper>
      <ControlWrapper text="Price">
        <NumberControl initValue={game?.price} className={styles.controls} name="price" validations={{ required: true }} />
      </ControlWrapper>
      <ControlWrapper text="Image">
        <TextControl initValue={game?.image} className={styles.controls} name="image" validations={{ required: true }} />
      </ControlWrapper>
      <ControlWrapper text="Description">
        <TextareaControl
          initValue={game?.description}
          className={cx(styles.controls, styles.descriptionControl)}
          name="description"
          validations={{ required: true }}
        />
      </ControlWrapper>
      <ControlWrapper text="Age">
        <SelectControl
          className={cx(styles.controls, styles.ageControl)}
          name="minAge"
          initValue={game?.minAge.toString() || "3"}
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
        <CheckControl initValue={game?.platforms.includes("pc")} className={cx(styles.controls, styles.checkControl)} name="pc" />
      </ControlWrapper>
      <ControlWrapper text="PlayStation 5">
        <CheckControl initValue={game?.platforms.includes("ps5")} className={cx(styles.controls, styles.checkControl)} name="ps5" />
      </ControlWrapper>
      <ControlWrapper text="XBox One">
        <CheckControl initValue={game?.platforms.includes("xbox")} className={cx(styles.controls, styles.checkControl)} name="xbox" />
      </ControlWrapper>
      {children}
    </Form>
  );
}