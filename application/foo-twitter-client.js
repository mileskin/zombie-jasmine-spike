var express = require('express')
var options = require('tav').set()
var app = express.createServer()

app.set('view engine', 'jade')
app.set('view options', {layout: false})
app.use(express.staticProvider(__dirname + '/public'))

app.get('/', function(req, res){
  res.render('index')
})

console.log('Using port ' + options.port + '...')
app.listen(options.port)
console.log('Server running at http://localhost:' + options.port)
