import { useState } from "react";
import styles from "./searchField.module.css";

export default function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.searchField}>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search" />
    </div>
  );
}
