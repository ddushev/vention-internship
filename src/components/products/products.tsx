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

  return (
    <Page title="Products">
      <div className={styles.productsContainer}>
        <div className={styles.filtersContainer}>
          <FiltersSection handleFilterChange={handleFilterChange} />
        </div>

        <div className={styles.searchCatalogContainer}>
          <CatalogSearch handleInputChange={handleSearchInputChange} />
          <SectionWrapper heading="Products">{isLoading ? <Loading /> : <GamesCatalog games={games} />}</SectionWrapper>
        </div>
      </div>
    </Page>
  );
}
