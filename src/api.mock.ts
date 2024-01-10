/* This is file contains api-mock-response to help you develop UI without real API side */
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import apiEndpoints from "./api.endpoints";
import { UserMockData } from "./types";

const gamesMockData = [
  {
    id: 2,
    name: "Counter-Strike",
    price: 29.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/cs.jpg",
    rating: 3,
    platforms: ["pc"],
    genre: "shooter",
    minAge: 18,
    addDate: new Date("2023-01-02"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 1,
    name: "Battlefield",
    price: 30.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/battlefield1.jpg",
    rating: 3,
    platforms: ["ps5"],
    genre: "shooter",
    minAge: 12,
    addDate: new Date("2023-01-01"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 4,
    name: "GTA",
    price: 18.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/gta.jpg",
    rating: 3,
    platforms: ["xbox"],
    genre: "arcade",
    minAge: 8,
    addDate: new Date("2023-01-01"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 3,
    name: "Genshin Impact",
    price: 13.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/genshinimpact.jpg",
    rating: 5,
    platforms: ["pc", "xbox"],
    genre: "survive",
    minAge: 4,
    addDate: new Date("2023-01-03"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 7,
    name: "Sims 4",
    price: 30.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/sims4.jpg",
    rating: 5,
    platforms: ["pc", "ps5"],
    genre: "arcade",
    minAge: 2,
    addDate: new Date("2023-01-01"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 5,
    name: "Minecraft",
    price: 25.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/minecraft.jpg",
    rating: 5,
    platforms: ["pc", "ps5", "xbox"],
    genre: "arcade",
    minAge: 3,
    addDate: new Date("2023-01-05"),
    description:
      "Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle.",
  },
  {
    id: 8,
    name: "Terraria",
    price: 4.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/terraria.jpg",
    rating: 1,
    platforms: ["pc", "ps5", "xbox"],
    genre: "arcade",
    minAge: 4,
    addDate: new Date("2023-01-04"),
    description:
      "The very world is at your fingertips as you fight for survival, fortune, and glory. Delve deep into cavernous expanses, seek out ever-greater foes to test your mettle in combat, or construct your own city - In the World of Terraria, the choice is yours!",
  },
  {
    id: 6,
    name: "Overwatch",
    price: 23.99,
    image: "https://raw.githubusercontent.com/ddushev/Vention/master/src/publicMock/overwatch.jpg",
    rating: 1,
    platforms: ["pc", "xbox"],
    genre: "shooter",
    minAge: 5,
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
  },
  {
    id: 2,
    username: "ddushev2",
    address: "Burgas, Bulgaria",
    phone: "359896457213",
    description: "Profile description for username ddushev2",
    password: "123",
    balance: 100,
  },
];

let currentUser: UserMockData = {};

export default webpackMockServer.add((app) => {
  app.get(apiEndpoints.searchMock, (_req, res) => {
    const searchText = (_req.query.text as string).toLowerCase();
    const matchingProducts = gamesMockData.filter((game) => game.name.toLowerCase().includes(searchText));
    res.json(matchingProducts);
  });

  app.get(apiEndpoints.topGamesMock, (_req, res) => {
    const top3RecentlyAddedGames = gamesMockData.sort((a, b) => b.addDate.getTime() - a.addDate.getTime()).slice(0, 3);
    res.json(top3RecentlyAddedGames);
  });

  app.post(apiEndpoints.loginMock, (_req, res) => {
    const { username, password } = _req.body;
    let isAuthenticated = false;

    usersMockData.forEach((user) => {
      if (user.username === username.toLowerCase() && user.password === password) {
        isAuthenticated = true;
        currentUser = { ...user, password: null };
        res.status(201).json({ username: user.username });
      }
    });

    if (!isAuthenticated) {
      res.status(400).json("Login failed: Username and/or password don't match!");
    }
  });

  app.put(apiEndpoints.registerMock, (_req, res) => {
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
    };
    currentUser = { ...user, password: null };
    usersMockData.push(user);
    res.status(200).json({ username: user.username });
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

  app.get(apiEndpoints.getProducts, (_req, res) => {
    const { category, searchText, sortCriteria, sortType, genre, minAge } = _req.query;

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
      matchingProducts = matchingProducts.filter((game) => game.genre === genre);
    }

    if (minAge !== "all") {
      matchingProducts = matchingProducts.filter((game) => game.minAge >= Number(minAge));
    }

    res.json(matchingProducts);
  });

  app.put(apiEndpoints.updateBalance, (_req, res) => {
    const { balance } = _req.body;

    console.log(balance);
    usersMockData.forEach((user, index) => {
      if (user.username === currentUser.username) {
        usersMockData[index] = { ...user, balance };
        currentUser = { ...currentUser, balance };
      }
    });

    res.json({ username: currentUser.username });
  });
});
