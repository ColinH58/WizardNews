const express = require("express");
const volleyball = require("volleyball");
const postBank = require("./postBank");
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");
const errorMessage = require("./views/errorMessage");
const app = express();

app.use(volleyball);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  const posts = postBank.list();
  res.send(postList(posts));
});

app.get("/posts/:id", (req, res, next) => {
  const id = req.params.id;
  const post = postBank.find(id);
  if (!post.id) {
    next(err);
  }
  res.send(postDetails(post));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(404).send(errorMessage(err));
});

const { PORT = 1337 } = process.env;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
