import GameCard from "@/components/gameCard/gameCard";
import { Game } from "@/types";

export default function GamesCatalog({ games }: { games: Game[] }) {
  return (
    <>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
}
