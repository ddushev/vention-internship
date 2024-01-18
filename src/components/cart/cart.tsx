import { useEffect, useState } from "react";
import { Box, Modal, Typography, Button as ButtonMui } from "@mui/material";

import removeFromCart from "@/utils/removeFromCart";
import { getUserProfile, updateUserBalance } from "@/api/apiUser";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCartState } from "@/redux/cartSlice";

import Page from "@/elements/page/page";
import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";
import TableHeading from "@/elements/tableHeading/tableHeading";
import TableData from "@/elements/tableData/tableData";
import { Game, UserMockData } from "@/types";
import Button from "@/elements/button/button";
import { boxStyles, buttonStyles, typographyStyles } from "@/mui/muiStyles";
import TableBodyRow from "./tableBodyRow/tableBodyRow";

import style from "./cart.module.scss";

export default function Cart() {
  const [selectedGames, setSelectedGames] = useState<Game[]>([]);
  const [userData, setUserData] = useState<UserMockData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const gamesInCart = useAppSelector((state) => state.cartReduxState);
  const { username } = useAppSelector((state) => state.authReduxState);
  const dispatch = useAppDispatch();
  const totalGameCost = gamesInCart.reduce((sum, game) => {
    sum += game.price * (game.amount || 1);
    return sum;
  }, 0);

  useEffect(() => {
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
    const updatedGamesInCart = gamesInCart.filter((gameInCart) => !selectedGames.some((selectedGame) => selectedGame.id === gameInCart.id));
    removeFromCart(selectedGames);
    setSelectedGames([]);

    return updatedGamesInCart;
  };

  const handleBuyClick = () => {
    if (userData?.balance && userData.balance >= totalGameCost) {
      updateUserBalance({ balance: userData.balance ? userData.balance - totalGameCost : 0 });

      setUserData((state) => ({
        ...state,
        balance: state?.balance ? state.balance - totalGameCost : 0,
      }));
      setModalText("You have successfully finished your order!");
      setIsModalOpen(true);
      dispatch(setCartState([]));
      localStorage.removeItem(`${username}Cart`);
    } else {
      setIsModalOpen(true);
      setModalText("Not enough funds to finish your order!");
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
                <TableBodyRow key={game.id} game={game} setSelectedGames={setSelectedGames} />
              ))}
              {!!gamesInCart.length && (
                <tr className={style.tableRowRemove}>
                  {tdPlaceholders.map((key) => (
                    <TableData key={key} />
                  ))}

                  <TableData>
                    <Button onClick={handleRemoveClick}>Remove</Button>
                  </TableData>
                </tr>
              )}
            </tbody>
          </table>
          <div className={style.balanceContainer}>
            <p>Game cost: {totalGameCost.toFixed(2)} $</p>
            <p>Your balance: {(userData?.balance || 0).toFixed(2)} $</p>
            {!!gamesInCart.length && <Button onClick={handleBuyClick}>Buy</Button>}
          </div>
        </SectionWrapper>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box sx={boxStyles}>
          <Typography sx={typographyStyles} component="h1">
            {modalText}
          </Typography>
          <ButtonMui sx={buttonStyles} variant="contained" onClick={() => setIsModalOpen(false)}>
            Close
          </ButtonMui>
        </Box>
      </Modal>
    </Page>
  );
}
