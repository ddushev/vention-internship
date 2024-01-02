import SearchField from "@/elements/searchField/searchField";

import styles from "./catalogSearch.module.scss";

interface CatalogSearchProps {
  handleInputChange: (event: CustomEvent) => void;
}

export default function CatalogSearch({ handleInputChange }: CatalogSearchProps) {
  return (
    <div className={styles.searchFieldContainer}>
      <SearchField handleInputChange={handleInputChange} />
    </div>
  );
}
