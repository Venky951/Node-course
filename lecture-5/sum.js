const sumhandler = (req, res) => {
  console.log("In Sum handler", req.url);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const fullbody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullbody);
    const bodyobj = Object.fromEntries(params);
    const result = Number(bodyobj.first) + Number(bodyobj.second);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> practise set</title> </head>");
    res.write("<body><h1>Sum is ${result} <h1></body>");
    res.write("</html>");
    return res.end();
  });
};

module.exports = sumhandler;
