/* This is file contains api-mock-response to help you develop UI without real API side */
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import apiEndpoints from "./api.endpoints";

const gamesMockData = [
  {
    id: 1,
    name: "Battlefield",
    price: 30.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/feat/home-page/src/publicMock/battlefield1.jpg",
    rating: 5,
    platforms: ["pc"],
    addDate: new Date("2023-01-01"),
  },
  {
    id: 2,
    name: "Counter-Strike",
    price: 29.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/feat/home-page/src/publicMock/cs.jpg",
    rating: 5,
    platforms: ["pc"],
    addDate: new Date("2023-01-02"),
  },
  {
    id: 3,
    name: "Genshin Impact",
    price: 13.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/feat/home-page/src/publicMock/genshinimpact.jpg",
    rating: 5,
    platforms: ["pc"],
    addDate: new Date("2023-01-03"),
  },
  {
    id: 4,
    name: "GTA",
    price: 18.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/feat/home-page/src/publicMock/gta.jpg",
    rating: 5,
    platforms: ["pc"],
    addDate: new Date("2023-01-01"),
  },
  {
    id: 5,
    name: "Minecraft",
    price: 25.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/feat/home-page/src/publicMock/minecraft.jpg",
    rating: 5,
    platforms: ["pc", "ps5", "xbox"],
    addDate: new Date("2023-01-05"),
  },
  {
    id: 6,
    name: "Overwatch",
    price: 23.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/feat/home-page/src/publicMock/overwatch.jpg",
    rating: 5,
    platforms: ["pc"],
    addDate: new Date("2023-01-06"),
  },
  {
    id: 7,
    name: "Sims 4",
    price: 30.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/feat/home-page/src/publicMock/sims4.jpg",
    rating: 5,
    platforms: ["pc"],
    addDate: new Date("2023-01-01"),
  },
  {
    id: 8,
    name: "Terraria",
    price: 4.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/feat/home-page/src/publicMock/terraria.jpg",
    rating: 5,
    platforms: ["pc", "ps5", "xbox"],
    addDate: new Date("2023-01-04"),
  },
];

export default webpackMockServer.add((app) => {
  app.get(`${apiEndpoints.searchMock}`, (_req, res) => {
    const searchText = (_req.query.text as string).toLowerCase();
    const matchingProducts = gamesMockData.filter((game) => game.name.toLowerCase().includes(searchText));
    res.json(matchingProducts);
  });

  app.get(`${apiEndpoints.topGamesMock}`, (_req, res) => {
    const top3RecentlyAddedGames = gamesMockData.sort((a, b) => b.addDate.getTime() - a.addDate.getTime()).slice(0, 3);
    res.json(top3RecentlyAddedGames);
  });
});
