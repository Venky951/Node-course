const http = require('http');
 const express = http.createServer((req,res) =>{
console.log(req);
 });

 const port = 9554;
 express.listen(port, ()=>{
  console.log('server is running on address http://localhost:${port}');
 })