import SearchField from "@/elements/searchField/searchField";
import Button from "@/elements/button/button";

import { useAppSelector } from "@/redux/hooks";
import styles from "./catalogSearch.module.scss";

interface CatalogSearchProps {
  handleInputChange: (event: CustomEvent) => void;
}

export default function CatalogSearch({ handleInputChange }: CatalogSearchProps) {
  const authData = useAppSelector((state) => state.authReduxState);
  return (
    <div className={styles.searchFieldContainer}>
      <SearchField handleInputChange={handleInputChange} />
      {authData.isAdmin && <Button className={styles.createCardButton}>Create card</Button>}
    </div>
  );
}
