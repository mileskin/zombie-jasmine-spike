var express = require('express')

var options = (function() {
  var _options = {
    port: '8002'
  }

  function resolveArgument(name, arg) {
    var fullPrefix = name + '='
    if (arg.substring(0, fullPrefix.length) === fullPrefix) {
      _options[name] = arg.substring(fullPrefix.length)
    }
  }

  process.argv.forEach(function(arg) {
    resolveArgument('port', arg)
  })

  return _options
}())

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
