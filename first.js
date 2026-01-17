  const fs = require('fs');
  fs.writeFile("output.txt","written file",(err)=>{
    if(err) console.log("error is Occured");
    else console.log("file written successfully");
  })