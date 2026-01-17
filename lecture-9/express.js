const http = require("http");


const requesthandler = require("./user");
const server = http.createServer(requesthandler);

const port = 8790;
server.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});