// npm install express
// to install a specific version of express
// npm install express@4.9
// npm install express@3.15.2

var express = require('express');
var app = express();

// app.get('/', function(request, response) {
  // response.send('Hello, this is dog');
  // same as
  //response.write('Hello, this is dog');
  //response.end();
// });
app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
  //better syntax for JSON objects and arrays is
  response.json(blocks);
  //same as
  // response.send(blocks);
  // to redirect a path use the redirect function;
  //in order to make the path permanent you need to include
  // 301 as the first argument in the function;
  // response.redirect(301, '/parts');
});
// app.listen(3000, function() {
//   console.log('Listening on port 3000');
// });
// curl http://localhost:3000/

//section 2
// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/public/index.html');
  // __dirname === name of the directory the currently executing script resides in.
// });
// using middleware to make the same call. Syntax as follows
app.use(express.static('public'));
// static middleware serving files from the public folder;
app.listen(3000, function() {
  console.log('listening on port 3000');
});

//executing middleware functions
//middleware a
// app.use(function(request, response, next) {
//   ....
//   next();
// });
// this continues until it reaches middleware D
// app.use(function(request, response, next) {
// ...
// response.send('done!');
// })
