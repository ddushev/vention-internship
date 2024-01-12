import { dispatch, store } from "@/redux/store";
import { setCartState } from "@/redux/cartSlice";

import { Game } from "@/types";

const saveToCart = (game: Game) => {
  const { username } = store.getState().authReduxState;
  const cartInStorage = localStorage.getItem(`${username}Cart`);

  if (cartInStorage) {
    const parsedCart = JSON.parse(cartInStorage);
    if (parsedCart.some((g: Game) => g.name === game.name)) {
      return {};
    }
    const updatedCart = [...parsedCart, game];
    alert(`${game.name} added to cart`);
    dispatch(setCartState(updatedCart));
    return localStorage.setItem(`${username}Cart`, JSON.stringify(updatedCart));
  }
  const cart = [game];
  alert(`${game.name} added to cart`);
  dispatch(setCartState(cart));
  return localStorage.setItem(`${username}Cart`, JSON.stringify(cart));
};

export default saveToCart;
