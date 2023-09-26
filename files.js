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
// if(!fs.existsSync('./assests'))
// { fs.mkdir('./assests',(err) =>{
//     if(err)
//       console.log(err);
//     else
//       console.log('folder created');
//   })
// }
// else{
//   fs.rmdir('./assests',(err) => {
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log('folder deleted')
//     }
//   })
// }

if(fs.existsSync('./blog/deleteme.txt')){
  fs.unlink('./blog/deleteme.txt',(err) => {
    if(err){
      console.log(err);
    }
    console.log('file deleted');
  })
}