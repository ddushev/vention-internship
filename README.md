# DISCLAIMER

The app was build during my React Front-end internship at the Vention organization following a specific set of tasks in a Kanban board.The app uses a local mock-up server imitating REST API which can be found in the src/api.mock.ts. The app is not responsive, so better run it on a full-screen resolution, preferably(1920x1080).

## Brief video demo

[![Custom thumbnail](https://drive.google.com/drive/folders/0B8lHUE1lgb06cThuUURpU3czSHM?resourcekey=0-R4g6hqqxWvc4bIwUK5VYRg)](https://www.youtube.com/watch?v=hDx-R-lSQ3U)

## To install locally

1. Clone the repo locally.
2. Open the project folder in terminal and type "npm install" to install all dependencies.
3. In the terminal with the client folder type "npm start".
4. Open the app at the address pointed out - most likely that would be <http://localhost:8080/>

## Overview

GameStore is a Singe Page Application that allows users to register login and logout into a system. Guest users have access only to the home page search and to login/register functionality. Logged-in users has access to all functionalities - filter games in product page, add/buy/remove/ games from cart, change profile data, upload a picture and change password. If the user is admin(username - ddushev) he can also add/edit/delete games.

## Pre-seed data

1. Users - there are two users which can be used initially to login into the app
   - ddushev (admin - can add/edit/delete games) - password: 123 (any password will work for login, but if trying to change the password the old password must be correct)
   - ddushev2 - password: 123(any password will work for login, but if trying to change the password the old password must be correct)
2. Games - there are several games added.

## Technical stack

1. HTML
2. SCSS
3. React with Typescript
4. Redux toolkit
5. Material UI
6. WUP
7. WebPack
