var jasmine = require('jasmine-node')

jasmine.executeSpecsInFolder(__dirname + '/spec/js/acceptance', function(runner) {
  process.exit(runner.results().failedCount)
}, true, true)
