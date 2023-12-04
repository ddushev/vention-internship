import styles from "./searchField.module.css";

export default function SearchField() {
  return (
    <div className={styles.searchField}>
      <input type="text" placeholder="Search" />
    </div>
  );
}
