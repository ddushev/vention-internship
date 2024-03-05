import { memo } from "react";
import { useSearchParams } from "react-router-dom";

import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import SelectFilterWrapper from "@/elements/selectFilterWrapper/selectFilterWrapper";
import SelectControl from "@/elements/controls/select/select";
import SelectWrapper from "@/elements/selectWrapper/selectWrapper";

import RadioControl from "@/elements/controls/radio/radio";
import RadioFilterWrapper from "@/elements/radioFilterWrapper/radioFilterWrapper";
import Form from "@/elements/form/form";
import styles from "./filtersSection.module.scss";

interface FilterSectionProps {
  handleFilterChange: (model: object) => void;
}

const FiltersSection = memo(({ handleFilterChange }: FilterSectionProps) => {
  const [searchParams] = useSearchParams();
  return (
    <Form key={searchParams.get("category")} onChange={handleFilterChange}>
      <div className={styles.alignTextCenter}>
        <SectionWrapper isNarrow heading={searchParams.get("category")?.toUpperCase()}>
          <SelectFilterWrapper heading="Sort">
            <SelectWrapper heading="Criteria">
              <SelectControl
                ref={(el) => {
                  if (el) {
                    el.domEl.$refInput.id = "inputCriteria";
                  }
                }}
                name="criteria"
                initValue={searchParams.get("sortCriteria") || "name"}
                items={[
                  { text: "Name", value: "name" },
                  { text: "Price", value: "price" },
                  { text: "Rating", value: "rating" },
                ]}
              />
            </SelectWrapper>
            <SelectWrapper heading="Type">
              <SelectControl
                ref={(el) => {
                  if (el) {
                    el.domEl.$refInput.id = "inputType";
                  }
                }}
                name="type"
                initValue={searchParams.get("sortType") || "ascending"}
                items={[
                  { text: "Ascending", value: "ascending" },
                  { text: "Descending", value: "descending" },
                ]}
              />
            </SelectWrapper>
          </SelectFilterWrapper>
          <RadioFilterWrapper heading="Genre">
            <RadioControl
              name="genre"
              initValue={searchParams.get("genre") || "all"}
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
              name="age"
              initValue={searchParams.get("minAge") || "all"}
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
    </Form>
  );
});

export default FiltersSection;
