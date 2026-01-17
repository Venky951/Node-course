const http = require("http");
const calhandler = require("./calculator");
const server = http.createServer(calhandler);

const port = 8790;
server.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
