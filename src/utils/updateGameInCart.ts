import { dispatch } from "@/redux/store";
import { setCartState } from "@/redux/cartSlice";

import { Game } from "@/types";

const updateGameInCart = (game: Game) => {
  const cartInStorage = localStorage.getItem("cart");

  const parsedCart = JSON.parse(cartInStorage!);
  const updatedCart = parsedCart.map((gameInCart: Game) => (gameInCart.name === game.name ? game : gameInCart));
  dispatch(setCartState(updatedCart));
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export default updateGameInCart;
