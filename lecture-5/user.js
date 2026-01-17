const fs = require("fs");

const userrequesthandler = (req, res) => {
  console.log(req.url, req.method);
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
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const Fullbody = Buffer.concat(body).toString();
      console.log(Fullbody);
      const params = new URLSearchParams(Fullbody);
      //  const bodyObject = {};
      //for (const [key, val] of params.entries()) {
      //  bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync("details.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Submission Successful</title> </head>");
  res.write("<body><h1>Details Submitted Successfully!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = userrequesthandler;
