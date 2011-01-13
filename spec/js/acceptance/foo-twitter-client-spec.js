describe('twitter client', function() {
  var jasmine = require('jasmine-node')
  var zombie = require('zombie')
  var browser = new zombie.Browser()

  describe('initial', function() {
    it('has correct title', function() {
      whenPageHasLoaded(function() {
        expect(browser.text('title')).toEqual('Foo Twitter Client')
        jasmine.asyncSpecDone()
      })
    })

    it('has trends link', function() {
      whenPageHasLoaded(function() {
        expect(browser.text('.actions .showTrends')).toEqual('Trends')
        jasmine.asyncSpecDone()
      })
    })
  })

  describe('when toggling trends link', function() {
    it('shows and hides latest trends', function() {
      whenPageHasLoaded(function() {
        browser.clickLink('.showTrends', function(error, browser) {
          expect(browser.querySelectorAll('.trends .trend').length).toEqual(10)
          browser.clickLink('.showTrends', function(error, browser) {
            expect(browser.querySelectorAll('.trends .trend').length).toEqual(0)
            jasmine.asyncSpecDone()
          })
        })
      })
    })
  })

  function whenPageHasLoaded(callback) {
    browser.visit('http://localhost:8003/', function(error, browser) {
      callback.call()
    })
    jasmine.asyncSpecWait()
  }
})
