const html = require("html-template-tag");

module.exports = postDetails = (post) => 
html`<!DOCTYPE html>
<html>
<head>
  <title>Wizard News</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="news-list">
    <header><img src="/logo.png"/>Wizard News</header>
      <div class='news-item'>
        <p>
          <span class="news-position">${post.id}. ▲</span><a href="/">${post.title}</a>
          <small>(by ${post.name})</small>
        </p>
        <small class="news-info">
          ${post.upvotes} upvotes | ${post.date}
        </small>
        <p>${post.content}</p>
      </div>
  </div>
</body>
</html>`;
