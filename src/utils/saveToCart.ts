import { dispatch } from "@/redux/store";
import { setCartState } from "@/redux/cartSlice";

import { Game } from "@/types";

const saveToCart = (key: string, game: Game) => {
  const cartInStorage = localStorage.getItem(key);

  if (cartInStorage) {
    const parsedCart = JSON.parse(cartInStorage);
    if (parsedCart.some((g: Game) => g.name === game.name)) {
      return alert(`${game.name} already in cart`);
    }
    const updatedCart = [...parsedCart, game];
    alert(`${game.name} added to cart`);
    dispatch(setCartState(updatedCart));
    return localStorage.setItem(key, JSON.stringify(updatedCart));
  }
  const cart = [game];
  alert(`${game.name} added to cart`);
  dispatch(setCartState(cart));
  return localStorage.setItem(key, JSON.stringify(cart));
};

export default saveToCart;
