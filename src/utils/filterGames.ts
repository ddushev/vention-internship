import { Filters, Game } from "@/types";

export default function filterGames(gamesMockData: Game[], { category, searchText, sortCriteria, sortType, genre, minAge }: Filters) {
  let matchingProducts = gamesMockData.filter((game) => game.platforms.includes(category as string));
  if (sortCriteria === "name" && sortType === "ascending") {
    matchingProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortCriteria === "price" && sortType === "ascending") {
    matchingProducts.sort((a, b) => a.price - b.price);
  } else if (sortCriteria === "rating" && sortType === "ascending") {
    matchingProducts.sort((a, b) => a.rating - b.rating);
  } else if (sortCriteria === "name" && sortType === "descending") {
    matchingProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortCriteria === "price" && sortType === "descending") {
    matchingProducts.sort((a, b) => b.price - a.price);
  } else if (sortCriteria === "rating" && sortType === "descending") {
    matchingProducts.sort((a, b) => b.rating - a.rating);
  }

  if (searchText) {
    matchingProducts = matchingProducts.filter((game) => game.name.toLowerCase().includes(searchText as string));
  }

  if (genre !== "all") {
    matchingProducts = matchingProducts.filter((game) => game.genre?.toLowerCase() === genre);
  }

  if (minAge !== "all") {
    matchingProducts = matchingProducts.filter((game) => game.minAge >= Number(minAge));
  }

  return matchingProducts;
}
