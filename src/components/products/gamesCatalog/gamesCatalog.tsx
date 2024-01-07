import GameCard, { Game } from "@/components/gameCard/gameCard";

export default function GamesCatalog({ games }: { games: Game[] }) {
  return (
    <>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
}
