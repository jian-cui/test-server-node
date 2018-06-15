const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const setting = JSON.parse(fs.readFileSync('./setting.json', 'utf8'));
// app.get('/:name', function (req, res) {
//   let fileName = req.params.name;
//   let file = path.resolve(__dirname, `${setting.filepath}`, `${fileName}`);
//   res.sendFile(file);
// });

app.use(express.static(path.resolve(__dirname, setting.filepath)))

var server = app.listen(setting.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});