/* This is file contains api-mock-response to help you develop UI without real API side */
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import apiEndpoints from "./api.endpoints";
import { Filters, Product, UserMockData } from "./types";
import createDate from "./utils/createDate";
import filterGames from "./utils/filterGames";
import assignPlatform from "./utils/assignPlatform";

let gamesMockData = [
  {
    id: 1,
    name: "Counter-Strike",
    price: 29.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/cs.jpg",
    rating: 3,
    platforms: ["pc"],
    genre: "Shooter",
    minAge: 18,
    addDate: new Date("2023-01-02"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 2,
    name: "Battlefield",
    price: 30.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/battlefield1.jpg",
    rating: 3,
    platforms: ["ps5"],
    genre: "Shooter",
    minAge: 12,
    addDate: new Date("2023-01-01"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 3,
    name: "GTA",
    price: 18.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/gta.jpg",
    rating: 3,
    platforms: ["xbox"],
    genre: "Arcade",
    minAge: 6,
    addDate: new Date("2023-01-01"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 4,
    name: "Genshin Impact",
    price: 13.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/genshinimpact.jpg",
    rating: 5,
    platforms: ["pc", "xbox"],
    genre: "Survive",
    minAge: 3,
    addDate: new Date("2023-01-03"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 5,
    name: "Sims 4",
    price: 30.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/sims4.jpg",
    rating: 5,
    platforms: ["pc", "ps5"],
    genre: "Arcade",
    minAge: 3,
    addDate: new Date("2023-01-01"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 6,
    name: "Minecraft",
    price: 25.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/minecraft.jpg",
    rating: 5,
    platforms: ["pc", "ps5", "xbox"],
    genre: "Arcade",
    minAge: 3,
    addDate: new Date("2023-01-05"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 7,
    name: "Terraria",
    price: 4.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/terraria.jpg",
    rating: 1,
    platforms: ["pc", "ps5", "xbox"],
    genre: "Arcade",
    minAge: 3,
    addDate: new Date("2023-01-04"),
    description:
      "The very world is at your fingertips as you fight for survival, fortune, and glory. Delve deep into cavernous expanses, seek out ever-greater foes to test your mettle in combat, or construct your own city - In the World of Terraria, the choice is yours!",
  },
  {
    id: 8,
    name: "Overwatch",
    price: 23.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/overwatch.jpg",
    rating: 1,
    platforms: ["pc", "xbox"],
    genre: "Shooter",
    minAge: 6,
    addDate: new Date("2023-01-06"),
    description:
      "Overwatch 2 is a free-to-play shooter featuring 30+ epic heroes, each with game-changing abilities. Choose your hero, group up with your friends and battle across all-new maps and modes in the ultimate team-based shooter.",
  },
];

const usersMockData: UserMockData[] = [
  {
    id: 1,
    username: "ddushev",
    address: "Sofia city, Bulgaria",
    phone: "359897357818",
    description: "Profile description for username ddushev",
    password: "123",
    balance: 500,
    isAdmin: true,
  },
  {
    id: 2,
    username: "ddushev2",
    address: "Burgas, Bulgaria",
    phone: "359896457213",
    description: "Profile description for username ddushev2",
    password: "123",
    balance: 100,
    isAdmin: false,
  },
];

let currentUser: UserMockData = {};
let filters: Filters;

export default webpackMockServer.add((app) => {
  app.get(apiEndpoints.search, (_req, res) => {
    const searchText = (_req.query.text as string).toLowerCase();
    const matchingProducts = gamesMockData.filter((game) => game.name.toLowerCase().includes(searchText));
    res.json(matchingProducts);
  });

  app.get(apiEndpoints.topGames, (_req, res) => {
    const top3RecentlyAddedGames = gamesMockData.sort((a, b) => b.addDate.getTime() - a.addDate.getTime()).slice(0, 3);
    res.json(top3RecentlyAddedGames);
  });

  app.post(apiEndpoints.login, (_req, res) => {
    const { username } = _req.body;
    const existingUser = usersMockData.find((user) => user.username === username.toLowerCase());
    if (existingUser) {
      currentUser = { ...existingUser, password: null };
    } else {
      currentUser = { ...usersMockData[0], password: null };
    }
    res.status(200).json({ username: currentUser.username, isAdmin: currentUser.isAdmin });
  });

  app.put(apiEndpoints.register, (_req, res) => {
    const { username, password, rePassword } = _req.body;
    if (usersMockData.some((user) => user.username === username.toLowerCase())) {
      res.status(400).json("Register failed: Username already exists!");
      return;
    }

    if (password !== rePassword) {
      res.status(400).json("Register failed: Passwords must match!");
      return;
    }
    const lastUser = usersMockData[usersMockData.length - 1];
    const id = lastUser?.id ? lastUser.id + 1 : 1;
    const user = {
      id,
      username: username.toLowerCase(),
      address: "",
      phone: "",
      description: "",
      password,
      profileImg: "",
      balance: 500,
      isAdmin: false,
    };
    currentUser = { ...user, password: null };
    usersMockData.push(user);
    res.status(200).json({ username: user.username, isAdmin: user.isAdmin });
  });

  app.post(apiEndpoints.logout, (_req, res) => {
    currentUser = {};
    res.json("success");
  });

  app.get(apiEndpoints.getProfile, (_req, res) => {
    res.json(currentUser);
  });

  app.put(apiEndpoints.saveProfile, (_req, res) => {
    const { username, address, phone, description } = _req.body;
    if (currentUser.username !== username && usersMockData.some((user) => user.username === username.toLowerCase())) {
      res.status(400).json("Update failed: Username already exists!");
      return;
    }

    usersMockData.forEach((user, index) => {
      if (user.username === currentUser.username) {
        usersMockData[index] = { ...user, username, address, phone, description };
        currentUser = { ...currentUser, username, address, phone, description };
      }
    });

    res.json({ username: currentUser.username });
  });

  app.put(apiEndpoints.changePassword, (_req, res) => {
    const { oldPassword, newPassword } = _req.body;

    usersMockData.forEach((user) => {
      if (user.username === currentUser.username) {
        if (user.password === oldPassword) {
          user.password = newPassword;
          res.json("success");
        } else {
          res.status(400).json("Password change failed: Old password is incorrect!");
        }
      }
    });
  });

  app.put(apiEndpoints.changeProfileImage, (_req, res) => {
    const profileImg = _req.fileDownloadUrls && _req.fileDownloadUrls[0];
    usersMockData.forEach((user, index) => {
      if (user.username === currentUser.username) {
        usersMockData[index] = { ...user, profileImg };
        currentUser = { ...currentUser, profileImg };
      }
    });
    res.json({});
  });

  app.put(apiEndpoints.updateBalance, (_req, res) => {
    const { balance } = _req.body;

    usersMockData.forEach((user, index) => {
      if (user.username === currentUser.username) {
        usersMockData[index] = { ...user, balance };
        currentUser = { ...currentUser, balance };
      }
    });

    res.json("success");
  });

  app.get(apiEndpoints.getProducts, (_req, res) => {
    const { category, searchText, sortCriteria, sortType, genre, minAge } = _req.query;
    filters = {
      category: category as string,
      searchText: searchText as string,
      sortCriteria: sortCriteria as string,
      sortType: sortType as string,
      genre: genre as string,
      minAge: minAge as string,
    };

    res.json(filterGames(gamesMockData, filters));
  });

  app.post(apiEndpoints.product, (req, res) => {
    const { name, category, description, image, minAge, price, pc, ps5, xbox }: Product = req.body;
    const lastGame = gamesMockData.sort((a, b) => a.id - b.id)[gamesMockData.length - 1];
    const id = lastGame?.id ? lastGame.id + 1 : 1;

    const newGame = {
      id,
      name,
      price,
      image,
      rating: Math.round(Math.random() * 5),
      platforms: assignPlatform({ pc, ps5, xbox }),
      genre: category,
      minAge: Number(minAge),
      addDate: new Date(createDate("-")),
      description,
    };
    gamesMockData.push(newGame);
    res.json(filterGames(gamesMockData, filters));
  });

  app.put(apiEndpoints.product, (req, res) => {
    const { id, name, category, description, image, minAge, price, pc, ps5, xbox }: Product = req.body;

    gamesMockData = gamesMockData.map((game) =>
      game.id === id
        ? {
            ...game,
            name,
            genre: category,
            description,
            image,
            minAge: Number(minAge),
            price,
            platforms: assignPlatform({ pc, ps5, xbox }),
          }
        : game,
    );
    res.json(filterGames(gamesMockData, filters));
  });

  app.delete(apiEndpoints.productId, (req, res) => {
    const { id } = req.params;
    const removedGame = [gamesMockData.find((game) => game.id === Number(id))];
    gamesMockData = gamesMockData.filter((game) => game.id !== Number(id));
    res.json({ games: filterGames(gamesMockData, filters), removedGame });
  });
});
