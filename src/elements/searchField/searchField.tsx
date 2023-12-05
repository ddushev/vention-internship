import loadingAnimation from "images/loading.svg";

import { ChangeEvent, useState } from "react";
import apiEndpoints from "@/api.endpoints";
import styles from "./searchField.module.css";

interface Game {
  id: number;
  name: string;
}

export default function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Game[]>([]);

  // Debounce function
  const debounce = (func: (query: string) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (query: string) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => func(query), delay);
    };
  };

  async function fetchSearchResults(query: string): Promise<void> {
    if (!query) {
      setSearchResults([]);
    } else {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiEndpoints.searchMock}/${query}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  // Debounced fetchSearchResults function
  const debouncedFetchSearchResults = debounce((query: string) => fetchSearchResults(query), 300);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchTerm(value);
    debouncedFetchSearchResults(value);
  }

  return (
    <div className={styles.searchField}>
      <input value={searchTerm} onChange={handleInputChange} type="text" placeholder="Search" />
      {isLoading && (
        <div className={styles.loader}>
          <img src={loadingAnimation} alt="loading" />
        </div>
      )}
      {searchResults.length > 0 && (
        <ul className={styles.resultsList}>
          {searchResults.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
