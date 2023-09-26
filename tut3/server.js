const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// Everytime we receive a request on our server this function will run
const server = http.createServer((req, res) => {
  console.log('request made');

  // loadash
  let num = _.random(1,20);
  console.log(num);

  // ser header content-type 
  // res.setHeader('content-type','text/html');
  // res.write('<h1>Hello World</h1>');
  // res.write('<p>Hello again</p>');
  // res.end();

  let path = './views/';
  switch(req.url){
    case '/': 
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-you':
      // Redirecting
      res.setHeader('Location','/about');
      res.statusCode = 301;
      res.end();
      break;
    default: 
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path,(err, data) =>
  {
    if(err)
    {
      console.log(err);
      res.end();
    }
    else{
      // res.write(data);
      // res.end();
      // or 
      // The below code can be used when we want to write data once only, but if we want to write data multiple times the above method can be used
      res.end(data);
    }
  })
});

server.listen(3000,'localhost',() => {
  console.log('listening for requests on port 3000')
});