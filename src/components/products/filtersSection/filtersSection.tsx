import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import FilterWrapper from "@/elements/filterWrapper/filterWrapper";

export default function FiltersSection() {
  return (
    <SectionWrapper heading="PC">
      <FilterWrapper heading="Sort">Sort filter placeholder</FilterWrapper>
      <FilterWrapper heading="Genre">Genre filter placeholder</FilterWrapper>
      <FilterWrapper heading="Age">Age filter placeholder</FilterWrapper>
    </SectionWrapper>
  );
}
