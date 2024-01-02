import TextControl from "@/elements/controls/text";

import styles from "./catalogSearch.module.scss";

interface CatalogSearchProps {
  handleInputChange: (event: CustomEvent) => void;
}

export default function CatalogSearch({ handleInputChange }: CatalogSearchProps) {
  return (
    <div className={styles.searchFieldContainer}>
      <TextControl onChange={handleInputChange} name="search" />
    </div>
  );
}
