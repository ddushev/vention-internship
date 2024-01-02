import loadingAnimation from "images/loading.svg";

import { useCallback, useState } from "react";
import { WUPTextControl } from "web-ui-pack";

import apiEndpoints from "@/api.endpoints";

import SearchField from "@/elements/searchField/searchField";
import styles from "./homeSearch.module.scss";

interface Game {
  id: number;
  name: string;
}

export default function HomeSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Game[]>([]);

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

  const handleInputChange = (event: CustomEvent) => {
    const search = (event.target as WUPTextControl).$value as string;
    setSearchTerm(search);
    fetchSearchResults(search);
  };

  const handleGameSelect = (game: string) => {
    alert(`Got product - ${game}`);
  };

  return (
    <div className={styles.searchField}>
      <SearchField handleInputChange={handleInputChange} />
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
            {searchTerm && !searchResults.length && !!searchTerm.length && (
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
