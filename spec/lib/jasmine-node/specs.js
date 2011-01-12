require.paths.push(__dirname + "/lib")
var jasmine = require('jasmine')
var sys = require('sys')

for(var key in jasmine) {
  global[key] = jasmine[key]
}

var absolutePathToSpecsFolder
var isVerbose = false
var showColors = true
process.argv.forEach(function(arg){
  if (arg.substring(0, 12) === '--specs-dir=') {
    absolutePathToSpecsFolder = arg.substring(12)
  }
  switch(arg) {
  case '--color': showColors = true; break;
  case '--noColor': showColors = false; break;
  case '--verbose': isVerbose = true; break;
  }
});

if (!absolutePathToSpecsFolder) {
  absolutePathToSpecsFolder = __dirname + '/spec'
}
console.log('Running all specs in directory ' + absolutePathToSpecsFolder + '...')

jasmine.executeSpecsInFolder(absolutePathToSpecsFolder, function(runner) {
  process.exit(runner.results().failedCount)
}, isVerbose, showColors)
