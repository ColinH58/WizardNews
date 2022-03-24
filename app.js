const express = require("express");
const { Router } = require("express");
const router = express.Router();
const app = express();
const path = require("path");
const volleyball = require("volleyball");
const postBank = require("./postBank");

app.use(volleyball);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const staticAssetRoute = express.static(path.join(__dirname, 'public'));
// app.use(staticAssetRoute);

app.use(express.static("public"));

// router.get("/", (req, res, next) => {
//   res.send(SEND THINGS HERE)
// });

app.get("/", (req, res, next) => {
  const posts = postBank.list()
  const html = 
  `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>${post.title}
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
      ).join('')}
    </div>
  </body>
</html>`
  res.send(html)
});

const PORT = 1337;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
