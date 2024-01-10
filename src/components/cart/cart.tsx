import { useEffect, useState } from "react";

import removeFromLocalStorage from "@/utils/removeFromLocalStorage";
import { getUserProfile, updateUserBalance } from "@/api/apiUser";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import TableHeading from "@/elements/tableHeading/tableHeading";
import TableData from "@/elements/tableData/tableData";
import Button from "@/elements/button/button";
import { Game, UserMockData } from "@/types";
import TableBodyRow from "./tableBodyRow/tableBodyRow";

import style from "./cart.module.scss";

export default function Cart() {
  const [gamesInCart, setGamesInCart] = useState<Game[]>([]);
  const [selectedGames, setSelectedGames] = useState<Game[]>([]);
  const [userData, setUserData] = useState<UserMockData>();
  const totalGameCost = gamesInCart.reduce((sum, game) => {
    sum += game.price * (game.amount || 1);
    return sum;
  }, 0);

  useEffect(() => {
    const games = localStorage.getItem("cart");
    if (games) {
      setGamesInCart(JSON.parse(games));
    }
    getUserProfile().then((data) => setUserData(data));
  }, []);

  const headings = [
    { heading: "Name" },
    { heading: "Platform" },
    { heading: "Order Date" },
    { heading: "Amount" },
    { heading: "Price($)" },
  ];

  const tdPlaceholders = [1, 2, 3, 4, 5];

  const handleRemoveClick = () => {
    setGamesInCart((prevState) => {
      const updatedGamesInCart = prevState.filter(
        (gameInCart) => !selectedGames.some((selectedGame) => selectedGame.name === gameInCart.name),
      );
      removeFromLocalStorage("cart", selectedGames);
      setSelectedGames([]);

      return updatedGamesInCart;
    });
  };

  const handleBuyClick = () => {
    if (userData?.balance && userData.balance >= totalGameCost) {
      updateUserBalance({ balance: userData.balance ? userData.balance - totalGameCost : 0 });

      setUserData((state) => ({
        ...state,
        balance: state?.balance ? state.balance - totalGameCost : 0,
      }));
      setGamesInCart([]);
      localStorage.removeItem("cart");
    }
  };

  return (
    <Page title="Cart">
      <div className={style.cartPageContainer}>
        <SectionWrapper heading="Cart page">
          <table className={style.table}>
            <thead>
              <tr className={style.tableRowHeading}>
                {headings.map((th) => (
                  <TableHeading key={th.heading}>{th.heading}</TableHeading>
                ))}
              </tr>
            </thead>
            <tbody>
              {gamesInCart.map((game) => (
                <TableBodyRow key={game.id} game={game} setSelectedGames={setSelectedGames} setGamesInCart={setGamesInCart} />
              ))}
              <tr className={style.tableRowRemove}>
                {tdPlaceholders.map((key) => (
                  <TableData key={key} />
                ))}
                <TableData>
                  <Button onClick={handleRemoveClick}>Remove</Button>
                </TableData>
              </tr>
            </tbody>
          </table>
          <div className={style.balanceContainer}>
            <p>Game cost: {totalGameCost.toFixed(2)} $</p>
            <p>Your balance: {(userData?.balance || 0).toFixed(2)} $</p>
            <Button onClick={handleBuyClick}>Buy</Button>
          </div>
        </SectionWrapper>
      </div>
    </Page>
  );
}
