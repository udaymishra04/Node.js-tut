const fs = require('fs');

// reading file
// fs.readFile('./blog/blog1.txt',(err,data) => {
//   if(err)
//     console.log(err);
//   else{
//     console.log(data.toString());
//   }
// })

// writing files
// fs.writeFile('./blog/blog1.txt','hello world',()=>{
//   console.log('file written')
// })
// fs.writeFile('./blog/blog2.txt','hello again',()=>{
//   console.log('file written')
// })

// Directories
fs.mkdir('./assests',(err))