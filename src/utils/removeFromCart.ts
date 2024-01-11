import { dispatch } from "@/redux/store";
import { setCartState } from "@/redux/cartSlice";
import { Game } from "@/types";

const removeFromCart = (key: string, gamesInStateCart: Game[]) => {
  const cartInStorage = localStorage.getItem(key);

  if (cartInStorage) {
    const parsedCart = JSON.parse(cartInStorage);
    const updatedCart = parsedCart.filter((g: Game) => !gamesInStateCart.some((gameInStateCart: Game) => gameInStateCart.name === g.name));
    dispatch(setCartState(updatedCart));
    localStorage.setItem(key, JSON.stringify(updatedCart));
  }
};

export default removeFromCart;
