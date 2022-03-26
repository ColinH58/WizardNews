const html = require("html-template-tag");

module.exports = errorMessage = (err) => 
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
        <p>Page Not Found!</p>
        <br>
        <a href="/">Click Here to Go Home</a>
      </div>
  </div>
</body>
</html>`;
