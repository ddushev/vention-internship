import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { WUPSelectControl, WUPTextControl } from "web-ui-pack";

import getProducts from "@/api/apiProducts";
import Page from "@/elements/page/page";
import { Game } from "@/components/gameCard/gameCard";
import CatalogSearch from "./catalogSearch/catalogSearch";
import FiltersSection from "./filtersSection/filtersSection";
import GamesCatalog from "./gamesCatalog/gamesCatalog";

import styles from "./products.module.scss";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("name");
  const [sortType, setSortType] = useState("ascending");
  const [games, setGames] = useState<Game[]>([]);

  const handleSearchInputChange = (event: CustomEvent) => {
    const search = (event.target as WUPTextControl).$value as string;
    setSearchTerm(search);
  };

  const handleCriteriaInputChange = (event: CustomEvent) => {
    const criteria = (event.target as WUPSelectControl).$value as string;
    setSortCriteria(criteria);
  };

  const handleTypeInputChange = (event: CustomEvent) => {
    const sort = (event.target as WUPSelectControl).$value as string;
    setSortType(sort);
  };

  useEffect(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("sortCriteria", sortCriteria);
    updatedSearchParams.set("sortType", sortType);

    if (searchTerm) {
      updatedSearchParams.set("searchText", searchTerm);
    } else {
      updatedSearchParams.delete("searchText");
    }

    if (updatedSearchParams.toString() !== searchParams.toString()) {
      setSearchParams(() => updatedSearchParams);
      getProducts({ urlParams: updatedSearchParams.toString() }).then((data) => setGames(data));
    }
  }, [searchParams, searchTerm, sortCriteria, sortType]);

  return (
    <Page title="Products">
      <CatalogSearch handleInputChange={handleSearchInputChange} />
      <div className={styles.filtersCatalogContainer}>
        <div className={styles.filtersContainer}>
          <FiltersSection handleCriteriaInputChange={handleCriteriaInputChange} handleTypeInputChange={handleTypeInputChange} />
        </div>
        <div className={styles.catalogContainer}>
          <GamesCatalog games={games} />
        </div>
      </div>
    </Page>
  );
}
