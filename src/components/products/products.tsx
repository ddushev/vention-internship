import Page from "@/elements/page/page";
import SearchField from "@/elements/searchField/searchField";
import GamesCatalog from "./gamesCatalog/gamesCatalog";
import FiltersSection from "./filtersSection/filtersSection";

import styles from "./products.module.scss";

export default function Products() {
  return (
    <Page title="Products">
      <SearchField />
      <div className={styles.filtersCatalogContainer}>
        <div className={styles.filtersContainer}>
          <FiltersSection />
        </div>
        <div className={styles.catalogContainer}>
          <GamesCatalog />
        </div>
      </div>
    </Page>
  );
}
