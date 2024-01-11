import { dispatch } from "@/redux/store";
import { setCartState } from "@/redux/cartSlice";

import { Game } from "@/types";

const updateGameInCart = (key: string, game: Game) => {
  const cartInStorage = localStorage.getItem(key);

  const parsedCart = JSON.parse(cartInStorage!);
  const updatedCart = parsedCart.map((gameInCart: Game) => (gameInCart.name === game.name ? game : gameInCart));
  dispatch(setCartState(updatedCart));
  localStorage.setItem(key, JSON.stringify(updatedCart));
};

export default updateGameInCart;
