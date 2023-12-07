import styles from "./gameCard.module.scss";

export interface Game {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  platforms: string[];
  addDate: Date;
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <li className={styles.gameCardBox}>
      <img src={game?.image} alt={game?.name} />
      <h4 className={styles.gameTitle}>{game?.name}</h4>
    </li>
  );
}
