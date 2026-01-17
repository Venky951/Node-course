const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  const path = (req.url || "/").toLowerCase();

  const nav = `
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>`;

  let body = "";
  if (path === "/" || path === "/home") {
    body = `<h1>Welcome to Home</h1>${nav}`;
  } else if (path === "/men") {
    body = `<h1>Welcome to Men</h1>${nav}`;
  } else if (path === "/women") {
    body = `<h1>Welcome to Women</h1>${nav}`;
  } else if (path === "/kids") {
    body = `<h1>Welcome to Kids</h1>${nav}`;
  } else if (path === "/cart") {
    body = `<h1>Welcome to Cart</h1>${nav}`;
  } else {
    body = `<h1>404 - Not Found</h1>${nav}`;
    res.statusCode = 404;
  }

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Myntra Clone</title>
  </head>
  <body>
    ${body}
  </body>
</html>`;

  res.end(html);
});

const port = 8790;
server.listen(port, () => {
  console.log(`server address on http://localhost:${port}`);
});
