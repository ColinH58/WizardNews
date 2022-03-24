const express = require("express");
const app = express();
// const router = express.Router();
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
const { Router } = require("express");
// const path = require("path");

app.use(volleyball);
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// const staticAssetRoute = express.static(path.join(__dirname, 'public'));
// app.use(staticAssetRoute);

app.use(express.static("public"));

// router.get("/", (req, res, next) => {
//   res.send(SEND THINGS HERE)
// });

app.get("/", (req, res, next) => {
  res.send("Hello World!")
});

const PORT = 1337;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
