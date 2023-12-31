import { useEffect, useState } from "react";

import GameCard, { Game } from "@/components/gameCard/gameCard";

import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import getProducts from "@/api/apiProducts";

export default function GamesCatalog() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getProducts().then((data) => setGames(data));
  }, []);

  return (
    <SectionWrapper heading="Products">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SectionWrapper>
  );
}
