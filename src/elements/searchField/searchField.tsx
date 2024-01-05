import TextControl from "../controls/text";

import styles from "./searchField.module.scss";

interface SearchFieldProps {
  handleInputChange: (event: CustomEvent) => void;
}

export default function SearchField({ handleInputChange }: SearchFieldProps) {
  return <TextControl className={styles.roundBorders} debounceMs={300} onChange={handleInputChange} name="search" />;
}
