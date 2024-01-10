import { Game } from "@/types";

const removeFromLocalStorage = (key: string, gamesInStateCart: Game[]) => {
  const cartInStorage = localStorage.getItem(key);

  if (cartInStorage) {
    const parsedCart = JSON.parse(cartInStorage);
    const updatedCart = parsedCart.filter((g: Game) => !gamesInStateCart.some((gameInStateCart: Game) => gameInStateCart.name === g.name));
    localStorage.setItem(key, JSON.stringify(updatedCart));
  }
};

export default removeFromLocalStorage;
