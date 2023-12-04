import loadingAnimation from "images/loading.svg";

import { ChangeEvent, useState } from "react";
import styles from "./searchField.module.css";

export default function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading] = useState(false);
  const tempData = ["Game1", "Game2", "Game3", "Game4", "Game5"];

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className={styles.searchField}>
      <input value={searchTerm} onChange={handleInputChange} type="text" placeholder="Search" />
      {isLoading && (
        <div className={styles.loader}>
          <img src={loadingAnimation} alt="loading" />
        </div>
      )}
      {tempData.length > 0 && (
        <ul className={styles.resultsList}>
          {tempData.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
