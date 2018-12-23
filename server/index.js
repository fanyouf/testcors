// app.listen(3000)

var debug = require('debug')('my-application') // debug模块

var express = require('express')
var app = express()
// 引入json解析中间件
var bodyParser = require('body-parser')
// 添加json解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.set('port', process.env.PORT || 3000) // 设定监听端口

// app.all('/post1', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*') // http://sps.ls.jd.com:8080 http://localhost:8080
//   res.header('Access-Control-Allow-Credentials', true)
//   res.header(
//     'Access-Control-Allow-Headers',
//     'access-control-allow-origin,content-type,x-requested-with,Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
//   )
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
//   if (req.method == 'OPTIONS') {
//     res.send(200) /*让options请求快速返回*/
//   } else {
//     next()
//   }
// })

app.get('/', function(req, res) {
  res.send('Hello World')
})
app.get('/getHeader', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, header1')
  res.header('Access-Control-Allow-Methods', 'PUT, POST,DELETE')

  res.json({ data: 'ok' })
  console.log('/getHeader .....')
})
app.options('/getHeader', function(req, res) {
  console.info('...options')
  res.header('Access-Control-Allow-Origin', '*') // http://sps.ls.jd.com:8080 http://localhost:8080
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type,header1')

  // res.header('Access-Control-Allow-Credentials', true)
  // res.header('Access-Control-Max-Age', '3600')
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'access-control-allow-origin,content-type,x-requested-with,Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  // )
  res.end()
})
app.get('/getCookie', function(req, res) {
  console.log(req.cookies)
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:9090')
  res.header('Access-Control-Allow-Credentials', true)
  // res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
  res.json({ data: 'ok' })
  console.log('/getCooke .....')
})

app.get('/get', function(req, res) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:9090')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
  res.json({ data: 'ok' })
  console.log('/get .....')
})

app.options('/post1', function(req, res) {
  console.info('...options')
  res.header('Access-Control-Allow-Origin', '*') // http://sps.ls.jd.com:8080 http://localhost:8080
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Max-Age', '3600')
  res.header(
    'Access-Control-Allow-Headers',
    'access-control-allow-origin,content-type,x-requested-with,Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  )
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.end()
})

app.post('/post1', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*') // http://sps.ls.jd.com:8080 http://localhost:8080
  // res.header('Access-Control-Allow-Credentials', true)
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'access-control-allow-origin,content-type,x-requested-with,Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  // )
  // res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  res.json({ data: 'ok' })
  // console.log('/post .....')
})

//启动监听
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port)
})
