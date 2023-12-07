import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import GameCard from "@/components/gameCard/gameCard";

export default function RecentGames() {
  return (
    <SectionWrapper heading="New Games">
      <GameCard />
      <GameCard />
      <GameCard />
    </SectionWrapper>
  );
}
