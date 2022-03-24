//WIZARD NEWS
const express = require("express");
const volleyball = require("volleyball");
const app = express();
app.use(volleyball);

app.use(express.static('public'));

app.get("/", (req, res, next) => {
  res.send("Hello World!")
});

const PORT = 1337;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
