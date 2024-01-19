import { dispatch, store } from "@/redux/store";
import { setCartState } from "@/redux/cartSlice";

import { Game } from "@/types";
import alertModal from "./alertModal/alertModal";

const saveToCart = (game: Game) => {
  const { username } = store.getState().authReduxState;
  const cartInStorage = localStorage.getItem(`${username}Cart`);
  let cart = [];
  if (cartInStorage) {
    const parsedCart = JSON.parse(cartInStorage);
    if (parsedCart.some((g: Game) => g.name === game.name)) {
      return {};
    }
    cart = [...parsedCart, game];
  } else {
    cart = [game];
  }
  alertModal(`${game.name} added to cart`);
  dispatch(setCartState(cart));
  return localStorage.setItem(`${username}Cart`, JSON.stringify(cart));
};

export default saveToCart;
