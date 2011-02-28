$.fooTwitterClient = (function($) {
  function initTrendsBehavior() {
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
          },
          error: function(xhr) {
            $('.feedback').text(xhr.responseText)
          }
        })
      } else {
        $('.trends').empty()
      }
    })
  }

  function initBehavior() {
    initTrendsBehavior()
  }

  return {
    initBehavior: initBehavior
  }
}(jQuery))

$(document).ready(function() {
  $.fooTwitterClient.initBehavior()
})
