const http = require('http');
  
 const server = http.createServer((req,res) =>{
 console.log(req.url,req.method,req.headers);   
 if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
 res.write('<html>');
 res.write('<head><title>First server </title> </head>');
res.write('<body><h1> Welcome to my Home Page</h1> </body>')
   return res.end();
 } else if(req.url ==='/about'){
  res.setHeader('Content-Type','text/html');
 res.write('<html>');
 res.write('<head><title>First Server </title> </head>');
res.write('<body><h1>About section</h1> </body>')
 return res.end();
 }
 res.setHeader('Content-Type','text/html');
 res.write('<html>');
 res.write('<head><title>First Server </title> </head>');
res.write('<body><h1>These is my first server </h1> </body>')
 });
  
 const port = 8790;
    server.listen(port,()=>{
      console.log('server address on http://localhost:${port}')
    });
