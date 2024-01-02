import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { WUPTextControl } from "web-ui-pack";

import getProducts from "@/api/apiProducts";
import Page from "@/elements/page/page";
import { Game } from "@/components/gameCard/gameCard";
import CatalogSearch from "./catalogSearch/catalogSearch";
import FiltersSection from "./filtersSection/filtersSection";
import GamesCatalog from "./gamesCatalog/gamesCatalog";

import styles from "./products.module.scss";

export default function Products() {
  const [games, setGames] = useState<Game[]>([]);
  const category = useLocation().search;

  const handleInputChange = (event: CustomEvent) => {
    const search = (event.target as WUPTextControl).$value;
    console.log(search);
  };

  useEffect(() => {
    getProducts({ category }).then((data) => setGames(data));
  }, [category]);
  return (
    <Page title="Products">
      <CatalogSearch handleInputChange={handleInputChange} />
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
