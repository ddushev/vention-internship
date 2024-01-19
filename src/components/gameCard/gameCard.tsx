import pc from "images/platforms/pc.png";
import ps5 from "images/platforms/ps.png";
import xbox from "images/platforms/xbox.png";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";

import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import ButtonAddToCart from "@/elements/buttonAddToCart/buttonAddToCart";
import { Game } from "@/types";

import Button from "@/elements/button/button";
import styles from "./gameCard.module.scss";
import EditCardModal from "./editCardModal/editCardModal";

export default function GameCard({ game }: { game: Game }) {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const authData = useAppSelector((state) => state.authReduxState);
  const location = useLocation();

  const handleEditCardClick = () => {
    setIsCardModalOpen(true);
  };
  return (
    <>
      <div role="option" className={styles.gameCardBox} tabIndex={0} aria-selected>
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
            </div>
            <div className={styles.starsWrapper}>
              <Rating value={game.rating} size="small" readOnly emptyIcon={<StarIcon className={styles["MuiRating-iconEmpty"]} />} />
            </div>
          </div>
          <div className={styles.backSide}>
            <p className={styles.description}>{game?.description}</p>
            <p>{game?.minAge}+</p>
            <div className={styles.buttonsContainer}>
              <ButtonAddToCart className={styles.cardButtons} game={game}>
                Add to Cart
              </ButtonAddToCart>
              {authData.isAdmin && location.pathname === "/products" && (
                <Button onClick={handleEditCardClick} className={styles.cardButtons}>
                  Edit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isCardModalOpen && <EditCardModal game={game} setIsCardModalOpen={setIsCardModalOpen} />}
    </>
  );
}
