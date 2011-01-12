$(document).ready(function() {
  $.ajax({
    url: 'http://api.twitter.com/1/trends/current.json',
    type: 'GET',
    dataType: 'jsonp',
    success: function(data) {
      var trends = _(data.trends).chain().map(function(v, k){ return v }).first().flatten().value()
      _.forEach(trends, function(t) {
        $('.trends').append('<li class="trend">' + t.name + '</li>')
      })
    }
  })
})
