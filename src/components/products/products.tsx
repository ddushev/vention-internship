import { useCallback } from "react";
import useLoadingGamesCatalog from "@/hooks/useLoadingGamesCatalog";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import CatalogSearch from "./catalogSearch/catalogSearch";
import FiltersSection from "./filtersSection/filtersSection";
import GamesCatalog from "./gamesCatalog/gamesCatalog";
import Loading from "../loading/loading";

import styles from "./products.module.scss";

export default function Products() {
  const { games, isLoading, handleFilterChange, handleSearchInputChange } = useLoadingGamesCatalog();
  const memoizedHandleFilterChange = useCallback(handleFilterChange, []);
  const memoizedHandleSearchInputChange = useCallback(handleSearchInputChange, []);

  return (
    <Page title="Products">
      <div className={styles.productsContainer}>
        <div className={styles.filtersContainer}>
          <FiltersSection handleFilterChange={memoizedHandleFilterChange} />
        </div>

        <div className={styles.searchCatalogContainer}>
          <CatalogSearch handleInputChange={memoizedHandleSearchInputChange} />
          <SectionWrapper heading="Products">{isLoading ? <Loading /> : <GamesCatalog games={games} />}</SectionWrapper>
        </div>
      </div>
    </Page>
  );
}
