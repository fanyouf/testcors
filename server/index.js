// app.listen(3000)

var debug = require('debug')('my-application') // debug模块

var express = require('express')
var app = express()
app.set('port', process.env.PORT || 3000) // 设定监听端口

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.get('/get', function(req, res) {
  res.json({ data: 'ok' })
  console.log('/get .....')
})

//启动监听
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port)
})
