exports.argumentsHelper = (function() {
  var undefined
  var conversions = {
    'true': true,
    'false': false,
    'null': null
  }

  function toOptions(defaultOptions, arguments) {
    var options = Object.create(defaultOptions)
    arguments.forEach(function(argument) {
      var separatorIndex = argument.indexOf('=')
      var name = argument.substring(0, separatorIndex)
      if (defaultOptions[name] !== undefined) {
        var rawValue = argument.substring(separatorIndex + 1)
        options[name] = conversions[rawValue] !== undefined ? conversions[rawValue] : +rawValue || rawValue
      }
    })
    return options
  }

  return {
    toOptions: toOptions
  }
}())
