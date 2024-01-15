import { useEffect, useState } from "react";

import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import GameCard from "@/components/gameCard/gameCard";
import { Game } from "@/types";

import apiEndpoints from "@/api.endpoints";

export default function RecentGames() {
  const [topGames, setTopGames] = useState<Game[]>([]);
  useEffect(() => {
    const fetchTopGames = async () => {
      try {
        const response = await fetch(apiEndpoints.topGames);
        const data = await response.json();
        setTopGames(data);
      } catch (error) {
        console.error("Error fetching recent games results", error);
      }
    };
    fetchTopGames();
  }, []);
  return (
    <SectionWrapper heading="New Games">
      {topGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SectionWrapper>
  );
}
