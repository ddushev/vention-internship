/* This is file contains api-mock-response to help you develop UI without real API side */
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import apiEndpoints from "./api.endpoints";

const searchMockData = [
  { id: 1, name: "Battlefield" },
  { id: 2, name: "Counter-Strike" },
  { id: 3, name: "Genshin Impact" },
  { id: 4, name: "GTA" },
  { id: 5, name: "Minecraft" },
  { id: 6, name: "Overwatch" },
  { id: 7, name: "Sims 4" },
  { id: 8, name: "Terraria" },
];

export default webpackMockServer.add((app) => {
  app.get(`${apiEndpoints.searchMock}`, (_req, res) => {
    const searchText = (_req.query.text as string).toLowerCase();
    const matchingProducts = searchMockData.filter((game) => game.name.toLowerCase().includes(searchText));
    res.json(matchingProducts);
  });
});
