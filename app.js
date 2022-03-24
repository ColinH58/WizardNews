const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const volleyball = require("volleyball");
app.use(volleyball);

app.use(express.static('public'));

app.get("/", (req, res, next) => {
  res.send("Hello World!")
});

const PORT = 1337;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
