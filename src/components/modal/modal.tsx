import Input from "@/elements/input/input";
import styles from "./modal.module.scss";

export default function Modal() {
  return (
    <div className={styles.modalContainer}>
      <h3>Authorization</h3>
      <form>
        <Input label="Login" type="text" id="login" name="login" />
        <Input label="Password" type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
