/* This is file contains api-mock-response to help you develop UI without real API side */
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import apiEndpoints from "./api.endpoints";

const mockData = {
  id: 1,
  firstName: "Will",
  lastName: "Smith",
  email: "willsmith321@gmail.com",
};

export default webpackMockServer.add((app, helper) => {
  app.get(apiEndpoints.testMock, (_req, res) => res.json(mockData));

  app.get(`${apiEndpoints.searchMock}/:text`, (_req, res) => {
    const searchMockData = [
      { id: helper.getUniqueIdInt(), name: "Battlefield" },
      { id: helper.getUniqueIdInt(), name: "Counter-Strike" },
      { id: helper.getUniqueIdInt(), name: "Genshin Impact" },
      { id: helper.getUniqueIdInt(), name: "GTA" },
      { id: helper.getUniqueIdInt(), name: "Minecraft" },
      { id: helper.getUniqueIdInt(), name: "Overwatch" },
      { id: helper.getUniqueIdInt(), name: "Sims 4" },
      { id: helper.getUniqueIdInt(), name: "Terraria" },
    ];
    const searchText = _req.params.text.toLowerCase();
    const matchingProducts = searchMockData.filter((game) => game.name.toLowerCase().includes(searchText));
    res.json(matchingProducts);
  });
});
