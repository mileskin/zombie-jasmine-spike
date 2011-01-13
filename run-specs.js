var jasmine = require('jasmine-node')

jasmine.executeSpecsInFolder(__dirname + '/spec', function(runner) {
  process.exit(runner.results().failedCount)
}, true, true)
