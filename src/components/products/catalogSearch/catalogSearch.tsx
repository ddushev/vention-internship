import { useState } from "react";
import SearchField from "@/elements/searchField/searchField";
import Button from "@/elements/button/button";

import { useAppSelector } from "@/redux/hooks";
import styles from "./catalogSearch.module.scss";
import CreateCardModal from "./createCardModal/createCardModal";

interface CatalogSearchProps {
  handleInputChange: (event: CustomEvent) => void;
}

export default function CatalogSearch({ handleInputChange }: CatalogSearchProps) {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const authData = useAppSelector((state) => state.authReduxState);

  const handleCreateCardClick = () => {
    setIsCardModalOpen(true);
  };
  return (
    <>
      <div className={styles.searchFieldContainer}>
        <SearchField handleInputChange={handleInputChange} />
        {authData.isAdmin && (
          <Button onClick={handleCreateCardClick} className={styles.createCardButton}>
            Create card
          </Button>
        )}
      </div>
      {isCardModalOpen && <CreateCardModal setIsCardModalOpen={setIsCardModalOpen} />}
    </>
  );
}
