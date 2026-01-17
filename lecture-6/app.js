const http = require("http");
const server = http.createServer(practise);

const PORT = 8790;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
