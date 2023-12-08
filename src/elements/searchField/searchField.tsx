import loadingAnimation from "images/loading.svg";

import { ChangeEvent, useCallback, useState } from "react";
import apiEndpoints from "@/api.endpoints";
import debounce from "@/helpers/debounce";

import styles from "./searchField.module.scss";

interface Game {
  id: number;
  name: string;
}

export default function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const fetchSearchResults = useCallback(async (query: string): Promise<void> => {
    if (!query) {
      setSearchResults([]);
    } else {
      try {
        setIsLoading(true);

        const response = await fetch(`${apiEndpoints.searchMock}?text=${query}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  const debouncedFetchSearchResults = useCallback(
    debounce((query: string) => {
      fetchSearchResults(query);
      setIsTyping(false);
    }, 300),
    [fetchSearchResults],
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    setIsTyping(true);
    debouncedFetchSearchResults(value);
  };

  const handleGameSelect = (game: string) => {
    alert(`Got product - ${game}`);
  };

  return (
    <div className={styles.searchField}>
      <input value={searchTerm} onChange={handleInputChange} type="text" placeholder="Search" />
      <div className={styles.resultsDropDown}>
        {isLoading && (
          <div className={styles.loader}>
            <img src={loadingAnimation} alt="loading" />
          </div>
        )}
        {!isLoading && (
          <ul className={styles.resultsList}>
            {!!searchResults.length &&
              searchResults.map((game) => (
                <li className={styles.listItem} key={game.id}>
                  <button className={styles.buttonItem} onClick={() => handleGameSelect(game.name)} type="button">
                    {game.name}
                  </button>
                </li>
              ))}
            {!searchResults.length && !!searchTerm.length && !isTyping && (
              <li className={styles.listItem}>
                <button className={styles.buttonItem} type="button">
                  No items found
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
