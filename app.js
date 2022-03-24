const express = require("express");
const app = express();
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
// const path = require("path");

app.use(volleyball);
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));

// const staticAssetRoute = express.static(path.join(__dirname, 'public'));
// app.use(staticAssetRoute);

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.send("Hello World!")
});

const PORT = 1337;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
