const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const controller = require(`./controllers/firstController`);

const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const url = "/api/books";
app.get(url, controller.getBooks);
app.post(url, controller.favList);
app.delete(`${url}/:isbn`, controller.deleteList);
app.put(`${url}/title`, controller.updateTitle);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
