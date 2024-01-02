import TextControl from "../controls/text";

interface SearchFieldProps {
  handleInputChange: (event: CustomEvent) => void;
}

export default function SearchField({ handleInputChange }: SearchFieldProps) {
  return <TextControl debounceMs={300} onChange={handleInputChange} name="search" />;
}
