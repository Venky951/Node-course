const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Basic Detais </title> </head>");
    res.write("<body><h1>Enter Your Details : </h1>");
    res.write('<form action="/submit-details" method="POST">');
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
    req.url.toLowerCase() === "/submit-details" &&
    req.method.toLowerCase() === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const Fullbody = buffer.concat(chunk).tostring();
      console.log(Fullbody);
    });
    fs.writeFileSync("details.txt", "Venky");
    res.statusCode = 302;
    res.setHeader("Location", "/sucess");
    return res.end();
  } else if (req.url === "/sucess") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Submission Successful</title> </head>");
    res.write("<body><h1>Details Submitted Successfully!</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const port = 8790;
server.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
