import { useSearchParams } from "react-router-dom";

import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import SelectFilterWrapper from "@/elements/selectFilterWrapper/selectFilterWrapper";
import SelectControl from "@/elements/controls/select/select";
import SelectWrapper from "@/elements/selectWrapper/selectWrapper";

import RadioControl from "@/elements/controls/radio/radio";
import RadioFilterWrapper from "@/elements/radioFilterWrapper/radioFilterWrapper";
import styles from "./filtersSection.module.scss";

interface FilterSectionProps {
  handleCriteriaInputChange: (event: CustomEvent) => void;
  handleTypeInputChange: (event: CustomEvent) => void;
  handleGenreInputChange: (event: CustomEvent) => void;
  handleAgeInputChange: (event: CustomEvent) => void;
}

export default function FiltersSection({
  handleCriteriaInputChange,
  handleTypeInputChange,
  handleGenreInputChange,
  handleAgeInputChange,
}: FilterSectionProps) {
  const [searchParams] = useSearchParams();
  return (
    <div className={styles.alignTextCenter}>
      <SectionWrapper heading={searchParams.get("category")?.toUpperCase()}>
        <SelectFilterWrapper heading="Sort">
          <SelectWrapper heading="Criteria">
            <SelectControl
              initValue={searchParams.get("sortCriteria") || "name"}
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
              initValue={searchParams.get("sortType") || "ascending"}
              onChange={handleTypeInputChange}
              items={[
                { text: "Ascending", value: "ascending" },
                { text: "Descending", value: "descending" },
              ]}
            />
          </SelectWrapper>
        </SelectFilterWrapper>
        <RadioFilterWrapper heading="Genre">
          <RadioControl
            initValue={searchParams.get("genre") || "all"}
            onChange={handleGenreInputChange}
            items={[
              { text: "All genres", value: "all" },
              { text: "Shooter", value: "shooter" },
              { text: "Arcade", value: "arcade" },
              { text: "Survive", value: "survive" },
            ]}
          />
        </RadioFilterWrapper>
        <RadioFilterWrapper heading="Age">
          <RadioControl
            initValue={searchParams.get("minAge") || "all"}
            onChange={handleAgeInputChange}
            items={[
              { text: "All ages", value: "all" },
              { text: "3+", value: "3" },
              { text: "6+", value: "6" },
              { text: "12+", value: "12" },
              { text: "18+", value: "18" },
            ]}
          />
        </RadioFilterWrapper>
      </SectionWrapper>
    </div>
  );
}
