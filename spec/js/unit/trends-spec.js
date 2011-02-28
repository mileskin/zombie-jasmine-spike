describe('trends', function() {
  beforeEach(function() {
    $.fooTwitterClient.trends.initBehavior()
  })

  describe('when showing', function() {
    beforeEach(function() {
      setFixtures('<div class="actions"><a class="showTrends"></a></div><div class="feedback"></div>')
      fakeAjax({urls: {'http://api.twitter.com/1/trends/current.json': {errorMessage: 'Failed loading trends.'}}})
      $('.showTrends').click()
    })

    describe('fails', function() {
      it('shows error message', function() {
        expect($('.feedback')).toHaveText('Failed loading trends.')
      })
    })
  })
})
