import useLoadingGamesCatalog from "@/hooks/useLoadingGamesCatalog";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import CatalogSearch from "./catalogSearch/catalogSearch";
import FiltersSection from "./filtersSection/filtersSection";
import GamesCatalog from "./gamesCatalog/gamesCatalog";
import Loading from "../loading/loading";

import styles from "./products.module.scss";

export default function Products() {
  const {
    games,
    loading,
    handleSearchInputChange,
    handleCriteriaInputChange,
    handleTypeInputChange,
    handleGenreInputChange,
    handleAgeInputChange,
  } = useLoadingGamesCatalog();

  return (
    <Page title="Products">
      <CatalogSearch handleInputChange={handleSearchInputChange} />
      <div className={styles.filtersCatalogContainer}>
        <div className={styles.filtersContainer}>
          <FiltersSection
            handleCriteriaInputChange={handleCriteriaInputChange}
            handleTypeInputChange={handleTypeInputChange}
            handleGenreInputChange={handleGenreInputChange}
            handleAgeInputChange={handleAgeInputChange}
          />
        </div>
        <div className={styles.catalogContainer}>
          <SectionWrapper heading="Products">{loading ? <Loading /> : <GamesCatalog games={games} />}</SectionWrapper>
        </div>
      </div>
    </Page>
  );
}
