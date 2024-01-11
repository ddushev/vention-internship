import { dispatch } from "@/redux/store";
import { setCartState } from "@/redux/cartSlice";
import { Game } from "@/types";

const removeFromCart = (gamesInStateCart: Game[]) => {
  const cartInStorage = localStorage.getItem("cart");

  if (cartInStorage) {
    const parsedCart = JSON.parse(cartInStorage);
    const updatedCart = parsedCart.filter((g: Game) => !gamesInStateCart.some((gameInStateCart: Game) => gameInStateCart.name === g.name));
    dispatch(setCartState(updatedCart));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};

export default removeFromCart;
