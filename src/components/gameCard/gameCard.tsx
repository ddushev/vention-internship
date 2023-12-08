import starFilled from "images/icons/starFilled.svg";
import pc from "images/platforms/pc.png";
import ps5 from "images/platforms/ps.png";
import xbox from "images/platforms/xbox.png";

import styles from "./gameCard.module.scss";

export interface Game {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  platforms: string[];
  minAge: number;
  addDate: Date;
  description: string;
}

export default function GameCard({ game }: { game: Game }) {
  const rating = Array.from({ length: game?.rating }, (_, index) => index + 1);

  return (
    <div role="button" className={styles.gameCardBox} tabIndex={0}>
      <div className={styles.gameCardContainer}>
        <div className={styles.frontSide}>
          <div className={styles.imageContainer}>
            <div className={styles.platformsContainer}>
              {game?.platforms.includes("pc") && <img className={styles.platformIcon} src={pc} alt="pc" />}
              {game?.platforms.includes("ps5") && <img className={styles.platformIcon} src={ps5} alt="ps5" />}
              {game?.platforms.includes("xbox") && <img className={styles.platformIcon} src={xbox} alt="xbox" />}
            </div>
            <img className={styles.gameImage} src={game?.image} alt={game?.name} />
          </div>
          <div className={styles.detailsContainer}>
            <h4 className={styles.gameTitle}>{game?.name}</h4>
            <p>{game?.price}$</p>
            <div className={styles.starsContainer}>
              {rating.map((star) => (
                <img className={styles.starIcon} key={star} src={starFilled} alt={`${star}star`} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.backSide}>
          <p className={styles.description}>{game?.description}</p>
          <p>{game?.minAge}+</p>
          <button className={styles.addToCartButton} type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
