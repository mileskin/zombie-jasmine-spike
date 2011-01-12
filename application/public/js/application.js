$(document).ready(function() {
  $('.actions .showTrends').live('click', function(event) {
    event.preventDefault()
    if ($('.trends .trend').length === 0) {
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
    } else {
      $('.trends').empty()
    }
  })
})
