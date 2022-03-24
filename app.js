const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const volleyball = require("volleyball");

app.use(express.static('public'));
app.use(bodyParser);
app.use(volleyball);

app.get("/", (req, res, next) => {
  res.send("Hello World!")
});

const PORT = 1337;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
