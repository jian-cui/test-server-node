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
const root = path.resolve(__dirname, setting.filepath)
app.use(express.static(root))


var server = app.listen(setting.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('测试服务器开始运行 http://%s:%s', host, port);
  console.log('根目录为: %s', root);
});