var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function (req, res) {
  res.send(JSON.stringify({
    software: req.useragent.os + '; ' + req.useragent.platform,
    ip: req.ip,
    language: req.headers["accept-language"].split(',')[0],
  }));
});

app.listen(process.env.PORT || 3000, function () {});
