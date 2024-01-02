import GameCard, { Game } from "@/components/gameCard/gameCard";

import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";

export default function GamesCatalog({ games }: { games: Game[] }) {
  return (
    <SectionWrapper heading="Products">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SectionWrapper>
  );
}
