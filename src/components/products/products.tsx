import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import getProducts from "@/api/apiProducts";
import Page from "@/elements/page/page";
import SearchField from "@/elements/searchField/searchField";
import { Game } from "@/components/gameCard/gameCard";
import GamesCatalog from "./gamesCatalog/gamesCatalog";
import FiltersSection from "./filtersSection/filtersSection";

import styles from "./products.module.scss";

export default function Products() {
  const [games, setGames] = useState<Game[]>([]);
  const category = useLocation().search;

  useEffect(() => {
    getProducts({ category }).then((data) => setGames(data));
  }, [category]);
  return (
    <Page title="Products">
      <SearchField />
      <div className={styles.filtersCatalogContainer}>
        <div className={styles.filtersContainer}>
          <FiltersSection />
        </div>
        <div className={styles.catalogContainer}>
          <GamesCatalog games={games} />
        </div>
      </div>
    </Page>
  );
}
