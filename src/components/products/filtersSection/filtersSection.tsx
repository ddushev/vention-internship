import { useSearchParams } from "react-router-dom";

import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import FilterWrapper from "@/elements/filterWrapper/filterWrapper";
import SelectControl from "@/elements/controls/select/select";
import SelectWrapper from "@/elements/selectWrapper/selectWrapper";

import styles from "./filtersSection.module.scss";

interface FilterSectionProps {
  handleCriteriaInputChange: (event: CustomEvent) => void;
  handleTypeInputChange: (event: CustomEvent) => void;
}

export default function FiltersSection({ handleCriteriaInputChange, handleTypeInputChange }: FilterSectionProps) {
  const [searchParams] = useSearchParams();
  return (
    <div className={styles.alignTextCenter}>
      <SectionWrapper heading={searchParams.get("category")?.toUpperCase()}>
        <FilterWrapper heading="Sort">
          <SelectWrapper heading="Criteria">
            <SelectControl
              initValue="name"
              onChange={handleCriteriaInputChange}
              items={[
                { text: "Name", value: "name" },
                { text: "Price", value: "price" },
                { text: "Rating", value: "rating" },
              ]}
            />
          </SelectWrapper>
          <SelectWrapper heading="Type">
            <SelectControl
              initValue="ascending"
              onChange={handleTypeInputChange}
              items={[
                { text: "Ascending", value: "ascending" },
                { text: "Descending", value: "descending" },
              ]}
            />
          </SelectWrapper>
        </FilterWrapper>
        <FilterWrapper heading="Genre">Genre filter placeholder</FilterWrapper>
        <FilterWrapper heading="Age">Age filter placeholder</FilterWrapper>
      </SectionWrapper>
    </div>
  );
}
