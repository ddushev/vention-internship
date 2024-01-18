import { dispatch, store } from "@/redux/store";
import { setCartState } from "@/redux/cartSlice";

import { Game } from "@/types";

const updateGameInCart = (game: Game) => {
  const { username } = store.getState().authReduxState;
  const cartInStorage = localStorage.getItem(`${username}Cart`);
  const parsedCart = JSON.parse(cartInStorage!);
  const updatedCart = parsedCart.map((gameInCart: Game) => (gameInCart.id === game.id ? game : gameInCart));
  dispatch(setCartState(updatedCart));
  localStorage.setItem(`${username}Cart`, JSON.stringify(updatedCart));
};

export default updateGameInCart;
