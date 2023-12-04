import loadingAnimation from "images/loading.svg";

import { useState } from "react";
import styles from "./searchField.module.css";

export default function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading] = useState(false);
  const tempData = ["Game1", "Game2", "Game3", "Game4", "Game5"];

  return (
    <div className={styles.searchField}>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search" />
      {isLoading && (
        <div className={styles.loader}>
          <img src={loadingAnimation} alt="loading" />
        </div>
      )}
      <ul>
        {tempData.map((result) => (
          <li>{result}</li>
        ))}
      </ul>
    </div>
  );
}
