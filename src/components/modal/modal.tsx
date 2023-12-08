import styles from "./modal.module.scss";

export default function Modal() {
  return (
    <div className={styles.modalContainer}>
      <h3>Authorization</h3>
      <form>
        <label htmlFor="login">
          Login
          <input type="text" id="login" name="login" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
