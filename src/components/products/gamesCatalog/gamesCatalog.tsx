import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import GameCard, { Game } from "@/components/gameCard/gameCard";

import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import getProducts from "@/api/apiProducts";

export default function GamesCatalog() {
  const [games, setGames] = useState<Game[]>([]);
  const category = useLocation().search;

  useEffect(() => {
    getProducts({ category }).then((data) => setGames(data));
  }, [category]);

  return (
    <SectionWrapper heading="Products">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SectionWrapper>
  );
}
