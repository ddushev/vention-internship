import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { WUPTextControl } from "web-ui-pack";

import getProducts from "@/api/apiProducts";
import Page from "@/elements/page/page";
import { Game } from "@/components/gameCard/gameCard";
import CatalogSearch from "./catalogSearch/catalogSearch";
import FiltersSection from "./filtersSection/filtersSection";
import GamesCatalog from "./gamesCatalog/gamesCatalog";

import styles from "./products.module.scss";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [games, setGames] = useState<Game[]>([]);

  const handleInputChange = (event: CustomEvent) => {
    const search = (event.target as WUPTextControl).$value as string;
    if (search) {
      searchParams.set("searchText", search);
    } else {
      searchParams.set("searchText", "");
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    getProducts({ urlParams: searchParams.toString() }).then((data) => setGames(data));
  }, [searchParams]);

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
