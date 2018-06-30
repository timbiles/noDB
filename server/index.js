const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  axios = require("axios");

require("dotenv").config();

const controller = require(`./controllers/firstController`);

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const url = "/api/firstController";
//search for movie
app.get(url, controller.create);
// add to favorites button
app.post(url, controller.favList);
//edit rating
app.put(`${url}:id`, controller.updateList);
//delete rating
app.delete(`${url}:id`, controller.deleteList);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
