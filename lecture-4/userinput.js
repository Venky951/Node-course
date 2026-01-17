const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Basic Detais </title> </head>");
    res.write("<body><h1>Enter Your Details : </h1>");
    res.write('<form method="post" action="/submit-details">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>'
    );
    res.write('<input type="radio" name ="gender" value="male"> Male');
    res.write('<input type="radio" name ="gender" value="female"> Female<br>');
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase === "/submit-details" &&
    req.method.toLowerCase === "post"
  ) {
    fs.writeFileSync("details.txt", "venky");
    res.statusCode = 302;
    res.setHeaders("location", "/sucess");
  }

  res.writeHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Submission Successful</title> </head>");
  res.write("<body><h1>Details Submitted Successfully!</h1></body>");
  res.write("</html>");
  res.end();
});

const port = 8790;
server.listen(port, () => {
  console.log("server address on http://localhost:${port}");
});
