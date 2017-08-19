// server.js

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  var user = {};
  user.ipaddress = request.headers['x-forwarded-for'].split(',')[0];
  user.language = request.headers['accept-language'].split(',')[0];;
  var userAgent = request.headers['user-agent'];
  user.software = userAgent.slice(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
  response.send(user);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
