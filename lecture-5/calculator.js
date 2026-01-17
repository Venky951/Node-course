const sumhandler = require("./sum");
const requesthandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> practise set</title> </head>");
    res.write(
      '<body><h1>Welcome to Calculator Page <h1><a href="/calculator">go to calculator page</a> </body>'
    );
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> practise set</title> </head>");
    res.write(
      '<body><h1>Calculator Page  <h1> <form action="/calculator-result"method ="POST"><input type="text" placeholder="number 1" name="first" ><input type="text" placeholder="number 2" name = "second" > <input type="submit" value ="submit"></form> </body>'
    );
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    return sumhandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> practise set</title> </head>");
  res.write(
    '<body><h1>404 Page not Found  <h1><a href="/">go to home Page </a></body>'
  );
  res.write("</html>");
  return res.end();
};

module.exports = requesthandler;
