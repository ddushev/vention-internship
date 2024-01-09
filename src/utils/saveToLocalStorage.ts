import { Game } from "@/types";

const saveToLocalStorage = (key: string, game: Game) => {
  const cartInStorage = localStorage.getItem(key);

  if (cartInStorage) {
    const parsedCart = JSON.parse(cartInStorage);
    if (parsedCart.some((g: Game) => g.name === game.name)) {
      return alert(`${game.name} already in cart`);
    }
    const updatedCart = [...parsedCart, game];
    alert(`${game.name} added to cart`);
    return localStorage.setItem(key, JSON.stringify(updatedCart));
  }
  const cart = [game];
  alert(`${game.name} added to cart`);
  return localStorage.setItem(key, JSON.stringify(cart));
};

export default saveToLocalStorage;
