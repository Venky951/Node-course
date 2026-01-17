const http = require('http');
  
 const server = http.createServer((req,res) =>{
 console.log(req.url,req.method,req.headers);
 res.setHeader('Content-Type','text/html');
 res.write('<html>');
 res.write('<head><title>First Server </title> </head>');
res.write('<body><h1>These is my first server </h1> </body>')
 });
  
 const port = 8790;
    server.listen(port,()=>{
      console.log('server address on http://localhost:${port}')
    });
